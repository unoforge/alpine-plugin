<h1 align="center">Alpine Modal</h1>

<p align="center">
  A powerful and flexible modal dialog component for <a href="https://alpinejs.dev">Alpine.js</a>, powered by Flexilla
</p>

## Overview

Alpine Modal is a lightweight wrapper around Flexilla's modal component, providing seamless integration with Alpine.js. It offers:

- 🎯 Simple integration with Alpine.js directives
- 🎨 Highly customizable styling and animations
- 🔒 Accessibility features built-in
- 🛠 Event-driven API for programmatic control

## Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document, just before Alpine.

```html
<script src="https://cdn.jsdelivr.net/npm/@flexilla/alpine-modal@latest/dist/cdn.min.js" defer></script>
```

### NPM

```shell
npm install @flexilla/alpine-modal
```

Add the `x-modal` directive to your project by importing the package **before** starting Alpine.

```js
import Alpine from 'alpinejs';
import PluginModal from '@flexilla/alpine-modal';

Alpine.plugin(PluginModal);

Alpine.start();
```

## Usage

### Basic Example

```html
<button data-modal-target="modal-default"
    class="bg-neutral-800 text-white px-4 py-2 rounded-lg text-sm w-max">
    Open Modal
</button>

<dialog x-data data-fx-modal x-modal data-modal-id="modal-default"
    data-modal-overlay="inset-0 fixed bg-gray-800/20 ease-linear duration-300 transition-all data-[state=close]:opacity-0 data-[state=close]:invisible"
    class="inset-0 w-screen h-screen justify-center items-start hidden data-[state=open]:flex p-4 fixed top-0 left-0 bg-transparent">
    <div data-modal-content 
        class="bg-white rounded-lg overflow-hidden w-full max-w-2xl flex flex-col ease-linear transition-all duration-300 absolute top-4 z-[500]">
        <div class="border-b border-b-gray-100 dark:border-b-gray-900 p-4 flex justify-between items-center">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                Modal Title
            </h2>
            <button aria-label="close modal" data-close-modal
                class="text-gray-700 dark:text-gray-300 rounded-full p-2 border border-gray-200 dark:border-gray-800 duration-200 hover:bg-gray-100 dark:hover:bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
            </button>
        </div>
        <div class="px-4 py-6">
            <!-- Your modal content here -->
        </div>
        <div class="border-t border-t-gray-100 dark:border-t-gray-900 p-4 flex items-center gap-x-3">
            <button class="rounded px-4 h-8 flex items-center bg-blue-600 text-white duration-300 hover:bg-opacity-80">
                Save
            </button>
            <button data-close-modal
                class="rounded px-4 h-8 flex items-center border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 duration-300 hover:bg-gray-100 dark:hover:bg-gray-900">
                Cancel
            </button>
        </div>
    </div>
</dialog>
```

### Key Features

1. **Required Attributes**:
   - `x-modal`: The main directive
   - `data-modal-id`: Unique identifier for the modal
   - `data-modal-content`: Marks the modal content container
   - `data-close-modal`: Marks close trigger elements

2. **Styling**:
   - Uses data attributes for state-based styling
   - Fully customizable with utility classes
   - Smooth transitions and animations

3. **Accessibility**:
   - Uses native `<dialog>` element
   - Proper ARIA attributes
   - Keyboard navigation support

For complete documentation and advanced customization options, visit the [Flexilla Modal documentation](https://flexilla-docs.vercel.app/docs/components/modal).

## License

Copyright (c) 2025 Johnkat MJ and contributors.

Licensed under the MIT license, see [LICENSE](LICENSE) for details.
