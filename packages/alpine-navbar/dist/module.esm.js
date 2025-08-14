// ../../node_modules/@flexilla/utilities/dist/selector.js
var e = (t, o = document.body) => o.querySelector(t);

// ../../node_modules/@flexilla/utilities/dist/toggler.js
var m = ({ navbarElement: r, onToggle: s2 }) => {
  const i2 = typeof r == "string" ? e(r) : r;
  if (!(i2 instanceof HTMLElement))
    return;
  const n2 = i2.getAttribute("id"), e2 = e(`[data-nav-trigger][data-toggle-nav=${n2}]`), t = e(`[data-nav-overlay][data-navbar-id=${n2}]`), c = () => {
    const o = i2.dataset.state || "close", l2 = o === "open" ? "close" : "open";
    i2.setAttribute("data-state", l2), e2 && (e2.ariaExpanded = o === "open" ? "false" : "true"), t && (t.ariaHidden = "true", t.setAttribute("data-state", l2)), s2 == null || s2({ isExpanded: l2 === "open" });
  };
  e2 && e2.addEventListener("click", c);
  const a = () => {
    i2.setAttribute("data-state", "close"), e2 == null || e2.setAttribute("aria-expanded", "false"), t && t.setAttribute("data-state", "close"), s2 == null || s2({ isExpanded: false });
  };
  return i2.addEventListener("click", a), t instanceof HTMLElement && !t.hasAttribute("data-static-overlay") && t.addEventListener("click", a), {
    cleanup: () => {
      t instanceof HTMLElement && !t.hasAttribute("data-static-overlay") && (i2.removeEventListener("click", a), e2 && e2.removeEventListener("click", c), t.removeEventListener("click", a));
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
export {
  module_default as default
};
