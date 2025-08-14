// ../../node_modules/@flexilla/modal/dist/modal.js
var w = Object.defineProperty;
var b = (n, t, e) => t in n ? w(n, t, { enumerable: true, configurable: true, writable: true, value: e }) : n[t] = e;
var i = (n, t, e) => b(n, typeof t != "symbol" ? t + "" : t, e);
var r = (n, t = document.body) => t.querySelector(n);
var u = (n, t = document.body) => Array.from(t.querySelectorAll(n));
var M = ({
  newElement: n,
  existingElement: t
}) => {
  if (!(n instanceof HTMLElement) || !(t instanceof HTMLElement))
    throw new Error("Both parameters must be valid HTML elements.");
  const e = t.parentElement;
  if (e)
    e.insertBefore(n, t);
  else
    throw new Error("Existing element must have a parent element.");
};
var A = ({
  element: n,
  callback: t,
  type: e,
  keysCheck: o
}) => {
  const a = getComputedStyle(n), s = a.animation;
  if (s !== "none" && s !== "" && !o.includes(s)) {
    const l = "animationend", d = () => {
      n.removeEventListener(l, d), t();
    };
    n.addEventListener(l, d, { once: true });
  } else
    t();
};
var p = ({ element: n, callback: t }) => {
  A({
    element: n,
    callback: t,
    type: "animation",
    keysCheck: ["none 0s ease 0s 1 normal none running"]
  });
};
var E = (n, t, e) => {
  const o = new CustomEvent(t, { detail: e });
  n.dispatchEvent(o);
};
function g(n) {
  const t = () => {
    document.querySelector(
      "[data-fx-component]:not([data-component-initialized])"
    ) ? requestAnimationFrame(t) : n();
  };
  t();
}
function C(n, t, e = "move") {
  if (!(n instanceof HTMLElement))
    throw new Error("Source element must be an HTMLElement");
  if (!(t instanceof HTMLElement))
    throw new Error("Target element must be an HTMLElement");
  if (!["move", "detachable"].includes(e))
    throw new Error(`Invalid teleport mode: ${e}. Must be "move" or "detachable".`);
  let o = document.createComment("teleporter-placeholder");
  const a = n.parentNode;
  return a ? a.insertBefore(o, n) : console.warn("Element has no parent; placeholder not inserted."), e === "move" ? (n.parentNode && t.appendChild(n), {
    append() {
      n.parentNode !== t && t.appendChild(n);
    },
    remove() {
      o != null && o.parentNode && n.parentNode && o.parentNode.insertBefore(n, o);
    },
    restore() {
      o != null && o.parentNode && n.parentNode !== a && o.parentNode.insertBefore(n, o);
    }
  }) : (n.parentNode && t.appendChild(n), {
    append() {
      t.contains(n) || t.appendChild(n);
    },
    remove() {
      n.parentNode && n.remove();
    },
    restore() {
      o != null && o.parentNode && !n.parentNode && o.parentNode.insertBefore(n, o);
    }
  });
}
var v = (n, t, e) => {
  if (!(t instanceof HTMLElement))
    throw new Error("No modal-content found");
  n.setAttribute("aria-hidden", e === "open" ? "false" : "true"), n.setAttribute("data-state", e), t.setAttribute("data-state", e);
  const o = r("[data-modal-overlay]", n);
  o instanceof HTMLElement && o.setAttribute("data-state", e);
};
var L = (n, t, e) => {
  if (!n) {
    t || (document.body.style.overflowY = "auto");
    return;
  }
  u("[data-fx-modal][data-state=open]:not([data-allow-body-scroll=true]").filter((s) => s !== e).length === 0 && !t && (document.body.style.overflowY = "auto");
};
var c = class {
  static initGlobalRegistry() {
    window.$flexillaInstances || (window.$flexillaInstances = {});
  }
  static register(t, e, o) {
    return this.initGlobalRegistry(), window.$flexillaInstances[t] || (window.$flexillaInstances[t] = []), this.getInstance(t, e) || (window.$flexillaInstances[t].push({ element: e, instance: o }), o);
  }
  static getInstance(t, e) {
    var o, a;
    return this.initGlobalRegistry(), (a = (o = window.$flexillaInstances[t]) == null ? void 0 : o.find(
      (s) => s.element === e
    )) == null ? void 0 : a.instance;
  }
  static removeInstance(t, e) {
    this.initGlobalRegistry(), window.$flexillaInstances[t] && (window.$flexillaInstances[t] = window.$flexillaInstances[t].filter(
      (o) => o.element !== e
    ));
  }
  static setup(t) {
    t.setAttribute("data-fx-component", "fx");
  }
  static initialized(t) {
    t.setAttribute("data-component-initialized", "initialized");
  }
};
var x = (n) => {
  var t;
  n instanceof HTMLElement && ((t = n.parentElement) == null || t.removeChild(n));
};
var T = ({ modalContent: n, overlayClassName: t }) => {
  const e = document.createElement("span");
  return e.setAttribute("aria-hidden", "true"), M({ newElement: e, existingElement: n }), e.classList.add(...t), e.setAttribute("data-modal-overlay", ""), e;
};
var m = class m2 {
  /**
   * Creates a new Modal instance
   * @param modal - The modal element or selector string to initialize
   * @param options - Configuration options for the modal behavior
   * @param triggerElements - Optional trigger elements or selectors that open the modal
   */
  constructor(t, e = {}, o) {
    i(this, "modalElement");
    i(this, "modalId");
    i(this, "modalContent");
    i(this, "triggerButtons", []);
    i(this, "overlayElement");
    i(this, "dispatchEventToDocument");
    i(this, "options");
    i(this, "state");
    i(this, "animationEnter");
    i(this, "animationExit");
    i(this, "animateContent");
    i(this, "hasDefaultOverlay");
    i(this, "enableStackedModals");
    i(this, "preventCloseModal");
    i(this, "isKeyDownEventRegistered");
    i(this, "closeButtons");
    i(this, "overlayClassName");
    i(this, "allowBodyScroll");
    i(this, "initAsOpen");
    i(this, "teleporter");
    i(this, "moveElOnInit", () => {
      g(() => {
        this.teleporter.append();
      });
    });
    i(this, "closeAll", (t2) => {
      if (this.enableStackedModals)
        return;
      const e2 = u("[data-fx-modal][data-state=open]");
      for (const o2 of e2) {
        const a2 = o2.dataset.modalId;
        if (a2 !== t2.dataset.modalId) {
          o2.blur(), r("[data-modal-overlay]", o2).setAttribute("data-state", "close");
          const l2 = r("[data-modal-content]", o2);
          v(o2, l2, "close"), document.dispatchEvent(new CustomEvent(`modal:${a2}:close`));
        }
      }
    });
    i(this, "closeModalEsc", (t2) => {
      t2.key === "Escape" && (t2.preventDefault(), this.preventCloseModal || this.hideModal());
    });
    i(this, "initModal", (t2, e2) => {
      var h;
      if (!(t2 instanceof HTMLDialogElement))
        throw new Error("Modal Element must be a valid HTMLDialog Element");
      const { allowBodyScroll: o2, animateContent: a2, preventCloseModal: s2, overlayClass: l2, enableStackedModals: d2 } = e2;
      this.allowBodyScroll = t2.hasAttribute("data-allow-body-scroll") && t2.getAttribute("data-allow-body-scroll") !== "false" || o2 || false, this.preventCloseModal = t2.hasAttribute("data-prevent-close-modal") && t2.getAttribute("data-prevent-close-modal") !== "false" || s2 || false, this.enableStackedModals = t2.hasAttribute("data-enable-stacked") && t2.getAttribute("data-enable-stacked") !== "false" || d2 || false, this.overlayClassName = ((h = t2.dataset.modalOverlay) == null ? void 0 : h.split(" ")) || (l2 == null ? void 0 : l2.split(" ")) || "", this.isKeyDownEventRegistered = false, t2.setAttribute("data-allow-body-scroll", `${this.allowBodyScroll}`), this.closeButtons = u("[data-close-modal]", t2), this.hasDefaultOverlay = false, r("[data-modal-overlay]", t2) instanceof HTMLElement && (this.overlayElement = r("[data-modal-overlay]", t2), this.overlayElement.setAttribute("data-overlay-nature", "default"), this.hasDefaultOverlay = true), this.animateContent = a2, this.animationEnter = this.modalContent.dataset.enterAnimation || "", this.animationExit = this.modalContent.dataset.exitAnimation || "", this.overlayElement && this.overlayElement.setAttribute("data-state", "close"), this.addEvents();
    });
    i(this, "closeModalOnX", (t2) => {
      t2.preventDefault(), this.hideModal();
    });
    i(this, "addEvents", () => {
      for (const t2 of this.triggerButtons)
        t2.addEventListener("click", this.showModal);
      if (this.closeButtons.length > 0)
        for (const t2 of this.closeButtons)
          t2.addEventListener("click", this.closeModalOnX);
      this.dispatchEventToDocument && document.addEventListener(`modal:${this.modalId}:open`, this.showModal), this.dispatchEventToDocument && document.addEventListener(`modal:${this.modalId}:close`, this.hideModal);
    });
    i(this, "showModal", () => {
      var e2, o2, a2, s2, l2;
      if (!(!this.initAsOpen && this.modalElement.getAttribute("data-state") === "open")) {
        if (this.initAsOpen = false, this.closeAll(this.modalElement), this.overlayElement = this.hasDefaultOverlay ? this.overlayElement : T({
          modalContent: this.modalContent,
          overlayClassName: this.overlayClassName
        }), (e2 = this.overlayElement) == null || e2.setAttribute("data-state", "open"), E(this.modalElement, "modal-open", { modalId: this.modalId }), this.animateContent || this.animationEnter !== "") {
          const d2 = this.animateContent ? this.animateContent.enterAnimation : this.animationEnter;
          d2 && d2 !== "" && this.modalContent.style.setProperty("--un-modal-animation", d2), v(this.modalElement, this.modalContent, "open"), p({
            element: this.modalContent,
            callback: () => {
              this.modalContent.style.removeProperty("--un-modal-animation");
            }
          });
        } else
          v(this.modalElement, this.modalContent, "open");
        this.allowBodyScroll || (document.body.style.overflow = "hidden"), this.isKeyDownEventRegistered || (document.addEventListener("keydown", this.closeModalEsc), this.isKeyDownEventRegistered = true), this.modalContent.focus(), this.preventCloseModal || this.overlayElement.addEventListener("click", this.hideModal), (a2 = (o2 = this.options).onShow) == null || a2.call(o2), (l2 = (s2 = this.options).onToggle) == null || l2.call(s2, { isHidden: false }), this.modalElement.showModal();
      }
    });
    i(this, "closeModal", () => {
      this.modalElement.setAttribute("aria-hidden", "true"), this.modalElement.setAttribute("data-state", "close"), this.modalElement.blur(), L(this.enableStackedModals || false, this.allowBodyScroll || false, this.modalElement), this.hasDefaultOverlay || x(this.overlayElement), E(this.modalElement, "modal-close", { modalId: this.modalElement.id });
    });
    i(this, "closeLastAction", () => {
      var t2, e2, o2, a2;
      this.isKeyDownEventRegistered && (document.removeEventListener("keydown", this.closeModalEsc), this.isKeyDownEventRegistered = false), this.modalElement.blur(), (e2 = (t2 = this.options).onHide) == null || e2.call(t2), (a2 = (o2 = this.options).onToggle) == null || a2.call(o2, { isHidden: true });
    });
    i(this, "hideModal", () => {
      var a2, s2, l2, d2, h;
      let t2 = false;
      E(this.modalElement, "before-hide", {
        modalId: this.modalId,
        setExitAction: (f) => {
          t2 = f;
        }
      });
      const e2 = (l2 = (s2 = (a2 = this.options).beforeHide) == null ? void 0 : s2.call(a2)) == null ? void 0 : l2.cancelAction;
      if (t2 || e2)
        return;
      const o2 = ((d2 = this.animateContent) == null ? void 0 : d2.exitAnimation) && this.animateContent.exitAnimation !== "" || this.animationExit && this.animationExit !== "";
      if ((h = this.overlayElement) == null || h.setAttribute("data-state", "close"), this.modalContent.setAttribute("data-state", "close"), o2) {
        const f = this.animationExit ? this.animationExit : this.animateContent && this.animateContent.exitAnimation || "";
        this.modalContent.style.setProperty("--un-modal-animation", f);
      }
      p({
        element: this.modalContent,
        callback: () => {
          o2 && this.modalContent.style.removeProperty("--un-modal-animation"), this.closeModal(), this.closeLastAction(), document.activeElement instanceof HTMLElement && document.activeElement.blur(), this.modalElement.close("modal-closed");
        }
      });
    });
    i(this, "cleanup", () => {
      for (const t2 of this.triggerButtons)
        t2.removeEventListener("click", this.showModal);
      if (this.closeButtons.length > 0)
        for (const t2 of this.closeButtons)
          t2.removeEventListener("click", this.closeModalOnX);
      !this.preventCloseModal && this.overlayElement instanceof HTMLElement && this.overlayElement.removeEventListener("click", this.hideModal), this.dispatchEventToDocument && document.removeEventListener(`modal:${this.modalId}:open`, this.showModal), this.dispatchEventToDocument && document.removeEventListener(`modal:${this.modalId}:close`, this.hideModal), c.removeInstance("modal", this.modalElement);
    });
    i(this, "setOptions", ({ state: t2, allowBodyscroll: e2 }) => {
      t2 && (this.state = t2), e2 !== void 0 && (this.allowBodyScroll = e2), this.state === "open" ? this.showModal() : this.state === "close" && this.hideModal();
    });
    const a = typeof t == "string" ? r(t) : t;
    if (!(a instanceof HTMLDialogElement))
      throw new Error("Modal element not found or invalid. Please provide a valid HTMLDialogElement or selector.");
    this.modalElement = a, this.options = e, this.state = (e == null ? void 0 : e.defaultState) || this.modalElement.dataset.state || "close";
    const s = c.getInstance("modal", this.modalElement);
    if (s)
      return s;
    this.modalElement.hasAttribute("data-fx-modal") || this.modalElement.setAttribute("data-fx-modal", "");
    const l = r("[data-modal-content]", a);
    if (!(l instanceof HTMLElement))
      throw new Error("Modal content element not found or invalid. Please provide a valid HTMLElement or selector.");
    c.setup(this.modalElement), this.modalContent = l;
    const d = a.dataset.modalId;
    this.modalId = `${d}`, this.teleporter = C(this.modalElement, document.body, "move"), this.initializeTriggers(o, d), this.dispatchEventToDocument = this.options.dispatchEventToDocument || true, this.initModal(this.modalElement, this.options), this.state === "open" ? (this.initAsOpen = true, this.showModal()) : (this.initAsOpen = false, this.modalElement.blur(), this.modalContent.setAttribute("data-state", "close"), this.modalElement.setAttribute("aria-hidden", "true"), this.modalElement.setAttribute("data-state", "close")), this.moveElOnInit(), c.register("modal", this.modalElement, this), c.initialized(this.modalElement);
  }
  initializeTriggers(t, e) {
    if (!t && e) {
      const a = u(`[data-modal-target='${e}'], [data-modal-trigger][data-modal-id='${e}']`);
      this.triggerButtons = a;
      return;
    }
    if (!t)
      return;
    const o = Array.isArray(t) ? t : [t];
    this.triggerButtons = o.map((a) => {
      if (typeof a == "string") {
        const s = r(a);
        if (!(s instanceof HTMLElement))
          throw new Error(`Trigger element not found: ${a}`);
        return s;
      }
      if (!(a instanceof HTMLElement))
        throw new Error("Invalid trigger element provided");
      return a;
    });
  }
};
i(m, "autoInit", (t = "[data-fx-modal]") => {
  const e = u(t);
  for (const o of e)
    new m(o);
}), /**
* Creates and initializes a new Modal instance
*/
i(m, "init", (t, e = {}, o) => new m(t, e, o));
var y = m;

// src/index.js
function Modal(Alpine) {
  Alpine.directive("modal", (el, {}, { cleanup }) => {
    const modalId = el.getAttribute("data-modal-id");
    if (!modalId) {
      console.error(
        "\u274C data-modal-id is required but missing on element:",
        el
      );
      return;
    }
    if (!(el instanceof HTMLDialogElement)) {
      console.error(
        "\u274C x-modal must be used only on an HTMLDialogElement:",
        el
      );
      return;
    }
    const content = el.querySelector("[data-modal-content]");
    if (!content) {
      console.error(
        "\u274C data-modal-content Element is required but missing in Modal Element:",
        el
      );
      return;
    }
    const modalInstance = new y(el, {
      dispatchEventToDocument: false
    });
    if (!Alpine.store("modals")) {
      Alpine.store("modals", {});
    }
    Alpine.store("modals")[modalId] = modalInstance;
    const showModal = () => modalInstance.showModal();
    const hideModal = () => modalInstance.hideModal();
    document.addEventListener(`modal:${modalId}:open`, showModal);
    document.addEventListener(`modal:${modalId}:close`, hideModal);
    cleanup(() => {
      modalInstance.cleanup();
      delete Alpine.store("modals")[modalId];
      document.removeEventListener(`modal:${modalId}:open`, showModal);
      document.removeEventListener(`modal:${modalId}:close`, hideModal);
    });
  });
  Alpine.magic("modal", () => (id) => {
    if (!Alpine.store("modals")) {
      console.warn("\u26A0\uFE0F Alpine store for modals is not initialized.");
      return null;
    }
    if (!Alpine.store("modals")[id]) {
      console.warn(`\u26A0\uFE0F No modal instance found for ID: ${id}`);
      return null;
    }
    return Alpine.store("modals")[id];
  });
}
var src_default = Modal;

// builds/module.js
var module_default = src_default;
export {
  module_default as default
};
