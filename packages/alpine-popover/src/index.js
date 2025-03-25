import { Popover as FlexillaPopover } from "@flexilla/popover";

function Popover(Alpine) {
    Alpine.directive("popover", (el, {}, { cleanup }) => {
       const popover_ = new FlexillaPopover(el)
        cleanup(() => {
            popover_.cleanup()
        });
    });
}

export default Popover;