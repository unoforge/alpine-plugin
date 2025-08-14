(() => {
  // ../../node_modules/@flexilla/popover/dist/popover.js
  var B = Object.defineProperty;
  var j = (n, e, t) => e in n ? B(n, e, { enumerable: true, configurable: true, writable: true, value: t }) : n[e] = t;
  var a = (n, e, t) => j(n, typeof e != "symbol" ? e + "" : e, t);
  var q = Object.defineProperty;
  var G = (n, e, t) => e in n ? q(n, e, { enumerable: true, configurable: true, writable: true, value: t }) : n[e] = t;
  var p = (n, e, t) => G(n, typeof e != "symbol" ? e + "" : e, t);
  var U = "bottom";
  var K = ({ reference: n, popper: e }) => {
    if (!n || !e)
      throw new Error("Reference or popper element is null or undefined");
    const t = /* @__PURE__ */ new WeakMap(), i = (r) => (t.has(r) || t.set(r, r.getBoundingClientRect()), t.get(r)), o = i(e), s = i(n);
    return {
      popperHeight: o.height,
      popperWidth: o.width,
      refHeight: s.height,
      refWidth: s.width,
      refLeft: s.left,
      refTop: s.top,
      refRight: s.right
    };
  };
  var V = (n, e, t, i) => {
    const o = t, s = i - (t + e);
    return o >= (n - e) / 2 && s >= (n - e) / 2;
  };
  var X = (n, e, t, i) => (n - e) / 2 <= t && t + n / 2 + e / 2 <= i;
  var Y = (n, e, t, i, o) => t > o - i ? e() ? window.innerHeight - o : t - o : n() ? 0 : t + i;
  var J = (n, e, t, i) => n <= i && t - n <= e;
  var Q = (n, e, t, i) => t <= i && -n <= e;
  var Z = (n, e, t, i, o, s) => {
    const r = o - t - s, h = t - i, d = t + s - i + (o - t - s), c = r >= 0 ? o - i : h >= 0 ? t - i : t;
    return n() ? 0 : e() ? d : c;
  };
  var _ = (n, e, t, i) => n <= t && e - n - i >= n;
  var ee = (n, e) => n >= e;
  var te = ({
    placement: n,
    refWidth: e,
    refTop: t,
    refLeft: i,
    refHeight: o,
    popperWidth: s,
    popperHeight: r,
    windowHeight: h,
    windowWidth: d,
    offsetDistance: c
  }) => {
    const m = d - i - e, v = i, x = h - t - o, C = t, u = () => Y(
      () => Q(t, o, r, h),
      () => J(t, o, r, h),
      t,
      o,
      r
    ), E = () => Z(
      () => _(i, d, s, e),
      () => ee(i, s),
      i,
      s,
      d,
      e
    ), D = () => V(s, e, i, d) ? i + e / 2 - s / 2 : E(), M = () => X(r, o, t, h) ? t + o / 2 - r / 2 : u(), T = () => i + s <= d ? i : E(), y = () => i + e - s >= 0 ? i + e - s : E(), O = () => t + r <= h ? t : u(), z = () => t + o - r >= 0 ? t + o - r : u();
    let f = 0, g = 0;
    const k = t - r - c, S = t + o + c, L = i - s - c, I = i + e + c, W = C >= r + c, F = x >= r + c, R = v >= s + c, $ = m >= s + c;
    switch (n.startsWith("top") ? g = W ? k : F ? S : Math.max(k, S) : n.startsWith("bottom") ? g = F ? S : W ? k : Math.max(S) : n.startsWith("left") ? f = R ? L : $ ? I : Math.max(L, I) : n.startsWith("right") && (f = $ ? I : R ? L : Math.max(I, L)), n) {
      case "bottom":
      case "bottom-middle":
      case "top":
      case "top-middle":
        f = D();
        break;
      case "left":
      case "left-middle":
      case "right":
      case "right-middle":
        g = M();
        break;
      case "bottom-start":
      case "top-start":
        f = T();
        break;
      case "bottom-end":
      case "top-end":
        f = y();
        break;
      case "left-start":
      case "right-start":
        g = O();
        break;
      case "left-end":
      case "right-end":
        g = z();
        break;
    }
    return { x: f, y: g };
  };
  var ne = class {
    /**
     * Flexilla Popper 
     * @param reference 
     * @param popper 
     * @param options 
     */
    /**
     * Creates an instance of CreatePopper
     * @param {HTMLElement} reference - The reference element to position against
     * @param {HTMLElement} popper - The element to be positioned
     * @param {PopperOptions} [options] - Configuration options
     * @param {number} [options.offsetDistance] - Distance between popper and reference element
     * @param {Placement} [options.placement] - Preferred placement of the popper
     * @param {Object} [options.eventEffect] - Event handling configuration
     * @param {boolean} [options.eventEffect.disableOnResize] - Disable position updates on window resize
     * @param {boolean} [options.eventEffect.disableOnScroll] - Disable position updates on scroll
     * @param {Function} [options.onUpdate] - Callback function when position updates
     */
    constructor(e, t, i = {}) {
      p(this, "reference"), p(this, "popper"), p(this, "offsetDistance"), p(this, "placement"), p(this, "disableOnResize"), p(this, "disableOnScroll"), p(this, "onUpdate"), p(this, "isWindowEventsRegistered"), p(this, "validateElements", () => {
        if (!(this.reference instanceof HTMLElement))
          throw new Error("Invalid HTMLElement for Reference Element");
        if (!(this.popper instanceof HTMLElement))
          throw new Error("Invalid HTMLElement for Popper");
        if (typeof this.offsetDistance != "number")
          throw new Error("OffsetDistance must be a number");
      }), p(this, "setPopperStyleProperty", (m, v) => {
        this.popper.style.setProperty("--fx-popper-placement-x", `${m}px`), this.popper.style.setProperty("--fx-popper-placement-y", `${v}px`);
      }), p(this, "setInitialStyles", () => {
        this.popper.style.setProperty("--fx-popper-placement-x", ""), this.popper.style.setProperty("--fx-popper-placement-y", "");
      }), p(this, "initPlacement", () => {
        var m;
        this.validateElements(), this.setInitialStyles();
        const v = window.innerWidth, x = window.innerHeight, { popperHeight: C, popperWidth: u, refHeight: E, refWidth: D, refLeft: M, refTop: T } = K({ reference: this.reference, popper: this.popper }), { x: y, y: O } = te(
          {
            placement: this.placement,
            refWidth: D,
            refTop: T,
            refLeft: M,
            popperWidth: u,
            refHeight: E,
            popperHeight: C,
            windowHeight: x,
            windowWidth: v,
            offsetDistance: this.offsetDistance
          }
        );
        this.setPopperStyleProperty(y, O), (m = this.onUpdate) == null || m.call(this, { x: y, y: O, placement: this.placement });
      }), p(this, "removeWindowEvents", () => {
        this.isWindowEventsRegistered && (!this.disableOnResize && window.removeEventListener("resize", this.updatePosition), !this.disableOnScroll && window.removeEventListener("scroll", this.updatePosition), this.isWindowEventsRegistered = false);
      }), p(this, "attachWindowEvent", () => {
        this.isWindowEventsRegistered && this.removeWindowEvents(), this.disableOnResize || window.addEventListener("resize", this.updatePosition), this.disableOnScroll || window.addEventListener("scroll", this.updatePosition), this.isWindowEventsRegistered = true;
      }), p(this, "resetPosition", () => {
        this.setInitialStyles();
      }), p(this, "updatePosition", () => {
        this.initPlacement(), this.attachWindowEvent();
      }), p(this, "cleanupEvents", () => {
        this.setInitialStyles(), this.removeWindowEvents();
      });
      const {
        offsetDistance: o = 10,
        placement: s = U,
        eventEffect: r = {},
        onUpdate: h
      } = i;
      if (!(e instanceof HTMLElement))
        throw new Error("Invalid HTMLElement for Reference Element");
      if (!(t instanceof HTMLElement))
        throw new Error("Invalid HTMLElement for Popper");
      if (i.offsetDistance && typeof i.offsetDistance != "number")
        throw new Error("OffsetDistance must be a number");
      const { disableOnResize: d, disableOnScroll: c } = r;
      this.isWindowEventsRegistered = false, this.reference = e, this.popper = t, this.offsetDistance = o, this.placement = s, this.disableOnResize = d || false, this.disableOnScroll = c || false, this.onUpdate = h;
    }
    /**
     * Updates popper configuration and recalculates position
     * @public
     * @param {Object} options - New configuration options
     * @param {Placement} options.placement - New placement value
     * @param {number} [options.offsetDistance] - New offset distance
     */
    setOptions({ placement: e, offsetDistance: t }) {
      this.placement = e, this.offsetDistance = t || this.offsetDistance, this.initPlacement(), this.attachWindowEvent();
    }
  };
  var ie = Object.defineProperty;
  var se = (n, e, t) => e in n ? ie(n, e, { enumerable: true, configurable: true, writable: true, value: t }) : n[e] = t;
  var l = (n, e, t) => se(n, typeof e != "symbol" ? e + "" : e, t);
  var oe = (n, e = document.body) => e.querySelector(n);
  var N = (n, e) => {
    for (const [t, i] of Object.entries(e))
      n.setAttribute(t, i);
  };
  var re = ({
    element: n,
    callback: e,
    type: t,
    keysCheck: i
  }) => {
    const o = getComputedStyle(n), s = o.transition;
    if (s !== "none" && s !== "" && !i.includes(s)) {
      const r = "transitionend", h = () => {
        n.removeEventListener(r, h), e();
      };
      n.addEventListener(r, h, { once: true });
    } else
      e();
  };
  var ae = ({
    element: n,
    callback: e
  }) => {
    re({
      element: n,
      callback: e,
      type: "transition",
      keysCheck: ["all 0s ease 0s", "all"]
    });
  };
  var le = (n, e, t) => {
    const i = new CustomEvent(e, { detail: t });
    n.dispatchEvent(i);
  };
  var w = ({ state: n, trigger: e, popper: t }) => {
    const i = n === "open";
    N(t, {
      "data-state": n
    }), N(e, {
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
     */
    constructor({ trigger: e, content: t, options: i = {} }) {
      l(this, "triggerElement"), l(this, "contentElement"), l(this, "triggerStrategy"), l(this, "placement"), l(this, "offsetDistance"), l(this, "preventFromCloseOutside"), l(this, "preventFromCloseInside"), l(this, "options"), l(this, "defaultState"), l(this, "popper"), l(this, "eventEffect"), l(this, "getElement", (s) => typeof s == "string" ? oe(s) : s instanceof HTMLElement ? s : void 0), l(this, "handleDocumentClick", (s) => {
        this.contentElement.getAttribute("data-state") === "open" && (!this.triggerElement.contains(s.target) && !this.preventFromCloseInside && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(s.target) && !this.contentElement.contains(s.target) && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(s.target) && !this.contentElement.contains(s.target) && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(s.target) && this.contentElement.contains(s.target) && !this.preventFromCloseInside && this.hide());
      }), l(this, "handleKeyDown", (s) => {
        s.preventDefault(), this.triggerStrategy !== "hover" && s.key === "Escape" && this.contentElement.getAttribute("data-state") === "open" && (this.preventFromCloseOutside || this.hide());
      }), l(this, "toggleStateOnClick", () => {
        (this.contentElement.dataset.state || "close") === "close" ? (this.show(), this.triggerStrategy === "hover" && this.addEventOnMouseEnter()) : this.hide();
      }), l(this, "hideOnMouseLeaseTrigger", () => {
        setTimeout(() => {
          this.contentElement.matches(":hover") || this.hide();
        }, 150);
      }), l(this, "hideOnMouseLeave", () => {
        setTimeout(() => {
          this.triggerElement.matches(":hover") || this.hide();
        }, 150);
      }), l(this, "addEventOnMouseEnter", () => {
        this.triggerElement.addEventListener("mouseleave", this.hideOnMouseLeaseTrigger), this.contentElement.addEventListener("mouseleave", this.hideOnMouseLeave);
      }), l(this, "showOnMouseEnter", () => {
        this.show(), this.addEventOnMouseEnter();
      }), l(this, "setShowOptions", ({ placement: s, offsetDistance: r }) => {
        var h, d, c, m;
        this.popper.setOptions({
          placement: s,
          offsetDistance: r
        }), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleDocumentClick), (d = (h = this.options).beforeShow) == null || d.call(h), w({
          state: "open",
          popper: this.contentElement,
          trigger: this.triggerElement
        }), this.onToggleState(false), (m = (c = this.options).onShow) == null || m.call(c);
      }), l(this, "setPopperOptions", ({ placement: s, offsetDistance: r }) => {
        this.popper.setOptions({
          placement: s,
          offsetDistance: r || this.offsetDistance
        });
      }), l(this, "setPopperTrigger", (s, r) => {
        this.cleanup(), this.popper.setOptions({
          placement: r.placement || this.placement,
          offsetDistance: r.offsetDistance || this.offsetDistance
        }), this.triggerElement = s, this.triggerElement.addEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.addEventListener("mouseenter", this.showOnMouseEnter);
      }), l(this, "cleanup", () => {
        this.triggerElement.removeEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.removeEventListener("mouseenter", this.showOnMouseEnter);
      });
      var o;
      if (this.contentElement = this.getElement(t), this.triggerElement = this.getElement(e), !(this.triggerElement instanceof HTMLElement))
        throw new Error("Trigger element must be a valid HTML element");
      if (!(this.contentElement instanceof HTMLElement))
        throw new Error("Content element must be a valid HTML element");
      this.options = i, this.triggerStrategy = this.options.triggerStrategy || "click", this.placement = this.options.placement || "bottom", this.offsetDistance = this.options.offsetDistance || 6, this.preventFromCloseOutside = this.options.preventFromCloseOutside || false, this.preventFromCloseInside = this.options.preventCloseFromInside || false, this.defaultState = this.options.defaultState || "close", this.eventEffect = (o = this.options.popper) == null ? void 0 : o.eventEffect, this.popper = new ne(
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
      var t, i;
      (i = (t = this.options).onToggle) == null || i.call(t, { isHidden: e });
    }
    /**
     * Shows the overlay
     * Positions the overlay, adds event listeners, and triggers related callbacks
     */
    show() {
      var e, t, i, o;
      this.popper.updatePosition(), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleDocumentClick), (t = (e = this.options).beforeShow) == null || t.call(e), w({
        state: "open",
        popper: this.contentElement,
        trigger: this.triggerElement
      }), this.onToggleState(false), (o = (i = this.options).onShow) == null || o.call(i);
    }
    /**
     * Hides the overlay
     * Removes event listeners and triggers related callbacks
     */
    hide() {
      var e, t, i;
      let o = false;
      le(this.contentElement, "before-hide", {
        setExitAction: (r) => {
          o = r;
        }
      });
      const s = (i = (t = (e = this.options).beforeHide) == null ? void 0 : t.call(e)) == null ? void 0 : i.cancelAction;
      o || s || (w({
        state: "close",
        popper: this.contentElement,
        trigger: this.triggerElement
      }), this.triggerStrategy === "click" && document.removeEventListener("click", this.handleDocumentClick), document.removeEventListener("keydown", this.handleKeyDown), this.triggerStrategy === "hover" && (this.triggerElement.removeEventListener("mouseleave", this.hideOnMouseLeaseTrigger), this.contentElement.removeEventListener("mouseleave", this.hideOnMouseLeave)), ae({
        element: this.contentElement,
        callback: () => {
          var r, h;
          this.onToggleState(true), this.popper.cleanupEvents(), (h = (r = this.options).onHide) == null || h.call(r);
        }
      }));
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
  var A = (n, e = document.body) => e.querySelector(n);
  var pe = (n, e = document.body) => Array.from(e.querySelectorAll(n));
  var H = (n, e, t) => {
    const i = new CustomEvent(e, { detail: t });
    n.dispatchEvent(i);
  };
  function ce(n) {
    const e = () => {
      document.querySelector(
        "[data-fx-component]:not([data-component-initialized])"
      ) ? requestAnimationFrame(e) : n();
    };
    e();
  }
  function de(n, e, t = "move") {
    if (!(n instanceof HTMLElement))
      throw new Error("Source element must be an HTMLElement");
    if (!(e instanceof HTMLElement))
      throw new Error("Target element must be an HTMLElement");
    if (!["move", "detachable"].includes(t))
      throw new Error(`Invalid teleport mode: ${t}. Must be "move" or "detachable".`);
    let i = document.createComment("teleporter-placeholder");
    const o = n.parentNode;
    return o ? o.insertBefore(i, n) : console.warn("Element has no parent; placeholder not inserted."), t === "move" ? (n.parentNode && e.appendChild(n), {
      append() {
        n.parentNode !== e && e.appendChild(n);
      },
      remove() {
        i != null && i.parentNode && n.parentNode && i.parentNode.insertBefore(n, i);
      },
      restore() {
        i != null && i.parentNode && n.parentNode !== o && i.parentNode.insertBefore(n, i);
      }
    }) : (n.parentNode && e.appendChild(n), {
      append() {
        e.contains(n) || e.appendChild(n);
      },
      remove() {
        n.parentNode && n.remove();
      },
      restore() {
        i != null && i.parentNode && !n.parentNode && i.parentNode.insertBefore(n, i);
      }
    });
  }
  var b = class {
    static initGlobalRegistry() {
      window.$flexillaInstances || (window.$flexillaInstances = {});
    }
    static register(e, t, i) {
      return this.initGlobalRegistry(), window.$flexillaInstances[e] || (window.$flexillaInstances[e] = []), this.getInstance(e, t) || (window.$flexillaInstances[e].push({ element: t, instance: i }), i);
    }
    static getInstance(e, t) {
      var i, o;
      return this.initGlobalRegistry(), (o = (i = window.$flexillaInstances[e]) == null ? void 0 : i.find(
        (s) => s.element === t
      )) == null ? void 0 : o.instance;
    }
    static removeInstance(e, t) {
      this.initGlobalRegistry(), window.$flexillaInstances[e] && (window.$flexillaInstances[e] = window.$flexillaInstances[e].filter(
        (i) => i.element !== t
      ));
    }
    static setup(e) {
      e.setAttribute("data-fx-component", "fx");
    }
    static initialized(e) {
      e.setAttribute("data-component-initialized", "initialized");
    }
  };
  var me = {
    teleport: true,
    teleportMode: "move"
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
      a(this, "triggerElement");
      a(this, "contentElement");
      a(this, "options");
      a(this, "PopoverInstance");
      a(this, "triggerStrategy");
      a(this, "placement");
      a(this, "offsetDistance");
      a(this, "preventFromCloseOutside");
      a(this, "preventFromCloseInside");
      a(this, "defaultState");
      a(this, "experimentalOptions");
      a(this, "teleporter");
      a(this, "moveElOnInit", () => {
        this.experimentalOptions.teleport && ce(() => {
          this.experimentalOptions.teleportMode === "detachable" ? this.teleporter.remove() : this.teleporter.append();
        });
      });
      a(this, "moveEl", () => {
        this.experimentalOptions.teleport && this.experimentalOptions.teleportMode === "detachable" && this.teleporter.remove();
      });
      a(this, "restoreEl", () => {
        this.experimentalOptions.teleport && this.experimentalOptions.teleportMode === "detachable" && this.teleporter.append();
      });
      a(this, "beforeShow", () => {
        this.restoreEl();
      });
      a(this, "onHide", () => {
        var e2, t2;
        (t2 = (e2 = this.options).onHide) == null || t2.call(e2), this.moveEl(), H(this.contentElement, "popover-hide", {
          isHidden: true
        });
      });
      a(this, "onShow", () => {
        var e2, t2;
        (t2 = (e2 = this.options).onShow) == null || t2.call(e2), H(this.contentElement, "popover-show", {
          isHidden: false
        });
      });
      a(this, "setShowOptions", ({ placement: e2, offsetDistance: t2 }) => {
        this.PopoverInstance.setShowOptions({ placement: e2, offsetDistance: t2 });
      });
      a(this, "setOptions", ({ placement: e2, offsetDistance: t2 }) => {
        this.PopoverInstance.setPopperOptions({ placement: e2, offsetDistance: t2 });
      });
      a(this, "setPopperTrigger", (e2, t2) => {
        this.PopoverInstance.setPopperTrigger(e2, t2);
      });
      a(this, "show", () => {
        this.PopoverInstance.show();
      });
      a(this, "hide", () => {
        this.PopoverInstance.hide();
      });
      a(this, "cleanup", () => {
        this.PopoverInstance.cleanup(), b.removeInstance("popover", this.contentElement);
      });
      const i = typeof e == "string" ? A(e) : e;
      this.contentElement = i;
      const o = b.getInstance("popover", this.contentElement);
      if (o)
        return o;
      b.setup(this.contentElement), this.triggerElement = A(`[data-popover-trigger][data-popover-id=${i.getAttribute("id")}]`), this.options = t, this.triggerStrategy = i.dataset.triggerStrategy ?? this.options.triggerStrategy ?? "click", this.placement = i.dataset.placement ?? this.options.placement ?? "bottom-middle", this.offsetDistance = parseInt(`${i.dataset.offsetDistance}`) ?? this.options.offsetDistance ?? 6, this.preventFromCloseOutside = i.hasAttribute("data-prevent-close-outside") ?? this.options.preventFromCloseOutside ?? false, this.preventFromCloseInside = i.hasAttribute("data-close-inside") ? false : this.options.preventCloseFromInside ?? true, this.defaultState = i.dataset.defaultState ?? this.options.defaultState ?? "close", this.experimentalOptions = Object.assign({}, me, t.experimental), this.teleporter = de(this.contentElement, document.body, this.experimentalOptions.teleportMode), this.PopoverInstance = new he({
        trigger: this.triggerElement,
        content: this.contentElement,
        options: {
          placement: this.placement,
          offsetDistance: this.offsetDistance,
          triggerStrategy: this.triggerStrategy,
          preventFromCloseOutside: this.preventFromCloseOutside,
          preventCloseFromInside: this.preventFromCloseInside,
          defaultState: this.defaultState,
          beforeShow: this.beforeShow,
          onShow: this.onShow,
          onHide: this.onHide,
          onToggle: ({ isHidden: s }) => {
            var r, h;
            (h = (r = this.options).onToggle) == null || h.call(r, { isHidden: s }), H(this.contentElement, "popover-toggle", {
              isHidden: s
            });
          },
          popper: this.options.popper
        }
      }), this.moveElOnInit(), b.register("popover", this.contentElement, this), b.initialized(this.contentElement);
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
      const t = pe(e);
      for (const i of t)
        new _P(i);
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
