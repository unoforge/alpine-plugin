<h1 align="center">Alpine Accordion</h1>

<p align="center">
  A port of Flexilla Accordion for <a href="https://alpinejs.dev">Alpine.js</a>
</p>

## Features

- 🎯 **Alpine.js Integration** - Seamlessly integrates with Alpine.js
- ♿️ **Accessible** - Follows WAI-ARIA design patterns
- 🎨 **Unstyled** - Complete freedom over styling
- 🔄 **Animated** - Supports smooth transitions
- 🛠️ **Customizable** - Flexible configuration options

## Installation

Choose one of the following methods to install Alpine Accordion:

### CDN

Include the following `<script>` tag in the `<head>` of your document, just before Alpine.

```html
<script src="https://cdn.jsdelivr.net/npm/@flexilla/alpine-accordion@latest/dist/cdn.min.js" defer></script>
```

### NPM

```shell
npm install @flexilla/alpine-accordion
```

Add the `x-accordion` directive to your project by importing the package **before** starting Alpine.

```js
import Alpine from 'alpinejs';
import Accordion from '@flexilla/accordion';

Alpine.plugin(Accordion);

Alpine.start();
```

## Usage

The Alpine Accordion component provides a flexible way to create expandable/collapsible content sections. Here's an example using TailwindCSS for styling:

```html
<div x-accordion x-data @change-item="console.log('Hahah')" data-default-value="accordion-1"
  class="space-y-2 bg-zinc-200/40 dark:bg-zinc-900/60 rounded-md">
  <div data-accordion-item data-accordion-value="accordion-1" class="rounded-md">
    <button data-accordion-trigger aria-label="toggle button"
      class="px-4 w-full flex justify-between items-center py-2 text-zinc-800 dark:text-zinc-200 font-medium text-lg ease-linear hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40 rounded-md focus:outline-blue-600 aria-expanded-text-blue6">
      Is it accessible?
    </button>
    <div aria-hidden="false" data-accordion-content data-state="open"
      class="text-zinc-700 dark:text-zinc-300 duration-200 ease-linear h-0 data-[state=open]:h-auto overflow-hidden">
      <p class="p-4">
        Yes. It adheres to the WAI-ARIA design pattern.
      </p>
    </div>
  </div>
  <div data-accordion-item data-accordion-value="accordion-2" class="rounded-md">
    <button data-accordion-trigger aria-label="toggle button"
      class="px-4 w-full flex justify-between items-center py-2 text-zinc-800 dark:text-zinc-200 font-medium text-lg ease-linear hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40 rounded-md focus:outline-blue-600 aria-expanded-text-blue6">
      Is it unstyled?
    </button>
    <div aria-hidden="true" data-accordion-content
      class="text-zinc-700 dark:text-zinc-300 duration-200 ease-linear h-0 data-[state=open]:h-auto overflow-hidden">
      <p class="p-4">
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </p>
    </div>
  </div>
  <div data-accordion-item data-accordion-value="accordion-3" class="rounded-md">
    <button data-accordion-trigger aria-label="toggle button"
      class="px-4 w-full flex justify-between items-center py-2 text-zinc-800 dark:text-zinc-200 font-medium text-lg ease-linear hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40 rounded-md focus:outline-blue-600 aria-expanded-text-blue6">
      Can it be animated?
    </button>
    <div aria-hidden="true" data-accordion-content
      class="text-zinc-700 dark:text-zinc-300 duration-200 ease-linear h-0 data-[state=open]:h-auto overflow-hidden">
      <p class="p-4">
        Yes! You can use the transition prop to configure the animation.
      </p>
    </div>
  </div>
</div>
```

## Documentation

For detailed information about customization options, events, and advanced usage, check out the [Flexilla Accordion documentation](https://flexilla-docs.vercel.app/docs/components/accordion)

## License

Copyright (c) 2025 Johnkat MJ and contributors.

Licensed under the MIT license, see [LICENSE](LICENSE) for details.
