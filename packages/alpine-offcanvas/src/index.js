import { OffCanvas as FlexillaOffcanvas } from "@flexilla/offcanvas";

function Offcanvas(Alpine) {
    Alpine.directive("offcanvas", (el, {}, { cleanup }) => {
        const offcanvasId = el.getAttribute("id");
        if (!modalId) {
            console.error("❌ id is required but missing on element:", el);
            return;
        }
        const offcanvas_ = new FlexillaOffcanvas(el);
        
        if (!Alpine.store("sheets")) {
            Alpine.store("sheets", {});
        }

        Alpine.store("sheets")[offcanvasId] = modal_;
        const openHandler = () => offcanvas_.open();
        const closeHandler = () => offcanvas_.close();

        document.addEventListener(`sheet:${offcanvasId}:open`, openHandler);
        document.addEventListener(`sheet:${offcanvasId}:close`, closeHandler);
        cleanup(() => {
            document.removeEventListener(`sheet:${modalId}:open`, openHandler);
            document.removeEventListener(
                `sheet:${offcanvasId}:close`,
                closeHandler
            );
            offcanvas_.cleanup();
            delete Alpine.store("sheets")[modalId];
        });
    });

    Alpine.magic("offcanvas", (el) => (id) => {
        if (!Alpine.store("sheets")) {
            console.warn("⚠️ Alpine store for Offcanvas is not initialized.");
            return null;
        }
        if (!Alpine.store("sheets")[id]) {
            console.warn(`⚠️ No offcanvas instance found for ID: ${id}`);
            return null;
        }
        return Alpine.store("sheets")[id];
    });
}

export default Offcanvas;
