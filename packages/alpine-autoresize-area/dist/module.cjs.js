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

// ../../node_modules/@flexilla/auto-resize-area/dist/auto-resize-area.js
var c = Object.defineProperty;
var d = (a, e, t) => e in a ? c(a, e, { enumerable: true, configurable: true, writable: true, value: t }) : a[e] = t;
var n = (a, e, t) => d(a, typeof e != "symbol" ? e + "" : e, t);
var o = class {
  static initGlobalRegistry() {
    window.$flexillaInstances || (window.$flexillaInstances = {});
  }
  static register(e, t, i) {
    return this.initGlobalRegistry(), window.$flexillaInstances[e] || (window.$flexillaInstances[e] = []), this.getInstance(e, t) || (window.$flexillaInstances[e].push({ element: t, instance: i }), i);
  }
  static getInstance(e, t) {
    var i, s;
    return this.initGlobalRegistry(), (s = (i = window.$flexillaInstances[e]) == null ? void 0 : i.find(
      (l) => l.element === t
    )) == null ? void 0 : s.instance;
  }
  static removeInstance(e, t) {
    this.initGlobalRegistry(), window.$flexillaInstances[e] && (window.$flexillaInstances[e] = window.$flexillaInstances[e].filter(
      (i) => i.element !== t
    ));
  }
};
var r = class r2 {
  /**
   * Creates an instance of AutoResizableTextArea.
   * @param {string | HTMLTextAreaElement} textarea - The textarea element or a selector string to find it.
   * @param {number} [minHeight] - The minimum height in pixels (default: 20).
   * @param {number} [maxHeight] - The maximum height in pixels (default: 500).
   * @throws {Error} If the provided element is not a valid textarea or cannot be found.
   * 
   * @example
   * // Using with an element reference
   * const textarea = document.querySelector('textarea');
   * new AutoResizableTextArea(textarea);
   * 
   * // Using with a selector string
   * new AutoResizableTextArea('#my-textarea', 50, 300);
   */
  constructor(e, t, i) {
    n(this, "textareaElement");
    n(this, "minHeight");
    n(this, "maxHeight");
    n(this, "boundAutoresize");
    n(this, "debouncedResize");
    n(this, "cleanup", () => {
      this.textareaElement && (this.textareaElement.removeEventListener("input", this.boundAutoresize), window.removeEventListener("resize", this.debouncedResize), o.removeInstance("auto-resize-area", this.textareaElement), this.debouncedResize && clearTimeout(this.debouncedResize), this.boundAutoresize = null, this.debouncedResize = null, this.textareaElement = null, this.minHeight = null, this.maxHeight = null);
    });
    if (this.textareaElement = typeof e == "string" ? document.querySelector(`${e}`) : e, !(this.textareaElement instanceof HTMLTextAreaElement))
      throw new Error(`Invalid textarea element: The provided ${typeof e == "string" ? 'selector "' + e + '"' : "element"} does not reference a valid HTMLTextAreaElement`);
    const s = o.getInstance("auto-resize-area", this.textareaElement);
    if (s)
      return s;
    this.minHeight = Number(this.textareaElement.getAttribute("data-min-height")) || t || 20, this.maxHeight = Number(this.textareaElement.getAttribute("data-max-height")) || i || 500, this.boundAutoresize = this.autoresizeTextarea.bind(this), this.debouncedResize = this.debounce(this.boundAutoresize, 100), this.autoresizeTextarea(), this.textareaElement.addEventListener("input", this.boundAutoresize, false), window.addEventListener("resize", this.debouncedResize), o.register("auto-resize-area", this.textareaElement, this);
  }
  /**
   * Adjusts the height of the textarea based on its content.
   * @private
   */
  autoresizeTextarea() {
    this.textareaElement.style.height = "auto", this.textareaElement.style.height = `${this.textareaElement.scrollHeight}px`;
    const e = Math.min(
      Math.max(this.textareaElement.scrollHeight, this.minHeight),
      this.maxHeight
    );
    this.textareaElement.style.height = `${e}px`;
  }
  debounce(e, t) {
    let i;
    return function(...l) {
      const u = () => {
        clearTimeout(i), e(...l);
      };
      clearTimeout(i), i = setTimeout(u, t);
    };
  }
  /**
   * Automatically initializes auto-resize functionality for all matching textarea elements.
   * @static
   * @param {string} [selector='[data-fx-autoresize]'] - The CSS selector to find textarea elements.
   * 
   * @example
   * // Initialize all textareas with data-fx-autoresize attribute
   * AutoResizableTextArea.autoInit();
   * 
   * // Initialize textareas with custom selector
   * AutoResizableTextArea.autoInit('.auto-resize-textarea');
   */
  static autoInit(e = "[data-fx-autoresize]") {
    const t = Array.from(document.querySelectorAll(e));
    if (t.length > 0)
      for (const i of t)
        new r2(i);
  }
};
n(r, "init", (e) => new r(e));
var h = r;

// src/index.js
function AutoResizeTextArea(Alpine) {
  Alpine.directive("auto-resize-area", (el, {}, { cleanup }) => {
    const tabs_ = new h(el);
    cleanup(() => {
      tabs_.cleanup();
    });
  });
}
var src_default = AutoResizeTextArea;

// builds/module.js
var module_default = src_default;
