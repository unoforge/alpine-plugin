import { Modal as FlexillaModal } from "@flexilla/modal";

function Modal(Alpine) {
    Alpine.directive("modal", (el, {}, { cleanup }) => {
        const modalId = el.getAttribute("data-modal-id");

        if (!modalId) {
            console.error("❌ data-modal-id is required but missing on element:", el);
            return;
        }

        const modalInstance = new FlexillaModal(el);
        if (!Alpine.store("modals")) {
            Alpine.store("modals", {});
        }

        Alpine.store("modals")[modalId] = modalInstance;

        const openHandler = () => modalInstance.showModal();
        const closeHandler = () => modalInstance.hideModal();

        document.addEventListener(`modal:${modalId}:open`, openHandler);
        document.addEventListener(`modal:${modalId}:close`, closeHandler);

        cleanup(() => {
            document.removeEventListener(`modal:${modalId}:open`, openHandler);
            document.removeEventListener(`modal:${modalId}:close`, closeHandler);
            modalInstance.cleanup();
            delete Alpine.store("modals")[modalId];
        });
    });

    Alpine.magic("modal", () => (id) => {
        if (!Alpine.store("modals")) {
            console.warn("⚠️ Alpine store for modals is not initialized.");
            return null;
        }
        if (!Alpine.store("modals")[id]) {
            console.warn(`⚠️ No modal instance found for ID: ${id}`);
            return null;
        }
        return Alpine.store("modals")[id];
    });
}

export default Modal;
