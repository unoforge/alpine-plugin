(() => {
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

  // builds/cdn.js
  document.addEventListener("alpine:init", () => {
    src_default(window.Alpine);
  });
})();
