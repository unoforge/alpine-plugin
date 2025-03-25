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

// ../../node_modules/@flexilla/modal/dist/modal.js
var j = Object.defineProperty;
var z = (t, e, n) => e in t ? j(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n;
var c = (t, e, n) => z(t, typeof e != "symbol" ? e + "" : e, n);
var O = class {
  static initGlobalRegistry() {
    window.$flexillaInstances || (window.$flexillaInstances = {});
  }
  static register(e, n, a) {
    return this.initGlobalRegistry(), window.$flexillaInstances[e] || (window.$flexillaInstances[e] = []), this.getInstance(e, n) || (window.$flexillaInstances[e].push({ element: n, instance: a }), a);
  }
  static getInstance(e, n) {
    var a, d;
    return this.initGlobalRegistry(), (d = (a = window.$flexillaInstances[e]) == null ? void 0 : a.find(
      (s) => s.element === n
    )) == null ? void 0 : d.instance;
  }
  static removeInstance(e, n) {
    this.initGlobalRegistry(), window.$flexillaInstances[e] && (window.$flexillaInstances[e] = window.$flexillaInstances[e].filter(
      (a) => a.element !== n
    ));
  }
};
var r = (t, e = document.body) => e.querySelector(t);
var H = (t, e = document.body) => Array.from(e.querySelectorAll(t));
var J = ({
  newElement: t,
  existingElement: e
}) => {
  if (!(t instanceof HTMLElement) || !(e instanceof HTMLElement))
    throw new Error("Both parameters must be valid HTML elements.");
  const n = e.parentElement;
  if (n) n.insertBefore(t, e);
  else throw new Error("Existing element must have a parent element.");
};
var Q = ({
  element: t,
  callback: e,
  type: n,
  keysCheck: a
}) => {
  const d = getComputedStyle(t), s = d.animation;
  if (s !== "none" && s !== "" && !a.includes(s)) {
    const f = "animationend", u = () => {
      t.removeEventListener(f, u), e();
    };
    t.addEventListener(f, u, { once: true });
  } else
    e();
};
var N = ({ element: t, callback: e }) => {
  Q({
    element: t,
    callback: e,
    type: "animation",
    keysCheck: ["none 0s ease 0s 1 normal none running"]
  });
};
var B = (t, e, n) => {
  const a = new CustomEvent(e, { detail: n });
  t.dispatchEvent(a);
};
var W = (t) => {
  var e;
  t instanceof HTMLElement && ((e = t.parentElement) == null || e.removeChild(t));
};
var U = ({ modalContent: t, overlayClassName: e }) => {
  const n = document.createElement("span");
  return n.setAttribute("aria-hidden", "true"), J({ newElement: n, existingElement: t }), n.classList.add(...e), n.setAttribute("data-modal-overlay", ""), n;
};
var k = (t, e, n) => {
  if (!(e instanceof HTMLElement)) throw new Error("No modal-content found");
  t.setAttribute("aria-hidden", n === "open" ? "false" : "true"), t.setAttribute("data-state", n), e.setAttribute("data-state", n);
  const a = r("[data-modal-overlay]", t);
  a instanceof HTMLElement && a.setAttribute("data-state", n);
};
var V = (t, e, n) => {
  if (!t) {
    e || (document.body.style.overflowY = "auto");
    return;
  }
  H("[data-fx-modal][data-state=open]:not([data-allow-body-scroll=true]").filter((s) => s !== n).length === 0 && !e && (document.body.style.overflowY = "auto");
};
var Z = (t, e, n) => {
  var q;
  if (!(t instanceof HTMLElement)) throw new Error("Modal Element must be a valid element");
  const { animateContent: a, allowBodyScroll: d, preventCloseModal: s, overlayClass: f, onShow: u, onHide: h, onToggle: m, beforeHide: b, enableStackedModals: g } = n, p = d || t.hasAttribute("data-allow-body-scroll") && t.getAttribute("data-allow-body-scroll") !== "false", F = s || t.hasAttribute("data-prevent-close-modal") && t.getAttribute("data-prevent-close-modal") !== "false", C = g || t.hasAttribute("data-enable-stacked") && t.getAttribute("data-enable-stacked") !== "false", K = (f == null ? void 0 : f.split(" ")) || ((q = t.dataset.modalOverlay) == null ? void 0 : q.split(" ")) || "";
  let x = false;
  t.setAttribute("data-allow-body-scroll", `${p}`);
  const o = r("[data-modal-content]", t), L = H("[data-close-modal]", t);
  let i = null, S = false;
  if (r("[data-modal-overlay]", t) instanceof HTMLElement && (i = r("[data-modal-overlay]", t), i.setAttribute("data-overlay-nature", "default"), S = true), !(o instanceof HTMLElement)) throw new Error("Modal content element not found");
  const D = o.dataset.enterAnimation || "", P = o.dataset.exitAnimation || "";
  o.setAttribute("data-state", "close");
  const R = (l) => {
    l.preventDefault(), l.key === "Escape" && !F && A();
  }, X = (l) => {
    if (C) return;
    const w = H("[data-fx-modal][data-state=open]");
    for (const y of w)
      if (y !== l) {
        const M = r("[data-modal-overlay]", y);
        M.setAttribute("data-state", "close");
        const I = r("[data-modal-content]", y), E = M.getAttribute("data-overlay-nature") === "default";
        k(y, I, "close"), E || W(M);
      }
  }, T = () => {
    if (t.getAttribute("data-state") !== "open") {
      if (X(t), i = S ? i : U({
        modalContent: o,
        overlayClassName: K
      }), i == null || i.setAttribute("data-state", "open"), B(t, "modal-open", { modalId: t.id }), a || D !== "") {
        const w = a ? a.enterAnimation : D;
        w !== "" && o.style.setProperty("--un-modal-animation", w), k(t, o, "open"), N({
          element: o,
          callback: () => {
            o.style.removeProperty("--un-modal-animation");
          }
        });
      } else
        k(t, o, "open");
      p || (document.body.style.overflow = "hidden"), x || (document.addEventListener("keydown", R), x = true), t.focus(), s || i.addEventListener("click", A), u == null || u(), m == null || m({ isHidden: false });
    }
  }, A = () => {
    var E;
    let l = false;
    B(t, "before-hide", {
      modalId: t.id,
      setExitAction: ($) => {
        l = $;
      }
    });
    const w = (E = b == null ? void 0 : b()) == null ? void 0 : E.cancelAction;
    if (l || w) return;
    const y = () => {
      k(t, o, "close"), V(C, p, t), S || W(i), B(t, "modal-close", { modalId: t.id });
    }, M = () => {
      x && (document.removeEventListener("keydown", R), x = false), t.blur(), h == null || h(), m == null || m({ isHidden: true });
    }, I = (a == null ? void 0 : a.exitAnimation) && a.exitAnimation !== "" || P !== "";
    if (i == null || i.setAttribute("data-state", "close"), o.setAttribute("data-state", "close"), I) {
      const $ = a ? a.exitAnimation || "" : P;
      o.style.setProperty("--un-modal-animation", $);
    }
    N({
      element: o,
      callback: () => {
        I && o.style.removeProperty("--un-modal-animation"), y(), M();
      }
    });
  }, G = (l) => {
    l.preventDefault(), A();
  };
  return { autoInitModal: () => {
    if (e instanceof HTMLElement && e.addEventListener("click", T), L.length > 0)
      for (const l of L)
        l.addEventListener("click", G);
  }, showModal: T, hideModal: A, isHidden: () => t.dataset.state === "close", cleanup: () => {
    if (e instanceof HTMLElement && e.removeEventListener("click", T), L.length > 0)
      for (const l of L)
        l.removeEventListener("click", G);
    !s && i instanceof HTMLElement && i.removeEventListener("click", A), O.removeInstance("modal", t);
  } };
};
var v = class v2 {
  /**
   * Creates a new Modal instance
   * @param modal - The modal element or selector string to initialize
   * @param options - Configuration options for the modal behavior
   * @param triggerElement - Optional trigger element or selector that opens the modal
   * @throws {Error} When the provided modal element is invalid or cannot be found
   */
  constructor(e, n = {}, a) {
    c(this, "modalElement");
    c(this, "showModal");
    c(this, "hideModal");
    c(this, "cleanup");
    c(this, "isHidden");
    c(this, "options");
    c(this, "state");
    const d = typeof e == "string" ? r(e) : e;
    if (!(d instanceof HTMLElement)) throw new Error("Modal element not found or invalid. Please provide a valid HTMLElement or selector.");
    this.modalElement = d, this.options = n, this.state = (n == null ? void 0 : n.defaultState) || this.modalElement.dataset.state || "close";
    const s = O.getInstance("modal", this.modalElement);
    if (s)
      return s;
    this.modalElement.hasAttribute("data-fx-modal") || this.modalElement.setAttribute("data-fx-modal", "");
    const f = d.dataset.modalId, u = (typeof a == "string" ? r(a) : a) || r(`[data-modal-target='${f}']`), { showModal: h, hideModal: m, autoInitModal: b, isHidden: g, cleanup: p } = Z(d, u, this.options);
    this.state === "open" && h(), b(), this.showModal = h, this.hideModal = m, this.isHidden = g, this.cleanup = p, O.register("modal", this.modalElement, this);
  }
};
c(v, "autoInit", (e = "[data-fx-modal]") => {
  const n = H(e);
  for (const a of n) new v(a);
}), /**
* Creates and initializes a new Modal instance
* @param modal - The modal element or selector string
* @param options - Configuration options for the modal
* @param triggerElement - Optional trigger element or selector
* @returns {Modal} A new Modal instance
* 
* @example
* ```typescript
* const modal = Modal.init('#myModal', {
*   defaultState: 'open',
*   allowBodyScroll: true
* });
* ```
*/
c(v, "init", (e, n = {}, a) => new v(e, n, a));
var Y = v;

// src/index.js
function Modal(Alpine) {
  Alpine.directive("modal", (el, {}, { cleanup }) => {
    const modal_ = new Y(el);
    cleanup(() => {
      modal_.cleanup();
    });
  });
}
var src_default = Modal;

// builds/module.js
var module_default = src_default;
