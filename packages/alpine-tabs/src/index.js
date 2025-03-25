import {Tabs as FlexillaTabs} from "@flexilla/tabs"

function Tabs(Alpine) {
    Alpine.directive("tabs", (el, {}, { cleanup }) => {
        const tabs_ = new FlexillaTabs(el);
        cleanup(() => {
            tabs_.cleanup();
        });
    });
}

export default Tabs;