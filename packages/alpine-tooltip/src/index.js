import { Tooltip as FlexillaTooltip } from "@flexilla/tooltip";

function Tabs(Alpine) {
    Alpine.directive("tooltip", (el, {}, { cleanup }) => {
        const tooltip_ = new FlexillaTooltip(el);
        cleanup(() => {
            tooltip_.cleanup();
        });
    });
}

export default Tabs;
