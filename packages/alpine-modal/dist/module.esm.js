// ../../node_modules/@flexilla/modal/dist/modal.js
var C = Object.defineProperty;
var x = (o, t, e) => t in o ? C(o, t, { enumerable: true, configurable: true, writable: true, value: e }) : o[t] = e;
var a = (o, t, e) => x(o, typeof t != "symbol" ? t + "" : t, e);
var r = (o, t = document.body) => t.querySelector(o);
var u = (o, t = document.body) => Array.from(t.querySelectorAll(o));
var I = ({
  newElement: o,
  existingElement: t
}) => {
  if (!(o instanceof HTMLElement) || !(t instanceof HTMLElement))
    throw new Error("Both parameters must be valid HTML elements.");
  const e = t.parentElement;
  if (e)
    e.insertBefore(o, t);
  else
    throw new Error("Existing element must have a parent element.");
};
var L = ({
  element: o,
  callback: t,
  type: e,
  keysCheck: n
}) => {
  const s = getComputedStyle(o), i = s.animation;
  if (i !== "none" && i !== "" && !n.includes(i)) {
    const l = "animationend", d = () => {
      o.removeEventListener(l, d), t();
    };
    o.addEventListener(l, d, { once: true });
  } else
    t();
};
var g = ({ element: o, callback: t }) => {
  L({
    element: o,
    callback: t,
    type: "animation",
    keysCheck: ["none 0s ease 0s 1 normal none running"]
  });
};
var v = (o, t, e) => {
  const n = new CustomEvent(t, { detail: e });
  o.dispatchEvent(n);
};
var f = (o, t, e) => {
  if (!(t instanceof HTMLElement))
    throw new Error("No modal-content found");
  o.setAttribute("aria-hidden", e === "open" ? "false" : "true"), o.setAttribute("data-state", e), t.setAttribute("data-state", e);
  const n = r("[data-modal-overlay]", o);
  n instanceof HTMLElement && n.setAttribute("data-state", e);
};
var B = (o, t, e) => {
  if (!o) {
    t || (document.body.style.overflowY = "auto");
    return;
  }
  u("[data-fx-modal][data-state=open]:not([data-allow-body-scroll=true]").filter((i) => i !== e).length === 0 && !t && (document.body.style.overflowY = "auto");
};
var E = class {
  static initGlobalRegistry() {
    window.$flexillaInstances || (window.$flexillaInstances = {});
  }
  static register(t, e, n) {
    return this.initGlobalRegistry(), window.$flexillaInstances[t] || (window.$flexillaInstances[t] = []), this.getInstance(t, e) || (window.$flexillaInstances[t].push({ element: e, instance: n }), n);
  }
  static getInstance(t, e) {
    var n, s;
    return this.initGlobalRegistry(), (s = (n = window.$flexillaInstances[t]) == null ? void 0 : n.find(
      (i) => i.element === e
    )) == null ? void 0 : s.instance;
  }
  static removeInstance(t, e) {
    this.initGlobalRegistry(), window.$flexillaInstances[t] && (window.$flexillaInstances[t] = window.$flexillaInstances[t].filter(
      (n) => n.element !== e
    ));
  }
};
var k = (o) => {
  var t;
  o instanceof HTMLElement && ((t = o.parentElement) == null || t.removeChild(o));
};
var T = ({ modalContent: o, overlayClassName: t }) => {
  const e = document.createElement("span");
  return e.setAttribute("aria-hidden", "true"), I({ newElement: e, existingElement: o }), e.classList.add(...t), e.setAttribute("data-modal-overlay", ""), e;
};
var h = class h2 {
  /**
   * Creates a new Modal instance
   * @param modal - The modal element or selector string to initialize
   * @param options - Configuration options for the modal behavior
   * @param triggerElement - Optional trigger element or selector that opens the modal
   */
  constructor(t, e = {}, n) {
    a(this, "modalElement");
    a(this, "modalId");
    a(this, "modalContent");
    a(this, "triggerButton");
    a(this, "overlayElement");
    a(this, "dispatchEventToDocument");
    a(this, "options");
    a(this, "state");
    a(this, "animationEnter");
    a(this, "animationExit");
    a(this, "animateContent");
    a(this, "hasDefaultOverlay");
    a(this, "enableStackedModals");
    a(this, "preventCloseModal");
    a(this, "isKeyDownEventRegistered");
    a(this, "closeButtons");
    a(this, "overlayClassName");
    a(this, "allowBodyScroll");
    a(this, "initAsOpen");
    a(this, "closeAll", (t2) => {
      if (this.enableStackedModals)
        return;
      const e2 = u("[data-fx-modal][data-state=open]");
      for (const n2 of e2) {
        const s2 = n2.dataset.modalId;
        if (s2 !== t2.dataset.modalId) {
          n2.blur(), r("[data-modal-overlay]", n2).setAttribute("data-state", "close");
          const l2 = r("[data-modal-content]", n2);
          f(n2, l2, "close"), document.dispatchEvent(new CustomEvent(`modal:${s2}:close`));
        }
      }
    });
    a(this, "closeModalEsc", (t2) => {
      t2.key === "Escape" && (t2.preventDefault(), this.preventCloseModal || this.hideModal());
    });
    a(this, "initModal", (t2, e2) => {
      var m2;
      if (!(t2 instanceof HTMLElement))
        throw new Error("Modal Element must be a valid element");
      const { allowBodyScroll: n2, animateContent: s2, preventCloseModal: i2, overlayClass: l2, enableStackedModals: d2 } = e2;
      this.allowBodyScroll = t2.hasAttribute("data-allow-body-scroll") && t2.getAttribute("data-allow-body-scroll") !== "false" || n2 || false, this.preventCloseModal = t2.hasAttribute("data-prevent-close-modal") && t2.getAttribute("data-prevent-close-modal") !== "false" || i2 || false, this.enableStackedModals = t2.hasAttribute("data-enable-stacked") && t2.getAttribute("data-enable-stacked") !== "false" || d2 || false, this.overlayClassName = ((m2 = t2.dataset.modalOverlay) == null ? void 0 : m2.split(" ")) || (l2 == null ? void 0 : l2.split(" ")) || "", this.isKeyDownEventRegistered = false, t2.setAttribute("data-allow-body-scroll", `${this.allowBodyScroll}`), this.closeButtons = u("[data-close-modal]", t2), this.hasDefaultOverlay = false, r("[data-modal-overlay]", t2) instanceof HTMLElement && (this.overlayElement = r("[data-modal-overlay]", t2), this.overlayElement.setAttribute("data-overlay-nature", "default"), this.hasDefaultOverlay = true), this.animateContent = s2, this.animationEnter = this.modalContent.dataset.enterAnimation || "", this.animationExit = this.modalContent.dataset.exitAnimation || "", this.modalContent.setAttribute("data-state", "close");
    });
    a(this, "closeModalOnX", (t2) => {
      t2.preventDefault(), this.hideModal();
    });
    a(this, "addEvents", () => {
      if (this.triggerButton instanceof HTMLElement && this.triggerButton.addEventListener("click", this.showModal), this.closeButtons.length > 0)
        for (const t2 of this.closeButtons)
          t2.addEventListener("click", this.closeModalOnX);
      this.dispatchEventToDocument && document.addEventListener(`modal:${this.modalId}:open`, this.showModal), this.dispatchEventToDocument && document.addEventListener(`modal:${this.modalId}:close`, this.hideModal);
    });
    a(this, "showModal", () => {
      var e2, n2, s2, i2, l2;
      if (!(!this.initAsOpen && this.modalElement.getAttribute("data-state") === "open")) {
        if (this.initAsOpen = false, this.closeAll(this.modalElement), this.overlayElement = this.hasDefaultOverlay ? this.overlayElement : T({
          modalContent: this.modalContent,
          overlayClassName: this.overlayClassName
        }), (e2 = this.overlayElement) == null || e2.setAttribute("data-state", "open"), v(this.modalElement, "modal-open", { modalId: this.modalId }), this.animateContent || this.animationEnter !== "") {
          const d2 = this.animateContent ? this.animateContent.enterAnimation : this.animationEnter;
          d2 && d2 !== "" && this.modalContent.style.setProperty("--un-modal-animation", d2), f(this.modalElement, this.modalContent, "open"), g({
            element: this.modalContent,
            callback: () => {
              this.modalContent.style.removeProperty("--un-modal-animation");
            }
          });
        } else
          f(this.modalElement, this.modalContent, "open");
        this.allowBodyScroll || (document.body.style.overflow = "hidden"), this.isKeyDownEventRegistered || (document.addEventListener("keydown", this.closeModalEsc), this.isKeyDownEventRegistered = true), this.modalElement.focus(), this.preventCloseModal || this.overlayElement.addEventListener("click", this.hideModal), (s2 = (n2 = this.options).onShow) == null || s2.call(n2), (l2 = (i2 = this.options).onToggle) == null || l2.call(i2, { isHidden: false });
      }
    });
    a(this, "hideModal", () => {
      var l2, d2, m2, y, w;
      let t2 = false;
      v(this.modalElement, "before-hide", {
        modalId: this.modalId,
        setExitAction: (c) => {
          t2 = c;
        }
      });
      const e2 = (m2 = (d2 = (l2 = this.options).beforeHide) == null ? void 0 : d2.call(l2)) == null ? void 0 : m2.cancelAction;
      if (t2 || e2)
        return;
      const n2 = () => {
        f(this.modalElement, this.modalContent, "close"), B(this.enableStackedModals || false, this.allowBodyScroll || false, this.modalElement), this.hasDefaultOverlay || k(this.overlayElement), v(this.modalElement, "modal-close", { modalId: this.modalElement.id });
      }, s2 = () => {
        var c, p, b, M;
        this.isKeyDownEventRegistered && (document.removeEventListener("keydown", this.closeModalEsc), this.isKeyDownEventRegistered = false), this.modalElement.blur(), (p = (c = this.options).onHide) == null || p.call(c), (M = (b = this.options).onToggle) == null || M.call(b, { isHidden: true });
      }, i2 = ((y = this.animateContent) == null ? void 0 : y.exitAnimation) && this.animateContent.exitAnimation !== "" || this.animationExit && this.animationExit !== "";
      if ((w = this.overlayElement) == null || w.setAttribute("data-state", "close"), this.modalContent.setAttribute("data-state", "close"), i2) {
        const c = this.animationExit ? this.animationExit : this.animateContent && this.animateContent.exitAnimation || "";
        this.modalContent.style.setProperty("--un-modal-animation", c);
      }
      g({
        element: this.modalContent,
        callback: () => {
          i2 && this.modalContent.style.removeProperty("--un-modal-animation"), n2(), s2();
        }
      });
    });
    a(this, "cleanup", () => {
      if (this.triggerButton instanceof HTMLElement && this.triggerButton.removeEventListener("click", this.showModal), this.closeButtons.length > 0)
        for (const t2 of this.closeButtons)
          t2.removeEventListener("click", this.closeModalOnX);
      !this.preventCloseModal && this.overlayElement instanceof HTMLElement && this.overlayElement.removeEventListener("click", this.hideModal), this.dispatchEventToDocument && document.removeEventListener(`modal:${this.modalId}:open`, this.showModal), this.dispatchEventToDocument && document.removeEventListener(`modal:${this.modalId}:close`, this.hideModal), E.removeInstance("modal", this.modalElement);
    });
    const s = typeof t == "string" ? r(t) : t;
    if (!(s instanceof HTMLElement))
      throw new Error("Modal element not found or invalid. Please provide a valid HTMLElement or selector.");
    this.modalElement = s, this.options = e, this.state = (e == null ? void 0 : e.defaultState) || this.modalElement.dataset.state || "close";
    const i = E.getInstance("modal", this.modalElement);
    if (i)
      return i;
    this.modalElement.hasAttribute("data-fx-modal") || this.modalElement.setAttribute("data-fx-modal", "");
    const l = r("[data-modal-content]", s);
    if (!(l instanceof HTMLElement))
      throw new Error("Modal content element not found or invalid. Please provide a valid HTMLElement or selector.");
    this.modalContent = l;
    const d = s.dataset.modalId;
    this.modalId = `${d}`;
    const m = (typeof n == "string" ? r(n) : n) || r(`[data-modal-target='${d}']`);
    this.triggerButton = m, this.initModal(this.modalElement, this.options), this.addEvents(), this.state === "open" ? (this.initAsOpen = true, this.showModal()) : this.initAsOpen = false, this.dispatchEventToDocument = this.options.dispatchEventToDocument || true, E.register("modal", this.modalElement, this);
  }
};
a(h, "autoInit", (t = "[data-fx-modal]") => {
  const e = u(t);
  for (const n of e)
    new h(n);
}), /**
* Creates and initializes a new Modal instance
*/
a(h, "init", (t, e = {}, n) => new h(t, e, n));
var A = h;

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
    const content = el.querySelector("[data-modal-content]");
    if (!content) {
      console.error(
        "\u274C data-modal-content Element is required but missing in Modal Element:",
        el
      );
      return;
    }
    const trigger = document.querySelector(
      `[data-modal-trigger][data-modal-id="${modalId}"]`
    );
    const modalInstance = new A(el, {
      dispatchEventToDocument: false
    });
    if (!Alpine.store("modals")) {
      Alpine.store("modals", {});
    }
    Alpine.store("modals")[modalId] = modalInstance;
    const showModal = () => {
      modalInstance.showModal();
    };
    const hideModal = () => {
      modalInstance.hideModal();
    };
    document.addEventListener(`modal:${modalId}:open`, showModal);
    document.addEventListener(`modal:${modalId}:close`, hideModal);
    if (trigger instanceof HTMLElement) {
      trigger.addEventListener("click", showModal);
    }
    cleanup(() => {
      modalInstance.cleanup();
      delete Alpine.store("modals")[modalId];
      if (trigger instanceof HTMLElement) {
        trigger.removeEventListener("click", showModal);
      }
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
