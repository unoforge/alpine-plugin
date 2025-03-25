// ../../node_modules/@flexilla/dropdown/dist/dropdown.js
var j = Object.defineProperty;
var q = (s, e, t) => e in s ? j(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t;
var l = (s, e, t) => q(s, typeof e != "symbol" ? e + "" : e, t);
var B = Object.defineProperty;
var N = (s, e, t) => e in s ? B(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t;
var h = (s, e, t) => N(s, typeof e != "symbol" ? e + "" : e, t);
var J = "bottom";
var Q = ({ reference: s, popper: e }) => {
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
var V = Object.defineProperty;
var X = (s, e, t) => e in s ? V(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t;
var p = (s, e, t) => X(s, typeof e != "symbol" ? e + "" : e, t);
var Y = (s, e, t, n) => {
  const o = t, i = n - (t + e);
  return o >= (s - e) / 2 && i >= (s - e) / 2;
};
var Z = (s, e, t, n) => (s - e) / 2 <= t && t + s / 2 + e / 2 <= n;
var _ = (s, e, t, n, o) => t > o - n ? e() ? window.innerHeight - o : t - o : s() ? 0 : t + n;
var ee = (s, e, t, n) => s <= n && t - s <= e;
var te = (s, e, t, n) => t <= n && -s <= e;
var ne = (s, e, t, n, o, i) => {
  const r = o - t - i, a = t - n, m = t + i - n + (o - t - i), d = r >= 0 ? o - n : a >= 0 ? t - n : t;
  return s() ? 0 : e() ? m : d;
};
var se = (s, e, t, n) => s <= t && e - s - n >= s;
var ie = (s, e) => s >= e;
var oe = ({
  placement: s,
  refWidth: e,
  refTop: t,
  refLeft: n,
  refHeight: o,
  popperWidth: i,
  popperHeight: r,
  windowHeight: a,
  windowWidth: m,
  offsetDistance: d
}) => {
  const c = m - n - e, f = n, v = a - t - o, g = t, w = () => _(
    () => te(t, o, r, a),
    () => ee(t, o, r, a),
    t,
    o,
    r
  ), y = () => ne(
    () => se(n, m, i, e),
    () => ie(n, i),
    n,
    i,
    m,
    e
  ), H = () => Y(i, e, n, m) ? n + e / 2 - i / 2 : y(), C = () => Z(r, o, t, a) ? t + o / 2 - r / 2 : w(), T = () => n + i <= m ? n : y(), O = () => n + e - i >= 0 ? n + e - i : y(), L = () => t + r <= a ? t : w(), G = () => t + o - r >= 0 ? t + o - r : w();
  let u = 0, E = 0;
  const M = t - r - d, k = t + o + d, I = n - i - d, D = n + e + d, P = g >= r + d, F = v >= r + d, R = f >= i + d, $ = c >= i + d;
  switch (s.startsWith("top") ? E = P ? M : F ? k : Math.max(M, k) : s.startsWith("bottom") ? E = F ? k : P ? M : Math.max(k) : s.startsWith("left") ? u = R ? I : $ ? D : Math.max(I, D) : s.startsWith("right") && (u = $ ? D : R ? I : Math.max(D, I)), s) {
    case "bottom":
    case "bottom-middle":
    case "top":
    case "top-middle":
      u = H();
      break;
    case "left":
    case "left-middle":
    case "right":
    case "right-middle":
      E = C();
      break;
    case "bottom-start":
    case "top-start":
      u = T();
      break;
    case "bottom-end":
    case "top-end":
      u = O();
      break;
    case "left-start":
    case "right-start":
      E = L();
      break;
    case "left-end":
    case "right-end":
      E = G();
      break;
  }
  return { x: u, y: E };
};
var re = class {
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
      if (!(this.reference instanceof HTMLElement)) throw new Error("Invalid HTMLElement for Reference Element");
      if (!(this.popper instanceof HTMLElement)) throw new Error("Invalid HTMLElement for Popper");
      if (typeof this.offsetDistance != "number") throw new Error("OffsetDistance must be a number");
    }), p(this, "setPopperStyleProperty", (c, f) => {
      this.popper.style.setProperty("--fx-popper-placement-x", `${c}px`), this.popper.style.setProperty("--fx-popper-placement-y", `${f}px`);
    }), p(this, "setInitialStyles", () => {
      this.popper.style.setProperty("--fx-popper-placement-x", ""), this.popper.style.setProperty("--fx-popper-placement-y", "");
    }), p(this, "initPlacement", () => {
      var c;
      this.validateElements(), this.setInitialStyles();
      const f = window.innerWidth, v = window.innerHeight, { popperHeight: g, popperWidth: w, refHeight: y, refWidth: H, refLeft: C, refTop: T } = Q({ reference: this.reference, popper: this.popper }), { x: O, y: L } = oe(
        {
          placement: this.placement,
          refWidth: H,
          refTop: T,
          refLeft: C,
          popperWidth: w,
          refHeight: y,
          popperHeight: g,
          windowHeight: v,
          windowWidth: f,
          offsetDistance: this.offsetDistance
        }
      );
      this.setPopperStyleProperty(O, L), (c = this.onUpdate) == null || c.call(this, { x: O, y: L, placement: this.placement });
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
      placement: i = J,
      eventEffect: r = {},
      onUpdate: a
    } = n;
    if (!(e instanceof HTMLElement)) throw new Error("Invalid HTMLElement for Reference Element");
    if (!(t instanceof HTMLElement)) throw new Error("Invalid HTMLElement for Popper");
    if (n.offsetDistance && typeof n.offsetDistance != "number") throw new Error("OffsetDistance must be a number");
    const { disableOnResize: m, disableOnScroll: d } = r;
    this.isWindowEventsRegistered = false, this.reference = e, this.popper = t, this.offsetDistance = o, this.placement = i, this.disableOnResize = m || false, this.disableOnScroll = d || false, this.onUpdate = a;
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
var ae = (s, e = document.body) => e.querySelector(s);
var A = (s, e) => {
  for (const [t, n] of Object.entries(e))
    s.setAttribute(t, n);
};
var le = ({
  element: s,
  callback: e,
  type: t,
  keysCheck: n
}) => {
  const o = getComputedStyle(s), i = o.transition;
  if (i !== "none" && i !== "" && !n.includes(i)) {
    const r = "transitionend", a = () => {
      s.removeEventListener(r, a), e();
    };
    s.addEventListener(r, a, { once: true });
  } else
    e();
};
var he = ({
  element: s,
  callback: e
}) => {
  le({
    element: s,
    callback: e,
    type: "transition",
    keysCheck: ["all 0s ease 0s", "all"]
  });
};
var b = ({ state: s, trigger: e, popper: t }) => {
  A(t, {
    "data-state": s
  }), A(e, {
    "aria-expanded": `${s}`
  });
};
var ce = class {
  /**
   * Creates an instance of CreateOverlay
   * @param {Object} params - The initialization parameters
   * @param {string | HTMLElement} params.trigger - The trigger element selector or HTMLElement
   * @param {string | HTMLElement} params.content - The content element selector or HTMLElement
   * @param {OverlayOptions} [params.options] - Configuration options for the overlay
   * @throws {Error} When trigger or content elements are invalid
   */
  constructor({ trigger: e, content: t, options: n = {} }) {
    h(this, "triggerElement"), h(this, "contentElement"), h(this, "triggerStrategy"), h(this, "placement"), h(this, "offsetDistance"), h(this, "preventFromCloseOutside"), h(this, "preventFromCloseInside"), h(this, "options"), h(this, "defaultState"), h(this, "popper"), h(this, "eventEffect"), h(this, "getElement", (i) => typeof i == "string" ? ae(i) : i instanceof HTMLElement ? i : void 0), h(this, "handleDocumentClick", (i) => {
      this.contentElement.getAttribute("data-state") === "open" && (!this.triggerElement.contains(i.target) && !this.preventFromCloseInside && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(i.target) && !this.contentElement.contains(i.target) && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(i.target) && !this.contentElement.contains(i.target) && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(i.target) && this.contentElement.contains(i.target) && !this.preventFromCloseInside && this.hide());
    }), h(this, "handleKeyDown", (i) => {
      i.preventDefault(), this.triggerStrategy !== "hover" && i.key === "Escape" && this.contentElement.getAttribute("data-state") === "open" && (this.preventFromCloseOutside || this.hide());
    }), h(this, "toggleStateOnClick", () => {
      (this.contentElement.dataset.state || "close") === "close" ? (this.show(), this.triggerStrategy === "hover" && this.addEventOnMouseEnter()) : this.hide();
    }), h(this, "hideOnMouseLeaseTrigger", () => {
      setTimeout(() => {
        this.contentElement.matches(":hover") || this.hide();
      }, 150);
    }), h(this, "hideOnMouseLeave", () => {
      setTimeout(() => {
        this.triggerElement.matches(":hover") || this.hide();
      }, 150);
    }), h(this, "addEventOnMouseEnter", () => {
      this.triggerElement.addEventListener("mouseleave", this.hideOnMouseLeaseTrigger), this.contentElement.addEventListener("mouseleave", this.hideOnMouseLeave);
    }), h(this, "showOnMouseEnter", () => {
      this.show(), this.addEventOnMouseEnter();
    }), h(this, "setShowOptions", ({ placement: i, offsetDistance: r }) => {
      var a, m, d, c;
      this.popper.setOptions({
        placement: i,
        offsetDistance: r
      }), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleDocumentClick), (m = (a = this.options).beforeShow) == null || m.call(a), b({
        state: "open",
        popper: this.contentElement,
        trigger: this.triggerElement
      }), this.onToggleState(false), (c = (d = this.options).onShow) == null || c.call(d);
    }), h(this, "setPopperOptions", ({ placement: i, offsetDistance: r }) => {
      this.popper.setOptions({
        placement: i,
        offsetDistance: r
      });
    }), h(this, "cleanup", () => {
      this.triggerElement.removeEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.removeEventListener("mouseenter", this.showOnMouseEnter);
    });
    var o;
    if (this.contentElement = this.getElement(t), this.triggerElement = this.getElement(e), !(this.triggerElement instanceof HTMLElement)) throw new Error("Trigger element must be a valid HTML element");
    if (!(this.contentElement instanceof HTMLElement)) throw new Error("Content element must be a valid HTML element");
    this.options = n, this.triggerStrategy = this.options.triggerStrategy || "click", this.placement = this.options.placement || "bottom", this.offsetDistance = this.options.offsetDistance || 6, this.preventFromCloseOutside = this.options.preventFromCloseOutside || false, this.preventFromCloseInside = this.options.preventCloseFromInside || false, this.defaultState = this.options.defaultState || "close", this.eventEffect = (o = this.options.popper) == null ? void 0 : o.eventEffect, this.popper = new re(
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
    this.popper.updatePosition(), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleDocumentClick), (t = (e = this.options).beforeShow) == null || t.call(e), b({
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
    var e, t;
    (t = (e = this.options).beforeHide) == null || t.call(e), b({
      state: "close",
      popper: this.contentElement,
      trigger: this.triggerElement
    }), this.triggerStrategy === "click" && document.removeEventListener("click", this.handleDocumentClick), document.removeEventListener("keydown", this.handleKeyDown), this.triggerStrategy === "hover" && (this.triggerElement.removeEventListener("mouseleave", this.hideOnMouseLeaseTrigger), this.contentElement.removeEventListener("mouseleave", this.hideOnMouseLeave)), he({
      element: this.contentElement,
      callback: () => {
        var n, o;
        this.onToggleState(true), this.popper.cleanupEvents(), (o = (n = this.options).onHide) == null || o.call(n);
      }
    });
  }
  initInstance() {
    b({
      state: this.defaultState,
      popper: this.contentElement,
      trigger: this.triggerElement
    }), this.defaultState === "open" ? this.show() : b({
      state: "close",
      popper: this.contentElement,
      trigger: this.triggerElement
    }), this.triggerElement.addEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.addEventListener("mouseenter", this.showOnMouseEnter);
  }
};
var W = (s, e = document.body) => e.querySelector(s);
var U = (s, e = document.body) => Array.from(e.querySelectorAll(s));
var de = (s) => typeof s == "string" ? W(s) : s;
var pe = ({ containerElement: s, targetChildren: e = "a:not([disabled]), button:not([disabled])", direction: t }) => {
  let n = false;
  const o = de(s) || document.body, i = typeof e == "string" ? U(e, o) : e, r = (a) => {
    if (a.preventDefault(), o.focus(), i.length === 0) return;
    const m = a.key, d = document.activeElement;
    let c = i.findIndex((g) => g === d);
    if (c === -1) {
      m === "ArrowUp" || m === "ArrowLeft" ? i[i.length - 1].focus() : i[0].focus();
      return;
    }
    const f = (g) => g > 0 ? g - 1 : i.length - 1, v = (g) => g < i.length - 1 ? g + 1 : 0;
    switch (m) {
      case "ArrowDown":
        a.preventDefault(), c = v(c);
        break;
      case "ArrowRight":
        break;
      case "ArrowUp":
        a.preventDefault(), c = f(c);
        break;
      case "ArrowLeft":
        break;
      case "Home":
        a.preventDefault(), c = 0;
        break;
      case "End":
        a.preventDefault(), c = i.length - 1;
        break;
      default:
        return;
    }
    i[c] !== d && i[c].focus();
  };
  return {
    make: () => {
      n || (document.addEventListener("keydown", r), n = true);
    },
    destroy: () => {
      n && (document.removeEventListener("keydown", r), n = false);
    }
  };
};
var K = (s, e, t) => {
  const n = new CustomEvent(e, { detail: t });
  s.dispatchEvent(n);
};
var x = class {
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
var S = class S2 {
  /**
   * Creates a new Dropdown instance
   * @param dropdown - The dropdown content element or selector
   * @param options - Configuration options for the dropdown
   * @throws {Error} If provided elements are not valid HTMLElements
   */
  constructor(e, t = {}) {
    l(this, "triggerElement");
    l(this, "contentElement");
    l(this, "options");
    l(this, "OverlayInstance");
    l(this, "navigationKeys");
    l(this, "triggerStrategy");
    l(this, "placement");
    l(this, "offsetDistance");
    l(this, "preventFromCloseOutside");
    l(this, "preventFromCloseInside");
    l(this, "defaultState");
    l(this, "onToggle", ({ isHidden: e2 }) => {
      var t2, n2;
      (n2 = (t2 = this.options).onToggle) == null || n2.call(t2, { isHidden: e2 });
    });
    l(this, "beforeShow", () => {
      this.contentElement.focus(), this.navigationKeys.make();
    });
    l(this, "beforeHide", () => {
      this.contentElement.blur(), this.navigationKeys.destroy();
    });
    l(this, "onShow", () => {
      var e2, t2;
      K(this.contentElement, "dropdown-show", {
        isHidden: false
      }), (t2 = (e2 = this.options).onShow) == null || t2.call(e2);
    });
    l(this, "onHide", () => {
      var e2, t2;
      K(this.contentElement, "dropdown-hide", {
        isHidden: true
      }), (t2 = (e2 = this.options).onHide) == null || t2.call(e2);
    });
    l(this, "show", () => {
      this.OverlayInstance.show();
    });
    l(this, "hide", () => {
      this.OverlayInstance.hide();
    });
    l(this, "setShowOptions", ({ placement: e2, offsetDistance: t2 }) => {
      this.OverlayInstance.setShowOptions({ placement: e2, offsetDistance: t2 });
    });
    l(this, "cleanup", () => {
      this.OverlayInstance.cleanup(), x.removeInstance("dropdown", this.contentElement);
    });
    const n = typeof e == "string" ? W(e) : e;
    if (!(n instanceof HTMLElement))
      throw new Error(
        "Invalid dropdown content element: Must provide either a valid HTMLElement or a selector string that resolves to an existing HTMLElement"
      );
    if (!n.id)
      throw new Error("Dropdown content element must have an 'id' attribute for trigger association");
    this.contentElement = n;
    const o = x.getInstance("dropdown", this.contentElement);
    if (o)
      return o;
    const i = `[data-dropdown-trigger][data-dropdown-id=${this.contentElement.id}]`;
    if (this.triggerElement = W(i), !(this.triggerElement instanceof HTMLElement))
      throw new Error(`No valid trigger element found. Ensure a trigger element exists with attributes: data-dropdown-trigger and data-dropdown-id="${this.contentElement.id}"`);
    this.options = t, this.triggerStrategy = this.options.triggerStrategy || this.contentElement.dataset.triggerStrategy || "click", this.placement = this.options.placement || this.contentElement.dataset.placement || "bottom-start", this.offsetDistance = this.options.offsetDistance || parseInt(`${this.contentElement.dataset.offsetDistance}`) | 6, this.preventFromCloseOutside = this.options.preventFromCloseOutside || this.contentElement.hasAttribute("data-prevent-close-outside") || false, this.preventFromCloseInside = this.options.preventCloseFromInside || this.contentElement.hasAttribute("data-prevent-close-inside") || false, this.defaultState = this.options.defaultState || this.contentElement.dataset.defaultState || "close", this.OverlayInstance = new ce({
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
        beforeHide: this.beforeHide,
        onShow: this.onShow,
        onHide: this.onHide,
        onToggle: ({ isHidden: r }) => {
          this.onToggle({ isHidden: r });
        },
        popper: this.options.popper
      }
    }), this.navigationKeys = pe({
      containerElement: this.contentElement,
      targetChildren: "a:not([disabled]), button:not([disabled])",
      direction: "up-down"
    }), x.register("dropdown", this.contentElement, this);
  }
  /**
   * Initializes a single dropdown instance
   * @param dropdown - The dropdown element or selector
   * @param options - Configuration options for the dropdown
   * @returns A new Dropdown instance
   */
  static init(e, t = {}) {
    new S2(e, t);
  }
};
l(S, "autoInit", (e = "[data-fx-dropdown]") => {
  const t = U(e);
  for (const n of t) new S(n);
});
var z = S;

// src/index.js
function Dropdown(Alpine) {
  Alpine.directive("dropdown", (el, {}, { cleanup }) => {
    const dropdown_ = new z(el);
    cleanup(() => {
      dropdown_.cleanup();
    });
  });
}
var src_default = Dropdown;

// builds/module.js
var module_default = src_default;
export {
  module_default as default
};
