import { Collapse as FlexillaCollapse } from "@flexilla/collapse";

function Collapse(Alpine) {
    Alpine.directive("collapse", (el, {}, { cleanup }) => {
        const collapse_ = new FlexillaCollapse(el);
        cleanup(() => {
            collapse_.cleanup();
        });
    });
}

export default Collapse;