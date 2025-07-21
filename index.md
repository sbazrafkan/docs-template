---
layout: page
title: Modern Documentation Template
description: A beautiful, modern documentation template for GitHub Pages with stunning design and powerful features
---

<div class="hero-section">
  <h1 class="hero-title animate-fadeInUp">Beautiful Documentation Made Simple</h1>
  <p class="hero-description animate-fadeInUp animation-delay-200">Create stunning documentation sites with our modern Jekyll template. Features dark mode, search, multiple color palettes, and beautiful components.</p>
  
  <div class="hero-actions animate-fadeInUp animation-delay-400">
    <a href="{{ '/docs/getting-started/' | relative_url }}" class="btn btn-primary btn-lg">
      Get Started <i class="fas fa-arrow-right"></i>
    </a>
    <a href="https://github.com/yourusername/docs-template" class="btn btn-outline btn-lg">
      <i class="fab fa-github"></i> View on GitHub
    </a>
  </div>
</div>

## ✨ Key Features

<div class="features-grid">
  <div class="feature-card animate-fadeInUp">
    <div class="feature-icon">
      <i class="fas fa-paint-brush"></i>
    </div>
    <h3>10 Color Palettes</h3>
    <p>Choose from 10 beautiful color palettes, each with full dark mode support. Easy to customize and extend.</p>
  </div>
  
  <div class="feature-card animate-fadeInUp animation-delay-100">
    <div class="feature-icon">
      <i class="fas fa-search"></i>
    </div>
    <h3>Powerful Search</h3>
    <p>Built-in search functionality with real-time results, fuzzy matching, and keyboard navigation.</p>
  </div>
  
  <div class="feature-card animate-fadeInUp animation-delay-200">
    <div class="feature-icon">
      <i class="fas fa-moon"></i>
    </div>
    <h3>Dark Mode</h3>
    <p>Automatic dark mode support for all color palettes. Respects system preferences and saves user choice.</p>
  </div>
  
  <div class="feature-card animate-fadeInUp animation-delay-300">
    <div class="feature-icon">
      <i class="fas fa-mobile-alt"></i>
    </div>
    <h3>Fully Responsive</h3>
    <p>Mobile-first design that looks great on all devices. Optimized navigation and reading experience.</p>
  </div>
  
  <div class="feature-card animate-fadeInUp animation-delay-400">
    <div class="feature-icon">
      <i class="fas fa-code"></i>
    </div>
    <h3>Rich Components</h3>
    <p>Code blocks with syntax highlighting, tables, custom lists, step-by-step guides, and more.</p>
  </div>
  
  <div class="feature-card animate-fadeInUp animation-delay-500">
    <div class="feature-icon">
      <i class="fas fa-tags"></i>
    </div>
    <h3>Tagging System</h3>
    <p>Organize content with tags. Filter and search by tags to quickly find relevant documentation.</p>
  </div>
</div>

## 🚀 Quick Start

```bash
# 1. Fork this repository
# 2. Enable GitHub Pages in your repository settings
# 3. Choose your color palette in _config.yml
# 4. Start adding your documentation in the _docs folder
```

## 🎨 Color Palettes

<div class="palette-showcase">
  <div class="palette-item" data-palette="blue">
    <div class="palette-preview palette-blue"></div>
    <span>Blue</span>
  </div>
  <div class="palette-item" data-palette="purple">
    <div class="palette-preview palette-purple"></div>
    <span>Purple</span>
  </div>
  <div class="palette-item" data-palette="green">
    <div class="palette-preview palette-green"></div>
    <span>Green</span>
  </div>
  <div class="palette-item" data-palette="orange">
    <div class="palette-preview palette-orange"></div>
    <span>Orange</span>
  </div>
  <div class="palette-item" data-palette="red">
    <div class="palette-preview palette-red"></div>
    <span>Red</span>
  </div>
  <div class="palette-item" data-palette="teal">
    <div class="palette-preview palette-teal"></div>
    <span>Teal</span>
  </div>
  <div class="palette-item" data-palette="pink">
    <div class="palette-preview palette-pink"></div>
    <span>Pink</span>
  </div>
  <div class="palette-item" data-palette="indigo">
    <div class="palette-preview palette-indigo"></div>
    <span>Indigo</span>
  </div>
  <div class="palette-item" data-palette="amber">
    <div class="palette-preview palette-amber"></div>
    <span>Amber</span>
  </div>
  <div class="palette-item" data-palette="slate">
    <div class="palette-preview palette-slate"></div>
    <span>Slate</span>
  </div>
</div>

<style>
.hero-section {
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 4rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-400) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature-card {
  background: var(--color-bg-secondary);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary-500);
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: var(--color-primary-100);
  color: var(--color-primary-600);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

[data-theme="dark"] .feature-icon {
  background: rgba(var(--color-primary-500), 0.2);
  color: var(--color-primary-400);
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.feature-card p {
  color: var(--color-text-secondary);
  margin: 0;
}

.palette-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.palette-item {
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.palette-item:hover {
  transform: scale(1.05);
}

.palette-item .palette-preview {
  width: 80px;
  height: 80px;
  margin: 0 auto 0.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.palette-item span {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
</style>