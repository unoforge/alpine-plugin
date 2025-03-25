import { Dismissible as FlexillaDismiss } from "@flexilla/dismissible";

function Dismissible(Alpine) {
    Alpine.directive("dismissible", (el, {}, { cleanup }) => {
        const dismiss_ = new FlexillaDismiss(el);
        cleanup(() => {
            dismiss_.cleanup();
        });
    });
}

export default Dismissible;