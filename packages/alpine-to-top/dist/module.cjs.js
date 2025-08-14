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

// ../../node_modules/@flexilla/utilities/dist/selector.js
var e2 = (t, o = document.body) => o.querySelector(t);

// ../../node_modules/@flexilla/utilities/dist/scroll-to-top.js
var p = ({ triggerElement: e3, initFrom: i2 = 300, target: s2 }) => {
  const o = typeof e3 == "string" ? e2(e3) : e3, l2 = typeof s2 == "string" ? e2(s2) : s2, c = l2 || window, n2 = () => {
    o == null || o.setAttribute("data-state", window.scrollY > i2 ? "visible" : "hidden");
  }, r = () => {
    c.scrollTo({ top: 0, behavior: "smooth" });
  };
  return c.addEventListener("scroll", n2), o == null || o.addEventListener("click", r), {
    cleanup: () => {
      c.removeEventListener("scroll", n2), o == null || o.removeEventListener("click", r);
    }
  };
};

// src/index.js
function Navbar(Alpine) {
  Alpine.directive("to-top", (el, {}, { cleanup }) => {
    const targetEl = el.getAttribute("data-scroll-target") || void 0;
    const initFrom = e.hasAttribute("data-scroll-from") ? Number(e.getAttribute("data-scroll-from")) : void 0;
    const scrollToT = p({
      triggerElement: el,
      target: targetEl,
      initFrom
    });
    cleanup(() => {
      scrollToT.cleanup();
    });
  });
}
var src_default = Navbar;

// builds/module.js
var module_default = src_default;
