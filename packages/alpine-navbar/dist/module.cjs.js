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
var e = (t, o = document.body) => o.querySelector(t);

// ../../node_modules/@flexilla/utilities/dist/toggler.js
var v = ({ navbarElement: d2, onToggle: i }) => {
  const e2 = typeof d2 == "string" ? e(d2) : d2;
  if (!(e2 instanceof HTMLElement)) return;
  const r = e2.getAttribute("id"), s2 = e(`[data-nav-trigger][data-toggle-nav=${r}]`), t = e(`[data-nav-overlay][data-navbar-id=${r}]`);
  if (s2 instanceof HTMLButtonElement) {
    const f2 = () => {
      const n2 = e2.dataset.state || "close", c = n2 === "open" ? "close" : "open";
      e2.setAttribute("data-state", c), s2.ariaExpanded = n2 === "open" ? "false" : "true", t && (t.ariaHidden = "true", t.setAttribute("data-state", c)), i == null || i({ isExpanded: c === "open" });
    };
    s2.addEventListener("click", f2);
    const a2 = () => {
      e2.setAttribute("data-state", "close"), s2.setAttribute("aria-expanded", "false"), t && t.setAttribute("data-state", "close"), i == null || i({ isExpanded: false });
    };
    e2.addEventListener("click", a2), t instanceof HTMLElement && !t.hasAttribute("data-static-overlay") && t.addEventListener("click", a2);
  }
};

// src/index.js
function Navbar(Alpine) {
  Alpine.directive("navbar", (el, {}, { cleanup }) => {
    v({
      navbarElement: el
    });
    cleanup(() => {
    });
  });
}
var src_default = Navbar;

// builds/module.js
var module_default = src_default;
