(() => {
  // ../../node_modules/@flexilla/offcanvas/dist/offcanvas.js
  var g = Object.defineProperty;
  var w = (t, e, n) => e in t ? g(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n;
  var o = (t, e, n) => w(t, typeof e != "symbol" ? e + "" : e, n);
  var m = (t, e = document.body) => e.querySelector(t);
  var v = (t, e = document.body) => Array.from(e.querySelectorAll(t));
  var y = ({
    newElement: t,
    existingElement: e
  }) => {
    if (!(t instanceof HTMLElement) || !(e instanceof HTMLElement))
      throw new Error("Both parameters must be valid HTML elements.");
    const n = e.parentElement;
    if (n)
      n.insertBefore(t, e);
    else
      throw new Error("Existing element must have a parent element.");
  };
  var k = ({
    element: t,
    callback: e,
    type: n,
    keysCheck: s
  }) => {
    const a = getComputedStyle(t), i = a.transition;
    if (i !== "none" && i !== "" && !s.includes(i)) {
      const l = "transitionend", r = () => {
        t.removeEventListener(l, r), e();
      };
      t.addEventListener(l, r, { once: true });
    } else
      e();
  };
  var O = ({
    element: t,
    callback: e
  }) => {
    k({
      element: t,
      callback: e,
      type: "transition",
      keysCheck: ["all 0s ease 0s", "all"]
    });
  };
  var h = (t, e, n) => {
    const s = new CustomEvent(e, { detail: n });
    t.dispatchEvent(s);
  };
  function A(t) {
    const e = () => {
      document.querySelector(
        "[data-fx-component]:not([data-component-initialized])"
      ) ? requestAnimationFrame(e) : t();
    };
    e();
  }
  function B(t, e, n = "move") {
    if (!(t instanceof HTMLElement))
      throw new Error("Source element must be an HTMLElement");
    if (!(e instanceof HTMLElement))
      throw new Error("Target element must be an HTMLElement");
    if (!["move", "detachable"].includes(n))
      throw new Error(`Invalid teleport mode: ${n}. Must be "move" or "detachable".`);
    let s = document.createComment("teleporter-placeholder");
    const a = t.parentNode;
    return a ? a.insertBefore(s, t) : console.warn("Element has no parent; placeholder not inserted."), n === "move" ? (t.parentNode && e.appendChild(t), {
      append() {
        t.parentNode !== e && e.appendChild(t);
      },
      remove() {
        s != null && s.parentNode && t.parentNode && s.parentNode.insertBefore(t, s);
      },
      restore() {
        s != null && s.parentNode && t.parentNode !== a && s.parentNode.insertBefore(t, s);
      }
    }) : (t.parentNode && e.appendChild(t), {
      append() {
        e.contains(t) || e.appendChild(t);
      },
      remove() {
        t.parentNode && t.remove();
      },
      restore() {
        s != null && s.parentNode && !t.parentNode && s.parentNode.insertBefore(t, s);
      }
    });
  }
  var S = (t) => {
    var e;
    return (e = t.parentElement) == null ? void 0 : e.removeChild(t);
  };
  var C = (t) => {
    t.setAttribute("data-state", "invisible"), O({
      element: t,
      callback() {
        S(t);
      }
    });
  };
  var x = (t, e) => {
    const n = t;
    if (n === "" || !n)
      return;
    const s = document.createElement("div");
    if (s.setAttribute("aria-hidden", "true"), s.setAttribute("data-state", "visible"), s.setAttribute("data-fx-offcanvas-overlay", ""), s.setAttribute("data-offcanvas-el", e), n === "")
      return;
    const a = n.split(" ");
    return n !== "" && s.classList.add(...a), s;
  };
  var u = (t, e, n) => {
    t.setAttribute("aria-hidden", n === "open" ? "false" : "true"), t.setAttribute("data-state", n), e || L(n);
  };
  var L = (t) => {
    document.body.style.overflow = t === "open" ? "hidden" : "", document.body.style.overflowY = t === "open" ? "hidden" : "auto";
  };
  var I = (t, e) => {
    if (t === e)
      return;
    t.setAttribute("aria-hidden", "true"), t.setAttribute("data-state", "close");
    const n = m(`[data-fx-offcanvas-overlay][data-offcanvas-el=${t.getAttribute("id")}]`, t.parentElement);
    n instanceof HTMLElement && C(n);
  };
  var T = (t) => {
    const e = v("[data-fx-offcanvas][data-state=open]");
    if (!(e.length <= 0))
      for (const n of e)
        I(n, t);
  };
  var d = class {
    static initGlobalRegistry() {
      window.$flexillaInstances || (window.$flexillaInstances = {});
    }
    static register(e, n, s) {
      return this.initGlobalRegistry(), window.$flexillaInstances[e] || (window.$flexillaInstances[e] = []), this.getInstance(e, n) || (window.$flexillaInstances[e].push({ element: n, instance: s }), s);
    }
    static getInstance(e, n) {
      var s, a;
      return this.initGlobalRegistry(), (a = (s = window.$flexillaInstances[e]) == null ? void 0 : s.find(
        (i) => i.element === n
      )) == null ? void 0 : a.instance;
    }
    static removeInstance(e, n) {
      this.initGlobalRegistry(), window.$flexillaInstances[e] && (window.$flexillaInstances[e] = window.$flexillaInstances[e].filter(
        (s) => s.element !== n
      ));
    }
    static setup(e) {
      e.setAttribute("data-fx-component", "fx");
    }
    static initialized(e) {
      e.setAttribute("data-component-initialized", "initialized");
    }
  };
  var f = class f2 {
    /**
     * Creates an instance of Offcanvas.
     * @param offcanvas - The offcanvas element selector or HTMLElement
     * @param options - Configuration options for the offcanvas
     * @throws {Error} When the provided element is not a valid HTMLElement
     * 
     * @example
     * ```ts
     * const offcanvas = new Offcanvas('#sidebar', {
     *   allowBodyScroll: true, // Allow scrolling when offcanvas is open
     *   staticBackdrop: false, // Close when clicking outside
     *   backdrop: 'dark',      // Backdrop appearance
     *   onShow: () => console.log('Offcanvas shown'),
     *   onHide: () => console.log('Offcanvas hidden')
     * });
     * ```
     */
    constructor(e, n = {}) {
      o(this, "offCanvasElement");
      o(this, "offCanvasTriggers");
      o(this, "offCanvasCloseBtns");
      o(this, "allowBodyScroll");
      o(this, "staticBackdrop");
      o(this, "backdrop");
      o(this, "options");
      o(this, "teleporter");
      o(this, "moveElOnInit", () => {
        A(() => this.teleporter.append());
      });
      o(this, "closeWhenClickOutSide", (e2) => {
        const n2 = this.offCanvasElement.getAttribute("data-state") === "open", s2 = !this.offCanvasElement.contains(e2.target) && ![...this.offCanvasTriggers].includes(e2.target);
        n2 && s2 && this.closeOffCanvas();
      });
      o(this, "closeOffCanvas", () => {
        var i2, l2, r2, c2, p;
        let e2 = false;
        if (h(this.offCanvasElement, "offcanvas-before-hide", {
          offcanvasId: this.offCanvasElement.id,
          setExitAction: (b) => {
            e2 = b;
          }
        }), ((r2 = (l2 = (i2 = this.options).beforeHide) == null ? void 0 : l2.call(i2)) == null ? void 0 : r2.cancelAction) || e2)
          return;
        const s2 = this.offCanvasElement.getAttribute("id"), a2 = m(`[data-fx-offcanvas-overlay][data-offcanvas-el=${s2}]`);
        a2 instanceof HTMLElement && C(a2), u(
          this.offCanvasElement,
          this.allowBodyScroll,
          "close"
        ), document.removeEventListener("keydown", this.closeWithEsc), !this.allowBodyScroll && !a2 && document.removeEventListener("click", this.closeWhenClickOutSide), (p = (c2 = this.options).onHide) == null || p.call(c2), h(this.offCanvasElement, "offcanvas-close", { offcanvasId: this.offCanvasElement.id });
      });
      o(this, "closeWithEsc", (e2) => {
        e2.key === "Escape" && (e2.preventDefault(), this.closeOffCanvas());
      });
      o(this, "changeState", () => {
        this.offCanvasElement.getAttribute("data-state") === "open" ? this.closeOffCanvas() : this.openOffCanvas();
      });
      o(this, "setOptions", ({ allowBodyscroll: e2 }) => {
        e2 !== void 0 && (this.allowBodyScroll = e2);
      });
      const s = typeof e == "string" ? m(e) : e;
      if (!(s instanceof HTMLElement))
        throw new Error("Invalid Offcanvas, the provided Element is not a valid HTMLElement");
      const a = d.getInstance("offcanvas", s);
      if (a)
        return a;
      d.setup(this.offCanvasElement), this.options = n;
      const { staticBackdrop: i, allowBodyScroll: l, backdrop: r } = this.options;
      this.offCanvasElement = s, this.setupAttributes(), this.staticBackdrop = i || s.hasAttribute("data-static-backdrop") && s.dataset.staticBackdrop !== "false" || false, this.allowBodyScroll = l || s.hasAttribute("data-allow-body-scroll") && s.dataset.allowBodyScroll !== "false" || false;
      const c = this.offCanvasElement.getAttribute("id");
      this.offCanvasTriggers = this.findOffCanvasElements("[data-offcanvas-trigger]", false, c), this.offCanvasCloseBtns = this.findOffCanvasElements("[data-offcanvas-close]", true, c, this.offCanvasElement), this.backdrop = r || this.offCanvasElement.dataset.offcanvasBackdrop || "", this.teleporter = B(this.offCanvasElement, document.body, "move"), this.setupOffcanvas(), this.moveElOnInit(), d.register("offcanvas", this.offCanvasElement, this), d.initialized(this.offCanvasElement);
    }
    findOffCanvasElements(e, n, s, a) {
      return n ? v(`${e}`, a) : v(`${e}[data-target=${s}]`);
    }
    setupAttributes() {
      this.offCanvasElement.hasAttribute("data-fx-offcanvas") || this.offCanvasElement.setAttribute("data-fx-offcanvas", "");
    }
    openOffCanvas() {
      var s, a, i, l;
      (a = (s = this.options).beforeShow) == null || a.call(s), T(this.offCanvasElement), u(
        this.offCanvasElement,
        this.allowBodyScroll,
        "open"
      );
      const e = this.offCanvasElement.getAttribute("id"), n = x(
        this.backdrop,
        e
      );
      n instanceof HTMLElement && (y({ newElement: n, existingElement: this.offCanvasElement }), this.staticBackdrop || n.addEventListener("click", this.closeOffCanvas)), document.addEventListener("keydown", this.closeWithEsc), (l = (i = this.options).onShow) == null || l.call(i), h(this.offCanvasElement, "offcanvas-open", { offcanvasId: this.offCanvasElement.id });
    }
    initCloseBtns() {
      for (const e of this.offCanvasCloseBtns)
        e.addEventListener("click", this.closeOffCanvas);
    }
    initTriggers() {
      for (const e of this.offCanvasTriggers)
        e.addEventListener("click", this.changeState);
    }
    setupOffcanvas() {
      this.initTriggers(), this.initCloseBtns();
    }
    /**
     * Opens the offcanvas element.
     * @example
     * ```ts
     * const offcanvas = new Offcanvas('#sidebar');
     * offcanvas.open();
     * ```
     */
    open() {
      this.openOffCanvas();
    }
    /**
     * Closes the offcanvas element.
     * This method will trigger the beforeHide callback if provided,
     * remove the backdrop if present, and finally trigger the onHide callback.
     * 
     * @example
     * ```ts
     * const offcanvas = new Offcanvas('#sidebar');
     * offcanvas.close();
     * ```
     */
    close() {
      this.closeOffCanvas();
    }
    /**
     * Cleans up the offcanvas instance by removing event listeners and references.
     * Call this method when the offcanvas component is no longer needed to prevent memory leaks.
     * 
     * @example
     * ```ts
     * const offcanvas = new Offcanvas('#sidebar');
     * // ... use offcanvas ...
     * offcanvas.cleanup();
     * ```
     */
    cleanup() {
      for (const e of this.offCanvasTriggers)
        e.removeEventListener("click", this.changeState);
      for (const e of this.offCanvasCloseBtns)
        e.removeEventListener("click", this.closeOffCanvas);
      document.removeEventListener("keydown", this.closeWithEsc), this.allowBodyScroll || document.removeEventListener("click", this.closeWhenClickOutSide), d.removeInstance("offcanvas", this.offCanvasElement);
    }
  };
  o(f, "autoInit", (e = "[data-fx-offcanvas]") => {
    const n = v(e);
    for (const s of n)
      new f(s);
  }), /**
  * This is an alternative to using the constructor directly.
  * @param offcanvas - The offcanvas element selector or HTMLElement
  * @param options - Configuration options for the offcanvas
  * @returns A new Offcanvas instance
  * 
  * @example
  * ```ts
  * const offcanvas = Offcanvas.init('#sidebar', {
  *   allowBodyScroll: true,
  *   staticBackdrop: false
  * });
  * ```
  */
  o(f, "init", (e, n = {}) => new f(e, n));
  var E = f;

  // src/index.js
  function Offcanvas(Alpine) {
    Alpine.directive("offcanvas", (el, {}, { cleanup }) => {
      const offcanvasId = el.getAttribute("id");
      if (!offcanvasId) {
        console.error("\u274C id is required but missing on element:", el);
        return;
      }
      const offcanvas_ = new E(el);
      if (!Alpine.store("sheets")) {
        Alpine.store("sheets", {});
      }
      Alpine.store("sheets")[offcanvasId] = offcanvas_;
      const openHandler = () => offcanvas_.open();
      const closeHandler = () => offcanvas_.close();
      document.addEventListener(`sheet:${offcanvasId}:open`, openHandler);
      document.addEventListener(`sheet:${offcanvasId}:close`, closeHandler);
      cleanup(() => {
        document.removeEventListener(`sheet:${offcanvasId}:open`, openHandler);
        document.removeEventListener(
          `sheet:${offcanvasId}:close`,
          closeHandler
        );
        offcanvas_.cleanup();
        delete Alpine.store("sheets")[offcanvasId];
      });
    });
    Alpine.magic("offcanvas", (el) => (id) => {
      if (!Alpine.store("sheets")) {
        console.warn("\u26A0\uFE0F Alpine store for Offcanvas is not initialized.");
        return null;
      }
      if (!Alpine.store("sheets")[id]) {
        console.warn(`\u26A0\uFE0F No offcanvas instance found for ID: ${id}`);
        return null;
      }
      return Alpine.store("sheets")[id];
    });
  }
  var src_default = Offcanvas;

  // builds/cdn.js
  document.addEventListener("alpine:init", () => {
    src_default(window.Alpine);
  });
})();
