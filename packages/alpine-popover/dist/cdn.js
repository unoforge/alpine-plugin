(() => {
  // ../../node_modules/@flexilla/popover/dist/popover.js
  var K = Object.defineProperty;
  var U = (i, e, t) => e in i ? K(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
  var p = (i, e, t) => U(i, typeof e != "symbol" ? e + "" : e, t);
  var A = (i, e = document.body) => e.querySelector(i);
  var j = (i, e = document.body) => Array.from(e.querySelectorAll(i));
  var M = (i, e, t) => {
    const s = new CustomEvent(e, { detail: t });
    i.dispatchEvent(s);
  };
  var q = Object.defineProperty;
  var B = (i, e, t) => e in i ? q(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
  var a = (i, e, t) => B(i, typeof e != "symbol" ? e + "" : e, t);
  var J = "bottom";
  var N = ({ reference: i, popper: e }) => {
    const t = e.getBoundingClientRect(), s = i.getBoundingClientRect();
    return {
      popperHeight: t.height,
      popperWidth: t.width,
      refHeight: s.height,
      refWidth: s.width,
      refLeft: s.left,
      refTop: s.top,
      refRight: s.right
    };
  };
  var Q = Object.defineProperty;
  var V = (i, e, t) => e in i ? Q(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
  var h = (i, e, t) => V(i, typeof e != "symbol" ? e + "" : e, t);
  var X = (i, e, t, s) => {
    const o = t, n = s - (t + e);
    return o >= (i - e) / 2 && n >= (i - e) / 2;
  };
  var Y = (i, e, t, s) => (i - e) / 2 <= t && t + i / 2 + e / 2 <= s;
  var Z = (i, e, t, s, o) => t > o - s ? e() ? window.innerHeight - o : t - o : i() ? 0 : t + s;
  var _ = (i, e, t, s) => i <= s && t - i <= e;
  var ee = (i, e, t, s) => t <= s && -i <= e;
  var te = (i, e, t, s, o, n) => {
    const r = o - t - n, l = t - s, d = t + n - s + (o - t - n), c = r >= 0 ? o - s : l >= 0 ? t - s : t;
    return i() ? 0 : e() ? d : c;
  };
  var se = (i, e, t, s) => i <= t && e - i - s >= i;
  var ie = (i, e) => i >= e;
  var ne = ({
    placement: i,
    refWidth: e,
    refTop: t,
    refLeft: s,
    refHeight: o,
    popperWidth: n,
    popperHeight: r,
    windowHeight: l,
    windowWidth: d,
    offsetDistance: c
  }) => {
    const m = d - s - e, v = s, D = l - t - o, C = t, u = () => Z(
      () => ee(t, o, r, l),
      () => _(t, o, r, l),
      t,
      o,
      r
    ), E = () => te(
      () => se(s, d, n, e),
      () => ie(s, n),
      s,
      n,
      d,
      e
    ), k = () => X(n, e, s, d) ? s + e / 2 - n / 2 : E(), H = () => Y(r, o, t, l) ? t + o / 2 - r / 2 : u(), T = () => s + n <= d ? s : E(), y = () => s + e - n >= 0 ? s + e - n : E(), b = () => t + r <= l ? t : u(), G = () => t + o - r >= 0 ? t + o - r : u();
    let g = 0, f = 0;
    const S = t - r - c, O = t + o + c, I = s - n - c, L = s + e + c, W = C >= r + c, F = D >= r + c, R = v >= n + c, $ = m >= n + c;
    switch (i.startsWith("top") ? f = W ? S : F ? O : Math.max(S, O) : i.startsWith("bottom") ? f = F ? O : W ? S : Math.max(S, O) : i.startsWith("left") ? g = R ? I : $ ? L : Math.max(I, L) : i.startsWith("right") && (g = $ ? L : R ? I : Math.max(I, L)), i) {
      case "bottom":
      case "bottom-middle":
      case "top":
      case "top-middle":
        g = k();
        break;
      case "left":
      case "left-middle":
      case "right":
      case "right-middle":
        f = H();
        break;
      case "bottom-start":
      case "top-start":
        g = T();
        break;
      case "bottom-end":
      case "top-end":
        g = y();
        break;
      case "left-start":
      case "right-start":
        f = b();
        break;
      case "left-end":
      case "right-end":
        f = G();
        break;
    }
    return { x: g, y: f };
  };
  var oe = class {
    /**
     * Flexilla Popper 
     * @param reference 
     * @param popper 
     * @param options 
     */
    constructor(e, t, s = {}) {
      h(this, "reference"), h(this, "popper"), h(this, "offsetDistance"), h(this, "placement"), h(this, "disableOnResize"), h(this, "disableOnScroll"), h(this, "onUpdate"), h(this, "isWindowEventsRegistered"), h(this, "validateElements", () => {
        if (!(this.reference instanceof HTMLElement))
          throw new Error("Invalid HTMLElement for Reference Element");
        if (!(this.popper instanceof HTMLElement))
          throw new Error("Invalid HTMLElement for Popper");
        if (typeof this.offsetDistance != "number")
          throw new Error("OffsetDistance must be a number");
      }), h(this, "setPopperStyleProperty", (m, v) => {
        this.popper.style.setProperty("--fx-popper-placement-x", `${m}px`), this.popper.style.setProperty("--fx-popper-placement-y", `${v}px`);
      }), h(this, "setInitialStyles", () => {
        this.popper.style.setProperty("--fx-popper-placement-x", ""), this.popper.style.setProperty("--fx-popper-placement-y", "");
      }), h(this, "initPlacement", () => {
        var m;
        this.validateElements(), this.setInitialStyles();
        const v = window.innerWidth, D = window.innerHeight, { popperHeight: C, popperWidth: u, refHeight: E, refWidth: k, refLeft: H, refTop: T } = N({ reference: this.reference, popper: this.popper }), { x: y, y: b } = ne(
          {
            placement: this.placement,
            refWidth: k,
            refTop: T,
            refLeft: H,
            popperWidth: u,
            refHeight: E,
            popperHeight: C,
            windowHeight: D,
            windowWidth: v,
            offsetDistance: this.offsetDistance
          }
        );
        this.setPopperStyleProperty(y, b), (m = this.onUpdate) == null || m.call(this, { x: y, y: b, placement: this.placement });
      }), h(this, "removeWindowEvents", () => {
        this.isWindowEventsRegistered && (!this.disableOnResize && window.removeEventListener("resize", this.updatePosition), !this.disableOnScroll && window.removeEventListener("scroll", this.updatePosition), this.isWindowEventsRegistered = false);
      }), h(this, "attachWindowEvent", () => {
        this.isWindowEventsRegistered && this.removeWindowEvents(), this.disableOnResize || window.addEventListener("resize", this.updatePosition), this.disableOnScroll || window.addEventListener("scroll", this.updatePosition), this.isWindowEventsRegistered = true;
      }), h(this, "resetPosition", () => {
        this.setInitialStyles();
      }), h(this, "updatePosition", () => {
        this.initPlacement(), this.attachWindowEvent();
      }), h(this, "cleanupEvents", () => {
        this.setInitialStyles(), this.removeWindowEvents();
      });
      const {
        offsetDistance: o = 10,
        placement: n = J,
        eventEffect: r = {},
        onUpdate: l
      } = s;
      if (!(e instanceof HTMLElement))
        throw new Error("Invalid HTMLElement for Reference Element");
      if (!(t instanceof HTMLElement))
        throw new Error("Invalid HTMLElement for Popper");
      if (s.offsetDistance && typeof s.offsetDistance != "number")
        throw new Error("OffsetDistance must be a number");
      const { disableOnResize: d, disableOnScroll: c } = r;
      this.isWindowEventsRegistered = false, this.reference = e, this.popper = t, this.offsetDistance = o, this.placement = n, this.disableOnResize = d || false, this.disableOnScroll = c || false, this.onUpdate = l;
    }
    setOptions({ placement: e, offsetDistance: t }) {
      this.placement = e, this.offsetDistance = t || this.offsetDistance, this.initPlacement(), this.attachWindowEvent();
    }
  };
  var re = (i, e = document.body) => e.querySelector(i);
  var z = (i, e) => {
    for (const [t, s] of Object.entries(e))
      i.setAttribute(t, s);
  };
  var ae = ({
    element: i,
    callback: e,
    type: t,
    keysCheck: s
  }) => {
    const o = getComputedStyle(i), n = o.transition;
    if (n !== "none" && n !== "" && !s.includes(n)) {
      const r = "transitionend", l = () => {
        i.removeEventListener(r, l), e();
      };
      i.addEventListener(r, l, { once: true });
    } else
      e();
  };
  var le = ({
    element: i,
    callback: e
  }) => {
    ae({
      element: i,
      callback: e,
      type: "transition",
      keysCheck: ["all 0s ease 0s", "all"]
    });
  };
  var w = ({ state: i, trigger: e, popper: t }) => {
    z(t, {
      "data-state": i
    }), z(e, {
      "aria-expanded": `${i}`
    });
  };
  var he = class {
    /**
     * Creates an instance of CreateOverlay
     * @param {Object} params - The initialization parameters
     * @param {string | HTMLElement} params.trigger - The trigger element selector or HTMLElement
     * @param {string | HTMLElement} params.content - The content element selector or HTMLElement
     * @param {OverlayOptions} [params.options] - Configuration options for the overlay
     * @throws {Error} When trigger or content elements are invalid
     */
    constructor({ trigger: e, content: t, options: s = {} }) {
      a(this, "triggerElement"), a(this, "contentElement"), a(this, "triggerStrategy"), a(this, "placement"), a(this, "offsetDistance"), a(this, "preventFromCloseOutside"), a(this, "preventFromCloseInside"), a(this, "options"), a(this, "defaultState"), a(this, "popper"), a(this, "eventEffect"), a(this, "getElement", (n) => typeof n == "string" ? re(n) : n instanceof HTMLElement ? n : void 0), a(this, "handleDocumentClick", (n) => {
        this.contentElement.getAttribute("data-state") === "open" && (!this.triggerElement.contains(n.target) && !this.preventFromCloseInside && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(n.target) && !this.contentElement.contains(n.target) && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(n.target) && !this.contentElement.contains(n.target) && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(n.target) && this.contentElement.contains(n.target) && !this.preventFromCloseInside && this.hide());
      }), a(this, "handleKeyDown", (n) => {
        n.preventDefault(), this.triggerStrategy !== "hover" && n.key === "Escape" && this.contentElement.getAttribute("data-state") === "open" && (this.preventFromCloseOutside || this.hide());
      }), a(this, "toggleStateOnClick", () => {
        (this.contentElement.dataset.state || "close") === "close" ? (this.show(), this.triggerStrategy === "hover" && this.addEventOnMouseEnter()) : this.hide();
      }), a(this, "hideOnMouseLeaseTrigger", () => {
        setTimeout(() => {
          this.contentElement.matches(":hover") || this.hide();
        }, 150);
      }), a(this, "hideOnMouseLeave", () => {
        setTimeout(() => {
          this.triggerElement.matches(":hover") || this.hide();
        }, 150);
      }), a(this, "addEventOnMouseEnter", () => {
        this.triggerElement.addEventListener("mouseleave", this.hideOnMouseLeaseTrigger), this.contentElement.addEventListener("mouseleave", this.hideOnMouseLeave);
      }), a(this, "showOnMouseEnter", () => {
        this.show(), this.addEventOnMouseEnter();
      }), a(this, "setShowOptions", ({ placement: n, offsetDistance: r }) => {
        var l, d, c, m;
        this.popper.setOptions({
          placement: n,
          offsetDistance: r
        }), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleDocumentClick), (d = (l = this.options).beforeShow) == null || d.call(l), w({
          state: "open",
          popper: this.contentElement,
          trigger: this.triggerElement
        }), this.onToggleState(false), (m = (c = this.options).onShow) == null || m.call(c);
      }), a(this, "setPopperOptions", ({ placement: n, offsetDistance: r }) => {
        this.popper.setOptions({
          placement: n,
          offsetDistance: r
        });
      }), a(this, "cleanup", () => {
        this.triggerElement.removeEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.removeEventListener("mouseenter", this.showOnMouseEnter);
      });
      var o;
      if (this.contentElement = this.getElement(t), this.triggerElement = this.getElement(e), !(this.triggerElement instanceof HTMLElement))
        throw new Error("Trigger element must be a valid HTML element");
      if (!(this.contentElement instanceof HTMLElement))
        throw new Error("Content element must be a valid HTML element");
      this.options = s, this.triggerStrategy = this.options.triggerStrategy || "click", this.placement = this.options.placement || "bottom", this.offsetDistance = this.options.offsetDistance || 6, this.preventFromCloseOutside = this.options.preventFromCloseOutside || false, this.preventFromCloseInside = this.options.preventCloseFromInside || false, this.defaultState = this.options.defaultState || "close", this.eventEffect = (o = this.options.popper) == null ? void 0 : o.eventEffect, this.popper = new oe(
        this.triggerElement,
        this.contentElement,
        {
          placement: this.placement,
          offsetDistance: this.offsetDistance,
          eventEffect: this.eventEffect
        }
      ), this.initInstance();
    }
    onToggleState(e) {
      var t, s;
      (s = (t = this.options).onToggle) == null || s.call(t, { isHidden: e });
    }
    /**
     * Shows the overlay
     * Positions the overlay, adds event listeners, and triggers related callbacks
     */
    show() {
      var e, t, s, o;
      this.popper.updatePosition(), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleDocumentClick), (t = (e = this.options).beforeShow) == null || t.call(e), w({
        state: "open",
        popper: this.contentElement,
        trigger: this.triggerElement
      }), this.onToggleState(false), (o = (s = this.options).onShow) == null || o.call(s);
    }
    /**
     * Hides the overlay
     * Removes event listeners and triggers related callbacks
     */
    hide() {
      var e, t;
      (t = (e = this.options).beforeHide) == null || t.call(e), w({
        state: "close",
        popper: this.contentElement,
        trigger: this.triggerElement
      }), this.triggerStrategy === "click" && document.removeEventListener("click", this.handleDocumentClick), document.removeEventListener("keydown", this.handleKeyDown), this.triggerStrategy === "hover" && (this.triggerElement.removeEventListener("mouseleave", this.hideOnMouseLeaseTrigger), this.contentElement.removeEventListener("mouseleave", this.hideOnMouseLeave)), le({
        element: this.contentElement,
        callback: () => {
          var s, o;
          this.onToggleState(true), this.popper.cleanupEvents(), (o = (s = this.options).onHide) == null || o.call(s);
        }
      });
    }
    initInstance() {
      w({
        state: this.defaultState,
        popper: this.contentElement,
        trigger: this.triggerElement
      }), this.defaultState === "open" ? this.show() : w({
        state: "close",
        popper: this.contentElement,
        trigger: this.triggerElement
      }), this.triggerElement.addEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.addEventListener("mouseenter", this.showOnMouseEnter);
    }
  };
  var x = class {
    static initGlobalRegistry() {
      window.$flexillaInstances || (window.$flexillaInstances = {});
    }
    static register(e, t, s) {
      return this.initGlobalRegistry(), window.$flexillaInstances[e] || (window.$flexillaInstances[e] = []), this.getInstance(e, t) || (window.$flexillaInstances[e].push({ element: t, instance: s }), s);
    }
    static getInstance(e, t) {
      var s, o;
      return this.initGlobalRegistry(), (o = (s = window.$flexillaInstances[e]) == null ? void 0 : s.find(
        (n) => n.element === t
      )) == null ? void 0 : o.instance;
    }
    static removeInstance(e, t) {
      this.initGlobalRegistry(), window.$flexillaInstances[e] && (window.$flexillaInstances[e] = window.$flexillaInstances[e].filter(
        (s) => s.element !== t
      ));
    }
  };
  var P = class _P {
    /**
     * Creates a new Popover instance.
     * @param {string | HTMLElement} popoverEl - The popover content element or its selector.
     * @param {PopoverOptions} [options={}] - Configuration options for the popover.
     * @example
     * // Create a popover with default options
     * const popover = new Popover('#my-popover');
     * 
     * // Create a popover with custom options
     * const popover = new Popover('#my-popover', {
     *   placement: 'top',
     *   triggerStrategy: 'hover',
     *   offsetDistance: 10
     * });
     */
    constructor(e, t = {}) {
      p(this, "triggerElement");
      p(this, "contentElement");
      p(this, "options");
      p(this, "PopoverInstance");
      p(this, "triggerStrategy");
      p(this, "placement");
      p(this, "offsetDistance");
      p(this, "preventFromCloseOutside");
      p(this, "preventFromCloseInside");
      p(this, "defaultState");
      p(this, "setShowOptions", ({ placement: e2, offsetDistance: t2 }) => {
        this.PopoverInstance.setShowOptions({ placement: e2, offsetDistance: t2 });
      });
      p(this, "show", () => {
        this.PopoverInstance.show(), M(this.contentElement, "popover-show", {
          isHidden: false
        });
      });
      p(this, "hide", () => {
        this.PopoverInstance.hide(), M(this.contentElement, "popover-hide", {
          isHidden: true
        });
      });
      p(this, "cleanup", () => {
        this.PopoverInstance.cleanup(), x.removeInstance("popover", this.contentElement);
      });
      const s = typeof e == "string" ? A(e) : e;
      this.contentElement = s;
      const o = x.getInstance("popover", this.contentElement);
      if (o)
        return o;
      this.triggerElement = A(`[data-popover-trigger][data-popover-id=${s.getAttribute("id")}]`), this.options = t, this.triggerStrategy = this.options.triggerStrategy || s.dataset.triggerStrategy || "click", this.placement = this.options.placement || s.dataset.placement || "bottom-middle", this.offsetDistance = this.options.offsetDistance || parseInt(`${s.dataset.offsetDistance}`) | 6, this.preventFromCloseOutside = this.options.preventFromCloseOutside || s.hasAttribute("data-prevent-close-outside") || false, this.preventFromCloseInside = this.options.preventCloseFromInside || s.hasAttribute("data-prevent-close-inside") || false, this.defaultState = this.options.defaultState || s.dataset.defaultState || "close", this.PopoverInstance = new he({
        trigger: this.triggerElement,
        content: this.contentElement,
        options: {
          placement: this.placement,
          offsetDistance: this.offsetDistance,
          triggerStrategy: this.triggerStrategy,
          preventFromCloseOutside: this.preventFromCloseOutside,
          preventCloseFromInside: this.preventFromCloseInside,
          defaultState: this.defaultState,
          onShow: this.options.onShow,
          onHide: this.options.onHide,
          onToggle: ({ isHidden: n }) => {
            var r, l;
            (l = (r = this.options).onToggle) == null || l.call(r, { isHidden: n }), M(this.contentElement, "popover-toggle", {
              isHidden: n
            });
          },
          popper: this.options.popper
        }
      }), x.register("popover", this.contentElement, this);
    }
    /**
     * Creates a new Popover instance with the specified options.
     * @param {string | HTMLElement} popoverEl - The popover content element or its selector.
     * @param {PopoverOptions} [options] - Configuration options for the popover.
     * @returns {Popover} A new Popover instance.
     * @example
     * const popover = Popover.init('#my-popover', {
     *   placement: 'bottom',
     *   triggerStrategy: 'click'
     * });
     */
    static init(e, t) {
      return new _P(e, t);
    }
    /**
     * Automatically initializes all popover elements matching the specified selector.
     * @param {string} [selector='[data-fx-popover]'] - The selector to find popover elements.
     * @example
     * // Initialize all popovers with default selector
     * Popover.autoInit();
     * 
     * // Initialize popovers with custom selector
     * Popover.autoInit('.custom-popover');
     */
    static autoInit(e = "[data-fx-popover]") {
      const t = j(e);
      for (const s of t)
        new _P(s);
    }
  };

  // src/index.js
  function Popover(Alpine) {
    Alpine.directive("popover", (el, {}, { cleanup }) => {
      const popover_ = new P(el);
      cleanup(() => {
        popover_.cleanup();
      });
    });
  }
  var src_default = Popover;

  // builds/cdn.js
  document.addEventListener("alpine:init", () => {
    src_default(window.Alpine);
  });
})();
