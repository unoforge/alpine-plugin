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
var m = ({ navbarElement: r, onToggle: s2 }) => {
  const i = typeof r == "string" ? e(r) : r;
  if (!(i instanceof HTMLElement))
    return;
  const n2 = i.getAttribute("id"), e2 = e(`[data-nav-trigger][data-toggle-nav=${n2}]`), t = e(`[data-nav-overlay][data-navbar-id=${n2}]`), c = () => {
    const o = i.dataset.state || "close", l2 = o === "open" ? "close" : "open";
    i.setAttribute("data-state", l2), e2 && (e2.ariaExpanded = o === "open" ? "false" : "true"), t && (t.ariaHidden = "true", t.setAttribute("data-state", l2)), s2 == null || s2({ isExpanded: l2 === "open" });
  };
  e2 && e2.addEventListener("click", c);
  const a = () => {
    i.setAttribute("data-state", "close"), e2 == null || e2.setAttribute("aria-expanded", "false"), t && t.setAttribute("data-state", "close"), s2 == null || s2({ isExpanded: false });
  };
  return i.addEventListener("click", a), t instanceof HTMLElement && !t.hasAttribute("data-static-overlay") && t.addEventListener("click", a), {
    cleanup: () => {
      t instanceof HTMLElement && !t.hasAttribute("data-static-overlay") && (i.removeEventListener("click", a), e2 && e2.removeEventListener("click", c), t.removeEventListener("click", a));
    },
    close: a,
    toggle: c
  };
};

// src/index.js
function Navbar(Alpine) {
  Alpine.directive("navbar", (el, {}, { cleanup }) => {
    const nav = m({
      navbarElement: el
    });
    cleanup(() => {
      nav.cleanup();
    });
  });
}
var src_default = Navbar;

// builds/module.js
var module_default = src_default;
