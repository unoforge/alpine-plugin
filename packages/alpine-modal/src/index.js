import { Modal as FlexillaModal } from "@flexilla/modal";

function Modal(Alpine) {
    Alpine.directive("modal", (el, {}, { cleanup }) => {
        const modalId = el.getAttribute("data-modal-id");

        if (!modalId) {
            console.error(
                "❌ data-modal-id is required but missing on element:",
                el
            );
            return;
        }
        const content = el.querySelector("[data-modal-content]");
        if (!content) {
            console.error(
                "❌ data-modal-content Element is required but missing in Modal Element:",
                el
            );
            return;
        }

        const trigger = document.querySelector(
            `[data-modal-trigger][data-modal-id="${modalId}"]`
        );
        const modalInstance = new FlexillaModal(el, {
            dispatchEventToDocument: false,
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
