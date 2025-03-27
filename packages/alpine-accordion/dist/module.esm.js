// ../../node_modules/@flexilla/accordion/dist/accordion.js
var I = Object.defineProperty;
var y = (n, t, e) => t in n ? I(n, t, { enumerable: true, configurable: true, writable: true, value: e }) : n[t] = e;
var c = (n, t, e) => y(n, typeof t != "symbol" ? t + "" : t, e);
var g = (n, t = document.body) => t.querySelector(n);
var l = (n, t = document.body) => {
  const e = u(n, t);
  return Array.from(e).find((i) => i.parentElement === t);
};
var u = (n, t = document.body) => Array.from(t.querySelectorAll(n));
var A = (n, t, e) => {
  const i = new CustomEvent(t, { detail: e });
  n.dispatchEvent(i);
};
var E = (n) => {
  const t = l("[data-accordion-trigger]", n), e = l("[data-accordion-content]", n), i = n.hasAttribute("data-default-open");
  if (!(t instanceof HTMLButtonElement))
    throw new Error("The element does't have a Valid Trigger");
  if (!(e instanceof HTMLDivElement))
    throw new Error("No Valid Content Element");
  const o = n.getAttribute("data-accordion-value") ?? "", s = t.getAttribute("aria-expanded") === "true";
  return { accordionTriggerElement: t, accordionContentElement: e, accordionItemValue: o, isItemExpanded: s, defaultOpened: i };
};
var w = ({
  element: n,
  callback: t,
  type: e,
  keysCheck: i
}) => {
  const o = getComputedStyle(n), s = o.transition;
  if (s !== "none" && s !== "" && !i.includes(s)) {
    const a = "transitionend", r = () => {
      n.removeEventListener(a, r), t();
    };
    n.addEventListener(a, r, { once: true });
  } else
    t();
};
var x = ({
  element: n,
  callback: t
}) => {
  w({
    element: n,
    callback: t,
    type: "transition",
    keysCheck: ["all 0s ease 0s", "all"]
  });
};
var m = (n, t) => {
  n.setAttribute("aria-hidden", t === "open" ? "false" : "true"), n.setAttribute("data-state", t);
};
var b = (n, t = "close", e = "0px") => {
  n.style.height = t === "open" ? "auto" : e, m(n, t);
};
var T = (n) => {
  if (n.getAttribute("data-state") === "open")
    return;
  m(n, "open");
  const t = n.scrollHeight;
  n.style.height = `${t}px`, x({
    element: n,
    callback: () => {
      n.getAttribute("data-state") === "open" && (n.style.height = "auto");
    }
  });
};
var C = (n, t = "0px") => {
  n.getAttribute("data-state") !== "close" && (n.style.height = `${n.scrollHeight}px`, n.offsetHeight, n.style.height = t, m(n, "close"));
};
var L = (n, t, e) => {
  const o = u("[data-accordion-item]", e).filter((d) => d.parentElement === e), s = Array.from(o).indexOf(n.closest("[data-accordion-item]")), a = t ? s - 1 : s + 1;
  return l("[data-accordion-trigger]", o[a]) ?? (t ? l("[data-accordion-trigger]", o[o.length - 1]) : l("[data-accordion-trigger]", o[0]));
};
var S = (n, t) => {
  const e = document.activeElement;
  if (!(e instanceof HTMLElement))
    return;
  e.matches("[data-accordion-trigger]") && (n.key === "ArrowUp" || n.key === "ArrowDown") && (n.preventDefault(), L(e, n.key === "ArrowUp", t).focus());
};
var p = (n, t) => {
  n.ariaExpanded = t === "open" ? "true" : "false";
};
var k = ({ collapsible: n, triggerElement: t, state: e, onInit: i }) => {
  i ? (b(n, e), p(t, e)) : e === "open" ? (p(t, "open"), T(n)) : (p(t, "close"), C(n));
};
var f = class {
  static initGlobalRegistry() {
    window.$flexillaInstances || (window.$flexillaInstances = {});
  }
  static register(t, e, i) {
    return this.initGlobalRegistry(), window.$flexillaInstances[t] || (window.$flexillaInstances[t] = []), this.getInstance(t, e) || (window.$flexillaInstances[t].push({ element: e, instance: i }), i);
  }
  static getInstance(t, e) {
    var i, o;
    return this.initGlobalRegistry(), (o = (i = window.$flexillaInstances[t]) == null ? void 0 : i.find(
      (s) => s.element === e
    )) == null ? void 0 : o.instance;
  }
  static removeInstance(t, e) {
    this.initGlobalRegistry(), window.$flexillaInstances[t] && (window.$flexillaInstances[t] = window.$flexillaInstances[t].filter(
      (i) => i.element !== e
    ));
  }
};
var h = class h2 {
  /**
   * Creates an instance of Accordion
   * @param {string | HTMLElement} accordion - Selector string or HTMLElement for the accordion container
   * @param {AccordionOptions} [options={}] - Configuration options for the accordion
   * @throws {Error} When accordion element is not found or selector is invalid
   */
  constructor(t, e = {}) {
    c(this, "accordionEl");
    c(this, "options");
    c(this, "items");
    c(this, "eventListeners", []);
    c(this, "triggerItemState", (t2, e2, i2) => {
      this.options.preventClosingAll && (this.options.accordionType === "single" && i2 || this.options.accordionType === "multiple" && this.items.filter((o) => o.getAttribute("data-state") === "open").length === 1 && i2) || (this.setItemState(t2, e2), this.options.accordionType === "single" && this.closeOther({ current: t2 }), this.dispatchedEvent(t2));
    });
    c(this, "cleanup", () => {
      this.accordionEl && (this.items.forEach((t2) => {
        t2 && t2.hasAttribute("data-state") && t2.removeAttribute("data-state");
      }), this.eventListeners.forEach(({ element: t2, type: e2, listener: i2 }) => {
        t2 && t2.removeEventListener && t2.removeEventListener(e2, i2);
      }), this.eventListeners = [], f.removeInstance("accordion", this.accordionEl), this.items = [], this.options = null, this.accordionEl = null);
    });
    if (this.accordionEl = typeof t == "string" ? g(t) : t, !this.accordionEl)
      throw new Error(`Accordion element not found: ${typeof t == "string" ? `No element matches selector "${t}"` : "Provided HTMLElement is null or undefined"}`);
    const i = f.getInstance("accordion", this.accordionEl);
    if (i)
      return i;
    this.options = {
      accordionType: this.accordionEl.dataset.accordionType || e.accordionType || "single",
      preventClosingAll: this.accordionEl.hasAttribute("data-prevent-closing-all") || e.preventClosingAll || false,
      defaultValue: this.accordionEl.dataset.defaultValue || e.defaultValue || "",
      allowCloseFromContent: this.accordionEl.hasAttribute("data-allow-close-from-content") || e.allowCloseFromContent || false,
      onChangeItem: e.onChangeItem
    }, this.items = u("[data-accordion-item]", this.accordionEl).filter((o) => o.parentElement && o.parentElement === this.accordionEl), this.initAccordion();
  }
  initAccordion() {
    if (!this.accordionEl)
      return;
    const { accordionType: t, defaultValue: e, preventClosingAll: i } = this.options;
    let o = l(`[data-accordion-item][data-accordion-value="${e}"]`, this.accordionEl);
    if (t === "single")
      this.options.preventClosingAll && !(o instanceof HTMLElement) && (o = this.items[0]), this.closeOther({ current: o }), o && this.setItemState(o, "open", true);
    else {
      this.closeAll(true);
      const a = this.items.some((r) => r.getAttribute("data-state") === "open");
      if (i && !a)
        this.setItemState(this.items[0], "open", true);
      else {
        const r = this.items.filter((d) => d.getAttribute("data-state") === "open");
        for (const d of r)
          this.setItemState(d, "open", true);
      }
    }
    this.addEventListeners();
    const s = (a) => {
      S(a, this.accordionEl);
    };
    this.accordionEl.addEventListener("keydown", s), this.eventListeners.push({ element: this.accordionEl, type: "keydown", listener: s }), f.register("accordion", this.accordionEl, this);
  }
  setItemState(t, e, i) {
    t.setAttribute("data-state", e);
    const { accordionContentElement: o, accordionTriggerElement: s } = E(t);
    k({
      collapsible: o,
      triggerElement: s,
      state: e,
      onInit: i
    });
  }
  closeOther({ current: t, onInit: e }) {
    this.items.forEach((i) => {
      i !== t && (e && this.options.accordionType === "multiple" ? i.hasAttribute("data-default-open") ? this.setItemState(i, "open") : this.setItemState(i, "close") : this.setItemState(i, "close"));
    });
  }
  closeAll(t) {
    this.closeOther({ onInit: t });
  }
  dispatchedEvent(t) {
    const { accordionContentElement: e, accordionTriggerElement: i, isItemExpanded: o, accordionItemValue: s } = E(t);
    this.options.onChangeItem && this.options.onChangeItem({
      expandedItem: { accordionItem: this.accordionEl, trigger: i, content: e, value: s, isExpanded: o }
    }), A(this.accordionEl, "change-item", {
      targetElement: { trigger: i, content: e, isExpanded: o },
      items: this.items
    });
  }
  addEventListeners() {
    this.items.forEach((t) => {
      const e = g("[data-accordion-trigger]", t), i = g("[data-accordion-content]", t), o = () => this.triggerItemState(t, "close", true), s = (a) => {
        a.preventDefault();
        const r = t.getAttribute("data-state") === "open";
        let d = r ? "close" : "open";
        this.triggerItemState(t, d, r);
      };
      e && (e.addEventListener("click", s), this.eventListeners.push({ element: e, type: "click", listener: s })), this.options.allowCloseFromContent && i && (i.addEventListener("click", o), this.eventListeners.push({ element: i, type: "click", listener: o }));
    });
  }
  /**
   * Shows/expands an accordion item by its ID
   * @public
   * @param {string} id - The value/ID of the accordion item to show
   * @example
   * ```typescript
   * const accordion = new Accordion('#myAccordion');
   * accordion.show('section1'); // Expands the accordion item with value="section1"
   * ```
   */
  show(t) {
    const e = l(`[data-accordion-item][data-accordion-value="${t}"]`, this.accordionEl);
    !e || e.getAttribute("data-state") === "open" || (this.options.accordionType === "single" && this.closeOther({ current: e }), this.setItemState(e, "open"), this.dispatchedEvent(e));
  }
  /**
      * Hides/collapses an accordion item by its ID
      * @public
      * @param {string} id - The value/ID of the accordion item to hide
      * @example
      * ```typescript
      * const accordion = new Accordion('#myAccordion');
      * accordion.hide('section1'); // Collapses the accordion item with value="section1"
      * ```
      */
  hide(t) {
    const e = l(`[data-accordion-item][data-accordion-value="${t}"]`, this.accordionEl);
    if (!(!e || !(e.getAttribute("data-state") === "open"))) {
      if (this.options.preventClosingAll) {
        const o = this.items.filter((s) => s.getAttribute("data-state") === "open");
        if (o.length === 1 && e === o[0])
          return;
      }
      this.setItemState(e, "close"), this.dispatchedEvent(e);
    }
  }
};
c(h, "autoInit", (t = "[data-fx-accordion]") => {
  const e = u(t, document.documentElement);
  for (const i of e)
    new h(i);
}), /**
* Shortcut method to create a new Accordion instance
* @static
* @param {string | HTMLElement} accordion - Selector string or HTMLElement for the accordion container
* @param {AccordionOptions} [options={}] - Configuration options for the accordion
* @returns {Accordion} A new Accordion instance
* @example
* ```typescript
* // Initialize with selector
* const accordion1 = Accordion.init('#myAccordion');
* 
* // Initialize with HTMLElement and options
* const element = document.querySelector('#multiAccordion');
* const accordion2 = Accordion.init(element, {
*   accordionType: 'multiple',
*   preventClosingAll: true
* });
* ```
*/
c(h, "init", (t, e = {}) => new h(t, e));
var v = h;

// src/index.js
function Accordion(Alpine) {
  Alpine.directive("accordion", (el, {}, { cleanup }) => {
    const accordion = new v(el);
    cleanup(() => {
      accordion.cleanup();
    });
  });
}
var src_default = Accordion;

// builds/module.js
var module_default = src_default;
export {
  module_default as default
};
