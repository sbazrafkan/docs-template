---
layout: doc
title: Getting Started
description: Quick start guide to get your documentation site up and running
tags: [tutorial, beginner]
order: 1
section: Getting Started
subsections:
  - title: Prerequisites
    id: prerequisites
  - title: Installation
    id: installation
  - title: First Steps
    id: first-steps
---

# Getting Started

Welcome to the Modern Documentation Template! This guide will help you get your documentation site up and running in just a few minutes.

## Prerequisites {#prerequisites}

Before you begin, make sure you have:

{:.list-check}
- A GitHub account
- Basic knowledge of Markdown
- A text editor (VS Code, Sublime Text, etc.)

For local development (optional):
- Ruby 2.5.0 or higher
- RubyGems
- GCC and Make

## Installation {#installation}

### Method 1: Using GitHub Pages (Recommended)

<div class="steps">
  <div class="step">
    <div class="step-indicator">1</div>
    <div class="step-connector"></div>
    <div class="step-content">
      <h3 class="step-title">Fork the Repository</h3>
      <p class="step-description">Click the "Fork" button on the repository page to create your own copy.</p>
    </div>
  </div>
  
  <div class="step">
    <div class="step-indicator">2</div>
    <div class="step-connector"></div>
    <div class="step-content">
      <h3 class="step-title">Enable GitHub Pages</h3>
      <p class="step-description">Go to Settings → Pages and configure the source branch.</p>
    </div>
  </div>
  
  <div class="step">
    <div class="step-indicator">3</div>
    <div class="step-content">
      <h3 class="step-title">Access Your Site</h3>
      <p class="step-description">Your site will be available at https://[username].github.io/[repository-name]/</p>
    </div>
  </div>
</div>

### Method 2: Local Development with Docker (Recommended)

**No installation required!** Use Docker for a clean development environment:

```bash
# Clone your fork
git clone https://github.com/yourusername/docs-template.git
cd docs-template

# Start with Docker Compose
docker-compose up

# Open http://localhost:4000 in your browser
```

<div class="alert alert-info">
  <strong>Why Docker?</strong> No need to install Ruby, Jekyll, or any dependencies. Everything runs in an isolated container, keeping your system clean.
</div>

### Method 3: Traditional Local Development

If you prefer to install Jekyll directly:

```bash
# Clone your fork
git clone https://github.com/yourusername/docs-template.git
cd docs-template

# Install dependencies
bundle install

# Run locally
bundle exec jekyll serve

# Open http://localhost:4000 in your browser
```

## First Steps {#first-steps}

Once your site is running, here are the first things you should do:

### 1. Configure Your Site

Edit `_config.yml` to customize your site:

```yaml
title: My Documentation
description: Documentation for my awesome project
theme_color: "blue" # Choose your color palette
```

### 2. Add Your First Page

Create a new file in the `_docs` folder:

```yaml
---
layout: doc
title: My First Page
description: This is my first documentation page
tags: [example]
order: 1
section: Getting Started
---

# My First Page

Your content goes here...
```

### 3. Customize Navigation

Update the navigation in `_config.yml`:

```yaml
navigation:
  - title: Home
    url: /
  - title: Docs
    url: /docs/
  - title: About
    url: /about/
```

### 4. Choose a Color Palette

The template includes 10 beautiful color palettes. Try them out by clicking the palette icon in the header!

<div class="alert alert-info">
  <strong>Tip:</strong> You can set a default palette in <code>_config.yml</code> with the <code>theme_color</code> setting.
</div>

## What's Next?

Now that you have your documentation site running, explore these resources:

{:.list-arrow}
- [Writing Documentation](/docs/writing/) - Learn about Markdown features and components
- [Customization Guide](/docs/customization/) - Make the template your own
- [Components Reference](/docs/components/) - See all available components
- [Deployment Guide](/docs/deployment/) - Deploy to custom domains

<div class="alert alert-success">
  <strong>Success!</strong> You're ready to start creating beautiful documentation.
</div>