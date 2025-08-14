import { CustomRange as CustomRangeIndicator } from "@flexilla/custom-range";

function RangeIndicator(Alpine) {
    Alpine.directive("range-indicator", (el, {}, { cleanup }) => {
        const range_indicator_ = new CustomRangeIndicator(el);
        cleanup(() => {
            range_indicator_.cleanup()
        });
    });
}

export default RangeIndicator;