# Modern Documentation Template

A beautiful, modern documentation template for GitHub Pages with stunning design and powerful features.

![Documentation Template](https://via.placeholder.com/1200x600)

## ✨ Features

- **🎨 10 Color Palettes**: Choose from 10 beautiful color palettes, each with full dark mode support
- **🔍 Powerful Search**: Built-in search with real-time results and fuzzy matching
- **🌙 Dark Mode**: Automatic dark mode support for all color palettes
- **📱 Fully Responsive**: Mobile-first design that looks great on all devices
- **💻 Rich Components**: Code blocks, tables, custom lists, step guides, and more
- **🏷️ Tagging System**: Organize content with tags for easy filtering
- **⚡ Fast & Modern**: Built with Jekyll for GitHub Pages, optimized for performance
- **🎯 Easy to Use**: Simple setup and customization

## 🚀 Quick Start

### 1. Fork and Setup

1. Fork this repository
2. Go to Settings → Pages in your repository
3. Source: Deploy from a branch
4. Branch: main (or master)
5. Folder: / (root)
6. Save

Your site will be available at `https://[username].github.io/[repository-name]/`

### 2. Configure Your Site

Edit `_config.yml`:

```yaml
title: Your Documentation Title
description: Your site description
baseurl: "/your-repo-name" # for github.io/repo-name
url: "https://username.github.io" # your GitHub Pages URL

# Choose your default color palette
theme_color: "blue" # blue, purple, green, orange, red, teal, pink, indigo, amber, slate
```

### 3. Add Documentation

Create markdown files in the `_docs` folder:

```yaml
---
layout: doc
title: Page Title
description: Page description
tags: [tag1, tag2]
order: 1
section: Getting Started
---

Your content here...
```

## 📁 Project Structure

```
.
├── _config.yml          # Jekyll configuration
├── _config_dev.yml      # Development config (for Docker)
├── _docs/               # Documentation pages
├── _includes/           # Reusable components
├── _layouts/            # Page layouts
├── _sass/               # SCSS styles
├── assets/              # CSS, JS, images
│   ├── css/
│   ├── js/
│   └── images/
├── docker-compose.yml   # Docker development setup
├── Dockerfile           # Docker container configuration
├── .dockerignore        # Docker ignore file
├── index.md             # Home page
└── search.json          # Search index
```

## 🎨 Customization

### Color Palettes

The template includes 10 pre-designed color palettes:
- Blue (default)
- Purple
- Green
- Orange
- Red
- Teal
- Pink
- Indigo
- Amber
- Slate

Change the default palette in `_config.yml`:
```yaml
theme_color: "purple"
```

### Adding Custom Palettes

Add your custom palette in `_sass/themes/_palettes.scss`:

```scss
[data-palette="custom"] {
  --color-primary-50: #your-color;
  --color-primary-100: #your-color;
  // ... add all color values
}
```

### Components

The template includes many components:

- **Lists**: Regular, numbered, custom indicators
- **Code Blocks**: Syntax highlighting with copy button
- **Tables**: Responsive with various styles
- **Steps**: Visual step-by-step guides
- **Tags**: Categorize and filter content
- **Buttons**: Multiple styles and sizes
- **Alerts**: Info, warning, success, error

## 📝 Writing Documentation

### Front Matter

Each documentation page should have front matter:

```yaml
---
layout: doc
title: Your Page Title
description: Brief description
tags: [tutorial, advanced]
order: 1 # for sidebar ordering
section: Section Name
---
```

### Markdown Features

All standard markdown features plus:

```markdown
# Headings with auto-generated anchors

**Bold** and *italic* text

- Custom list indicators
  - Nested items
  - Multiple levels

1. Numbered lists
2. With automatic numbering

`inline code` and code blocks:

​```javascript
const example = "Syntax highlighted";
​```

| Tables | Are | Responsive |
|--------|-----|------------|
| Cell 1 | Cell 2 | Cell 3 |

> Blockquotes with citations

[Links](url) and ![Images](url)
```

### Special Components

#### Steps
```html
<div class="steps">
  <div class="step">
    <div class="step-indicator">1</div>
    <div class="step-content">
      <h3 class="step-title">First Step</h3>
      <p class="step-description">Description</p>
    </div>
  </div>
</div>
```

#### Tags
```html
<span class="tag">Tag Name</span>
<span class="tag tag-success">Success</span>
```

## 🔧 Development

### Option 1: Docker (Recommended - No Installation Required!)

The easiest way to run the documentation locally without installing anything:

1. **Prerequisites**: Only Docker and Docker Compose installed on your machine

2. **Clone and Run**:
```bash
# Clone the repository
git clone https://github.com/yourusername/docs-template.git
cd docs-template

# Start with Docker Compose
docker-compose up

# Or run in background
docker-compose up -d
```

3. **Access**: Visit `http://localhost:4000`

4. **Stop the container**:
```bash
docker-compose down
```

**Benefits of Docker approach:**
- ✅ No Ruby/Jekyll installation needed
- ✅ Consistent environment across all machines
- ✅ Automatic dependency management
- ✅ Live reload enabled
- ✅ Clean - doesn't pollute your system

### Option 2: Traditional Local Setup

If you prefer to install Jekyll locally:

1. **Install Jekyll**:
```bash
gem install jekyll bundler
```

2. **Clone and install dependencies**:
```bash
git clone https://github.com/yourusername/docs-template.git
cd docs-template
bundle install
```

3. **Run locally**:
```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000`

### File Structure

- `_sass/`: All SCSS files organized by type
- `assets/js/`: JavaScript files (theme, search, main)
- `_includes/`: Reusable HTML components
- `_layouts/`: Page templates

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Search powered by [lunr.js](https://lunrjs.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ for the documentation community
