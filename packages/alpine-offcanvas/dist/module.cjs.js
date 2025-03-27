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

// ../../node_modules/@flexilla/offcanvas/dist/offcanvas.js
var b = Object.defineProperty;
var w = (s, t, e) => t in s ? b(s, t, { enumerable: true, configurable: true, writable: true, value: e }) : s[t] = e;
var o = (s, t, e) => w(s, typeof t != "symbol" ? t + "" : t, e);
var m = (s, t = document.body) => t.querySelector(s);
var d = (s, t = document.body) => Array.from(t.querySelectorAll(s));
var y = ({
  newElement: s,
  existingElement: t
}) => {
  if (!(s instanceof HTMLElement) || !(t instanceof HTMLElement))
    throw new Error("Both parameters must be valid HTML elements.");
  const e = t.parentElement;
  if (e)
    e.insertBefore(s, t);
  else
    throw new Error("Existing element must have a parent element.");
};
var k = ({
  element: s,
  callback: t,
  type: e,
  keysCheck: n
}) => {
  const a = getComputedStyle(s), i = a.transition;
  if (i !== "none" && i !== "" && !n.includes(i)) {
    const l = "transitionend", f = () => {
      s.removeEventListener(l, f), t();
    };
    s.addEventListener(l, f, { once: true });
  } else
    t();
};
var O = ({
  element: s,
  callback: t
}) => {
  k({
    element: s,
    callback: t,
    type: "transition",
    keysCheck: ["all 0s ease 0s", "all"]
  });
};
var v = (s, t, e) => {
  const n = new CustomEvent(t, { detail: e });
  s.dispatchEvent(n);
};
var A = (s) => {
  var t;
  return (t = s.parentElement) == null ? void 0 : t.removeChild(s);
};
var p = (s) => {
  s.setAttribute("data-state", "invisible"), O({
    element: s,
    callback() {
      A(s);
    }
  });
};
var B = (s, t) => {
  const e = s;
  if (e === "" || !e)
    return;
  const n = document.createElement("div");
  if (n.setAttribute("aria-hidden", "true"), n.setAttribute("data-state", "visible"), n.setAttribute("data-fx-offcanvas-overlay", ""), n.setAttribute("data-offcanvas-el", t), e === "")
    return;
  const a = e.split(" ");
  return e !== "" && n.classList.add(...a), n;
};
var C = (s, t, e) => {
  s.setAttribute("aria-hidden", e === "open" ? "false" : "true"), s.setAttribute("data-state", e), t || S(e);
};
var S = (s) => {
  document.body.style.overflow = s === "open" ? "hidden" : "", document.body.style.overflowY = s === "open" ? "hidden" : "auto";
};
var x = (s, t) => {
  if (s === t)
    return;
  s.setAttribute("aria-hidden", "true"), s.setAttribute("data-state", "close");
  const e = m(`[data-fx-offcanvas-overlay][data-offcanvas-el=${s.getAttribute("id")}]`, s.parentElement);
  e instanceof HTMLElement && p(e);
};
var I = (s) => {
  const t = d("[data-fx-offcanvas][data-state=open]");
  if (!(t.length <= 0))
    for (const e of t)
      x(e, s);
};
var h = class {
  static initGlobalRegistry() {
    window.$flexillaInstances || (window.$flexillaInstances = {});
  }
  static register(t, e, n) {
    return this.initGlobalRegistry(), window.$flexillaInstances[t] || (window.$flexillaInstances[t] = []), this.getInstance(t, e) || (window.$flexillaInstances[t].push({ element: e, instance: n }), n);
  }
  static getInstance(t, e) {
    var n, a;
    return this.initGlobalRegistry(), (a = (n = window.$flexillaInstances[t]) == null ? void 0 : n.find(
      (i) => i.element === e
    )) == null ? void 0 : a.instance;
  }
  static removeInstance(t, e) {
    this.initGlobalRegistry(), window.$flexillaInstances[t] && (window.$flexillaInstances[t] = window.$flexillaInstances[t].filter(
      (n) => n.element !== e
    ));
  }
};
var c = class c2 {
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
  constructor(t, e = {}) {
    o(this, "offCanvasElement");
    o(this, "offCanvasTriggers");
    o(this, "offCanvasCloseBtns");
    o(this, "allowBodyScroll");
    o(this, "staticBackdrop");
    o(this, "backdrop");
    o(this, "options");
    o(this, "closeWhenClickOutSide", (t2) => {
      const e2 = this.offCanvasElement.getAttribute("data-state") === "open", n2 = !this.offCanvasElement.contains(t2.target) && ![...this.offCanvasTriggers].includes(t2.target);
      e2 && n2 && this.closeOffCanvas();
    });
    o(this, "closeOffCanvas", () => {
      var i2, l2, f2, r2, u;
      let t2 = false;
      if (v(this.offCanvasElement, "offcanvas-before-hide", {
        offcanvasId: this.offCanvasElement.id,
        setExitAction: (g) => {
          t2 = g;
        }
      }), ((f2 = (l2 = (i2 = this.options).beforeHide) == null ? void 0 : l2.call(i2)) == null ? void 0 : f2.cancelAction) || t2)
        return;
      const n2 = this.offCanvasElement.getAttribute("id"), a2 = m(`[data-fx-offcanvas-overlay][data-offcanvas-el=${n2}]`);
      a2 instanceof HTMLElement && p(a2), C(
        this.offCanvasElement,
        this.allowBodyScroll,
        "close"
      ), document.removeEventListener("keydown", this.closeWithEsc), !this.allowBodyScroll && !a2 && document.removeEventListener("click", this.closeWhenClickOutSide), (u = (r2 = this.options).onHide) == null || u.call(r2), v(this.offCanvasElement, "offcanvas-close", { offcanvasId: this.offCanvasElement.id });
    });
    o(this, "closeWithEsc", (t2) => {
      t2.preventDefault(), t2.key === "Escape" && this.closeOffCanvas();
    });
    o(this, "changeState", () => {
      this.offCanvasElement.getAttribute("data-state") === "open" ? this.closeOffCanvas() : this.openOffCanvas();
    });
    const n = typeof t == "string" ? m(t) : t;
    if (!(n instanceof HTMLElement))
      throw new Error("Invalid Offcanvas, the provided Element is not a valid HTMLElement");
    const a = h.getInstance("offcanvas", n);
    if (a)
      return a;
    this.options = e;
    const { staticBackdrop: i, allowBodyScroll: l, backdrop: f } = this.options;
    this.offCanvasElement = n, this.setupAttributes(), this.staticBackdrop = i || n.hasAttribute("data-static-backdrop") && n.dataset.staticBackdrop !== "false" || false, this.allowBodyScroll = l || n.hasAttribute("data-allow-body-scroll") && n.dataset.allowBodyScroll !== "false" || false;
    const r = this.offCanvasElement.getAttribute("id");
    this.offCanvasTriggers = this.findOffCanvasElements("[data-offcanvas-trigger]", false, r), this.offCanvasCloseBtns = this.findOffCanvasElements("[data-offcanvas-close]", true, r, this.offCanvasElement), this.backdrop = f || this.offCanvasElement.dataset.offcanvasBackdrop || "", this.setupOffcanvas(), h.register("offcanvas", this.offCanvasElement, this);
  }
  findOffCanvasElements(t, e, n, a) {
    return e ? d(`${t}`, a) : d(`${t}[data-target=${n}]`);
  }
  setupAttributes() {
    this.offCanvasElement.hasAttribute("data-fx-offcanvas") || this.offCanvasElement.setAttribute("data-fx-offcanvas", "");
  }
  openOffCanvas() {
    var n, a, i, l;
    (a = (n = this.options).beforeShow) == null || a.call(n), I(this.offCanvasElement), C(
      this.offCanvasElement,
      this.allowBodyScroll,
      "open"
    );
    const t = this.offCanvasElement.getAttribute("id"), e = B(
      this.backdrop,
      t
    );
    e instanceof HTMLElement && (y({ newElement: e, existingElement: this.offCanvasElement }), this.staticBackdrop || e.addEventListener("click", this.closeOffCanvas)), document.addEventListener("keydown", this.closeWithEsc), (l = (i = this.options).onShow) == null || l.call(i), v(this.offCanvasElement, "offcanvas-open", { offcanvasId: this.offCanvasElement.id });
  }
  initCloseBtns() {
    for (const t of this.offCanvasCloseBtns)
      t.addEventListener("click", this.closeOffCanvas);
  }
  initTriggers() {
    for (const t of this.offCanvasTriggers)
      t.addEventListener("click", this.changeState);
  }
  setupOffcanvas() {
    this.initTriggers(), this.initCloseBtns();
  }
  /**
   * Opens the offcanvas element.
   * This method will trigger the beforeShow callback if provided,
   * show the backdrop if configured, and finally trigger the onShow callback.
   * 
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
    for (const t of this.offCanvasTriggers)
      t.removeEventListener("click", this.changeState);
    for (const t of this.offCanvasCloseBtns)
      t.removeEventListener("click", this.closeOffCanvas);
    document.removeEventListener("keydown", this.closeWithEsc), this.allowBodyScroll || document.removeEventListener("click", this.closeWhenClickOutSide), h.removeInstance("offcanvas", this.offCanvasElement);
  }
};
o(c, "autoInit", (t = "[data-fx-offcanvas]") => {
  const e = d(t);
  for (const n of e)
    new c(n);
}), /**
* Creates a new instance of Offcanvas with the given element and options.
* This is an alternative to using the constructor directly.
* 
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
o(c, "init", (t, e = {}) => new c(t, e));
var E = c;

// src/index.js
function Offcanvas(Alpine) {
  Alpine.directive("offcanvas", (el, {}, { cleanup }) => {
    const offcanvasId = el.getAttribute("id");
    if (!modalId) {
      console.error("\u274C id is required but missing on element:", el);
      return;
    }
    const offcanvas_ = new E(el);
    if (!Alpine.store("sheets")) {
      Alpine.store("sheets", {});
    }
    Alpine.store("sheets")[offcanvasId] = modal_;
    const openHandler = () => offcanvas_.open();
    const closeHandler = () => offcanvas_.close();
    document.addEventListener(`sheet:${offcanvasId}:open`, openHandler);
    document.addEventListener(`sheet:${offcanvasId}:close`, closeHandler);
    cleanup(() => {
      document.removeEventListener(`sheet:${modalId}:open`, openHandler);
      document.removeEventListener(
        `sheet:${offcanvasId}:close`,
        closeHandler
      );
      offcanvas_.cleanup();
      delete Alpine.store("sheets")[modalId];
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

// builds/module.js
var module_default = src_default;
