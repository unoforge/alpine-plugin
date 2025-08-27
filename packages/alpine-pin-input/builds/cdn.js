import PinInput from '../src/index.js';

document.addEventListener('alpine:init', () => {
    PinInput(window.Alpine);
});