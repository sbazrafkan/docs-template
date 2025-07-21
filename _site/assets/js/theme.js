// Theme and color palette management

(function() {
  'use strict';

  // Get saved theme or default to system preference
  function getSavedTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  // Get saved palette or default
  function getSavedPalette() {
    return localStorage.getItem('palette') || 'blue';
  }

  // Apply theme
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Apply palette
  function applyPalette(palette) {
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('palette', palette);
  }

  // Initialize theme and palette
  applyTheme(getSavedTheme());
  applyPalette(getSavedPalette());

  // Theme toggle
  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
      });
    }

    // Palette selector
    const paletteToggle = document.querySelector('.palette-toggle');
    const paletteSelector = document.querySelector('.palette-selector');
    const paletteOptions = document.querySelectorAll('.palette-option');

    if (paletteToggle && paletteSelector) {
      // Toggle dropdown
      paletteToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        paletteSelector.classList.toggle('active');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', function() {
        paletteSelector.classList.remove('active');
      });

      // Prevent closing when clicking inside dropdown
      document.querySelector('.palette-dropdown').addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }

    // Palette options
    paletteOptions.forEach(function(option) {
      option.addEventListener('click', function() {
        const palette = this.getAttribute('data-palette');
        applyPalette(palette);
        paletteSelector.classList.remove('active');
        
        // Update active state
        paletteOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Set initial active palette
    const currentPalette = getSavedPalette();
    const activePaletteOption = document.querySelector(`[data-palette="${currentPalette}"]`);
    if (activePaletteOption) {
      activePaletteOption.classList.add('active');
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  });
})();