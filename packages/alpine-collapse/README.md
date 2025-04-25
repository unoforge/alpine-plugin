<h1 align="center">Alpine Collapse</h1>

<p align="center">
  A lightweight and flexible collapse component for <a href="https://alpinejs.dev">Alpine.js</a>, powered by <a href="https://flexilla-docs.vercel.app">Flexilla</a>
</p>

## Overview

Alpine Collapse is an Alpine.js wrapper around the Flexilla Collapse component, providing an easy-to-use directive for creating collapsible elements in your Alpine.js applications. It maintains the core functionality of Flexilla while integrating seamlessly with Alpine.js's reactive system.

## Features

- 🪶 Lightweight implementation
- 🎨 Highly customizable

## Installation

### Via CDN

Include the following `<script>` tag in the `<head>` of your document, just before Alpine.

```html
<script src="https://cdn.jsdelivr.net/npm/@flexilla/alpine-collapse@latest/dist/cdn.min.js" defer></script>
```

### Via NPM

```shell
npm install @flexilla/alpine-collapse
```

Add the `x-f-collapse` directive to your project by importing the package **before** starting Alpine:

```js
import Alpine from 'alpinejs';
import CollapsePlugin from '@flexilla/alpine-collapse';

Alpine.plugin(CollapsePlugin);

Alpine.start();
```

## Basic Usage

Create a collapsible element using the `x-f-collapse` directive and trigger it with a button:

```html
<button data-collapse-trigger data-target="collapse1"
  class="bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm">
  Trigger collapse
</button>
<div x-f-collapse x-data id="collapse1"
  class="tansition-[height] duration-300 ease-linear overflow-hidden w-full h-0 data-[state=open]:h-auto">
  <div
    class="rounded-md w-full bg-zinc-100/50 dark:bg-zinc-900/50 border border-gray-200 dark:border-gray-800 p-4 inline-flex overflow-hidden">
    <p class="text-gray-700 dark:text-gray-300">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, dolorum, incidunt facilis quasi
      non ea mollitia odio, iure adipisci
    </p>
  </div>
</div>
```

## Advanced Usage

For detailed information about customization options, animations, and advanced features, please refer to the [Flexilla Collapse documentation](https://flexilla-docs.vercel.app/docs/components/collapse).

## License

Copyright (c) 2025 Johnkat MJ and contributors.

Licensed under the MIT license, see [LICENSE](LICENSE) for details.
