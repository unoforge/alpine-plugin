<h1 align="center">Flexilla Alpine</h1>

<p align="center">
  Alpine.js plugins powered by <a href="https://github.com/unoforge/flexilla">Flexilla</a> library
</p>

## Overview

Flexilla Alpine is a collection of Alpine.js plugins that wrap the core Flexilla library components. These plugins provide the same powerful functionality as the original Flexilla components, but through Alpine.js directives for seamless integration with your Alpine.js applications.

## Available Plugins

- [@flexilla/alpine-collapse](./packages/alpine-collapse) - Create collapsible components
- [@flexilla/alpine-dropdown](./packages/alpine-dropdown) - Add dropdown functionality
- [@flexilla/alpine-autoresize-area](./packages/alpine-autoresize-area) - Auto-resize textarea elements
- [@flexilla/alpine-dismissible](./packages/alpine-dismissible) - Add dismissible functionality to elements
- [@flexilla/alpine-accordion](./packages/alpine-accordion) - Create expandable accordion components
- [@flexilla/alpine-navbar](./packages/alpine-navbar) - Build responsive navigation bars
- [@flexilla/alpine-offcanvas](./packages/alpine-offcanvas) - Create off-canvas sidebars and panels
- [@flexilla/alpine-popover](./packages/alpine-popover) - Add popover tooltips and content
- [@flexilla/alpine-tabs](./packages/alpine-tabs) - Create tabbed interfaces
- [@flexilla/alpine-to-top](./packages/alpine-to-top) - Add scroll-to-top functionality


## Installation

Each plugin is published as a separate NPM package. Install the specific plugin you need:

```bash
# For collapse functionality
npm install @flexilla/alpine-collapse

# For dropdown functionality
npm install @flexilla/alpine-dropdown
```

## Basic Usage

To use any Flexilla Alpine plugin:

1. Import and register the plugin before initializing Alpine.js
2. Use the provided directive in your HTML

Example using the collapse plugin:

```js
import Alpine from 'alpinejs'
import CollapsePlugin from '@flexilla/alpine-collapse'

// Register the plugin
Alpine.plugin(CollapsePlugin)

Alpine.start()
```

```html
<!-- Use in your HTML -->
<div x-data>
    <button data-collapse-trigger data-target="collapse1">Toggle</button>
    
    <div x-f-collapse id="collapse1">
        <p>This content can be collapsed/expanded</p>
    </div>
</div>
```

## Documentation

For detailed documentation and examples, visit each plugin's README:

- [Collapse Plugin Documentation](./packages/alpine-collapse/README.md)
- [Dropdown Plugin Documentation](./packages/alpine-dropdown/README.md)
- [Collapse Plugin Documentation](./packages/alpine-collapse/README.md)
- [Dropdown Plugin Documentation](./packages/alpine-dropdown/README.md)
- [Autoresize Area Plugin Documentation](./packages/alpine-autoresize-area/README.md)
- [Dismissible Plugin Documentation](./packages/alpine-dismissible/README.md)
- [Accordion Plugin Documentation](./packages/alpine-accordion/README.md)
- [Navbar Plugin Documentation](./packages/alpine-navbar/README.md)
- [Offcanvas Plugin Documentation](./packages/alpine-offcanvas/README.md)
- [Popover Plugin Documentation](./packages/alpine-popover/README.md)
- [Tabs Plugin Documentation](./packages/alpine-tabs/README.md)
- [To Top Plugin Documentation](./packages/alpine-to-top/README.md)


## License

MIT

