import { OffCanvas as FlexillaOffcanvas } from "@flexilla/offcanvas";

function Offcanvas(Alpine) {
    Alpine.directive("offcanvas", (el, {}, { cleanup }) => {
       const offcanvas_ = new FlexillaOffcanvas(el)
        cleanup(() => {
            offcanvas_.cleanup()
        });
    });
}

export default Offcanvas;