# Complete Documentation Guide

This guide provides comprehensive documentation for using and customizing the Modern Documentation Template.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Configuration](#configuration)
3. [Writing Documentation](#writing-documentation)
4. [Components Reference](#components-reference)
5. [Styling & Theming](#styling--theming)
6. [Advanced Features](#advanced-features)
7. [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites

- GitHub account
- Basic knowledge of Markdown
- (Optional) Jekyll for local development

### Installation Methods

#### Method 1: GitHub Pages (Recommended for Production)

1. **Fork the Repository**
   - Click "Fork" on the repository page
   - Choose your account as the destination

2. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: main (or master)
   - Folder: / (root)
   - Click Save

3. **Access Your Site**
   - Your site will be available at: `https://[username].github.io/[repository-name]/`
   - Initial build may take a few minutes

#### Method 2: Docker Development (Recommended for Local Development)

**No Ruby/Jekyll installation required!** Use Docker for a clean, isolated development environment:

```bash
# Clone the repository
git clone https://github.com/yourusername/docs-template.git
cd docs-template

# Start the development server
docker-compose up

# Your site is now available at http://localhost:4000
# Changes are automatically reloaded!

# To stop the server
docker-compose down
```

**Docker Commands Reference:**
```bash
# Run in background
docker-compose up -d

# View logs
docker-compose logs -f

# Rebuild after Gemfile changes
docker-compose build

# Clean up everything
docker-compose down -v
```

#### Method 3: Traditional Local Development

If you prefer to install Jekyll directly on your machine:

```bash
# Clone your fork
git clone https://github.com/yourusername/docs-template.git
cd docs-template

# Install Jekyll and dependencies
gem install jekyll bundler
bundle install

# Run locally
bundle exec jekyll serve

# Access at http://localhost:4000
```

## Configuration

### Basic Configuration (_config.yml)

```yaml
# Site settings
title: Your Documentation Title
description: Brief description of your documentation
baseurl: "/repository-name" # for github.io/repository-name
url: "https://username.github.io"

# Theme settings
theme_color: "blue" # Choose from 10 palettes
enable_dark_mode: true
enable_search: true
enable_tags: true

# Navigation
navigation:
  - title: Home
    url: /
  - title: Documentation
    url: /docs/
  - title: Getting Started
    url: /docs/getting-started/

# Collections
collections:
  docs:
    output: true
    permalink: /:collection/:path/
```

### Environment-Specific Settings

For local development, create `_config_dev.yml`:

```yaml
baseurl: ""
url: "http://localhost:4000"
```

Run with: `bundle exec jekyll serve --config _config.yml,_config_dev.yml`

## Writing Documentation

### File Structure

```
_docs/
├── getting-started/
│   ├── installation.md
│   ├── quick-start.md
│   └── configuration.md
├── guides/
│   ├── writing-docs.md
│   └── using-components.md
└── reference/
    ├── api.md
    └── configuration.md
```

### Front Matter Options

```yaml
---
# Required
layout: doc
title: Page Title

# Optional
description: Brief description for search and SEO
tags: [tutorial, beginner, configuration]
order: 1 # Sidebar ordering within section
section: Getting Started # Section name for sidebar
toc: true # Show table of contents
sidebar: true # Show sidebar navigation

# Custom subsections for sidebar
subsections:
  - title: Installation
    id: installation
  - title: Configuration
    id: configuration
---
```

### Markdown Extensions

#### Anchored Headings
```markdown
## Installation {#custom-id}
```

#### Task Lists
```markdown
- [x] Completed task
- [ ] Pending task
- [ ] Another task
```

#### Definition Lists
```markdown
Term 1
: Definition for term 1

Term 2
: Definition for term 2
```

#### Footnotes
```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.
```

## Components Reference

### 1. Lists

#### Custom List Indicators
```markdown
{:.list-check}
- Checked item
- Another checked item

{:.list-arrow}
- Arrow item
- Another arrow item

{:.list-star}
- Star item
- Another star item

{:.list-triangle}
- Triangle item
- Another triangle item
```

#### Compact Lists
```markdown
{:.list-compact}
- Item 1
- Item 2
- Item 3
```

### 2. Code Blocks

#### Basic Code Block
````markdown
```javascript
const greeting = "Hello, World!";
console.log(greeting);
```
````

#### Code Block with Line Numbers
````markdown
```javascript {linenos}
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```
````

#### Code Block with Highlighting
````markdown
```javascript {hl_lines="2-4"}
function example() {
  // These lines
  // will be
  // highlighted
  return true;
}
```
````

### 3. Tables

#### Basic Table
```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

#### Responsive Table
```html
<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Column 1">Value 1</td>
        <td data-label="Column 2">Value 2</td>
        <td data-label="Column 3">Value 3</td>
      </tr>
    </tbody>
  </table>
</div>
```

#### Table Variants
```html
<table class="table-striped">...</table>
<table class="table-compact">...</table>
<table class="table-bordered">...</table>
```

### 4. Steps & Processes

#### Vertical Steps
```html
<div class="steps">
  <div class="step">
    <div class="step-indicator">1</div>
    <div class="step-connector"></div>
    <div class="step-content">
      <h3 class="step-title">Install Dependencies</h3>
      <p class="step-description">Run npm install to install all required packages.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-indicator active">2</div>
    <div class="step-connector"></div>
    <div class="step-content">
      <h3 class="step-title">Configure Settings</h3>
      <p class="step-description">Edit the config file with your settings.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-indicator">3</div>
    <div class="step-content">
      <h3 class="step-title">Run Application</h3>
      <p class="step-description">Start the application with npm start.</p>
    </div>
  </div>
</div>
```

#### Horizontal Steps
```html
<div class="steps steps-horizontal">
  <!-- Same structure as vertical -->
</div>
```

#### Process Pipeline
```html
<div class="pipeline">
  <div class="pipeline-item">
    <div class="pipeline-title">Input</div>
    <div class="pipeline-description">Data source</div>
  </div>
  <div class="pipeline-item active">
    <div class="pipeline-title">Process</div>
    <div class="pipeline-description">Transform data</div>
  </div>
  <div class="pipeline-item">
    <div class="pipeline-title">Output</div>
    <div class="pipeline-description">Final result</div>
  </div>
</div>
```

### 5. Tags

#### Basic Tags
```html
<span class="tag">Default</span>
<span class="tag tag-primary">Primary</span>
<span class="tag tag-success">Success</span>
<span class="tag tag-warning">Warning</span>
<span class="tag tag-error">Error</span>
```

#### Tag Sizes
```html
<span class="tag tag-sm">Small</span>
<span class="tag">Normal</span>
<span class="tag tag-lg">Large</span>
```

#### Tag Groups
```html
<div class="tag-group">
  <span class="tag">JavaScript</span>
  <span class="tag">Python</span>
  <span class="tag">Ruby</span>
</div>
```

### 6. Buttons

#### Button Styles
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>
```

#### Button Sizes
```html
<button class="btn btn-sm">Small</button>
<button class="btn">Normal</button>
<button class="btn btn-lg">Large</button>
<button class="btn btn-block">Full Width</button>
```

#### Button States
```html
<button class="btn btn-primary" disabled>Disabled</button>
<button class="btn btn-primary btn-loading">Loading</button>
```

### 7. Alerts

```html
<div class="alert alert-info">
  <strong>Info:</strong> This is an informational message.
</div>

<div class="alert alert-success">
  <strong>Success:</strong> Operation completed successfully.
</div>

<div class="alert alert-warning">
  <strong>Warning:</strong> Please review before proceeding.
</div>

<div class="alert alert-error">
  <strong>Error:</strong> Something went wrong.
</div>
```

## Styling & Theming

### Color Palettes

The template includes 10 pre-configured color palettes:

1. **Blue** - Professional and trustworthy
2. **Purple** - Creative and modern
3. **Green** - Fresh and eco-friendly
4. **Orange** - Energetic and friendly
5. **Red** - Bold and attention-grabbing
6. **Teal** - Calm and sophisticated
7. **Pink** - Playful and approachable
8. **Indigo** - Deep and technical
9. **Amber** - Warm and inviting
10. **Slate** - Neutral and professional

### Creating Custom Palettes

1. Add to `_sass/themes/_palettes.scss`:

```scss
[data-palette="custom-name"] {
  // Light mode colors
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

2. Add dark mode support in `_sass/themes/_dark-mode.scss`:

```scss
[data-theme="dark"] {
  &[data-palette="custom-name"] {
    // Invert the color scale for dark mode
    --color-primary-50: #0c4a6e;
    --color-primary-100: #075985;
    // ... etc
  }
}
```

### Custom CSS

Add custom styles in `assets/css/custom.scss`:

```scss
---
---

// Your custom styles
.custom-class {
  // styles
}
```

Include in `_config.yml`:

```yaml
sass:
  style: compressed
  sass_dir: _sass
```

## Advanced Features

### Search Configuration

The search functionality uses lunr.js and can be customized:

1. **Search Fields** - Edit `search.json` to include/exclude fields
2. **Search Weights** - Adjust field importance in `assets/js/search.js`
3. **Fuzzy Matching** - Enabled by default with `~1` tolerance

### Tag Filtering

Implement tag filtering on a page:

```html
<div class="tag-filter">
  <span class="tag-filter-label">Filter by:</span>
  <span class="tag" data-tag="javascript">JavaScript</span>
  <span class="tag" data-tag="python">Python</span>
  <span class="tag-filter-clear">Clear all</span>
</div>

<div class="filtered-content">
  <div class="content-item" data-tags='["javascript"]'>
    <!-- Content -->
  </div>
</div>
```

### Custom Includes

Create reusable components in `_includes/`:

```html
<!-- _includes/custom-alert.html -->
<div class="alert alert-{{ include.type | default: 'info' }}">
  {{ include.content }}
</div>
```

Use in markdown:

```liquid
{% include custom-alert.html type="warning" content="This is a warning!" %}
```

### Analytics Integration

Add to `_includes/head.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Troubleshooting

### Common Issues

#### 1. Styles Not Loading
- Check `baseurl` in `_config.yml`
- Ensure CSS files are referenced with `{{ '/assets/css/main.css' | relative_url }}`

#### 2. Search Not Working
- Verify `search.json` is generated correctly
- Check browser console for JavaScript errors
- Ensure lunr.js is loaded

#### 3. GitHub Pages Build Failures
- Check for unsupported plugins
- Verify Jekyll version compatibility
- Review build logs in Actions tab

#### 4. Dark Mode Issues
- Clear browser cache
- Check localStorage for saved preferences
- Verify CSS variables are defined

### Performance Optimization

1. **Image Optimization**
   - Use WebP format when possible
   - Implement lazy loading
   - Optimize image sizes

2. **CSS Optimization**
   - Minimize CSS files
   - Remove unused styles
   - Use CSS variables efficiently

3. **JavaScript Optimization**
   - Minimize JS files
   - Load scripts asynchronously
   - Use defer attribute

### Browser Support

The template supports:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

### Getting Help

1. Check the [documentation](/)
2. Search [existing issues](https://github.com/yourusername/docs-template/issues)
3. Create a new issue with:
   - Clear problem description
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/OS information

---

For more examples and live demos, visit the [demo site](https://yourusername.github.io/docs-template/).