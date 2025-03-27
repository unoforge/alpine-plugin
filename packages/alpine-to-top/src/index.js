import { initScrollToTop } from "@flexilla/utilities";

function Navbar(Alpine) {
    Alpine.directive("to-top", (el, {}, { cleanup }) => {
        const targetEl = el.getAttribute("data-scroll-target") || undefined;
        const initFrom = e.hasAttribute("data-scroll-from")
            ? Number(e.getAttribute("data-scroll-from"))
            : undefined;

        const scrollToT = initScrollToTop({
            triggerElement: el,
            target: targetEl,
            initFrom,
        });
        cleanup(() => {
            scrollToT.cleanup();
        });
    });
}

export default Navbar;
