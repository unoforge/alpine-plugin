import { Dropdown as FlexillaDropdown } from "@flexilla/dropdown";

function Dropdown(Alpine) {
    Alpine.directive("dropdown", (el, {}, { cleanup }) => {
        const dropdown_ = new FlexillaDropdown(el);
        cleanup(() => {
            dropdown_.cleanup();
        });
    });
}

export default Dropdown;
