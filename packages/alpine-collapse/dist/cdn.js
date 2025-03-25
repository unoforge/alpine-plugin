(() => {
  // ../../node_modules/@flexilla/collapse/dist/collapse.js
  var u = Object.defineProperty;
  var m = (t, e, s) => e in t ? u(t, e, { enumerable: true, configurable: true, writable: true, value: s }) : t[e] = s;
  var l = (t, e, s) => m(t, typeof e != "symbol" ? e + "" : e, s);
  var c = (t, e = document.body) => e.querySelector(t);
  var x = (t, e = document.body) => Array.from(e.querySelectorAll(t));
  var r = (t, e, s) => {
    const i = new CustomEvent(e, { detail: s });
    t.dispatchEvent(i);
  };
  var w = ({
    element: t,
    callback: e,
    type: s,
    keysCheck: i
  }) => {
    const n = getComputedStyle(t), a = n.transition;
    if (a !== "none" && a !== "" && !i.includes(a)) {
      const g = "transitionend", p = () => {
        t.removeEventListener(g, p), e();
      };
      t.addEventListener(g, p, { once: true });
    } else
      e();
  };
  var E = ({
    element: t,
    callback: e
  }) => {
    w({
      element: t,
      callback: e,
      type: "transition",
      keysCheck: ["all 0s ease 0s", "all"]
    });
  };
  var d = (t, e) => {
    t.setAttribute("aria-hidden", e === "open" ? "false" : "true"), t.setAttribute("data-state", e);
  };
  var y = (t, e = "close", s = "0px") => {
    t.style.height = e === "open" ? "auto" : s, d(t, e);
  };
  var I = (t) => {
    if (t.getAttribute("data-state") === "open") return;
    d(t, "open");
    const e = t.scrollHeight;
    t.style.height = `${e}px`, E({
      element: t,
      callback: () => {
        t.getAttribute("data-state") === "open" && (t.style.height = "auto");
      }
    });
  };
  var b = (t, e = "0px") => {
    t.getAttribute("data-state") !== "close" && (t.style.height = `${t.scrollHeight}px`, t.offsetHeight, t.style.height = e, d(t, "close"));
  };
  var h = class {
    static initGlobalRegistry() {
      window.$flexillaInstances || (window.$flexillaInstances = {});
    }
    static register(e, s, i) {
      return this.initGlobalRegistry(), window.$flexillaInstances[e] || (window.$flexillaInstances[e] = []), this.getInstance(e, s) || (window.$flexillaInstances[e].push({ element: s, instance: i }), i);
    }
    static getInstance(e, s) {
      var i, n;
      return this.initGlobalRegistry(), (n = (i = window.$flexillaInstances[e]) == null ? void 0 : i.find(
        (a) => a.element === s
      )) == null ? void 0 : n.instance;
    }
    static removeInstance(e, s) {
      this.initGlobalRegistry(), window.$flexillaInstances[e] && (window.$flexillaInstances[e] = window.$flexillaInstances[e].filter(
        (i) => i.element !== s
      ));
    }
  };
  var o = class o2 {
    /**
     * Creates a new Collapse instance.
     * @param selector - The CSS selector string or HTMLElement to be collapsed/expanded
     * @param options - Configuration options for the collapse behavior
     * @param triggerSelector - Optional CSS selector for the trigger element. If not provided,
     *                         it will look for an element with data-collapse-trigger attribute
     * @throws {Error} When the provided element is not a valid HTMLElement
     */
    constructor(e, s = {}, i) {
      l(this, "element");
      l(this, "defaultState");
      l(this, "collapseId");
      l(this, "collapseTrigger");
      l(this, "options");
      l(this, "closeHeight");
      l(this, "show", () => {
        var e2, s2;
        r(this.element, "before-expand", {
          isExpanded: false
        }), this.collapseTrigger && (this.collapseTrigger.ariaExpanded = "true"), I(this.element), (s2 = (e2 = this.options).onToggle) == null || s2.call(e2, { isExpanded: true }), r(this.element, "expanded", {
          isExpanded: false
        });
      });
      l(this, "hide", () => {
        var e2, s2;
        this.collapseTrigger && (this.collapseTrigger.ariaExpanded = "false"), b(this.element, `${this.closeHeight}px`), (s2 = (e2 = this.options).onToggle) == null || s2.call(e2, { isExpanded: false }), r(this.element, "collapsed", { isExpanded: false });
      });
      l(this, "toggle", () => {
        var s2, i2;
        const e2 = this.element.dataset.state === "open";
        e2 ? this.hide() : this.show(), (i2 = (s2 = this.options).onToggle) == null || i2.call(s2, { isExpanded: !e2 });
      });
      l(this, "setCloseHeight", (e2) => {
        this.closeHeight = e2;
      });
      let n;
      if (n = typeof e == "string" ? c(`${e}`) : e, typeof e == "string" && !n)
        throw new Error(`No element found matching selector: ${e}`);
      if (!(n instanceof HTMLElement))
        throw new Error("Provided element must be a valid HTMLElement or selector");
      this.element = n;
      const a = h.getInstance("collapse", this.element);
      if (a)
        return a;
      this.collapseId = this.element.getAttribute("id"), this.collapseTrigger = c(`${i}`) || c(`[data-collapse-trigger][data-target*='${this.collapseId}']`), this.options = s, this.defaultState = this.element.dataset.state ? this.element.dataset.state === "open" ? "open" : "close" : this.options.defaultState || "close", this.closeHeight = this.element.dataset.closeHeight ? parseInt(this.element.dataset.closeHeight || "0") : this.options.closeHeight || 0, this.initCollapse(), h.register("collapse", this.element, this);
    }
    initCollapse() {
      this.collapseTrigger instanceof HTMLElement && (this.collapseTrigger.addEventListener("click", this.toggle), this.collapseTrigger.ariaExpanded = this.defaultState === "open" ? "true" : "false"), y(this.element, this.defaultState, `${this.closeHeight}px`);
    }
    /**
     * Cleans up the Collapse instance by removing event listeners.
     * This method should be called when the collapse component is no longer needed
     * to prevent memory leaks.
     * 
     * @example
     * ```ts
     * const collapse = new Collapse('#myCollapse');
     * // When done with the collapse component
     * collapse.cleanup();
     * ```
     */
    cleanup() {
      this.collapseTrigger instanceof HTMLElement && this.collapseTrigger.removeEventListener("click", this.toggle), h.removeInstance("collapse", this.element);
    }
  };
  l(o, "init", (e, s = {}, i) => new o(e, s, i)), /**
  * Automatically initializes all collapse components in the document that match the provided selector.
  * This is useful for setting up multiple collapse elements at once without manual initialization.
  * 
  * @param selector - CSS selector to identify collapse elements. Defaults to '[data-fx-collapse]'
  * 
  * @example
  * ```ts
  * // Initialize all elements with data-fx-collapse attribute
  * Collapse.autoInit();
  * 
  * // Initialize elements with custom selector
  * Collapse.autoInit('.custom-collapse');
  * ```
  */
  l(o, "autoInit", (e = "[data-fx-collapse]") => {
    const s = x(e);
    for (const i of s)
      new o(i);
  });
  var f = o;

  // src/index.js
  function Collapse(Alpine) {
    Alpine.directive("collapse", (el, {}, { cleanup }) => {
      const collapse_ = new f(el);
      cleanup(() => {
        collapse_.cleanup();
      });
    });
  }
  var src_default = Collapse;

  // builds/cdn.js
  document.addEventListener("alpine:init", () => {
    src_default(window.Alpine);
  });
})();
