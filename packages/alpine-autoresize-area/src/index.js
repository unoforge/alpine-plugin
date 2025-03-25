import {AutoResizeTextArea as FlexillaAutoresize} from "@flexilla/auto-resize-area"

function AutoResizeTextArea(Alpine) {
    Alpine.directive("auto-resize-area", (el, {}, { cleanup }) => {
        const tabs_ = new FlexillaAutoresize(el);
        cleanup(() => {
            tabs_.cleanup();
        });
    });
}

export default AutoResizeTextArea;