(() => {
  // ../../node_modules/@flexilla/accordion/dist/accordion.js
  var b = Object.defineProperty;
  var y = (i, t, e) => t in i ? b(i, t, { enumerable: true, configurable: true, writable: true, value: e }) : i[t] = e;
  var r = (i, t, e) => y(i, typeof t != "symbol" ? t + "" : t, e);
  var f = (i, t = document.body) => t.querySelector(i);
  var d = (i, t = document.body) => {
    const e = h(i, t);
    return Array.from(e).find((n) => n.parentElement === t);
  };
  var h = (i, t = document.body) => Array.from(t.querySelectorAll(i));
  var I = ({
    element: i,
    callback: t,
    type: e,
    keysCheck: n
  }) => {
    const s = getComputedStyle(i), o = s.transition;
    if (o !== "none" && o !== "" && !n.includes(o)) {
      const a = "transitionend", c = () => {
        i.removeEventListener(a, c), t();
      };
      i.addEventListener(a, c, { once: true });
    } else
      t();
  };
  var A = ({
    element: i,
    callback: t
  }) => {
    I({
      element: i,
      callback: t,
      type: "transition",
      keysCheck: ["all 0s ease 0s", "all"]
    });
  };
  var w = (i, t, e) => {
    const n = new CustomEvent(t, { detail: e });
    i.dispatchEvent(n);
  };
  var x = ({
    container: i,
    attributeToWatch: t,
    onChildAdded: e
  }) => {
    const n = new MutationObserver((s) => {
      for (const o of s)
        if (o.type === "childList" && Array.from(o.addedNodes).some(
          (a) => a instanceof HTMLElement && a.hasAttribute(t)
        )) {
          e();
          break;
        }
    });
    return n.observe(i, {
      childList: true
    }), () => {
      n.disconnect();
    };
  };
  var E = (i) => {
    const t = d("[data-accordion-trigger]", i), e = d("[data-accordion-content]", i), n = i.hasAttribute("data-default-open");
    if (!(t instanceof HTMLButtonElement))
      throw new Error("The element does't have a Valid Trigger");
    if (!(e instanceof HTMLDivElement))
      throw new Error("No Valid Content Element");
    const s = i.getAttribute("data-accordion-value") ?? "", o = t.getAttribute("aria-expanded") === "true";
    return { accordionTriggerElement: t, accordionContentElement: e, accordionItemValue: s, isItemExpanded: o, defaultOpened: n };
  };
  var m = (i, t) => {
    i.setAttribute("aria-hidden", t === "open" ? "false" : "true"), i.setAttribute("data-state", t);
  };
  var C = (i, t = "close", e = "0px") => {
    i.style.height = t === "open" ? "auto" : e, m(i, t);
  };
  var L = (i) => {
    if (i.getAttribute("data-state") === "open")
      return;
    m(i, "open");
    const t = i.scrollHeight;
    i.style.height = `${t}px`, A({
      element: i,
      callback: () => {
        i.getAttribute("data-state") === "open" && (i.style.height = "auto");
      }
    });
  };
  var T = (i, t = "0px") => {
    i.getAttribute("data-state") !== "close" && (i.style.height = `${i.scrollHeight}px`, i.offsetHeight, i.style.height = t, m(i, "close"));
  };
  var O = (i, t, e) => {
    const n = h(":scope > [data-accordion-item]", e), s = i.parentElement;
    if (!n.includes(s))
      return null;
    const o = n.indexOf(s), a = t ? o - 1 : o + 1, c = n[a] ?? (t ? n[n.length - 1] : n[0]), u = d(":scope > [data-accordion-trigger]", c);
    return u instanceof HTMLElement ? u : null;
  };
  var S = (i, t) => {
    if (!(document.activeElement instanceof HTMLElement))
      return;
    const e = document.activeElement, n = e.parentElement;
    if (!(!e.matches("[data-accordion-trigger]") || !(n != null && n.matches("[data-accordion-item]")) || n.parentElement !== t) && (i.key === "ArrowUp" || i.key === "ArrowDown")) {
      i.preventDefault();
      const s = O(e, i.key === "ArrowUp", t);
      s && s.focus();
    }
  };
  var g = (i, t) => {
    i.ariaExpanded = t === "open" ? "true" : "false";
  };
  var k = ({ collapsible: i, triggerElement: t, state: e, onInit: n }) => {
    n ? (C(i, e), g(t, e)) : e === "open" ? (g(t, "open"), L(i)) : (g(t, "close"), T(i));
  };
  var p = class {
    static initGlobalRegistry() {
      window.$flexillaInstances || (window.$flexillaInstances = {});
    }
    static register(t, e, n) {
      return this.initGlobalRegistry(), window.$flexillaInstances[t] || (window.$flexillaInstances[t] = []), this.getInstance(t, e) || (window.$flexillaInstances[t].push({ element: e, instance: n }), n);
    }
    static getInstance(t, e) {
      var n, s;
      return this.initGlobalRegistry(), (s = (n = window.$flexillaInstances[t]) == null ? void 0 : n.find(
        (o) => o.element === e
      )) == null ? void 0 : s.instance;
    }
    static removeInstance(t, e) {
      this.initGlobalRegistry(), window.$flexillaInstances[t] && (window.$flexillaInstances[t] = window.$flexillaInstances[t].filter(
        (n) => n.element !== e
      ));
    }
  };
  var l = class l2 {
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
      r(this, "handleKeyEvents", (t2) => {
        S(t2, this.accordionEl);
      });
      r(this, "reload", () => {
        this.cleanup(), this.items = h("[data-accordion-item]", this.accordionEl).filter((t2) => t2.parentElement && t2.parentElement === this.accordionEl), this.initAccordion();
      });
      r(this, "triggerItemState", (t2, e2, n2) => {
        this.options.preventClosingAll && (this.options.accordionType === "single" && n2 || this.options.accordionType === "multiple" && this.items.filter((s) => s.getAttribute("data-state") === "open").length === 1 && n2) || (this.setItemState(t2, e2), this.options.accordionType === "single" && this.closeOther({ current: t2 }), this.dispatchedEvent(t2));
      });
      r(this, "cleanup", () => {
        this.accordionEl && (this.items.forEach((t2) => {
          t2 && t2.hasAttribute("data-state") && t2.removeAttribute("data-state");
        }), this.eventListeners.forEach(({ element: t2, type: e2, listener: n2 }) => {
          t2 && t2.removeEventListener && t2.removeEventListener(e2, n2);
        }), this.cleanupObserver && (this.cleanupObserver(), this.cleanupObserver = null), this.eventListeners = [], this.items = [], p.removeInstance("accordion", this.accordionEl));
      });
      if (this.accordionEl = typeof t == "string" ? f(t) : t, !this.accordionEl)
        throw new Error(`Accordion element not found: ${typeof t == "string" ? `No element matches selector "${t}"` : "Provided HTMLElement is null or undefined"}`);
      const n = p.getInstance("accordion", this.accordionEl);
      if (n)
        return n;
      this.options = {
        accordionType: this.accordionEl.dataset.accordionType || e.accordionType || "single",
        preventClosingAll: this.accordionEl.hasAttribute("data-prevent-closing-all") || e.preventClosingAll || false,
        defaultValue: this.accordionEl.dataset.defaultValue || e.defaultValue || "",
        allowCloseFromContent: this.accordionEl.hasAttribute("data-allow-close-from-content") || e.allowCloseFromContent || false,
        onChangeItem: e.onChangeItem
      }, this.items = h("[data-accordion-item]", this.accordionEl).filter((s) => s.parentElement && s.parentElement === this.accordionEl), this.initAccordion();
    }
    initAccordion() {
      if (!this.accordionEl)
        return;
      const { accordionType: t, defaultValue: e, preventClosingAll: n } = this.options;
      let s = d(`[data-accordion-item][data-accordion-value="${e}"]`, this.accordionEl);
      if (t === "single")
        this.options.preventClosingAll && !(s instanceof HTMLElement) && (s = this.items[0]), this.closeOther({ current: s }), s && this.setItemState(s, "open", true);
      else {
        this.closeAll(true);
        const o = this.items.some((a) => a.getAttribute("data-state") === "open");
        if (n && !o)
          this.setItemState(this.items[0], "open", true);
        else {
          const a = this.items.filter((c) => c.getAttribute("data-state") === "open");
          for (const c of a)
            this.setItemState(c, "open", true);
        }
      }
      this.addEventListeners(), this.accordionEl.addEventListener("keydown", this.handleKeyEvents), this.eventListeners.push({ element: this.accordionEl, type: "keydown", listener: this.handleKeyEvents }), p.register("accordion", this.accordionEl, this), this.cleanupObserver = x({
        container: this.accordionEl,
        attributeToWatch: "data-accordion-item",
        onChildAdded: this.reload
      });
    }
    destroy() {
      this.accordionEl && (this.items.forEach((t) => {
        t && t.hasAttribute("data-state") && t.removeAttribute("data-state");
      }), this.eventListeners.forEach(({ element: t, type: e, listener: n }) => {
        t && t.removeEventListener && t.removeEventListener(e, n);
      }), this.eventListeners = [], this.items = [], p.removeInstance("accordion", this.accordionEl), this.cleanupObserver && (this.cleanupObserver(), this.cleanupObserver = null));
    }
    setItemState(t, e, n) {
      t.setAttribute("data-state", e);
      const { accordionContentElement: s, accordionTriggerElement: o } = E(t);
      k({
        collapsible: s,
        triggerElement: o,
        state: e,
        onInit: n
      });
    }
    closeOther({ current: t, onInit: e }) {
      this.items.forEach((n) => {
        n !== t && (e && this.options.accordionType === "multiple" ? n.hasAttribute("data-default-open") ? this.setItemState(n, "open") : this.setItemState(n, "close") : this.setItemState(n, "close"));
      });
    }
    closeAll(t) {
      this.closeOther({ onInit: t });
    }
    dispatchedEvent(t) {
      const { accordionContentElement: e, accordionTriggerElement: n, isItemExpanded: s, accordionItemValue: o } = E(t);
      this.options.onChangeItem && this.options.onChangeItem({
        expandedItem: { accordionItem: this.accordionEl, trigger: n, content: e, value: o, isExpanded: s }
      }), w(this.accordionEl, "change-item", {
        targetElement: { trigger: n, content: e, isExpanded: s },
        items: this.items
      });
    }
    addEventListeners() {
      this.items.forEach((t) => {
        const e = f("[data-accordion-trigger]", t), n = f("[data-accordion-content]", t), s = () => this.triggerItemState(t, "close", true), o = (a) => {
          a.preventDefault();
          const c = t.getAttribute("data-state") === "open";
          let u = c ? "close" : "open";
          this.triggerItemState(t, u, c);
        };
        e && (e.addEventListener("click", o), this.eventListeners.push({ element: e, type: "click", listener: o })), this.options.allowCloseFromContent && n && (n.addEventListener("click", s), this.eventListeners.push({ element: n, type: "click", listener: s }));
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
      const e = d(`[data-accordion-item][data-accordion-value="${t}"]`, this.accordionEl);
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
      const e = d(`[data-accordion-item][data-accordion-value="${t}"]`, this.accordionEl);
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
  r(l, "autoInit", (t = "[data-fx-accordion]") => {
    const e = h(t, document.documentElement);
    for (const n of e)
      new l(n);
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
  r(l, "init", (t, e = {}) => new l(t, e));
  var v = l;

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

  // builds/cdn.js
  document.addEventListener("alpine:init", () => {
    src_default(window.Alpine);
  });
})();
