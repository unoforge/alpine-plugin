import {Accordion as FlexillaAccordion} from "@flexilla/accordion"

function Accordion(Alpine) {
    Alpine.directive("accordion", (el, {}, {cleanup}) => {
        const accordion = new FlexillaAccordion(el)
        cleanup(()=>{
            accordion.cleanup()
        })
    });
}

export default Accordion;