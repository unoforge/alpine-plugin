// ../../node_modules/@flexilla/accordion/dist/accordion.js
var b = Object.defineProperty;
var A = (n, t, e) => t in n ? b(n, t, { enumerable: true, configurable: true, writable: true, value: e }) : n[t] = e;
var r = (n, t, e) => A(n, typeof t != "symbol" ? t + "" : t, e);
var f = (n, t = document.body) => t.querySelector(n);
var l = (n, t = document.body) => {
  const e = u(n, t);
  return Array.from(e).find((i) => i.parentElement === t);
};
var u = (n, t = document.body) => Array.from(t.querySelectorAll(n));
var y = ({
  element: n,
  callback: t,
  type: e,
  keysCheck: i
}) => {
  const s = getComputedStyle(n), o = s.transition;
  if (o !== "none" && o !== "" && !i.includes(o)) {
    const a = "transitionend", c = () => {
      n.removeEventListener(a, c), t();
    };
    n.addEventListener(a, c, { once: true });
  } else
    t();
};
var I = ({
  element: n,
  callback: t
}) => {
  y({
    element: n,
    callback: t,
    type: "transition",
    keysCheck: ["all 0s ease 0s", "all"]
  });
};
var w = (n, t, e) => {
  const i = new CustomEvent(t, { detail: e });
  n.dispatchEvent(i);
};
var x = ({
  container: n,
  attributeToWatch: t,
  onChildAdded: e
}) => {
  const i = new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList" && Array.from(o.addedNodes).some(
        (a) => a instanceof HTMLElement && a.hasAttribute(t)
      )) {
        e();
        break;
      }
  });
  return i.observe(n, {
    childList: true
  }), () => {
    i.disconnect();
  };
};
var E = (n) => {
  const t = l("[data-accordion-trigger]", n), e = l("[data-accordion-content]", n), i = n.hasAttribute("data-default-open");
  if (!(t instanceof HTMLButtonElement))
    throw new Error("The element does't have a Valid Trigger");
  if (!(e instanceof HTMLDivElement))
    throw new Error("No Valid Content Element");
  const s = n.getAttribute("data-accordion-value") ?? "", o = t.getAttribute("aria-expanded") === "true";
  return { accordionTriggerElement: t, accordionContentElement: e, accordionItemValue: s, isItemExpanded: o, defaultOpened: i };
};
var m = (n, t) => {
  n.setAttribute("aria-hidden", t === "open" ? "false" : "true"), n.setAttribute("data-state", t);
};
var T = (n, t = "close", e = "0px") => {
  n.style.height = t === "open" ? "auto" : e, m(n, t);
};
var C = (n) => {
  if (n.getAttribute("data-state") === "open")
    return;
  m(n, "open");
  const t = n.scrollHeight;
  n.style.height = `${t}px`, I({
    element: n,
    callback: () => {
      n.getAttribute("data-state") === "open" && (n.style.height = "auto");
    }
  });
};
var L = (n, t = "0px") => {
  n.getAttribute("data-state") !== "close" && (n.style.height = `${n.scrollHeight}px`, n.offsetHeight, n.style.height = t, m(n, "close"));
};
var O = (n, t, e) => {
  const s = u("[data-accordion-item]", e).filter((d) => d.parentElement === e), o = Array.from(s).indexOf(n.closest("[data-accordion-item]")), a = t ? o - 1 : o + 1;
  return l("[data-accordion-trigger]", s[a]) ?? (t ? l("[data-accordion-trigger]", s[s.length - 1]) : l("[data-accordion-trigger]", s[0]));
};
var S = (n, t) => {
  const e = document.activeElement;
  if (!(e instanceof HTMLElement))
    return;
  e.matches("[data-accordion-trigger]") && (n.key === "ArrowUp" || n.key === "ArrowDown") && (n.preventDefault(), O(e, n.key === "ArrowUp", t).focus());
};
var g = (n, t) => {
  n.ariaExpanded = t === "open" ? "true" : "false";
};
var k = ({ collapsible: n, triggerElement: t, state: e, onInit: i }) => {
  i ? (T(n, e), g(t, e)) : e === "open" ? (g(t, "open"), C(n)) : (g(t, "close"), L(n));
};
var p = class {
  static initGlobalRegistry() {
    window.$flexillaInstances || (window.$flexillaInstances = {});
  }
  static register(t, e, i) {
    return this.initGlobalRegistry(), window.$flexillaInstances[t] || (window.$flexillaInstances[t] = []), this.getInstance(t, e) || (window.$flexillaInstances[t].push({ element: e, instance: i }), i);
  }
  static getInstance(t, e) {
    var i, s;
    return this.initGlobalRegistry(), (s = (i = window.$flexillaInstances[t]) == null ? void 0 : i.find(
      (o) => o.element === e
    )) == null ? void 0 : s.instance;
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
   */
  constructor(t, e = {}) {
    r(this, "accordionEl");
    r(this, "options");
    r(this, "items");
    r(this, "eventListeners", []);
    r(this, "cleanupObserver", null);
    r(this, "reload", () => {
      this.cleanup(), this.items = u("[data-accordion-item]", this.accordionEl).filter((t2) => t2.parentElement && t2.parentElement === this.accordionEl), this.initAccordion();
    });
    r(this, "triggerItemState", (t2, e2, i2) => {
      this.options.preventClosingAll && (this.options.accordionType === "single" && i2 || this.options.accordionType === "multiple" && this.items.filter((s) => s.getAttribute("data-state") === "open").length === 1 && i2) || (this.setItemState(t2, e2), this.options.accordionType === "single" && this.closeOther({ current: t2 }), this.dispatchedEvent(t2));
    });
    r(this, "cleanup", () => {
      this.accordionEl && (this.items.forEach((t2) => {
        t2 && t2.hasAttribute("data-state") && t2.removeAttribute("data-state");
      }), this.eventListeners.forEach(({ element: t2, type: e2, listener: i2 }) => {
        t2 && t2.removeEventListener && t2.removeEventListener(e2, i2);
      }), this.cleanupObserver && (this.cleanupObserver(), this.cleanupObserver = null), this.eventListeners = [], this.items = [], p.removeInstance("accordion", this.accordionEl));
    });
    if (this.accordionEl = typeof t == "string" ? f(t) : t, !this.accordionEl)
      throw new Error(`Accordion element not found: ${typeof t == "string" ? `No element matches selector "${t}"` : "Provided HTMLElement is null or undefined"}`);
    const i = p.getInstance("accordion", this.accordionEl);
    if (i)
      return i;
    this.options = {
      accordionType: this.accordionEl.dataset.accordionType || e.accordionType || "single",
      preventClosingAll: this.accordionEl.hasAttribute("data-prevent-closing-all") || e.preventClosingAll || false,
      defaultValue: this.accordionEl.dataset.defaultValue || e.defaultValue || "",
      allowCloseFromContent: this.accordionEl.hasAttribute("data-allow-close-from-content") || e.allowCloseFromContent || false,
      onChangeItem: e.onChangeItem
    }, this.items = u("[data-accordion-item]", this.accordionEl).filter((s) => s.parentElement && s.parentElement === this.accordionEl), this.initAccordion();
  }
  initAccordion() {
    if (!this.accordionEl)
      return;
    const { accordionType: t, defaultValue: e, preventClosingAll: i } = this.options;
    let s = l(`[data-accordion-item][data-accordion-value="${e}"]`, this.accordionEl);
    if (t === "single")
      this.options.preventClosingAll && !(s instanceof HTMLElement) && (s = this.items[0]), this.closeOther({ current: s }), s && this.setItemState(s, "open", true);
    else {
      this.closeAll(true);
      const a = this.items.some((c) => c.getAttribute("data-state") === "open");
      if (i && !a)
        this.setItemState(this.items[0], "open", true);
      else {
        const c = this.items.filter((d) => d.getAttribute("data-state") === "open");
        for (const d of c)
          this.setItemState(d, "open", true);
      }
    }
    this.addEventListeners();
    const o = (a) => {
      S(a, this.accordionEl);
    };
    this.accordionEl.addEventListener("keydown", o), this.eventListeners.push({ element: this.accordionEl, type: "keydown", listener: o }), p.register("accordion", this.accordionEl, this), this.cleanupObserver = x({
      container: this.accordionEl,
      attributeToWatch: "data-accordion-item",
      onChildAdded: this.reload
    });
  }
  destroy() {
    this.accordionEl && (this.items.forEach((t) => {
      t && t.hasAttribute("data-state") && t.removeAttribute("data-state");
    }), this.eventListeners.forEach(({ element: t, type: e, listener: i }) => {
      t && t.removeEventListener && t.removeEventListener(e, i);
    }), this.eventListeners = [], this.items = [], p.removeInstance("accordion", this.accordionEl), this.cleanupObserver && (this.cleanupObserver(), this.cleanupObserver = null));
  }
  setItemState(t, e, i) {
    t.setAttribute("data-state", e);
    const { accordionContentElement: s, accordionTriggerElement: o } = E(t);
    k({
      collapsible: s,
      triggerElement: o,
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
    const { accordionContentElement: e, accordionTriggerElement: i, isItemExpanded: s, accordionItemValue: o } = E(t);
    this.options.onChangeItem && this.options.onChangeItem({
      expandedItem: { accordionItem: this.accordionEl, trigger: i, content: e, value: o, isExpanded: s }
    }), w(this.accordionEl, "change-item", {
      targetElement: { trigger: i, content: e, isExpanded: s },
      items: this.items
    });
  }
  addEventListeners() {
    this.items.forEach((t) => {
      const e = f("[data-accordion-trigger]", t), i = f("[data-accordion-content]", t), s = () => this.triggerItemState(t, "close", true), o = (a) => {
        a.preventDefault();
        const c = t.getAttribute("data-state") === "open";
        let d = c ? "close" : "open";
        this.triggerItemState(t, d, c);
      };
      e && (e.addEventListener("click", o), this.eventListeners.push({ element: e, type: "click", listener: o })), this.options.allowCloseFromContent && i && (i.addEventListener("click", s), this.eventListeners.push({ element: i, type: "click", listener: s }));
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
        const s = this.items.filter((o) => o.getAttribute("data-state") === "open");
        if (s.length === 1 && e === s[0])
          return;
      }
      this.setItemState(e, "close"), this.dispatchedEvent(e);
    }
  }
};
r(h, "autoInit", (t = "[data-fx-accordion]") => {
  const e = u(t, document.documentElement);
  for (const i of e)
    new h(i);
}), /**
* Shortcut method to create a new Accordion instance
* @static
* @param {string | HTMLElement} accordion - Selector string or HTMLElement for the accordion container
* @param {AccordionOptions} [options={}] - Configuration options for the accordion
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
r(h, "init", (t, e = {}) => new h(t, e));
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
