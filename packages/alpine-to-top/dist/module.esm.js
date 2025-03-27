// ../../node_modules/@flexilla/utilities/dist/selector.js
var e2 = (t, o = document.body) => o.querySelector(t);

// ../../node_modules/@flexilla/utilities/dist/scroll-to-top.js
var p = ({ triggerElement: e3, initFrom: i = 300, target: s2 }) => {
  const o = typeof e3 == "string" ? e2(e3) : e3, l2 = typeof s2 == "string" ? e2(s2) : s2, c = l2 || window, n2 = () => {
    o == null || o.setAttribute("data-state", window.scrollY > i ? "visible" : "hidden");
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
export {
  module_default as default
};
