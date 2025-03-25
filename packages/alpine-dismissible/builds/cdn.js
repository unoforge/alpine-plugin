import Dismissible from '../src/index.js';

document.addEventListener('alpine:init', () => {
    Dismissible(window.Alpine);
});