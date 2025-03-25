import { Modal as FlexillaModal } from "@flexilla/modal";

function Modal(Alpine) {
    Alpine.directive("modal", (el, {}, { cleanup }) => {
        const modal_ = new FlexillaModal(el);
        cleanup(() => {
            modal_.cleanup()
        });
    });
}

export default Modal;