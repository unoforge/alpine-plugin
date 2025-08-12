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

// ../../node_modules/@flexilla/dropdown/dist/dropdown.js
var B = Object.defineProperty;
var j = (n, e, t) => e in n ? B(n, e, { enumerable: true, configurable: true, writable: true, value: t }) : n[e] = t;
var a = (n, e, t) => j(n, typeof e != "symbol" ? e + "" : e, t);
var G = Object.defineProperty;
var q = (n, e, t) => e in n ? G(n, e, { enumerable: true, configurable: true, writable: true, value: t }) : n[e] = t;
var d = (n, e, t) => q(n, typeof e != "symbol" ? e + "" : e, t);
var V = "bottom";
var X = ({ reference: n, popper: e }) => {
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
var Y = (n, e, t, i) => {
  const o = t, s = i - (t + e);
  return o >= (n - e) / 2 && s >= (n - e) / 2;
};
var J = (n, e, t, i) => (n - e) / 2 <= t && t + n / 2 + e / 2 <= i;
var Q = (n, e, t, i, o) => t > o - i ? e() ? window.innerHeight - o : t - o : n() ? 0 : t + i;
var Z = (n, e, t, i) => n <= i && t - n <= e;
var _ = (n, e, t, i) => t <= i && -n <= e;
var ee = (n, e, t, i, o, s) => {
  const r = o - t - s, l = t - i, m = t + s - i + (o - t - s), c = r >= 0 ? o - i : l >= 0 ? t - i : t;
  return n() ? 0 : e() ? m : c;
};
var te = (n, e, t, i) => n <= t && e - n - i >= n;
var ne = (n, e) => n >= e;
var ie = ({
  placement: n,
  refWidth: e,
  refTop: t,
  refLeft: i,
  refHeight: o,
  popperWidth: s,
  popperHeight: r,
  windowHeight: l,
  windowWidth: m,
  offsetDistance: c
}) => {
  const p = m - i - e, g = i, E = l - t - o, f = t, w = () => Q(
    () => _(t, o, r, l),
    () => Z(t, o, r, l),
    t,
    o,
    r
  ), b = () => ee(
    () => te(i, m, s, e),
    () => ne(i, s),
    i,
    s,
    m,
    e
  ), M = () => Y(s, e, i, m) ? i + e / 2 - s / 2 : b(), x = () => J(r, o, t, l) ? t + o / 2 - r / 2 : w(), H = () => i + s <= m ? i : b(), S = () => i + e - s >= 0 ? i + e - s : b(), L = () => t + r <= l ? t : w(), U = () => t + o - r >= 0 ? t + o - r : w();
  let u = 0, v = 0;
  const C = t - r - c, k = t + o + c, I = i - s - c, D = i + e + c, F = f >= r + c, R = E >= r + c, $ = g >= s + c, A = p >= s + c;
  switch (n.startsWith("top") ? v = F ? C : R ? k : Math.max(C, k) : n.startsWith("bottom") ? v = R ? k : F ? C : Math.max(k) : n.startsWith("left") ? u = $ ? I : A ? D : Math.max(I, D) : n.startsWith("right") && (u = A ? D : $ ? I : Math.max(D, I)), n) {
    case "bottom":
    case "bottom-middle":
    case "top":
    case "top-middle":
      u = M();
      break;
    case "left":
    case "left-middle":
    case "right":
    case "right-middle":
      v = x();
      break;
    case "bottom-start":
    case "top-start":
      u = H();
      break;
    case "bottom-end":
    case "top-end":
      u = S();
      break;
    case "left-start":
    case "right-start":
      v = L();
      break;
    case "left-end":
    case "right-end":
      v = U();
      break;
  }
  return { x: u, y: v };
};
var se = class {
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
    d(this, "reference"), d(this, "popper"), d(this, "offsetDistance"), d(this, "placement"), d(this, "disableOnResize"), d(this, "disableOnScroll"), d(this, "onUpdate"), d(this, "isWindowEventsRegistered"), d(this, "validateElements", () => {
      if (!(this.reference instanceof HTMLElement))
        throw new Error("Invalid HTMLElement for Reference Element");
      if (!(this.popper instanceof HTMLElement))
        throw new Error("Invalid HTMLElement for Popper");
      if (typeof this.offsetDistance != "number")
        throw new Error("OffsetDistance must be a number");
    }), d(this, "setPopperStyleProperty", (p, g) => {
      this.popper.style.setProperty("--fx-popper-placement-x", `${p}px`), this.popper.style.setProperty("--fx-popper-placement-y", `${g}px`);
    }), d(this, "setInitialStyles", () => {
      this.popper.style.setProperty("--fx-popper-placement-x", ""), this.popper.style.setProperty("--fx-popper-placement-y", "");
    }), d(this, "initPlacement", () => {
      var p;
      this.validateElements(), this.setInitialStyles();
      const g = window.innerWidth, E = window.innerHeight, { popperHeight: f, popperWidth: w, refHeight: b, refWidth: M, refLeft: x, refTop: H } = X({ reference: this.reference, popper: this.popper }), { x: S, y: L } = ie(
        {
          placement: this.placement,
          refWidth: M,
          refTop: H,
          refLeft: x,
          popperWidth: w,
          refHeight: b,
          popperHeight: f,
          windowHeight: E,
          windowWidth: g,
          offsetDistance: this.offsetDistance
        }
      );
      this.setPopperStyleProperty(S, L), (p = this.onUpdate) == null || p.call(this, { x: S, y: L, placement: this.placement });
    }), d(this, "removeWindowEvents", () => {
      this.isWindowEventsRegistered && (!this.disableOnResize && window.removeEventListener("resize", this.updatePosition), !this.disableOnScroll && window.removeEventListener("scroll", this.updatePosition), this.isWindowEventsRegistered = false);
    }), d(this, "attachWindowEvent", () => {
      this.isWindowEventsRegistered && this.removeWindowEvents(), this.disableOnResize || window.addEventListener("resize", this.updatePosition), this.disableOnScroll || window.addEventListener("scroll", this.updatePosition), this.isWindowEventsRegistered = true;
    }), d(this, "resetPosition", () => {
      this.setInitialStyles();
    }), d(this, "updatePosition", () => {
      this.initPlacement(), this.attachWindowEvent();
    }), d(this, "cleanupEvents", () => {
      this.setInitialStyles(), this.removeWindowEvents();
    });
    const {
      offsetDistance: o = 10,
      placement: s = V,
      eventEffect: r = {},
      onUpdate: l
    } = i;
    if (!(e instanceof HTMLElement))
      throw new Error("Invalid HTMLElement for Reference Element");
    if (!(t instanceof HTMLElement))
      throw new Error("Invalid HTMLElement for Popper");
    if (i.offsetDistance && typeof i.offsetDistance != "number")
      throw new Error("OffsetDistance must be a number");
    const { disableOnResize: m, disableOnScroll: c } = r;
    this.isWindowEventsRegistered = false, this.reference = e, this.popper = t, this.offsetDistance = o, this.placement = s, this.disableOnResize = m || false, this.disableOnScroll = c || false, this.onUpdate = l;
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
var oe = Object.defineProperty;
var re = (n, e, t) => e in n ? oe(n, e, { enumerable: true, configurable: true, writable: true, value: t }) : n[e] = t;
var h = (n, e, t) => re(n, typeof e != "symbol" ? e + "" : e, t);
var ae = (n, e = document.body) => e.querySelector(n);
var N = (n, e) => {
  for (const [t, i] of Object.entries(e))
    n.setAttribute(t, i);
};
var le = ({
  element: n,
  callback: e,
  type: t,
  keysCheck: i
}) => {
  const o = getComputedStyle(n), s = o.transition;
  if (s !== "none" && s !== "" && !i.includes(s)) {
    const r = "transitionend", l = () => {
      n.removeEventListener(r, l), e();
    };
    n.addEventListener(r, l, { once: true });
  } else
    e();
};
var he = ({
  element: n,
  callback: e
}) => {
  le({
    element: n,
    callback: e,
    type: "transition",
    keysCheck: ["all 0s ease 0s", "all"]
  });
};
var pe = (n, e, t) => {
  const i = new CustomEvent(e, { detail: t });
  n.dispatchEvent(i);
};
var y = ({ state: n, trigger: e, popper: t }) => {
  const i = n === "open";
  N(t, {
    "data-state": n
  }), N(e, {
    "aria-expanded": `${i}`
  });
};
var ce = class {
  /**
   * Creates an instance of CreateOverlay
   * @param {Object} params - The initialization parameters
   * @param {string | HTMLElement} params.trigger - The trigger element selector or HTMLElement
   * @param {string | HTMLElement} params.content - The content element selector or HTMLElement
   * @param {OverlayOptions} [params.options] - Configuration options for the overlay
   */
  constructor({ trigger: e, content: t, options: i = {} }) {
    h(this, "triggerElement"), h(this, "contentElement"), h(this, "triggerStrategy"), h(this, "placement"), h(this, "offsetDistance"), h(this, "preventFromCloseOutside"), h(this, "preventFromCloseInside"), h(this, "options"), h(this, "defaultState"), h(this, "popper"), h(this, "eventEffect"), h(this, "getElement", (s) => typeof s == "string" ? ae(s) : s instanceof HTMLElement ? s : void 0), h(this, "handleDocumentClick", (s) => {
      this.contentElement.getAttribute("data-state") === "open" && (!this.triggerElement.contains(s.target) && !this.preventFromCloseInside && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(s.target) && !this.contentElement.contains(s.target) && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(s.target) && !this.contentElement.contains(s.target) && !this.preventFromCloseOutside ? this.hide() : !this.triggerElement.contains(s.target) && this.contentElement.contains(s.target) && !this.preventFromCloseInside && this.hide());
    }), h(this, "handleKeyDown", (s) => {
      s.preventDefault(), this.triggerStrategy !== "hover" && s.key === "Escape" && this.contentElement.getAttribute("data-state") === "open" && (this.preventFromCloseOutside || this.hide());
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
    }), h(this, "setShowOptions", ({ placement: s, offsetDistance: r }) => {
      var l, m, c, p;
      this.popper.setOptions({
        placement: s,
        offsetDistance: r
      }), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleDocumentClick), (m = (l = this.options).beforeShow) == null || m.call(l), y({
        state: "open",
        popper: this.contentElement,
        trigger: this.triggerElement
      }), this.onToggleState(false), (p = (c = this.options).onShow) == null || p.call(c);
    }), h(this, "setPopperOptions", ({ placement: s, offsetDistance: r }) => {
      this.popper.setOptions({
        placement: s,
        offsetDistance: r || this.offsetDistance
      });
    }), h(this, "setPopperTrigger", (s, r) => {
      this.cleanup(), this.popper.setOptions({
        placement: r.placement || this.placement,
        offsetDistance: r.offsetDistance || this.offsetDistance
      }), this.triggerElement = s, this.triggerElement.addEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.addEventListener("mouseenter", this.showOnMouseEnter);
    }), h(this, "cleanup", () => {
      this.triggerElement.removeEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.removeEventListener("mouseenter", this.showOnMouseEnter);
    });
    var o;
    if (this.contentElement = this.getElement(t), this.triggerElement = this.getElement(e), !(this.triggerElement instanceof HTMLElement))
      throw new Error("Trigger element must be a valid HTML element");
    if (!(this.contentElement instanceof HTMLElement))
      throw new Error("Content element must be a valid HTML element");
    this.options = i, this.triggerStrategy = this.options.triggerStrategy || "click", this.placement = this.options.placement || "bottom", this.offsetDistance = this.options.offsetDistance || 6, this.preventFromCloseOutside = this.options.preventFromCloseOutside || false, this.preventFromCloseInside = this.options.preventCloseFromInside || false, this.defaultState = this.options.defaultState || "close", this.eventEffect = (o = this.options.popper) == null ? void 0 : o.eventEffect, this.popper = new se(
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
    this.popper.updatePosition(), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleDocumentClick), (t = (e = this.options).beforeShow) == null || t.call(e), y({
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
    pe(this.contentElement, "before-hide", {
      setExitAction: (r) => {
        o = r;
      }
    });
    const s = (i = (t = (e = this.options).beforeHide) == null ? void 0 : t.call(e)) == null ? void 0 : i.cancelAction;
    o || s || (y({
      state: "close",
      popper: this.contentElement,
      trigger: this.triggerElement
    }), this.triggerStrategy === "click" && document.removeEventListener("click", this.handleDocumentClick), document.removeEventListener("keydown", this.handleKeyDown), this.triggerStrategy === "hover" && (this.triggerElement.removeEventListener("mouseleave", this.hideOnMouseLeaseTrigger), this.contentElement.removeEventListener("mouseleave", this.hideOnMouseLeave)), he({
      element: this.contentElement,
      callback: () => {
        var r, l;
        this.onToggleState(true), this.popper.cleanupEvents(), (l = (r = this.options).onHide) == null || l.call(r);
      }
    }));
  }
  initInstance() {
    y({
      state: this.defaultState,
      popper: this.contentElement,
      trigger: this.triggerElement
    }), this.defaultState === "open" ? this.show() : y({
      state: "close",
      popper: this.contentElement,
      trigger: this.triggerElement
    }), this.triggerElement.addEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.addEventListener("mouseenter", this.showOnMouseEnter);
  }
};
var P = (n, e = document.body) => e.querySelector(n);
var W = (n, e = document.body) => Array.from(e.querySelectorAll(n));
var de = (n) => typeof n == "string" ? P(n) : n;
var me = ({ containerElement: n, targetChildren: e = "a:not([disabled]), button:not([disabled])", direction: t }) => {
  let i = false;
  const o = de(n) || document.body, s = typeof e == "string" ? W(e, o) : e, r = (l) => {
    if (l.preventDefault(), o.focus(), s.length === 0)
      return;
    const m = l.key, c = document.activeElement;
    let p = s.findIndex((f) => f === c);
    if (p === -1) {
      m === "ArrowUp" || m === "ArrowLeft" ? s[s.length - 1].focus() : s[0].focus();
      return;
    }
    const g = (f) => f > 0 ? f - 1 : s.length - 1, E = (f) => f < s.length - 1 ? f + 1 : 0;
    switch (m) {
      case "ArrowDown":
        l.preventDefault(), p = E(p);
        break;
      case "ArrowRight":
        break;
      case "ArrowUp":
        l.preventDefault(), p = g(p);
        break;
      case "ArrowLeft":
        break;
      case "Home":
        l.preventDefault(), p = 0;
        break;
      case "End":
        l.preventDefault(), p = s.length - 1;
        break;
      default:
        return;
    }
    s[p] !== c && s[p].focus();
  };
  return {
    make: () => {
      i || (document.addEventListener("keydown", r), i = true);
    },
    destroy: () => {
      i && (document.removeEventListener("keydown", r), i = false);
    }
  };
};
var K = (n, e, t) => {
  const i = new CustomEvent(e, { detail: t });
  n.dispatchEvent(i);
};
function fe(n, e, t = "move") {
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
var T = class {
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
};
var ge = {
  teleport: true,
  teleportMode: "move"
};
var O = class O2 {
  /**
   * Creates a new Dropdown instance
   * @param dropdown - The dropdown content element or selector
   * @param options - Configuration options for the dropdown
   * @throws {Error} If provided elements are not valid HTMLElements
   */
  constructor(e, t = {}) {
    a(this, "triggerElement");
    a(this, "contentElement");
    a(this, "items", []);
    a(this, "options");
    a(this, "OverlayInstance");
    a(this, "navigationKeys");
    a(this, "keyObserver");
    a(this, "triggerStrategy");
    a(this, "placement");
    a(this, "offsetDistance");
    a(this, "preventFromCloseOutside");
    a(this, "preventFromCloseInside");
    a(this, "defaultState");
    a(this, "experimentalOptions");
    a(this, "teleporter");
    a(this, "observeEl", () => {
      this.keyObserver = new MutationObserver((e2) => {
        for (const t2 of e2)
          t2.type === "attributes" && t2.attributeName === "aria-expanded" && (t2.target.getAttribute("aria-expanded") === "true" ? this.navigationKeys.destroy() : this.navigationKeys.make());
      });
      for (const e2 of this.items)
        e2.hasAttribute("data-dropdown-trigger") && this.keyObserver.observe(e2, {
          attributes: true,
          attributeFilter: ["aria-expanded"]
        });
    });
    a(this, "onToggle", ({ isHidden: e2 }) => {
      var t2, i2;
      (i2 = (t2 = this.options).onToggle) == null || i2.call(t2, { isHidden: e2 });
    });
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
      this.restoreEl(), this.contentElement.focus(), this.navigationKeys.make();
    });
    a(this, "beforeHide", () => {
      this.contentElement.blur(), this.navigationKeys.destroy();
    });
    a(this, "onShow", () => {
      var e2, t2;
      K(this.contentElement, "dropdown-show", {
        isHidden: false
      }), (t2 = (e2 = this.options).onShow) == null || t2.call(e2);
    });
    a(this, "onHide", () => {
      var e2, t2;
      K(this.contentElement, "dropdown-hide", {
        isHidden: true
      }), (t2 = (e2 = this.options).onHide) == null || t2.call(e2), this.moveEl();
    });
    a(this, "show", () => {
      this.OverlayInstance.show();
    });
    a(this, "hide", () => {
      this.OverlayInstance.hide();
    });
    a(this, "setShowOptions", ({ placement: e2, offsetDistance: t2 }) => {
      this.OverlayInstance.setShowOptions({ placement: e2, offsetDistance: t2 });
    });
    a(this, "setOptions", ({ placement: e2, offsetDistance: t2 }) => {
      this.OverlayInstance.setPopperOptions({ placement: e2, offsetDistance: t2 });
    });
    a(this, "setPopperTrigger", (e2, t2) => {
      this.OverlayInstance.setPopperTrigger(e2, t2);
    });
    a(this, "disconnectObserver", () => {
      this.keyObserver && this.keyObserver.disconnect();
    });
    a(this, "cleanup", () => {
      this.disconnectObserver(), this.OverlayInstance.cleanup(), T.removeInstance("dropdown", this.contentElement);
    });
    const i = typeof e == "string" ? P(e) : e;
    if (!(i instanceof HTMLElement))
      throw new Error(
        "Invalid dropdown content element: Must provide either a valid HTMLElement or a selector string that resolves to an existing HTMLElement"
      );
    if (!i.id)
      throw new Error("Dropdown content element must have an 'id' attribute for trigger association");
    this.contentElement = i;
    const o = T.getInstance("dropdown", this.contentElement);
    if (o)
      return o;
    const s = `[data-dropdown-trigger][data-dropdown-id=${this.contentElement.id}]`;
    if (this.triggerElement = P(s), !(this.triggerElement instanceof HTMLElement))
      throw new Error(`No valid trigger element found. Ensure a trigger element exists with attributes: data-dropdown-trigger and data-dropdown-id="${this.contentElement.id}"`);
    this.options = t, this.triggerStrategy = this.options.triggerStrategy || this.contentElement.dataset.triggerStrategy || "click", this.placement = this.options.placement || this.contentElement.dataset.placement || "bottom-start", this.offsetDistance = this.options.offsetDistance || parseInt(`${this.contentElement.dataset.offsetDistance}`) | 6, this.preventFromCloseOutside = this.options.preventFromCloseOutside || this.contentElement.hasAttribute("data-prevent-close-outside") || false, this.preventFromCloseInside = this.options.preventCloseFromInside || this.contentElement.hasAttribute("data-prevent-close-inside") || false, this.defaultState = this.options.defaultState || this.contentElement.dataset.defaultState || "close", this.experimentalOptions = Object.assign({}, ge, t.experimental), this.teleporter = fe(this.contentElement, document.body, this.experimentalOptions.teleportMode), this.OverlayInstance = new ce({
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
    }), this.moveElOnInit(), this.items = W("a:not([disabled]), button:not([disabled])", this.contentElement), this.navigationKeys = me({
      containerElement: this.contentElement,
      targetChildren: this.items,
      direction: "up-down"
    }), this.observeEl(), T.register("dropdown", this.contentElement, this);
  }
  /**
   * Initializes a single dropdown instance
   * @param dropdown - The dropdown element or selector
   * @param options - Configuration options for the dropdown
   * @returns A new Dropdown instance
   */
  static init(e, t = {}) {
    new O2(e, t);
  }
};
a(O, "autoInit", (e = "[data-fx-dropdown]") => {
  const t = W(e);
  for (const i of t)
    new O(i);
});
var z = O;

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
