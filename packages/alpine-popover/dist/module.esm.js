// ../../node_modules/@flexilla/popover/dist/popover.js
var B = Object.defineProperty;
var j = (s, e, t) => e in s ? B(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t;
var a = (s, e, t) => j(s, typeof e != "symbol" ? e + "" : e, t);
var G = Object.defineProperty;
var U = (s, e, t) => e in s ? G(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t;
var p = (s, e, t) => U(s, typeof e != "symbol" ? e + "" : e, t);
var K = "bottom";
var q = ({ reference: s, popper: e }) => {
  if (!s || !e)
    throw new Error("Reference or popper element is null or undefined");
  const t = /* @__PURE__ */ new WeakMap(), n = (r) => (t.has(r) || t.set(r, r.getBoundingClientRect()), t.get(r)), o = n(e), i = n(s);
  return {
    popperHeight: o.height,
    popperWidth: o.width,
    refHeight: i.height,
    refWidth: i.width,
    refLeft: i.left,
    refTop: i.top,
    refRight: i.right
  };
};
var V = (s, e, t, n) => {
  const o = t, i = n - (t + e);
  return o >= (s - e) / 2 && i >= (s - e) / 2;
};
var X = (s, e, t, n) => (s - e) / 2 <= t && t + s / 2 + e / 2 <= n;
var Y = (s, e, t, n, o) => t > o - n ? e() ? window.innerHeight - o : t - o : s() ? 0 : t + n;
var J = (s, e, t, n) => s <= n && t - s <= e;
var Q = (s, e, t, n) => t <= n && -s <= e;
var Z = (s, e, t, n, o, i) => {
  const r = o - t - i, h = t - n, d = t + i - n + (o - t - i), c = r >= 0 ? o - n : h >= 0 ? t - n : t;
  return s() ? 0 : e() ? d : c;
};
var _ = (s, e, t, n) => s <= t && e - s - n >= s;
var ee = (s, e) => s >= e;
var te = ({
  placement: s,
  refWidth: e,
  refTop: t,
  refLeft: n,
  refHeight: o,
  popperWidth: i,
  popperHeight: r,
  windowHeight: h,
  windowWidth: d,
  offsetDistance: c
}) => {
  const m = d - n - e, v = n, I = h - t - o, C = t, E = () => Y(
    () => Q(t, o, r, h),
    () => J(t, o, r, h),
    t,
    o,
    r
  ), u = () => Z(
    () => _(n, d, i, e),
    () => ee(n, i),
    n,
    i,
    d,
    e
  ), D = () => V(i, e, n, d) ? n + e / 2 - i / 2 : u(), M = () => X(r, o, t, h) ? t + o / 2 - r / 2 : E(), x = () => n + i <= d ? n : u(), b = () => n + e - i >= 0 ? n + e - i : u(), y = () => t + r <= h ? t : E(), z = () => t + o - r >= 0 ? t + o - r : E();
  let g = 0, f = 0;
  const T = t - r - c, O = t + o + c, S = n - i - c, L = n + e + c, W = C >= r + c, F = I >= r + c, R = v >= i + c, $ = m >= i + c;
  switch (s.startsWith("top") ? f = W ? T : F ? O : Math.max(T, O) : s.startsWith("bottom") ? f = F ? O : W ? T : Math.max(O) : s.startsWith("left") ? g = R ? S : $ ? L : Math.max(S, L) : s.startsWith("right") && (g = $ ? L : R ? S : Math.max(L, S)), s) {
    case "bottom":
    case "bottom-middle":
    case "top":
    case "top-middle":
      g = D();
      break;
    case "left":
    case "left-middle":
    case "right":
    case "right-middle":
      f = M();
      break;
    case "bottom-start":
    case "top-start":
      g = x();
      break;
    case "bottom-end":
    case "top-end":
      g = b();
      break;
    case "left-start":
    case "right-start":
      f = y();
      break;
    case "left-end":
    case "right-end":
      f = z();
      break;
  }
  return { x: g, y: f };
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
  constructor(e, t, n = {}) {
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
      const v = window.innerWidth, I = window.innerHeight, { popperHeight: C, popperWidth: E, refHeight: u, refWidth: D, refLeft: M, refTop: x } = q({ reference: this.reference, popper: this.popper }), { x: b, y } = te(
        {
          placement: this.placement,
          refWidth: D,
          refTop: x,
          refLeft: M,
          popperWidth: E,
          refHeight: u,
          popperHeight: C,
          windowHeight: I,
          windowWidth: v,
          offsetDistance: this.offsetDistance
        }
      );
      this.setPopperStyleProperty(b, y), (m = this.onUpdate) == null || m.call(this, { x: b, y, placement: this.placement });
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
      placement: i = K,
      eventEffect: r = {},
      onUpdate: h
    } = n;
    if (!(e instanceof HTMLElement))
      throw new Error("Invalid HTMLElement for Reference Element");
    if (!(t instanceof HTMLElement))
      throw new Error("Invalid HTMLElement for Popper");
    if (n.offsetDistance && typeof n.offsetDistance != "number")
      throw new Error("OffsetDistance must be a number");
    const { disableOnResize: d, disableOnScroll: c } = r;
    this.isWindowEventsRegistered = false, this.reference = e, this.popper = t, this.offsetDistance = o, this.placement = i, this.disableOnResize = d || false, this.disableOnScroll = c || false, this.onUpdate = h;
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
var se = Object.defineProperty;
var ie = (s, e, t) => e in s ? se(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t;
var l = (s, e, t) => ie(s, typeof e != "symbol" ? e + "" : e, t);
var oe = (s, e = document.body) => e.querySelector(s);
var N = (s, e) => {
  for (const [t, n] of Object.entries(e))
    s.setAttribute(t, n);
};
var re = ({
  element: s,
  callback: e,
  type: t,
  keysCheck: n
}) => {
  const o = getComputedStyle(s), i = o.transition;
  if (i !== "none" && i !== "" && !n.includes(i)) {
    const r = "transitionend", h = () => {
      s.removeEventListener(r, h), e();
    };
    s.addEventListener(r, h, { once: true });
  } else
    e();
};
var ae = ({
  element: s,
  callback: e
}) => {
  re({
    element: s,
    callback: e,
    type: "transition",
    keysCheck: ["all 0s ease 0s", "all"]
  });
};
var le = (s, e, t) => {
  const n = new CustomEvent(e, { detail: t });
  s.dispatchEvent(n);
};
var w = ({ state: s, trigger: e, popper: t }) => {
  const n = s === "open";
  N(t, {
    "data-state": s
  }), N(e, {
    "aria-expanded": `${n}`
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
  constructor({ trigger: e, content: t, options: n = {} }) {
    l(this, "triggerElement"), l(this, "contentElement"), l(this, "triggerStrategy"), l(this, "placement"), l(this, "offsetDistance"), l(this, "preventFromCloseOutside"), l(this, "preventFromCloseInside"), l(this, "options"), l(this, "defaultState"), l(this, "popper"), l(this, "eventEffect"), l(this, "getElement", (i) => typeof i == "string" ? oe(i) : i instanceof HTMLElement ? i : void 0), l(this, "handleDocumentClick", (i) => {
      this.contentElement.getAttribute("data-state") === "open" && (!this.triggerElement.contains(i.target) && !this.preventFromCloseInside && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(i.target) && !this.contentElement.contains(i.target) && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(i.target) && !this.contentElement.contains(i.target) && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(i.target) && this.contentElement.contains(i.target) && !this.preventFromCloseInside && this.hide());
    }), l(this, "handleKeyDown", (i) => {
      i.preventDefault(), this.triggerStrategy !== "hover" && i.key === "Escape" && this.contentElement.getAttribute("data-state") === "open" && (this.preventFromCloseOutside || this.hide());
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
    }), l(this, "setShowOptions", ({ placement: i, offsetDistance: r }) => {
      var h, d, c, m;
      this.popper.setOptions({
        placement: i,
        offsetDistance: r
      }), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleDocumentClick), (d = (h = this.options).beforeShow) == null || d.call(h), w({
        state: "open",
        popper: this.contentElement,
        trigger: this.triggerElement
      }), this.onToggleState(false), (m = (c = this.options).onShow) == null || m.call(c);
    }), l(this, "setPopperOptions", ({ placement: i, offsetDistance: r }) => {
      this.popper.setOptions({
        placement: i,
        offsetDistance: r || this.offsetDistance
      });
    }), l(this, "setPopperTrigger", (i, r) => {
      this.cleanup(), this.popper.setOptions({
        placement: r.placement || this.placement,
        offsetDistance: r.offsetDistance || this.offsetDistance
      }), this.triggerElement = i, this.triggerElement.addEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.addEventListener("mouseenter", this.showOnMouseEnter);
    }), l(this, "cleanup", () => {
      this.triggerElement.removeEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.removeEventListener("mouseenter", this.showOnMouseEnter);
    });
    var o;
    if (this.contentElement = this.getElement(t), this.triggerElement = this.getElement(e), !(this.triggerElement instanceof HTMLElement))
      throw new Error("Trigger element must be a valid HTML element");
    if (!(this.contentElement instanceof HTMLElement))
      throw new Error("Content element must be a valid HTML element");
    this.options = n, this.triggerStrategy = this.options.triggerStrategy || "click", this.placement = this.options.placement || "bottom", this.offsetDistance = this.options.offsetDistance || 6, this.preventFromCloseOutside = this.options.preventFromCloseOutside || false, this.preventFromCloseInside = this.options.preventCloseFromInside || false, this.defaultState = this.options.defaultState || "close", this.eventEffect = (o = this.options.popper) == null ? void 0 : o.eventEffect, this.popper = new ne(
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
    var t, n;
    (n = (t = this.options).onToggle) == null || n.call(t, { isHidden: e });
  }
  /**
   * Shows the overlay
   * Positions the overlay, adds event listeners, and triggers related callbacks
   */
  show() {
    var e, t, n, o;
    this.popper.updatePosition(), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleDocumentClick), (t = (e = this.options).beforeShow) == null || t.call(e), w({
      state: "open",
      popper: this.contentElement,
      trigger: this.triggerElement
    }), this.onToggleState(false), (o = (n = this.options).onShow) == null || o.call(n);
  }
  /**
   * Hides the overlay
   * Removes event listeners and triggers related callbacks
   */
  hide() {
    var e, t, n;
    let o = false;
    le(this.contentElement, "before-hide", {
      setExitAction: (r) => {
        o = r;
      }
    });
    const i = (n = (t = (e = this.options).beforeHide) == null ? void 0 : t.call(e)) == null ? void 0 : n.cancelAction;
    o || i || (w({
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
var A = (s, e = document.body) => e.querySelector(s);
var pe = (s, e = document.body) => Array.from(e.querySelectorAll(s));
var k = (s, e, t) => {
  const n = new CustomEvent(e, { detail: t });
  s.dispatchEvent(n);
};
function ce(s, e, t = "move") {
  if (!(s instanceof HTMLElement))
    throw new Error("Source element must be an HTMLElement");
  if (!(e instanceof HTMLElement))
    throw new Error("Target element must be an HTMLElement");
  if (!["move", "detachable"].includes(t))
    throw new Error(`Invalid teleport mode: ${t}. Must be "move" or "detachable".`);
  let n = document.createComment("teleporter-placeholder");
  const o = s.parentNode;
  return o ? o.insertBefore(n, s) : console.warn("Element has no parent; placeholder not inserted."), t === "move" ? (s.parentNode && e.appendChild(s), {
    append() {
      s.parentNode !== e && e.appendChild(s);
    },
    remove() {
      n != null && n.parentNode && s.parentNode && n.parentNode.insertBefore(s, n);
    },
    restore() {
      n != null && n.parentNode && s.parentNode !== o && n.parentNode.insertBefore(s, n);
    }
  }) : (s.parentNode && e.appendChild(s), {
    append() {
      e.contains(s) || e.appendChild(s);
    },
    remove() {
      s.parentNode && s.remove();
    },
    restore() {
      n != null && n.parentNode && !s.parentNode && n.parentNode.insertBefore(s, n);
    }
  });
}
var H = class {
  static initGlobalRegistry() {
    window.$flexillaInstances || (window.$flexillaInstances = {});
  }
  static register(e, t, n) {
    return this.initGlobalRegistry(), window.$flexillaInstances[e] || (window.$flexillaInstances[e] = []), this.getInstance(e, t) || (window.$flexillaInstances[e].push({ element: t, instance: n }), n);
  }
  static getInstance(e, t) {
    var n, o;
    return this.initGlobalRegistry(), (o = (n = window.$flexillaInstances[e]) == null ? void 0 : n.find(
      (i) => i.element === t
    )) == null ? void 0 : o.instance;
  }
  static removeInstance(e, t) {
    this.initGlobalRegistry(), window.$flexillaInstances[e] && (window.$flexillaInstances[e] = window.$flexillaInstances[e].filter(
      (n) => n.element !== t
    ));
  }
};
var de = {
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
      this.experimentalOptions.teleport && (this.experimentalOptions.teleportMode === "detachable" ? this.teleporter.remove() : this.teleporter.append());
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
      (t2 = (e2 = this.options).onHide) == null || t2.call(e2), this.moveEl(), k(this.contentElement, "popover-hide", {
        isHidden: true
      });
    });
    a(this, "onShow", () => {
      var e2, t2;
      (t2 = (e2 = this.options).onShow) == null || t2.call(e2), k(this.contentElement, "popover-show", {
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
      this.PopoverInstance.cleanup(), H.removeInstance("popover", this.contentElement);
    });
    const n = typeof e == "string" ? A(e) : e;
    this.contentElement = n;
    const o = H.getInstance("popover", this.contentElement);
    if (o)
      return o;
    this.triggerElement = A(`[data-popover-trigger][data-popover-id=${n.getAttribute("id")}]`), this.options = t, this.triggerStrategy = this.options.triggerStrategy || n.dataset.triggerStrategy || "click", this.placement = this.options.placement || n.dataset.placement || "bottom-middle", this.offsetDistance = this.options.offsetDistance || parseInt(`${n.dataset.offsetDistance}`) | 6, this.preventFromCloseOutside = this.options.preventFromCloseOutside || n.hasAttribute("data-prevent-close-outside") || false, this.preventFromCloseInside = this.options.preventCloseFromInside || n.hasAttribute("data-prevent-close-inside") || false, this.defaultState = this.options.defaultState || n.dataset.defaultState || "close", this.experimentalOptions = Object.assign({}, de, t.experimental), this.teleporter = ce(this.contentElement, document.body, this.experimentalOptions.teleportMode), this.PopoverInstance = new he({
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
        onToggle: ({ isHidden: i }) => {
          var r, h;
          (h = (r = this.options).onToggle) == null || h.call(r, { isHidden: i }), k(this.contentElement, "popover-toggle", {
            isHidden: i
          });
        },
        popper: this.options.popper
      }
    }), this.moveElOnInit(), H.register("popover", this.contentElement, this);
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
    for (const n of t)
      new _P(n);
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

// builds/module.js
var module_default = src_default;
export {
  module_default as default
};
