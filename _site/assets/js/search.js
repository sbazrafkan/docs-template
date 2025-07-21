// Search functionality using lunr.js

(function() {
  'use strict';

  let searchIndex = null;
  let searchData = [];

  // Initialize search
  function initSearch() {
    // Load search data
    const baseUrl = document.querySelector('meta[name="base-url"]')?.content || '';
    fetch(baseUrl + '/search.json')
      .then(response => response.json())
      .then(data => {
        searchData = data;
        
        // Build lunr index
        searchIndex = lunr(function() {
          this.ref('id');
          this.field('title', { boost: 10 });
          this.field('content');
          this.field('tags', { boost: 5 });
          this.field('description', { boost: 3 });

          data.forEach(function(doc) {
            this.add(doc);
          }, this);
        });
      })
      .catch(err => console.error('Failed to load search data:', err));
  }

  // Perform search
  function doSearch(query) {
    if (!searchIndex || !query.trim()) {
      return [];
    }

    try {
      // Search with fuzzy matching
      const results = searchIndex.search(query + '~1');
      
      // Map results to documents
      return results.map(result => {
        const doc = searchData.find(d => d.id === result.ref);
        return {
          ...doc,
          score: result.score
        };
      });
    } catch (err) {
      console.error('Search error:', err);
      return [];
    }
  }

  // Highlight search terms
  function highlightTerms(text, terms) {
    let highlighted = text;
    terms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      highlighted = highlighted.replace(regex, '<mark>$1</mark>');
    });
    return highlighted;
  }

  // Get excerpt with context
  function getExcerpt(content, terms, maxLength = 150) {
    const lowerContent = content.toLowerCase();
    let bestPosition = -1;
    let bestScore = 0;

    // Find best position based on term density
    terms.forEach(term => {
      const index = lowerContent.indexOf(term.toLowerCase());
      if (index !== -1) {
        let score = 1;
        // Check for other terms nearby
        terms.forEach(otherTerm => {
          if (otherTerm !== term) {
            const nearbyIndex = lowerContent.indexOf(otherTerm.toLowerCase(), Math.max(0, index - 50));
            if (nearbyIndex !== -1 && Math.abs(nearbyIndex - index) < 100) {
              score++;
            }
          }
        });
        
        if (score > bestScore) {
          bestScore = score;
          bestPosition = index;
        }
      }
    });

    if (bestPosition === -1) {
      // No terms found, return beginning
      return content.substring(0, maxLength) + '...';
    }

    // Extract excerpt around best position
    const start = Math.max(0, bestPosition - 50);
    const end = Math.min(content.length, start + maxLength);
    let excerpt = content.substring(start, end);

    // Add ellipsis
    if (start > 0) excerpt = '...' + excerpt;
    if (end < content.length) excerpt = excerpt + '...';

    return excerpt;
  }

  // Render search results
  function renderResults(results, query) {
    const resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) return;

    if (results.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-no-results">
          <p>No results found for "<strong>${query}</strong>"</p>
          <p class="search-suggestion">Try different keywords or check your spelling</p>
        </div>
      `;
      return;
    }

    const terms = query.toLowerCase().split(/\s+/);
    
    const html = results.map(result => {
      const excerpt = getExcerpt(result.content, terms);
      const highlightedExcerpt = highlightTerms(excerpt, terms);
      const highlightedTitle = highlightTerms(result.title, terms);
      
      const tags = result.tags ? result.tags.map(tag => 
        `<span class="search-result-tag">${tag}</span>`
      ).join('') : '';

      return `
        <a href="${result.url}" class="search-result">
          <div class="search-result-title">${highlightedTitle}</div>
          ${result.description ? `<div class="search-result-description">${result.description}</div>` : ''}
          <div class="search-result-excerpt">${highlightedExcerpt}</div>
          ${tags ? `<div class="search-result-tags">${tags}</div>` : ''}
        </a>
      `;
    }).join('');

    resultsContainer.innerHTML = `
      <div class="search-results-header">
        <span>${results.length} result${results.length !== 1 ? 's' : ''} for "<strong>${query}</strong>"</span>
      </div>
      <div class="search-results-list">${html}</div>
    `;
  }

  // Debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initSearch();

    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchInput && searchResults) {
      // Debounced search
      const debouncedSearch = debounce(function(query) {
        if (query.trim()) {
          const results = doSearch(query);
          renderResults(results, query);
        } else {
          searchResults.innerHTML = '';
        }
      }, 300);

      // Search on input
      searchInput.addEventListener('input', function(e) {
        debouncedSearch(e.target.value);
      });

      // Handle enter key
      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          const firstResult = searchResults.querySelector('.search-result');
          if (firstResult) {
            window.location.href = firstResult.getAttribute('href');
          }
        }
      });

      // Navigate results with arrow keys
      let selectedIndex = -1;
      searchInput.addEventListener('keydown', function(e) {
        const results = searchResults.querySelectorAll('.search-result');
        
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          selectedIndex = Math.min(selectedIndex + 1, results.length - 1);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          selectedIndex = Math.max(selectedIndex - 1, -1);
        } else {
          return;
        }

        // Update selection
        results.forEach((result, index) => {
          if (index === selectedIndex) {
            result.classList.add('selected');
            result.scrollIntoView({ block: 'nearest' });
          } else {
            result.classList.remove('selected');
          }
        });
      });
    }
  });
})();