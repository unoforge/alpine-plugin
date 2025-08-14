(() => {
  // ../../node_modules/@flexilla/dismissible/dist/dismissible.js
  var u = Object.defineProperty;
  var E = (i, e, s) => e in i ? u(i, e, { enumerable: true, configurable: true, writable: true, value: s }) : i[e] = s;
  var t = (i, e, s) => E(i, typeof e != "symbol" ? e + "" : e, s);
  var f = (i, e = document.body) => e.querySelector(i);
  var d = (i, e = document.body) => Array.from(e.querySelectorAll(i));
  var p = ({
    element: i,
    callback: e,
    type: s,
    keysCheck: n
  }) => {
    const l = getComputedStyle(i), o = l.transition;
    if (o !== "none" && o !== "" && !n.includes(o)) {
      const a = "transitionend", c = () => {
        i.removeEventListener(a, c), e();
      };
      i.addEventListener(a, c, { once: true });
    } else
      e();
  };
  var m = ({
    element: i,
    callback: e
  }) => {
    p({
      element: i,
      callback: e,
      type: "transition",
      keysCheck: ["all 0s ease 0s", "all"]
    });
  };
  var h = class {
    static initGlobalRegistry() {
      window.$flexillaInstances || (window.$flexillaInstances = {});
    }
    static register(e, s, n) {
      return this.initGlobalRegistry(), window.$flexillaInstances[e] || (window.$flexillaInstances[e] = []), this.getInstance(e, s) || (window.$flexillaInstances[e].push({ element: s, instance: n }), n);
    }
    static getInstance(e, s) {
      var n, l;
      return this.initGlobalRegistry(), (l = (n = window.$flexillaInstances[e]) == null ? void 0 : n.find(
        (o) => o.element === s
      )) == null ? void 0 : l.instance;
    }
    static removeInstance(e, s) {
      this.initGlobalRegistry(), window.$flexillaInstances[e] && (window.$flexillaInstances[e] = window.$flexillaInstances[e].filter(
        (n) => n.element !== s
      ));
    }
  };
  var r = class r2 {
    // Store original display style
    /**
     * Dismissible Component
     * @param dismissible 
     * @param action 
     * @param onDismiss 
     * @param onRestore 
     */
    constructor(e, s, n, l) {
      t(this, "dismissibleElement");
      t(this, "dismissButtons");
      t(this, "restoreButtons");
      t(this, "action");
      t(this, "onDismiss");
      t(this, "onRestore");
      t(this, "parentElement");
      t(this, "previousSibling");
      t(this, "originalDisplay");
      t(this, "hideFromScreen", () => {
        var e2;
        this.dismissibleElement.style.display = "none", (e2 = this.onDismiss) == null || e2.call(this);
      });
      t(this, "removeFromDom", () => {
        var e2, s2;
        (e2 = this.onDismiss) == null || e2.call(this), (s2 = this.dismissibleElement.parentElement) == null || s2.removeChild(this.dismissibleElement);
      });
      t(this, "showOnScreen", () => {
        var e2;
        this.dismissibleElement.style.display = this.originalDisplay, this.dismissibleElement.setAttribute("aria-hidden", "false"), this.dismissibleElement.setAttribute("data-state", "visible"), (e2 = this.onRestore) == null || e2.call(this);
      });
      t(this, "restoreToDom", () => {
        var e2;
        this.parentElement && (this.previousSibling && this.previousSibling.nextSibling ? this.parentElement.insertBefore(this.dismissibleElement, this.previousSibling.nextSibling) : this.parentElement.appendChild(this.dismissibleElement), this.dismissibleElement.setAttribute("aria-hidden", "false"), this.dismissibleElement.removeAttribute("data-hidden"), this.dismissibleElement.setAttribute("data-state", "visible"), (e2 = this.onRestore) == null || e2.call(this));
      });
      t(this, "dismiss", () => {
        switch (this.action) {
          case "hide-from-screen":
            this.dismissibleElement.setAttribute("aria-hidden", "true"), this.dismissibleElement.setAttribute("data-state", "hidden"), m({
              element: this.dismissibleElement,
              callback: this.hideFromScreen
            });
            break;
          default:
            this.dismissibleElement.setAttribute("data-hidden", ""), this.dismissibleElement.setAttribute("aria-hidden", "true"), this.dismissibleElement.setAttribute("data-state", "removed"), m({
              element: this.dismissibleElement,
              callback: this.removeFromDom
            });
            break;
        }
      });
      t(this, "restore", () => {
        switch (this.action) {
          case "hide-from-screen":
            m({
              element: this.dismissibleElement,
              callback: this.showOnScreen
            });
            break;
          default:
            m({
              element: this.dismissibleElement,
              callback: this.restoreToDom
            });
            break;
        }
      });
      const o = typeof e == "string" ? f(e, document.body) : e;
      if (!(o instanceof HTMLElement))
        throw new Error("Provided Element not a valid HTMLElement");
      this.dismissibleElement = o, this.action = s || this.dismissibleElement.dataset.action || "hide-from-screen", this.dismissButtons = d("[data-dismiss-btn]", this.dismissibleElement), this.restoreButtons = d("[data-restore-btn]", document.body), this.onDismiss = n, this.onRestore = l, this.parentElement = this.dismissibleElement.parentElement, this.previousSibling = this.dismissibleElement.previousSibling, this.originalDisplay = this.dismissibleElement.style.display || getComputedStyle(this.dismissibleElement).display, this.dismissibleElement.setAttribute("aria-hidden", "false");
      const a = h.getInstance("dismissible", this.dismissibleElement);
      if (a)
        return a;
      this.setupDismissible(), h.register("dismissible", this.dismissibleElement, this);
    }
    setupDismissible() {
      for (const e of this.dismissButtons)
        e.addEventListener("click", this.dismiss);
      for (const e of this.restoreButtons)
        e.addEventListener("click", this.restore);
    }
    /**
     * Cleanup method to remove event listeners
     */
    cleanup() {
      for (const e of this.dismissButtons)
        e.removeEventListener("click", this.dismiss);
      for (const e of this.restoreButtons)
        e.removeEventListener("click", this.restore);
      h.removeInstance("dismissible", this.dismissibleElement);
    }
  };
  t(r, "autoInit", (e = "[data-fx-dismissible]") => {
    const s = d(e);
    for (const n of s)
      new r(n);
  }), /**
  * 
  * @param dismissible 
  * @param action 
  * @param onDismiss 
  * @param onRestore 
  * @returns 
  */
  t(r, "init", (e, s, n, l) => new r(e, s, n, l));
  var b = r;

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
