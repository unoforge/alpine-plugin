import Navbar from '../src/index.js';

document.addEventListener('alpine:init', () => {
    Navbar(window.Alpine);
});