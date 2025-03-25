import { toggleNavbar } from "@flexilla/utilities";

function Navbar(Alpine) {
    Alpine.directive("navbar", (el, {}, { cleanup }) => {
        toggleNavbar({
            navbarElement: el,
        });
        cleanup(() => {});
    });
}

export default Navbar;