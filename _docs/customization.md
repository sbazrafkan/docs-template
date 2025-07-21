---
layout: doc
title: Customization
description: Learn how to customize the appearance and behavior of your documentation site
tags: [customization, themes, styling]
order: 4
section: Customization
subsections:
  - title: Color Palettes
    id: color-palettes
  - title: Dark Mode
    id: dark-mode
  - title: Custom Styles
    id: custom-styles
  - title: Fonts
    id: fonts
  - title: Layout Options
    id: layout-options
---

# Customization

This guide will help you customize various aspects of your documentation site to match your brand and preferences.

## Color Palettes {#color-palettes}

The template comes with 10 pre-designed color palettes that you can easily switch between.

### Available Palettes

<div class="grid grid-cols-2 md:grid-cols-5 gap-4">
  <div class="text-center">
    <div class="w-full h-20 bg-blue-500 rounded-lg mb-2"></div>
    <p class="text-sm font-medium">Blue</p>
  </div>
  <div class="text-center">
    <div class="w-full h-20 bg-purple-500 rounded-lg mb-2"></div>
    <p class="text-sm font-medium">Purple</p>
  </div>
  <div class="text-center">
    <div class="w-full h-20 bg-green-500 rounded-lg mb-2"></div>
    <p class="text-sm font-medium">Green</p>
  </div>
  <div class="text-center">
    <div class="w-full h-20 bg-orange-500 rounded-lg mb-2"></div>
    <p class="text-sm font-medium">Orange</p>
  </div>
  <div class="text-center">
    <div class="w-full h-20 bg-red-500 rounded-lg mb-2"></div>
    <p class="text-sm font-medium">Red</p>
  </div>
  <div class="text-center">
    <div class="w-full h-20 bg-teal-500 rounded-lg mb-2"></div>
    <p class="text-sm font-medium">Teal</p>
  </div>
  <div class="text-center">
    <div class="w-full h-20 bg-pink-500 rounded-lg mb-2"></div>
    <p class="text-sm font-medium">Pink</p>
  </div>
  <div class="text-center">
    <div class="w-full h-20 bg-indigo-500 rounded-lg mb-2"></div>
    <p class="text-sm font-medium">Indigo</p>
  </div>
  <div class="text-center">
    <div class="w-full h-20 bg-amber-500 rounded-lg mb-2"></div>
    <p class="text-sm font-medium">Amber</p>
  </div>
  <div class="text-center">
    <div class="w-full h-20 bg-slate-500 rounded-lg mb-2"></div>
    <p class="text-sm font-medium">Slate</p>
  </div>
</div>

### Changing the Default Palette

To set a default color palette, update the `_config.yml` file:

```yaml
# Theme settings
theme_color: "purple" # Change to your preferred palette
```

### Creating Custom Palettes

You can add your own color palette by editing `_sass/themes/_palettes.scss`:

```scss
// Custom palette
body[data-palette="custom"] {
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-200: #bae6fd;
  --color-primary-300: #7dd3fc;
  --color-primary-400: #38bdf8;
  --color-primary-500: #0ea5e9;
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
  --color-primary-800: #075985;
  --color-primary-900: #0c4a6e;
}
```

## Dark Mode {#dark-mode}

Dark mode is automatically supported for all color palettes. Users can toggle between light and dark modes using the moon/sun icon in the header.

### Customizing Dark Mode Colors

To customize dark mode colors, edit the CSS custom properties in `_sass/base/_root.scss`:

```scss
&[data-theme="dark"] {
  --color-bg: #0f172a;
  --color-bg-secondary: #1e293b;
  --color-bg-tertiary: #334155;
  
  --color-text: #f1f5f9;
  --color-text-secondary: #cbd5e1;
  --color-text-tertiary: #94a3b8;
  
  --color-border: #334155;
}
```

## Custom Styles {#custom-styles}

### Adding Custom CSS

Create a custom stylesheet in `assets/css/custom.scss`:

```scss
---
# Front matter
---

// Your custom styles here
.my-custom-class {
  color: var(--color-primary-600);
  font-weight: bold;
}
```

Then include it in your layout by editing `_layouts/default.html`:

```html
<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">
```

### Using CSS Variables

The template uses CSS custom properties extensively. You can use these in your custom styles:

```scss
.custom-element {
  background-color: var(--color-primary-100);
  color: var(--color-primary-900);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
}
```

## Fonts {#fonts}

### Changing the Primary Font

The template uses Inter as the primary font. To change it, update `_sass/base/_variables.scss`:

```scss
$font-family-base: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
```

Don't forget to add the font link in `_layouts/default.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Changing the Code Font

For code blocks, update the monospace font stack:

```scss
$font-family-mono: 'Your Code Font', 'Fira Code', Monaco, monospace;
```

## Layout Options {#layout-options}

### Sidebar Width

Adjust the sidebar width in `_sass/base/_variables.scss`:

```scss
$sidebar-width: 280px; // Default width
```

### Container Width

Change the maximum content width:

```scss
$container-max-width: 1280px; // Default max width
```

### Header Height

Modify the header height:

```scss
$header-height: 64px; // Default height
```

### Disabling Features

You can disable certain features in `_config.yml`:

```yaml
# Theme settings
enable_dark_mode: false  # Disable dark mode toggle
enable_search: false     # Disable search functionality
enable_tags: false       # Disable tagging system
```

## Advanced Customization

### Custom Components

Create new components in the `_sass/components/` directory:

```scss
// _sass/components/_custom-card.scss
.custom-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  
  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
}
```

### Overriding Layouts

Copy any layout from `_layouts/` to your project and modify as needed. Jekyll will use your version instead of the theme's default.

### Custom JavaScript

Add custom JavaScript by creating `assets/js/custom.js` and including it in the layout:

```javascript
// Custom functionality
document.addEventListener('DOMContentLoaded', function() {
  // Your code here
});
```

## Best Practices

1. **Use CSS Variables**: Leverage the existing CSS custom properties for consistency
2. **Test Dark Mode**: Always test your customizations in both light and dark modes
3. **Mobile First**: Ensure customizations work well on mobile devices
4. **Performance**: Minimize custom CSS and JavaScript for optimal performance
5. **Accessibility**: Maintain proper color contrast ratios when customizing colors