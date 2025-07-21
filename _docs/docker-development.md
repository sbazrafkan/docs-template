---
layout: doc
title: Docker Development Guide
description: Complete guide for using Docker to develop your documentation locally
tags: [docker, development, local]
order: 3
section: Development
subsections:
  - title: Why Docker?
    id: why-docker
  - title: Quick Start
    id: quick-start
  - title: Docker Commands
    id: docker-commands
  - title: Troubleshooting
    id: troubleshooting
---

# Docker Development Guide

This guide explains how to use Docker for local development of your documentation site without installing Ruby, Jekyll, or any other dependencies on your machine.

## Why Docker? {#why-docker}

Using Docker for local development provides several benefits:

{:.list-check}
- **No Installation Required** - No need to install Ruby, Jekyll, or manage gem dependencies
- **Consistent Environment** - Same environment across all team members and machines
- **Clean System** - Doesn't pollute your system with global installations
- **Easy Updates** - Update dependencies by rebuilding the container
- **Multiple Projects** - Run different Jekyll versions for different projects
- **Platform Independent** - Works the same on Windows, macOS, and Linux

## Quick Start {#quick-start}

<div class="steps">
  <div class="step">
    <div class="step-indicator">1</div>
    <div class="step-connector"></div>
    <div class="step-content">
      <h3 class="step-title">Install Docker</h3>
      <p class="step-description">Download and install Docker Desktop from <a href="https://docker.com">docker.com</a></p>
    </div>
  </div>
  
  <div class="step">
    <div class="step-indicator">2</div>
    <div class="step-connector"></div>
    <div class="step-content">
      <h3 class="step-title">Clone Repository</h3>
      <p class="step-description">Clone your documentation repository to your local machine</p>
      <pre><code class="language-bash">git clone https://github.com/yourusername/docs-template.git
cd docs-template</code></pre>
    </div>
  </div>
  
  <div class="step">
    <div class="step-indicator">3</div>
    <div class="step-content">
      <h3 class="step-title">Start Development Server</h3>
      <p class="step-description">Run Docker Compose to start the Jekyll server</p>
      <pre><code class="language-bash">docker-compose up</code></pre>
    </div>
  </div>
</div>

Once running, access your site at `http://localhost:4000`. The server includes:
- **Live Reload** - Changes automatically refresh in your browser
- **File Watching** - All file changes are detected
- **Error Messages** - Build errors appear in the terminal

## Docker Commands {#docker-commands}

### Basic Commands

| Command | Description |
|---------|-------------|
| `docker-compose up` | Start the development server |
| `docker-compose up -d` | Start in background (detached mode) |
| `docker-compose down` | Stop the server |
| `docker-compose logs -f` | View server logs |
| `docker-compose build` | Rebuild the container |

### Development Workflow

```bash
# Start development
docker-compose up

# Make your changes - files are automatically synced
# The browser will auto-reload when you save files

# Stop when done
docker-compose down
```

### Advanced Commands

```bash
# Rebuild after changing Gemfile
docker-compose build --no-cache

# Run a specific Jekyll command
docker-compose run jekyll bundle exec jekyll build

# Access the container shell
docker-compose run jekyll bash

# Clean up everything (including volumes)
docker-compose down -v
```

## Container Details

The Docker setup includes:

### Dockerfile Configuration
- **Base Image**: Ruby 3.0 slim for smaller size
- **Dependencies**: Build tools, Git, Node.js
- **Jekyll**: Latest version with all plugins
- **Ports**: 4000 (Jekyll) and 35729 (LiveReload)

### Docker Compose Features
- **Volume Mounting**: Your local files are synced to the container
- **Bundle Cache**: Gems are cached for faster rebuilds
- **Development Config**: Uses `_config_dev.yml` for local settings
- **Force Polling**: Ensures file changes are detected on all systems

### File Structure
```
docs-template/
├── Dockerfile          # Container configuration
├── docker-compose.yml  # Service orchestration
├── .dockerignore      # Files to exclude from container
└── _config_dev.yml    # Development-specific Jekyll config
```

## Troubleshooting {#troubleshooting}

### Common Issues and Solutions

#### Port Already in Use
```bash
# Error: bind: address already in use
# Solution: Change the port in docker-compose.yml
ports:
  - "4001:4000"  # Use 4001 instead
```

#### Files Not Updating
```bash
# Solution: Force polling is enabled by default
# If still having issues, restart the container
docker-compose restart
```

#### Permission Errors
```bash
# On Linux, you might need to fix ownership
sudo chown -R $USER:$USER .
```

#### Slow Performance on Windows
```bash
# Use WSL2 for better performance
# Run Docker and your files inside WSL2
```

### Debugging Tips

1. **Check Logs**: Always check `docker-compose logs -f` for errors
2. **Rebuild Clean**: Try `docker-compose down -v && docker-compose build`
3. **Container Shell**: Access with `docker-compose run jekyll bash`
4. **Jekyll Version**: Check with `docker-compose run jekyll jekyll -v`

## Performance Optimization

### Tips for Better Performance

{:.list-arrow}
- Use `.dockerignore` to exclude large files
- Mount only necessary directories
- Use Docker Desktop's resource settings
- Enable virtualization in BIOS
- Keep Docker Desktop updated

### Resource Configuration

In Docker Desktop settings:
- **CPUs**: Allocate at least 2 CPUs
- **Memory**: Allocate at least 2GB RAM
- **Disk**: Ensure adequate disk space

## Docker vs Traditional Setup

| Feature | Docker | Traditional |
|---------|--------|-------------|
| Setup Time | ~5 minutes | ~20-30 minutes |
| Ruby Installation | Not needed | Required |
| Dependency Management | Automatic | Manual |
| System Impact | None | Global gems |
| Version Conflicts | Isolated | Possible |
| Team Consistency | Guaranteed | Varies |

## Next Steps

Now that you have Docker development running:

1. **Make Changes**: Edit files in your favorite editor
2. **See Results**: Changes appear instantly at `http://localhost:4000`
3. **Test Production**: Build with `docker-compose run jekyll jekyll build`
4. **Deploy**: Push to GitHub for automatic GitHub Pages deployment

<div class="alert alert-success">
  <strong>Pro Tip:</strong> You can run multiple documentation projects simultaneously by using different ports in docker-compose.yml!
</div>