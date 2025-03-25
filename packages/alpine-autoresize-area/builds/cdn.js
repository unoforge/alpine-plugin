import AutoResizeTextArea from '../src/index.js';

document.addEventListener('alpine:init', () => {
    AutoResizeTextArea(window.Alpine);
});