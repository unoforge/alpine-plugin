<h1 align="center">Alpine Dropdown</h1>

<p align="center">
  Simple Interactive Dropdown Component for <a href="https://alpinejs.dev">Alpine.js</a>
</p>

<p align="center">
  Part of the <a href="https://flexilla-docs.vercel.app">Flexilla</a> library - A collection of UI components for Alpine.js
</p>

## Overview

The Alpine Dropdown component provides a lightweight and flexible dropdown menu implementation for Alpine.js applications. It features:

- 🎯 Precise positioning
- 🎨 Customizable styling with Tailwind CSS support
- ⌨️ Keyboard navigation support
- 🔄 Smooth transitions and animations

## Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document, just before Alpine.

```html
<script src="https://cdn.jsdelivr.net/npm/@flexilla/alpine-dropdown@latest/dist/cdn.min.js" defer></script>
```

### NPM

```shell
npm install @flexilla/alpine-dropdown
```

Add the `x-dropdown` directive to your project by importing the package **before** starting Alpine.

```js
import Alpine from 'alpinejs';
import PluginDropdown from '@flexilla/alpine-dropdown';

Alpine.plugin(PluginDropdown);

Alpine.start();
```

## Basic Usage

```html
<button data-dropdown-trigger data-dropdown-id="dropdown-1"
    class="border border-zinc-800 hover:bg-zinc-950 bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm">
    Open Dropdown 
</button>
<div x-dropdown x-data role="list" id="dropdown-1" data-fx-popper
    class="fixed top-[--fx-popper-placement-y] left-[--fx-popper-placement-x] z-20 w-56 border border-zinc-800 bg-zinc-900/80 text-zinc-50 backdrop-filter backdrop-blur-xl rounded-lg flex flex-col overflow-hidden opacity-0 invisible fx-open:opacity-100 fx-open:visible ease-linear transition-transform translate-y-4 fx-open:translate-y-0">
    <a href="#" class="focus:outline focus:bg-zinc-900/90 outline-none focus:outline-blue-500 ease-linear flex hover-bg-zinc-800/80 p-2 rounded-md">
      Item 1
    </a>
    <a href="/" class="focus:outline focus:bg-zinc-900/90 outline-none focus:outline-blue-500 ease-linear flex hover-bg-zinc-800/80 p-2 rounded-md">Item 2</a>
    <a href="#" class="focus:outline focus:bg-zinc-900/90 outline-none focus:outline-blue-500 ease-linear flex hover-bg-zinc-800/80 p-2 rounded-md">Item 3</a>
    <a href="#" class="focus:outline focus:bg-zinc-900/90 outline-none focus:outline-blue-500 ease-linear flex hover-bg-zinc-800/80 p-2 rounded-md">Item 4</a>
</div>
```

## Documentation

For detailed documentation, customization options, and advanced usage examples, visit the [Flexilla Dropdown documentation](https://flexilla-docs.vercel.app/docs/components/dropdown).

## License

Copyright (c) 2025 Johnkat MJ and contributors.

Licensed under the MIT license, see [LICENSE](LICENSE) for details.
