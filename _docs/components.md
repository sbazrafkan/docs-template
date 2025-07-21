---
layout: doc
title: Components Showcase
description: All available components with examples and usage
tags: [reference, components, examples]
order: 2
section: Components
subsections:
  - title: Typography
    id: typography
  - title: Lists
    id: lists
  - title: Code Blocks
    id: code-blocks
  - title: Tables
    id: tables
  - title: Buttons
    id: buttons
  - title: Tags
    id: tags
  - title: Steps
    id: steps
---

# Components Showcase

This page demonstrates all the components available in the Modern Documentation Template.

## Typography {#typography}

### Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

### Text Styles

**Bold text** and *italic text* and ***bold italic text***

<mark>Highlighted text</mark>

<del>Strikethrough text</del>

<u>Underlined text</u>

<abbr title="Hypertext Markup Language">HTML</abbr>

> This is a blockquote. It can contain multiple lines and even other elements.
>
> Like this second paragraph.

### Lead Paragraph

<p class="lead">This is a lead paragraph. It's slightly larger and stands out from regular text, perfect for introductions.</p>

## Lists {#lists}

### Unordered Lists

Regular list:
- First item
- Second item
  - Nested item
  - Another nested item
- Third item

Custom indicators:

{:.list-check}
- Completed task
- Another completed task
- Final completed task

{:.list-arrow}
- Step one
- Step two
- Step three

{:.list-star}
- Important point
- Another important point
- Critical information

{:.list-triangle}
- First point
- Second point
- Third point

### Ordered Lists

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

### Task Lists

- [x] Completed task
- [x] Another completed task
- [ ] Pending task
- [ ] Future task

### Definition Lists

Jekyll
: A static site generator written in Ruby

Markdown
: A lightweight markup language for creating formatted text

YAML
: A human-readable data serialization language

## Code Blocks {#code-blocks}

### Inline Code

Use `inline code` for short code snippets within text.

### Code Blocks with Syntax Highlighting

JavaScript:
```javascript
// Function to calculate factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

Python:
```python
# Python example with classes
class Calculator:
    def __init__(self):
        self.result = 0
    
    def add(self, x, y):
        return x + y
    
    def multiply(self, x, y):
        return x * y

calc = Calculator()
print(calc.add(5, 3))
```

HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

Shell:
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Tables {#tables}

### Basic Table

| Feature | Description | Status |
|---------|-------------|--------|
| Dark Mode | Automatic dark/light theme switching | ✅ Completed |
| Search | Full-text search with fuzzy matching | ✅ Completed |
| Responsive | Mobile-first responsive design | ✅ Completed |
| Multi-language | Support for multiple languages | 🚧 Planned |

### Responsive Table

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Browser</th>
        <th>Version</th>
        <th>Support</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Browser">Chrome</td>
        <td data-label="Version">Latest 2</td>
        <td data-label="Support"><span class="badge badge-success">Full</span></td>
        <td data-label="Notes">Recommended browser</td>
      </tr>
      <tr>
        <td data-label="Browser">Firefox</td>
        <td data-label="Version">Latest 2</td>
        <td data-label="Support"><span class="badge badge-success">Full</span></td>
        <td data-label="Notes">Excellent support</td>
      </tr>
      <tr>
        <td data-label="Browser">Safari</td>
        <td data-label="Version">Latest 2</td>
        <td data-label="Support"><span class="badge badge-success">Full</span></td>
        <td data-label="Notes">Good support</td>
      </tr>
      <tr>
        <td data-label="Browser">Edge</td>
        <td data-label="Version">Latest 2</td>
        <td data-label="Support"><span class="badge badge-success">Full</span></td>
        <td data-label="Notes">Chromium-based</td>
      </tr>
    </tbody>
  </table>
</div>

## Buttons {#buttons}

### Button Styles

<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>

### Button Sizes

<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Large</button>

### Button States

<button class="btn btn-primary" disabled>Disabled</button>
<button class="btn btn-primary btn-loading">Loading</button>

### Button Group

<div class="btn-group">
  <button class="btn btn-secondary">Left</button>
  <button class="btn btn-secondary">Middle</button>
  <button class="btn btn-secondary">Right</button>
</div>

## Tags {#tags}

### Basic Tags

<span class="tag">Default</span>
<span class="tag tag-primary">Primary</span>
<span class="tag tag-success">Success</span>
<span class="tag tag-warning">Warning</span>
<span class="tag tag-error">Error</span>

### Tag Sizes

<span class="tag tag-sm">Small</span>
<span class="tag">Normal</span>
<span class="tag tag-lg">Large</span>

### Tag Group

<div class="tag-group">
  <span class="tag">JavaScript</span>
  <span class="tag">Python</span>
  <span class="tag">Ruby</span>
  <span class="tag">Go</span>
  <span class="tag">Rust</span>
</div>

## Steps {#steps}

### Vertical Steps

<div class="steps">
  <div class="step">
    <div class="step-indicator completed">1</div>
    <div class="step-connector completed"></div>
    <div class="step-content">
      <h3 class="step-title">Create Account</h3>
      <p class="step-description">Sign up for a new account with your email address.</p>
    </div>
  </div>
  
  <div class="step">
    <div class="step-indicator active">2</div>
    <div class="step-connector"></div>
    <div class="step-content">
      <h3 class="step-title">Verify Email</h3>
      <p class="step-description">Check your inbox and click the verification link.</p>
    </div>
  </div>
  
  <div class="step">
    <div class="step-indicator">3</div>
    <div class="step-content">
      <h3 class="step-title">Complete Profile</h3>
      <p class="step-description">Add your details and preferences to complete setup.</p>
    </div>
  </div>
</div>

### Process Pipeline

<div class="pipeline">
  <div class="pipeline-item">
    <div class="pipeline-title">Input</div>
    <div class="pipeline-description">Raw data</div>
  </div>
  <div class="pipeline-item active">
    <div class="pipeline-title">Process</div>
    <div class="pipeline-description">Transform</div>
  </div>
  <div class="pipeline-item">
    <div class="pipeline-title">Validate</div>
    <div class="pipeline-description">Check quality</div>
  </div>
  <div class="pipeline-item">
    <div class="pipeline-title">Output</div>
    <div class="pipeline-description">Final result</div>
  </div>
</div>

## Alerts

<div class="alert alert-info">
  <strong>Info:</strong> This is an informational message with helpful details.
</div>

<div class="alert alert-success">
  <strong>Success:</strong> The operation completed successfully!
</div>

<div class="alert alert-warning">
  <strong>Warning:</strong> Please review this information carefully.
</div>

<div class="alert alert-error">
  <strong>Error:</strong> Something went wrong. Please try again.
</div>

## Images

### Regular Image

![Placeholder Image]({{ '/assets/images/placeholder.svg' | relative_url }})

### Image with Caption

<figure>
  <img src="{{ '/assets/images/placeholder.svg' | relative_url }}" alt="Placeholder">
  <figcaption>This is an image caption describing the image above.</figcaption>
</figure>

## Combined Examples

### Code in Tables

| Method | Description | Example |
|--------|-------------|---------|
| `GET` | Retrieve data | `fetch('/api/users')` |
| `POST` | Create new data | `fetch('/api/users', { method: 'POST' })` |
| `PUT` | Update data | `fetch('/api/users/1', { method: 'PUT' })` |
| `DELETE` | Remove data | `fetch('/api/users/1', { method: 'DELETE' })` |

### Lists with Code

1. Install the package:
   ```bash
   npm install package-name
   ```

2. Import in your code:
   ```javascript
   import { feature } from 'package-name';
   ```

3. Use the feature:
   ```javascript
   const result = feature({ option: true });
   ```