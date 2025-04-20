var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// builds/module.js
var module_exports = {};
__export(module_exports, {
  default: () => module_default
});
module.exports = __toCommonJS(module_exports);

// ../../node_modules/@flexilla/popover/dist/popover.js
var K = Object.defineProperty;
var U = (i, e, t) => e in i ? K(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var h = (i, e, t) => U(i, typeof e != "symbol" ? e + "" : e, t);
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
  if (!i || !e)
    throw new Error("Reference or popper element is null or undefined");
  const t = /* @__PURE__ */ new WeakMap(), s = (r) => (t.has(r) || t.set(r, r.getBoundingClientRect()), t.get(r)), o = s(e), n = s(i);
  return {
    popperHeight: o.height,
    popperWidth: o.width,
    refHeight: n.height,
    refWidth: n.width,
    refLeft: n.left,
    refTop: n.top,
    refRight: n.right
  };
};
var Q = Object.defineProperty;
var V = (i, e, t) => e in i ? Q(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var p = (i, e, t) => V(i, typeof e != "symbol" ? e + "" : e, t);
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
  const g = d - s - e, v = s, L = l - t - o, D = t, u = () => Z(
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
  ), k = () => X(n, e, s, d) ? s + e / 2 - n / 2 : E(), C = () => Y(r, o, t, l) ? t + o / 2 - r / 2 : u(), P = () => s + n <= d ? s : E(), y = () => s + e - n >= 0 ? s + e - n : E(), b = () => t + r <= l ? t : u(), G = () => t + o - r >= 0 ? t + o - r : u();
  let m = 0, f = 0;
  const T = t - r - c, S = t + o + c, O = s - n - c, I = s + e + c, W = D >= r + c, F = L >= r + c, R = v >= n + c, $ = g >= n + c;
  switch (i.startsWith("top") ? f = W ? T : F ? S : Math.max(T, S) : i.startsWith("bottom") ? f = F ? S : W ? T : Math.max(S) : i.startsWith("left") ? m = R ? O : $ ? I : Math.max(O, I) : i.startsWith("right") && (m = $ ? I : R ? O : Math.max(I, O)), i) {
    case "bottom":
    case "bottom-middle":
    case "top":
    case "top-middle":
      m = k();
      break;
    case "left":
    case "left-middle":
    case "right":
    case "right-middle":
      f = C();
      break;
    case "bottom-start":
    case "top-start":
      m = P();
      break;
    case "bottom-end":
    case "top-end":
      m = y();
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
  return { x: m, y: f };
};
var oe = class {
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
  constructor(e, t, s = {}) {
    p(this, "reference"), p(this, "popper"), p(this, "offsetDistance"), p(this, "placement"), p(this, "disableOnResize"), p(this, "disableOnScroll"), p(this, "onUpdate"), p(this, "isWindowEventsRegistered"), p(this, "validateElements", () => {
      if (!(this.reference instanceof HTMLElement))
        throw new Error("Invalid HTMLElement for Reference Element");
      if (!(this.popper instanceof HTMLElement))
        throw new Error("Invalid HTMLElement for Popper");
      if (typeof this.offsetDistance != "number")
        throw new Error("OffsetDistance must be a number");
    }), p(this, "setPopperStyleProperty", (g, v) => {
      this.popper.style.setProperty("--fx-popper-placement-x", `${g}px`), this.popper.style.setProperty("--fx-popper-placement-y", `${v}px`);
    }), p(this, "setInitialStyles", () => {
      this.popper.style.setProperty("--fx-popper-placement-x", ""), this.popper.style.setProperty("--fx-popper-placement-y", "");
    }), p(this, "initPlacement", () => {
      var g;
      this.validateElements(), this.setInitialStyles();
      const v = window.innerWidth, L = window.innerHeight, { popperHeight: D, popperWidth: u, refHeight: E, refWidth: k, refLeft: C, refTop: P } = N({ reference: this.reference, popper: this.popper }), { x: y, y: b } = ne(
        {
          placement: this.placement,
          refWidth: k,
          refTop: P,
          refLeft: C,
          popperWidth: u,
          refHeight: E,
          popperHeight: D,
          windowHeight: L,
          windowWidth: v,
          offsetDistance: this.offsetDistance
        }
      );
      this.setPopperStyleProperty(y, b), (g = this.onUpdate) == null || g.call(this, { x: y, y: b, placement: this.placement });
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
  const s = i === "open";
  z(t, {
    "data-state": i
  }), z(e, {
    "aria-expanded": `${s}`
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
      var l, d, c, g;
      this.popper.setOptions({
        placement: n,
        offsetDistance: r
      }), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleDocumentClick), (d = (l = this.options).beforeShow) == null || d.call(l), w({
        state: "open",
        popper: this.contentElement,
        trigger: this.triggerElement
      }), this.onToggleState(false), (g = (c = this.options).onShow) == null || g.call(c);
    }), a(this, "setPopperOptions", ({ placement: n, offsetDistance: r }) => {
      this.popper.setOptions({
        placement: n,
        offsetDistance: r || this.offsetDistance
      });
    }), a(this, "setPopperTrigger", (n, r) => {
      this.cleanup(), this.popper.setOptions({
        placement: r.placement || this.placement,
        offsetDistance: r.offsetDistance || this.offsetDistance
      }), this.triggerElement = n, this.triggerElement.addEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.addEventListener("mouseenter", this.showOnMouseEnter);
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
var H = class {
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
var x = class _x {
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
    h(this, "triggerElement");
    h(this, "contentElement");
    h(this, "options");
    h(this, "PopoverInstance");
    h(this, "triggerStrategy");
    h(this, "placement");
    h(this, "offsetDistance");
    h(this, "preventFromCloseOutside");
    h(this, "preventFromCloseInside");
    h(this, "defaultState");
    h(this, "setShowOptions", ({ placement: e2, offsetDistance: t2 }) => {
      this.PopoverInstance.setShowOptions({ placement: e2, offsetDistance: t2 });
    });
    h(this, "setOptions", ({ placement: e2, offsetDistance: t2 }) => {
      this.PopoverInstance.setPopperOptions({ placement: e2, offsetDistance: t2 });
    });
    h(this, "setPopperTrigger", (e2, t2) => {
      this.PopoverInstance.setPopperTrigger(e2, t2);
    });
    h(this, "show", () => {
      this.PopoverInstance.show(), M(this.contentElement, "popover-show", {
        isHidden: false
      });
    });
    h(this, "hide", () => {
      this.PopoverInstance.hide(), M(this.contentElement, "popover-hide", {
        isHidden: true
      });
    });
    h(this, "cleanup", () => {
      this.PopoverInstance.cleanup(), H.removeInstance("popover", this.contentElement);
    });
    const s = typeof e == "string" ? A(e) : e;
    this.contentElement = s;
    const o = H.getInstance("popover", this.contentElement);
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
    }), H.register("popover", this.contentElement, this);
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
    return new _x(e, t);
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
      new _x(s);
  }
};

// src/index.js
function Popover(Alpine) {
  Alpine.directive("popover", (el, {}, { cleanup }) => {
    const popover_ = new x(el);
    cleanup(() => {
      popover_.cleanup();
    });
  });
}
var src_default = Popover;

// builds/module.js
var module_default = src_default;
