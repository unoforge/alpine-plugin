(() => {
  // ../../node_modules/@flexilla/dismissible/dist/dismissible.js
  var u = Object.defineProperty;
  var E = (t, e, s) => e in t ? u(t, e, { enumerable: true, configurable: true, writable: true, value: s }) : t[e] = s;
  var n = (t, e, s) => E(t, typeof e != "symbol" ? e + "" : e, s);
  var f = (t, e = document.body) => e.querySelector(t);
  var c = (t, e = document.body) => Array.from(e.querySelectorAll(t));
  var w = ({
    element: t,
    callback: e,
    type: s,
    keysCheck: i
  }) => {
    const l = getComputedStyle(t), a = l.transition;
    if (a !== "none" && a !== "" && !i.includes(a)) {
      const d = "transitionend", r = () => {
        t.removeEventListener(d, r), e();
      };
      t.addEventListener(d, r, { once: true });
    } else
      e();
  };
  var h = ({
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
  var o = class {
    static initGlobalRegistry() {
      window.$flexillaInstances || (window.$flexillaInstances = {});
    }
    static register(e, s, i) {
      return this.initGlobalRegistry(), window.$flexillaInstances[e] || (window.$flexillaInstances[e] = []), this.getInstance(e, s) || (window.$flexillaInstances[e].push({ element: s, instance: i }), i);
    }
    static getInstance(e, s) {
      var i, l;
      return this.initGlobalRegistry(), (l = (i = window.$flexillaInstances[e]) == null ? void 0 : i.find(
        (a) => a.element === s
      )) == null ? void 0 : l.instance;
    }
    static removeInstance(e, s) {
      this.initGlobalRegistry(), window.$flexillaInstances[e] && (window.$flexillaInstances[e] = window.$flexillaInstances[e].filter(
        (i) => i.element !== s
      ));
    }
  };
  var m = class m2 {
    /**
     * Dismissible Component
     * @param dismissible 
     * @param action 
     * @param onDissmiss 
     */
    constructor(e, s, i) {
      n(this, "dismissibleElement");
      n(this, "dismissButtons");
      n(this, "action");
      n(this, "onDismiss");
      n(this, "hideFromScreen", () => {
        var e2;
        this.dismissibleElement.style.display = "none", (e2 = this.onDismiss) == null || e2.call(this);
      });
      n(this, "removeFromDom", () => {
        var e2, s2;
        (e2 = this.onDismiss) == null || e2.call(this), (s2 = this.dismissibleElement.parentElement) == null || s2.removeChild(this.dismissibleElement);
      });
      n(this, "dismiss", () => {
        switch (this.action) {
          case "hide-from-screen":
            this.dismissibleElement.setAttribute("aria-hidden", "true"), this.dismissibleElement.setAttribute("data-state", "hidden"), h({
              element: this.dismissibleElement,
              callback: this.hideFromScreen
            });
            break;
          default:
            this.dismissibleElement.setAttribute("data-hidden", ""), this.dismissibleElement.setAttribute("aria-hidden", "true"), this.dismissibleElement.setAttribute("data-state", "removed"), h({
              element: this.dismissibleElement,
              callback: this.removeFromDom
            });
            break;
        }
      });
      const l = typeof e == "string" ? f(e, document.body) : e;
      if (!(l instanceof HTMLElement)) throw new Error("Provided Element not a valid HTMLElement");
      this.dismissibleElement = l, this.action = s || this.dismissibleElement.dataset.action || "hide-from-screen", this.dismissButtons = c("[data-dismiss-btn]", this.dismissibleElement), this.onDismiss = i, this.dismissibleElement.setAttribute("aria-hidden", "false");
      const a = o.getInstance("dismissible", this.dismissibleElement);
      if (a)
        return a;
      this.setupDismissible(), o.register("dismissible", this.dismissibleElement, this);
    }
    setupDismissible() {
      for (const e of this.dismissButtons)
        e.addEventListener("click", this.dismiss);
    }
    /**
     * Cleanup method to remove event listeners
     */
    cleanup() {
      for (const e of this.dismissButtons)
        e.removeEventListener("click", this.dismiss);
      o.removeInstance("dismissible", this.dismissibleElement);
    }
  };
  n(m, "autoInit", (e = "[data-fx-dismissible]") => {
    const s = c(e);
    for (const i of s) new m(i);
  }), /**
  * 
  * @param dismissible 
  * @param action 
  * @param onDissmiss 
  * @returns 
  */
  n(m, "init", (e, s, i) => new m(e, s, i));
  var b = m;

  // src/index.js
  function Dismissible(Alpine) {
    Alpine.directive("dismissible", (el, {}, { cleanup }) => {
      const dismiss_ = new b(el);
      cleanup(() => {
        dismiss_.cleanup();
      });
    });
  }
  var src_default = Dismissible;

  // builds/cdn.js
  document.addEventListener("alpine:init", () => {
    src_default(window.Alpine);
  });
})();
