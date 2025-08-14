<h1 align="center">Alpine Custom Range</h1>

<p align="center">
  A lightweight and flexible utility for <a href="https://alpinejs.dev">Alpine.js</a>, powered by <a href="https://flexilla-docs.vercel.app">Flexilla</a>
</p>

## Overview

Alpine Range Indicator is an Alpine.js wrapper around the Flexilla Range Indicator utility, providing an easy-to-use directive for creating adding a custom indicator to an input range elements in your Alpine.js applications. It maintains the core functionality of Flexilla while integrating seamlessly with Alpine.js's reactive system.

## Features

- 🪶 Lightweight implementation
- 🎨 Highly customizable

## Installation

### Via CDN

Include the following `<script>` tag in the `<head>` of your document, just before Alpine.

```html
<script src="https://cdn.jsdelivr.net/npm/@flexilla/alpine-range-indicator@latest/dist/cdn.min.js" defer></script>
```

### Via NPM

```shell
npm install @flexilla/alpine-range-indicator
```

Add the `x-range-indicator` directive to your project by importing the package **before** starting Alpine:

```js
import Alpine from 'alpinejs';
import RangeIndicatorPlugin from '@flexilla/alpine-range-indicator';

Alpine.plugin(RangeIndicatorPlugin);

Alpine.start();
```

## Basic Usage


## Advanced Usage



## License

Copyright (c) 2025 Johnkat MJ and contributors.

Licensed under the MIT license, see [LICENSE](LICENSE) for details.
