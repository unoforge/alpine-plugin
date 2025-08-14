(() => {
  // ../../node_modules/@flexilla/dropdown/dist/dropdown.js
  var B = Object.defineProperty;
  var j = (i, e, t) => e in i ? B(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
  var a = (i, e, t) => j(i, typeof e != "symbol" ? e + "" : e, t);
  var q = Object.defineProperty;
  var G = (i, e, t) => e in i ? q(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
  var p = (i, e, t) => G(i, typeof e != "symbol" ? e + "" : e, t);
  var V = "bottom";
  var X = ({ reference: i, popper: e }) => {
    if (!i || !e)
      throw new Error("Reference or popper element is null or undefined");
    const t = /* @__PURE__ */ new WeakMap(), n = (o) => (t.has(o) || t.set(o, o.getBoundingClientRect()), t.get(o)), r = n(e), s = n(i);
    return {
      popperHeight: r.height,
      popperWidth: r.width,
      refHeight: s.height,
      refWidth: s.width,
      refLeft: s.left,
      refTop: s.top,
      refRight: s.right
    };
  };
  var Y = (i, e, t, n) => {
    const r = t, s = n - (t + e);
    return r >= (i - e) / 2 && s >= (i - e) / 2;
  };
  var J = (i, e, t, n) => (i - e) / 2 <= t && t + i / 2 + e / 2 <= n;
  var Q = (i, e, t, n, r) => t > r - n ? e() ? window.innerHeight - r : t - r : i() ? 0 : t + n;
  var Z = (i, e, t, n) => i <= n && t - i <= e;
  var _ = (i, e, t, n) => t <= n && -i <= e;
  var ee = (i, e, t, n, r, s) => {
    const o = r - t - s, l = t - n, m = t + s - n + (r - t - s), c = o >= 0 ? r - n : l >= 0 ? t - n : t;
    return i() ? 0 : e() ? m : c;
  };
  var te = (i, e, t, n) => i <= t && e - i - n >= i;
  var ne = (i, e) => i >= e;
  var ie = ({
    placement: i,
    refWidth: e,
    refTop: t,
    refLeft: n,
    refHeight: r,
    popperWidth: s,
    popperHeight: o,
    windowHeight: l,
    windowWidth: m,
    offsetDistance: c
  }) => {
    const d = m - n - e, f = n, E = l - t - r, g = t, w = () => Q(
      () => _(t, r, o, l),
      () => Z(t, r, o, l),
      t,
      r,
      o
    ), b = () => ee(
      () => te(n, m, s, e),
      () => ne(n, s),
      n,
      s,
      m,
      e
    ), M = () => Y(s, e, n, m) ? n + e / 2 - s / 2 : b(), A = () => J(o, r, t, l) ? t + r / 2 - o / 2 : w(), C = () => n + s <= m ? n : b(), L = () => n + e - s >= 0 ? n + e - s : b(), x = () => t + o <= l ? t : w(), U = () => t + r - o >= 0 ? t + r - o : w();
    let u = 0, v = 0;
    const T = t - o - c, I = t + r + c, D = n - s - c, H = n + e + c, P = g >= o + c, W = E >= o + c, R = f >= s + c, $ = d >= s + c;
    switch (i.startsWith("top") ? v = P ? T : W ? I : Math.max(T, I) : i.startsWith("bottom") ? v = W ? I : P ? T : Math.max(I) : i.startsWith("left") ? u = R ? D : $ ? H : Math.max(D, H) : i.startsWith("right") && (u = $ ? H : R ? D : Math.max(H, D)), i) {
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
        v = A();
        break;
      case "bottom-start":
      case "top-start":
        u = C();
        break;
      case "bottom-end":
      case "top-end":
        u = L();
        break;
      case "left-start":
      case "right-start":
        v = x();
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
    constructor(e, t, n = {}) {
      p(this, "reference"), p(this, "popper"), p(this, "offsetDistance"), p(this, "placement"), p(this, "disableOnResize"), p(this, "disableOnScroll"), p(this, "onUpdate"), p(this, "isWindowEventsRegistered"), p(this, "validateElements", () => {
        if (!(this.reference instanceof HTMLElement))
          throw new Error("Invalid HTMLElement for Reference Element");
        if (!(this.popper instanceof HTMLElement))
          throw new Error("Invalid HTMLElement for Popper");
        if (typeof this.offsetDistance != "number")
          throw new Error("OffsetDistance must be a number");
      }), p(this, "setPopperStyleProperty", (d, f) => {
        this.popper.style.setProperty("--fx-popper-placement-x", `${d}px`), this.popper.style.setProperty("--fx-popper-placement-y", `${f}px`);
      }), p(this, "setInitialStyles", () => {
        this.popper.style.setProperty("--fx-popper-placement-x", ""), this.popper.style.setProperty("--fx-popper-placement-y", "");
      }), p(this, "initPlacement", () => {
        var d;
        this.validateElements(), this.setInitialStyles();
        const f = window.innerWidth, E = window.innerHeight, { popperHeight: g, popperWidth: w, refHeight: b, refWidth: M, refLeft: A, refTop: C } = X({ reference: this.reference, popper: this.popper }), { x: L, y: x } = ie(
          {
            placement: this.placement,
            refWidth: M,
            refTop: C,
            refLeft: A,
            popperWidth: w,
            refHeight: b,
            popperHeight: g,
            windowHeight: E,
            windowWidth: f,
            offsetDistance: this.offsetDistance
          }
        );
        this.setPopperStyleProperty(L, x), (d = this.onUpdate) == null || d.call(this, { x: L, y: x, placement: this.placement });
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
        offsetDistance: r = 10,
        placement: s = V,
        eventEffect: o = {},
        onUpdate: l
      } = n;
      if (!(e instanceof HTMLElement))
        throw new Error("Invalid HTMLElement for Reference Element");
      if (!(t instanceof HTMLElement))
        throw new Error("Invalid HTMLElement for Popper");
      if (n.offsetDistance && typeof n.offsetDistance != "number")
        throw new Error("OffsetDistance must be a number");
      const { disableOnResize: m, disableOnScroll: c } = o;
      this.isWindowEventsRegistered = false, this.reference = e, this.popper = t, this.offsetDistance = r, this.placement = s, this.disableOnResize = m || false, this.disableOnScroll = c || false, this.onUpdate = l;
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
  var re = Object.defineProperty;
  var oe = (i, e, t) => e in i ? re(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
  var h = (i, e, t) => oe(i, typeof e != "symbol" ? e + "" : e, t);
  var ae = (i, e = document.body) => e.querySelector(i);
  var N = (i, e) => {
    for (const [t, n] of Object.entries(e))
      i.setAttribute(t, n);
  };
  var le = ({
    element: i,
    callback: e,
    type: t,
    keysCheck: n
  }) => {
    const r = getComputedStyle(i), s = r.transition;
    if (s !== "none" && s !== "" && !n.includes(s)) {
      const o = "transitionend", l = () => {
        i.removeEventListener(o, l), e();
      };
      i.addEventListener(o, l, { once: true });
    } else
      e();
  };
  var he = ({
    element: i,
    callback: e
  }) => {
    le({
      element: i,
      callback: e,
      type: "transition",
      keysCheck: ["all 0s ease 0s", "all"]
    });
  };
  var de = (i, e, t) => {
    const n = new CustomEvent(e, { detail: t });
    i.dispatchEvent(n);
  };
  var y = ({ state: i, trigger: e, popper: t }) => {
    const n = i === "open";
    N(t, {
      "data-state": i
    }), N(e, {
      "aria-expanded": `${n}`
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
    constructor({ trigger: e, content: t, options: n = {} }) {
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
      }), h(this, "setShowOptions", ({ placement: s, offsetDistance: o }) => {
        var l, m, c, d;
        this.popper.setOptions({
          placement: s,
          offsetDistance: o
        }), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleDocumentClick), (m = (l = this.options).beforeShow) == null || m.call(l), y({
          state: "open",
          popper: this.contentElement,
          trigger: this.triggerElement
        }), this.onToggleState(false), (d = (c = this.options).onShow) == null || d.call(c);
      }), h(this, "setPopperOptions", ({ placement: s, offsetDistance: o }) => {
        this.popper.setOptions({
          placement: s,
          offsetDistance: o || this.offsetDistance
        });
      }), h(this, "setPopperTrigger", (s, o) => {
        this.cleanup(), this.popper.setOptions({
          placement: o.placement || this.placement,
          offsetDistance: o.offsetDistance || this.offsetDistance
        }), this.triggerElement = s, this.triggerElement.addEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.addEventListener("mouseenter", this.showOnMouseEnter);
      }), h(this, "cleanup", () => {
        this.triggerElement.removeEventListener("click", this.toggleStateOnClick), this.triggerStrategy === "hover" && this.triggerElement.removeEventListener("mouseenter", this.showOnMouseEnter);
      });
      var r;
      if (this.contentElement = this.getElement(t), this.triggerElement = this.getElement(e), !(this.triggerElement instanceof HTMLElement))
        throw new Error("Trigger element must be a valid HTML element");
      if (!(this.contentElement instanceof HTMLElement))
        throw new Error("Content element must be a valid HTML element");
      this.options = n, this.triggerStrategy = this.options.triggerStrategy || "click", this.placement = this.options.placement || "bottom", this.offsetDistance = this.options.offsetDistance || 6, this.preventFromCloseOutside = this.options.preventFromCloseOutside || false, this.preventFromCloseInside = this.options.preventCloseFromInside || false, this.defaultState = this.options.defaultState || "close", this.eventEffect = (r = this.options.popper) == null ? void 0 : r.eventEffect, this.popper = new se(
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
      var e, t, n, r;
      this.popper.updatePosition(), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleDocumentClick), (t = (e = this.options).beforeShow) == null || t.call(e), y({
        state: "open",
        popper: this.contentElement,
        trigger: this.triggerElement
      }), this.onToggleState(false), (r = (n = this.options).onShow) == null || r.call(n);
    }
    /**
     * Hides the overlay
     * Removes event listeners and triggers related callbacks
     */
    hide() {
      var e, t, n;
      let r = false;
      de(this.contentElement, "before-hide", {
        setExitAction: (o) => {
          r = o;
        }
      });
      const s = (n = (t = (e = this.options).beforeHide) == null ? void 0 : t.call(e)) == null ? void 0 : n.cancelAction;
      r || s || (y({
        state: "close",
        popper: this.contentElement,
        trigger: this.triggerElement
      }), this.triggerStrategy === "click" && document.removeEventListener("click", this.handleDocumentClick), document.removeEventListener("keydown", this.handleKeyDown), this.triggerStrategy === "hover" && (this.triggerElement.removeEventListener("mouseleave", this.hideOnMouseLeaseTrigger), this.contentElement.removeEventListener("mouseleave", this.hideOnMouseLeave)), he({
        element: this.contentElement,
        callback: () => {
          var o, l;
          this.onToggleState(true), this.popper.cleanupEvents(), (l = (o = this.options).onHide) == null || l.call(o);
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
  var F = (i, e = document.body) => e.querySelector(i);
  var S = (i, e = document.body) => Array.from(e.querySelectorAll(i));
  var pe = (i) => typeof i == "string" ? F(i) : i;
  var me = ({ containerElement: i, targetChildren: e = "a:not([disabled]), button:not([disabled])", direction: t }) => {
    let n = false;
    const r = pe(i) || document.body, s = typeof e == "string" ? S(e, r) : e, o = (l) => {
      if (l.preventDefault(), r.focus(), s.length === 0)
        return;
      const m = l.key, c = document.activeElement;
      let d = s.findIndex((g) => g === c);
      if (d === -1) {
        m === "ArrowUp" || m === "ArrowLeft" ? s[s.length - 1].focus() : s[0].focus();
        return;
      }
      const f = (g) => g > 0 ? g - 1 : s.length - 1, E = (g) => g < s.length - 1 ? g + 1 : 0;
      switch (m) {
        case "ArrowDown":
          l.preventDefault(), d = E(d);
          break;
        case "ArrowRight":
          break;
        case "ArrowUp":
          l.preventDefault(), d = f(d);
          break;
        case "ArrowLeft":
          break;
        case "Home":
          l.preventDefault(), d = 0;
          break;
        case "End":
          l.preventDefault(), d = s.length - 1;
          break;
        default:
          return;
      }
      s[d] !== c && s[d].focus();
    };
    return {
      make: () => {
        n || (document.addEventListener("keydown", o), n = true);
      },
      destroy: () => {
        n && (document.removeEventListener("keydown", o), n = false);
      }
    };
  };
  var z = (i, e, t) => {
    const n = new CustomEvent(e, { detail: t });
    i.dispatchEvent(n);
  };
  function ge(i) {
    const e = () => {
      document.querySelector(
        "[data-fx-component]:not([data-component-initialized])"
      ) ? requestAnimationFrame(e) : i();
    };
    e();
  }
  function fe(i, e, t = "move") {
    if (!(i instanceof HTMLElement))
      throw new Error("Source element must be an HTMLElement");
    if (!(e instanceof HTMLElement))
      throw new Error("Target element must be an HTMLElement");
    if (!["move", "detachable"].includes(t))
      throw new Error(`Invalid teleport mode: ${t}. Must be "move" or "detachable".`);
    let n = document.createComment("teleporter-placeholder");
    const r = i.parentNode;
    return r ? r.insertBefore(n, i) : console.warn("Element has no parent; placeholder not inserted."), t === "move" ? (i.parentNode && e.appendChild(i), {
      append() {
        i.parentNode !== e && e.appendChild(i);
      },
      remove() {
        n != null && n.parentNode && i.parentNode && n.parentNode.insertBefore(i, n);
      },
      restore() {
        n != null && n.parentNode && i.parentNode !== r && n.parentNode.insertBefore(i, n);
      }
    }) : (i.parentNode && e.appendChild(i), {
      append() {
        e.contains(i) || e.appendChild(i);
      },
      remove() {
        i.parentNode && i.remove();
      },
      restore() {
        n != null && n.parentNode && !i.parentNode && n.parentNode.insertBefore(i, n);
      }
    });
  }
  var O = class {
    static initGlobalRegistry() {
      window.$flexillaInstances || (window.$flexillaInstances = {});
    }
    static register(e, t, n) {
      return this.initGlobalRegistry(), window.$flexillaInstances[e] || (window.$flexillaInstances[e] = []), this.getInstance(e, t) || (window.$flexillaInstances[e].push({ element: t, instance: n }), n);
    }
    static getInstance(e, t) {
      var n, r;
      return this.initGlobalRegistry(), (r = (n = window.$flexillaInstances[e]) == null ? void 0 : n.find(
        (s) => s.element === t
      )) == null ? void 0 : r.instance;
    }
    static removeInstance(e, t) {
      this.initGlobalRegistry(), window.$flexillaInstances[e] && (window.$flexillaInstances[e] = window.$flexillaInstances[e].filter(
        (n) => n.element !== t
      ));
    }
    static setup(e) {
      e.setAttribute("data-fx-component", "fx");
    }
    static initialized(e) {
      e.setAttribute("data-component-initialized", "initialized");
    }
  };
  var ue = {
    teleport: true,
    teleportMode: "move"
  };
  var k = class k2 {
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
      a(this, "subtriggerObserver");
      a(this, "triggerStrategy");
      a(this, "placement");
      a(this, "offsetDistance");
      a(this, "preventFromCloseOutside");
      a(this, "preventFromCloseInside");
      a(this, "defaultState");
      a(this, "experimentalOptions");
      a(this, "teleporter");
      a(this, "updateSubtriggerAttr", (e2, t2) => {
        t2 === "add" ? (e2.setAttribute("data-current-subtrigger", ""), e2.setAttribute("data-focus", "active")) : (e2.removeAttribute("data-current-subtrigger"), e2.removeAttribute("data-focus"));
      });
      a(this, "updateObserverFor", (e2) => {
        const t2 = S("[data-dropdown-trigger]", this.contentElement);
        for (const n2 of t2)
          e2.observe(n2, {
            attributes: true,
            attributeFilter: ["aria-expanded"]
          });
      });
      a(this, "observeEl", () => {
        this.keyObserver = new MutationObserver((e2) => {
          for (const t2 of e2)
            t2.type === "attributes" && t2.attributeName === "aria-expanded" && (t2.target.getAttribute("aria-expanded") === "true" ? this.navigationKeys.destroy() : this.contentElement.dataset.state === "open" && this.navigationKeys.make());
        }), this.updateObserverFor(this.keyObserver);
      });
      a(this, "observeSubtriggers", () => {
        this.subtriggerObserver = new MutationObserver((e2) => {
          for (const t2 of e2)
            if (t2.type === "attributes" && t2.attributeName === "aria-expanded") {
              const n2 = t2.target, r2 = n2.getAttribute("aria-expanded");
              this.updateSubtriggerAttr(n2, r2 === "true" ? "add" : "remove");
            }
        }), this.updateObserverFor(this.subtriggerObserver);
      });
      a(this, "onToggle", ({ isHidden: e2 }) => {
        var t2, n2;
        (n2 = (t2 = this.options).onToggle) == null || n2.call(t2, { isHidden: e2 });
      });
      a(this, "moveElOnInit", () => {
        this.experimentalOptions.teleport && ge(() => {
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
        this.restoreEl(), this.contentElement.focus(), this.navigationKeys.make(), this.addArrowEvent();
      });
      a(this, "beforeHide", () => {
        this.contentElement.blur(), this.navigationKeys.destroy(), this.removeArrowEvent();
      });
      a(this, "showHideOnArrow", (e2) => {
        e2.preventDefault();
        const t2 = e2.key, n2 = document.activeElement;
        if (n2 != null && n2.hasAttribute("data-dropdown-trigger"))
          switch (t2) {
            case "ArrowRight":
              n2.getAttribute("aria-expanded") !== "true" && (n2.click(), this.updateSubtriggerAttr(n2, "add"));
              break;
            case "ArrowLeft":
              n2.getAttribute("aria-expanded") === "true" && (n2.click(), this.updateSubtriggerAttr(n2, "remove"));
              break;
            default:
              return;
          }
        if (this.triggerElement.hasAttribute("data-current-subtrigger"))
          switch (t2) {
            case "ArrowLeft":
              this.triggerElement.click(), this.triggerElement.focus(), this.updateSubtriggerAttr(this.triggerElement, "remove");
              break;
            default:
              return;
          }
      });
      a(this, "addArrowEvent", () => {
        document.addEventListener("keydown", this.showHideOnArrow);
      });
      a(this, "removeArrowEvent", () => {
        document.removeEventListener("keydown", this.showHideOnArrow);
      });
      a(this, "onShow", () => {
        var e2, t2;
        z(this.contentElement, "dropdown-show", {
          isHidden: false
        }), (t2 = (e2 = this.options).onShow) == null || t2.call(e2), this.observeEl(), this.observeSubtriggers();
      });
      a(this, "onHide", () => {
        var e2, t2;
        z(this.contentElement, "dropdown-hide", {
          isHidden: true
        }), (t2 = (e2 = this.options).onHide) == null || t2.call(e2), this.moveEl(), this.triggerElement.hasAttribute("data-current-subtrigger") && this.updateSubtriggerAttr(this.triggerElement, "remove"), this.disconnectObserver();
      });
      a(this, "show", () => this.OverlayInstance.show());
      a(this, "hide", () => this.OverlayInstance.hide());
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
        this.keyObserver && this.keyObserver.disconnect(), this.subtriggerObserver && this.subtriggerObserver.disconnect();
      });
      a(this, "cleanup", () => {
        this.disconnectObserver(), this.OverlayInstance.cleanup(), O.removeInstance("dropdown", this.contentElement);
      });
      const n = typeof e == "string" ? F(e) : e;
      if (!(n instanceof HTMLElement))
        throw new Error(
          "Invalid dropdown content element: Must provide either a valid HTMLElement or a selector string that resolves to an existing HTMLElement"
        );
      if (!n.id)
        throw new Error("Dropdown content element must have an 'id' attribute for trigger association");
      this.contentElement = n;
      const r = O.getInstance("dropdown", this.contentElement);
      if (r)
        return r;
      O.setup(this.contentElement);
      const s = `[data-dropdown-trigger][data-dropdown-id=${this.contentElement.id}]`;
      if (this.triggerElement = F(s), !(this.triggerElement instanceof HTMLElement))
        throw new Error(`No valid trigger element found. Ensure a trigger element exists with attributes: data-dropdown-trigger and data-dropdown-id="${this.contentElement.id}"`);
      this.options = t, this.triggerStrategy = this.contentElement.dataset.triggerStrategy || this.options.triggerStrategy || "click", this.placement = this.contentElement.dataset.placement || this.options.placement || "bottom-start", this.offsetDistance = parseInt(`${this.contentElement.dataset.offsetDistance}`) || this.options.offsetDistance || 6, this.preventFromCloseOutside = this.contentElement.hasAttribute("data-prevent-close-outside") || this.options.preventFromCloseOutside || false, this.preventFromCloseInside = this.contentElement.hasAttribute("data-prevent-close-inside") || this.options.preventCloseFromInside || false, this.defaultState = this.contentElement.dataset.defaultState || this.options.defaultState || "close", this.experimentalOptions = Object.assign({}, ue, t.experimental), this.teleporter = fe(this.contentElement, document.body, this.experimentalOptions.teleportMode), this.OverlayInstance = new ce({
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
          beforeHide: () => {
            if (S("[data-dropdown-trigger][aria-expanded=true]", this.contentElement).length >= 1)
              return { cancelAction: true };
            this.beforeHide();
          },
          onShow: this.onShow,
          onHide: this.onHide,
          onToggle: ({ isHidden: o }) => {
            this.onToggle({ isHidden: o });
          },
          popper: this.options.popper
        }
      }), this.moveElOnInit(), this.items = S("a:not([disabled]), button:not([disabled])", this.contentElement), this.navigationKeys = me({
        containerElement: this.contentElement,
        targetChildren: this.items,
        direction: "up-down"
      }), O.register("dropdown", this.contentElement, this), O.initialized(this.contentElement);
    }
    /**
     * Initializes a single dropdown instance
     * @param dropdown - The dropdown element or selector
     * @param options - Configuration options for the dropdown
     * @returns A new Dropdown instance
     */
    static init(e, t = {}) {
      new k2(e, t);
    }
  };
  a(k, "autoInit", (e = "[data-fx-dropdown]") => {
    const t = S(e);
    for (const n of t)
      new k(n);
  });
  var K = k;

  // src/index.js
  function Dropdown(Alpine) {
    Alpine.directive("dropdown", (el, {}, { cleanup }) => {
      const dropdown_ = new K(el);
      cleanup(() => {
        dropdown_.cleanup();
      });
    });
  }
  var src_default = Dropdown;

  // builds/cdn.js
  document.addEventListener("alpine:init", () => {
    src_default(window.Alpine);
  });
})();
