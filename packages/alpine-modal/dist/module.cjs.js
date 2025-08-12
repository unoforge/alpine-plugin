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
var w = Object.defineProperty;
var b = (o, t, e) => t in o ? w(o, t, { enumerable: true, configurable: true, writable: true, value: e }) : o[t] = e;
var s = (o, t, e) => b(o, typeof t != "symbol" ? t + "" : t, e);
var r = (o, t = document.body) => t.querySelector(o);
var c = (o, t = document.body) => Array.from(t.querySelectorAll(o));
var M = ({
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
var g = ({
  element: o,
  callback: t,
  type: e,
  keysCheck: n
}) => {
  const a = getComputedStyle(o), i = a.animation;
  if (i !== "none" && i !== "" && !n.includes(i)) {
    const l = "animationend", d = () => {
      o.removeEventListener(l, d), t();
    };
    o.addEventListener(l, d, { once: true });
  } else
    t();
};
var p = ({ element: o, callback: t }) => {
  g({
    element: o,
    callback: t,
    type: "animation",
    keysCheck: ["none 0s ease 0s 1 normal none running"]
  });
};
var f = (o, t, e) => {
  const n = new CustomEvent(t, { detail: e });
  o.dispatchEvent(n);
};
function A(o, t, e = "move") {
  if (!(o instanceof HTMLElement))
    throw new Error("Source element must be an HTMLElement");
  if (!(t instanceof HTMLElement))
    throw new Error("Target element must be an HTMLElement");
  if (!["move", "detachable"].includes(e))
    throw new Error(`Invalid teleport mode: ${e}. Must be "move" or "detachable".`);
  let n = document.createComment("teleporter-placeholder");
  const a = o.parentNode;
  return a ? a.insertBefore(n, o) : console.warn("Element has no parent; placeholder not inserted."), e === "move" ? (o.parentNode && t.appendChild(o), {
    append() {
      o.parentNode !== t && t.appendChild(o);
    },
    remove() {
      n != null && n.parentNode && o.parentNode && n.parentNode.insertBefore(o, n);
    },
    restore() {
      n != null && n.parentNode && o.parentNode !== a && n.parentNode.insertBefore(o, n);
    }
  }) : (o.parentNode && t.appendChild(o), {
    append() {
      t.contains(o) || t.appendChild(o);
    },
    remove() {
      o.parentNode && o.remove();
    },
    restore() {
      n != null && n.parentNode && !o.parentNode && n.parentNode.insertBefore(o, n);
    }
  });
}
var E = (o, t, e) => {
  if (!(t instanceof HTMLElement))
    throw new Error("No modal-content found");
  o.setAttribute("aria-hidden", e === "open" ? "false" : "true"), o.setAttribute("data-state", e), t.setAttribute("data-state", e);
  const n = r("[data-modal-overlay]", o);
  n instanceof HTMLElement && n.setAttribute("data-state", e);
};
var C = (o, t, e) => {
  if (!o) {
    t || (document.body.style.overflowY = "auto");
    return;
  }
  c("[data-fx-modal][data-state=open]:not([data-allow-body-scroll=true]").filter((i) => i !== e).length === 0 && !t && (document.body.style.overflowY = "auto");
};
var v = class {
  static initGlobalRegistry() {
    window.$flexillaInstances || (window.$flexillaInstances = {});
  }
  static register(t, e, n) {
    return this.initGlobalRegistry(), window.$flexillaInstances[t] || (window.$flexillaInstances[t] = []), this.getInstance(t, e) || (window.$flexillaInstances[t].push({ element: e, instance: n }), n);
  }
  static getInstance(t, e) {
    var n, a;
    return this.initGlobalRegistry(), (a = (n = window.$flexillaInstances[t]) == null ? void 0 : n.find(
      (i) => i.element === e
    )) == null ? void 0 : a.instance;
  }
  static removeInstance(t, e) {
    this.initGlobalRegistry(), window.$flexillaInstances[t] && (window.$flexillaInstances[t] = window.$flexillaInstances[t].filter(
      (n) => n.element !== e
    ));
  }
};
var L = (o) => {
  var t;
  o instanceof HTMLElement && ((t = o.parentElement) == null || t.removeChild(o));
};
var T = ({ modalContent: o, overlayClassName: t }) => {
  const e = document.createElement("span");
  return e.setAttribute("aria-hidden", "true"), M({ newElement: e, existingElement: o }), e.classList.add(...t), e.setAttribute("data-modal-overlay", ""), e;
};
var m = class m2 {
  /**
   * Creates a new Modal instance
   * @param modal - The modal element or selector string to initialize
   * @param options - Configuration options for the modal behavior
   * @param triggerElements - Optional trigger elements or selectors that open the modal
   */
  constructor(t, e = {}, n) {
    s(this, "modalElement");
    s(this, "modalId");
    s(this, "modalContent");
    s(this, "triggerButtons", []);
    s(this, "overlayElement");
    s(this, "dispatchEventToDocument");
    s(this, "options");
    s(this, "state");
    s(this, "animationEnter");
    s(this, "animationExit");
    s(this, "animateContent");
    s(this, "hasDefaultOverlay");
    s(this, "enableStackedModals");
    s(this, "preventCloseModal");
    s(this, "isKeyDownEventRegistered");
    s(this, "closeButtons");
    s(this, "overlayClassName");
    s(this, "allowBodyScroll");
    s(this, "initAsOpen");
    s(this, "teleporter");
    s(this, "moveElOnInit", () => {
      this.teleporter.append();
    });
    s(this, "closeAll", (t2) => {
      if (this.enableStackedModals)
        return;
      const e2 = c("[data-fx-modal][data-state=open]");
      for (const n2 of e2) {
        const a2 = n2.dataset.modalId;
        if (a2 !== t2.dataset.modalId) {
          n2.blur(), r("[data-modal-overlay]", n2).setAttribute("data-state", "close");
          const l2 = r("[data-modal-content]", n2);
          E(n2, l2, "close"), document.dispatchEvent(new CustomEvent(`modal:${a2}:close`));
        }
      }
    });
    s(this, "closeModalEsc", (t2) => {
      t2.key === "Escape" && (t2.preventDefault(), this.preventCloseModal || this.hideModal());
    });
    s(this, "initModal", (t2, e2) => {
      var h;
      if (!(t2 instanceof HTMLDialogElement))
        throw new Error("Modal Element must be a valid HTMLDialog Element");
      const { allowBodyScroll: n2, animateContent: a2, preventCloseModal: i2, overlayClass: l2, enableStackedModals: d2 } = e2;
      this.allowBodyScroll = t2.hasAttribute("data-allow-body-scroll") && t2.getAttribute("data-allow-body-scroll") !== "false" || n2 || false, this.preventCloseModal = t2.hasAttribute("data-prevent-close-modal") && t2.getAttribute("data-prevent-close-modal") !== "false" || i2 || false, this.enableStackedModals = t2.hasAttribute("data-enable-stacked") && t2.getAttribute("data-enable-stacked") !== "false" || d2 || false, this.overlayClassName = ((h = t2.dataset.modalOverlay) == null ? void 0 : h.split(" ")) || (l2 == null ? void 0 : l2.split(" ")) || "", this.isKeyDownEventRegistered = false, t2.setAttribute("data-allow-body-scroll", `${this.allowBodyScroll}`), this.closeButtons = c("[data-close-modal]", t2), this.hasDefaultOverlay = false, r("[data-modal-overlay]", t2) instanceof HTMLElement && (this.overlayElement = r("[data-modal-overlay]", t2), this.overlayElement.setAttribute("data-overlay-nature", "default"), this.hasDefaultOverlay = true), this.animateContent = a2, this.animationEnter = this.modalContent.dataset.enterAnimation || "", this.animationExit = this.modalContent.dataset.exitAnimation || "", this.overlayElement && this.overlayElement.setAttribute("data-state", "close"), this.addEvents();
    });
    s(this, "closeModalOnX", (t2) => {
      t2.preventDefault(), this.hideModal();
    });
    s(this, "addEvents", () => {
      for (const t2 of this.triggerButtons)
        t2.addEventListener("click", this.showModal);
      if (this.closeButtons.length > 0)
        for (const t2 of this.closeButtons)
          t2.addEventListener("click", this.closeModalOnX);
      this.dispatchEventToDocument && document.addEventListener(`modal:${this.modalId}:open`, this.showModal), this.dispatchEventToDocument && document.addEventListener(`modal:${this.modalId}:close`, this.hideModal);
    });
    s(this, "showModal", () => {
      var e2, n2, a2, i2, l2;
      if (!(!this.initAsOpen && this.modalElement.getAttribute("data-state") === "open")) {
        if (this.initAsOpen = false, this.closeAll(this.modalElement), this.overlayElement = this.hasDefaultOverlay ? this.overlayElement : T({
          modalContent: this.modalContent,
          overlayClassName: this.overlayClassName
        }), (e2 = this.overlayElement) == null || e2.setAttribute("data-state", "open"), f(this.modalElement, "modal-open", { modalId: this.modalId }), this.animateContent || this.animationEnter !== "") {
          const d2 = this.animateContent ? this.animateContent.enterAnimation : this.animationEnter;
          d2 && d2 !== "" && this.modalContent.style.setProperty("--un-modal-animation", d2), E(this.modalElement, this.modalContent, "open"), p({
            element: this.modalContent,
            callback: () => {
              this.modalContent.style.removeProperty("--un-modal-animation");
            }
          });
        } else
          E(this.modalElement, this.modalContent, "open");
        this.allowBodyScroll || (document.body.style.overflow = "hidden"), this.isKeyDownEventRegistered || (document.addEventListener("keydown", this.closeModalEsc), this.isKeyDownEventRegistered = true), this.modalContent.focus(), this.preventCloseModal || this.overlayElement.addEventListener("click", this.hideModal), (a2 = (n2 = this.options).onShow) == null || a2.call(n2), (l2 = (i2 = this.options).onToggle) == null || l2.call(i2, { isHidden: false }), this.modalElement.showModal();
      }
    });
    s(this, "closeModal", () => {
      this.modalElement.setAttribute("aria-hidden", "true"), this.modalElement.setAttribute("data-state", "close"), this.modalElement.blur(), C(this.enableStackedModals || false, this.allowBodyScroll || false, this.modalElement), this.hasDefaultOverlay || L(this.overlayElement), f(this.modalElement, "modal-close", { modalId: this.modalElement.id });
    });
    s(this, "closeLastAction", () => {
      var t2, e2, n2, a2;
      this.isKeyDownEventRegistered && (document.removeEventListener("keydown", this.closeModalEsc), this.isKeyDownEventRegistered = false), this.modalElement.blur(), (e2 = (t2 = this.options).onHide) == null || e2.call(t2), (a2 = (n2 = this.options).onToggle) == null || a2.call(n2, { isHidden: true });
    });
    s(this, "hideModal", () => {
      var a2, i2, l2, d2, h;
      let t2 = false;
      f(this.modalElement, "before-hide", {
        modalId: this.modalId,
        setExitAction: (u) => {
          t2 = u;
        }
      });
      const e2 = (l2 = (i2 = (a2 = this.options).beforeHide) == null ? void 0 : i2.call(a2)) == null ? void 0 : l2.cancelAction;
      if (t2 || e2)
        return;
      const n2 = ((d2 = this.animateContent) == null ? void 0 : d2.exitAnimation) && this.animateContent.exitAnimation !== "" || this.animationExit && this.animationExit !== "";
      if ((h = this.overlayElement) == null || h.setAttribute("data-state", "close"), this.modalContent.setAttribute("data-state", "close"), n2) {
        const u = this.animationExit ? this.animationExit : this.animateContent && this.animateContent.exitAnimation || "";
        this.modalContent.style.setProperty("--un-modal-animation", u);
      }
      p({
        element: this.modalContent,
        callback: () => {
          n2 && this.modalContent.style.removeProperty("--un-modal-animation"), this.closeModal(), this.closeLastAction(), document.activeElement instanceof HTMLElement && document.activeElement.blur(), this.modalElement.close("modal-closed");
        }
      });
    });
    s(this, "cleanup", () => {
      for (const t2 of this.triggerButtons)
        t2.removeEventListener("click", this.showModal);
      if (this.closeButtons.length > 0)
        for (const t2 of this.closeButtons)
          t2.removeEventListener("click", this.closeModalOnX);
      !this.preventCloseModal && this.overlayElement instanceof HTMLElement && this.overlayElement.removeEventListener("click", this.hideModal), this.dispatchEventToDocument && document.removeEventListener(`modal:${this.modalId}:open`, this.showModal), this.dispatchEventToDocument && document.removeEventListener(`modal:${this.modalId}:close`, this.hideModal), v.removeInstance("modal", this.modalElement);
    });
    s(this, "setOptions", ({ state: t2, allowBodyscroll: e2 }) => {
      t2 && (this.state = t2), e2 !== void 0 && (this.allowBodyScroll = e2), this.state === "open" ? this.showModal() : this.state === "close" && this.hideModal();
    });
    const a = typeof t == "string" ? r(t) : t;
    if (!(a instanceof HTMLDialogElement))
      throw new Error("Modal element not found or invalid. Please provide a valid HTMLDialogElement or selector.");
    this.modalElement = a, this.options = e, this.state = (e == null ? void 0 : e.defaultState) || this.modalElement.dataset.state || "close";
    const i = v.getInstance("modal", this.modalElement);
    if (i)
      return i;
    this.modalElement.hasAttribute("data-fx-modal") || this.modalElement.setAttribute("data-fx-modal", "");
    const l = r("[data-modal-content]", a);
    if (!(l instanceof HTMLElement))
      throw new Error("Modal content element not found or invalid. Please provide a valid HTMLElement or selector.");
    this.modalContent = l;
    const d = a.dataset.modalId;
    this.modalId = `${d}`, this.teleporter = A(this.modalElement, document.body, "move"), this.initializeTriggers(n, d), this.dispatchEventToDocument = this.options.dispatchEventToDocument || true, this.initModal(this.modalElement, this.options), this.state === "open" ? (this.initAsOpen = true, this.showModal()) : (this.initAsOpen = false, this.modalElement.blur(), this.modalContent.setAttribute("data-state", "close"), this.modalElement.setAttribute("aria-hidden", "true"), this.modalElement.setAttribute("data-state", "close")), this.moveElOnInit(), v.register("modal", this.modalElement, this);
  }
  initializeTriggers(t, e) {
    if (!t && e) {
      const a = c(`[data-modal-target='${e}'], [data-modal-trigger][data-modal-id='${e}']`);
      this.triggerButtons = a;
      return;
    }
    if (!t)
      return;
    const n = Array.isArray(t) ? t : [t];
    this.triggerButtons = n.map((a) => {
      if (typeof a == "string") {
        const i = r(a);
        if (!(i instanceof HTMLElement))
          throw new Error(`Trigger element not found: ${a}`);
        return i;
      }
      if (!(a instanceof HTMLElement))
        throw new Error("Invalid trigger element provided");
      return a;
    });
  }
};
s(m, "autoInit", (t = "[data-fx-modal]") => {
  const e = c(t);
  for (const n of e)
    new m(n);
}), /**
* Creates and initializes a new Modal instance
*/
s(m, "init", (t, e = {}, n) => new m(t, e, n));
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
