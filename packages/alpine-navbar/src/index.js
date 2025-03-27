import { toggleNavbar } from "@flexilla/utilities";

function Navbar(Alpine) {
    Alpine.directive("navbar", (el, {}, { cleanup }) => {
        const nav = toggleNavbar({
            navbarElement: el,
        });
        cleanup(() => {
            nav.cleanup();
        });
    });
}

export default Navbar;
