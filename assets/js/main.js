// Main JavaScript file

(function() {
  'use strict';

  // Mobile menu toggle
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.sidebar-mobile');
    const overlay = document.querySelector('.sidebar-overlay');

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function() {
        const isActive = mobileMenu.classList.contains('active');
        
        if (isActive) {
          mobileMenu.classList.remove('active');
          menuToggle.classList.remove('active');
          if (overlay) overlay.classList.remove('active');
          document.body.style.overflow = '';
        } else {
          mobileMenu.classList.add('active');
          menuToggle.classList.add('active');
          if (overlay) overlay.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });

      // Close on overlay click
      if (overlay) {
        overlay.addEventListener('click', function() {
          mobileMenu.classList.remove('active');
          menuToggle.classList.remove('active');
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        });
      }
    }
  }

  // Collapsible sidebar sections
  function initCollapsibles() {
    const toggles = document.querySelectorAll('.sidebar-toggle');
    
    toggles.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        const target = document.querySelector(this.getAttribute('data-target'));
        
        if (target) {
          if (isExpanded) {
            this.setAttribute('aria-expanded', 'false');
            target.classList.remove('show');
          } else {
            this.setAttribute('aria-expanded', 'true');
            target.classList.add('show');
          }
        }
      });
    });
  }

  // Copy code button functionality
  function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach(function(block) {
      // Skip if this is inside a rouge-gutter (line numbers)
      if (block.closest('.rouge-gutter')) {
        return;
      }
      
      // Skip if already has a copy button
      if (block.parentElement && block.parentElement.querySelector('.code-copy-button')) {
        return;
      }
      
      // For Rouge highlighted code, only add button to the main container
      const highlightContainer = block.closest('.highlight');
      const rougeTable = block.closest('.rouge-table');
      
      // Skip if inside a table but not in the code column
      if (rougeTable && !block.closest('.rouge-code')) {
        return;
      }
      
      // Determine where to add the button
      let targetContainer = highlightContainer || block;
      
      // Add copy button
      const copyBtn = document.createElement('button');
      copyBtn.className = 'code-copy-button';
      copyBtn.textContent = 'Copy';
      copyBtn.setAttribute('aria-label', 'Copy code');
      
      copyBtn.addEventListener('click', function() {
        // Find the actual code content
        let codeText = '';
        
        if (rougeTable) {
          // For tables with line numbers, get only the code content
          const codeCell = rougeTable.querySelector('.rouge-code code');
          codeText = codeCell ? codeCell.textContent : '';
        } else {
          // For regular code blocks
          const code = block.querySelector('code');
          codeText = code ? code.textContent : block.textContent;
        }
        
        navigator.clipboard.writeText(codeText).then(function() {
          copyBtn.textContent = 'Copied';
          copyBtn.classList.add('copied');
          
          setTimeout(function() {
            copyBtn.textContent = 'Copy';
            copyBtn.classList.remove('copied');
          }, 2000);
        }).catch(function(err) {
          console.error('Failed to copy:', err);
        });
      });
      
      // Add button to the appropriate container
      if (highlightContainer) {
        highlightContainer.style.position = 'relative';
        highlightContainer.appendChild(copyBtn);
      } else {
        // Wrap the pre in a div if needed
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block';
        wrapper.style.position = 'relative';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);
        wrapper.appendChild(copyBtn);
      }
    });
  }

  // Table of contents generation
  function generateTOC() {
    const tocNav = document.getElementById('toc-nav');
    if (!tocNav) return;
    
    const headings = document.querySelectorAll('.doc-body h2, .doc-body h3, .doc-body h4');
    if (headings.length === 0) {
      document.querySelector('.doc-toc').style.display = 'none';
      return;
    }
    
    const toc = document.createElement('ul');
    let currentLevel = 2;
    let currentList = toc;
    const listStack = [toc];
    
    headings.forEach(function(heading) {
      const level = parseInt(heading.tagName.charAt(1));
      const id = heading.id || heading.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      
      // Set ID if not present
      if (!heading.id) {
        heading.id = id;
      }
      
      // Add anchor link
      const anchor = document.createElement('a');
      anchor.className = 'heading-anchor';
      anchor.href = '#' + id;
      anchor.innerHTML = '#';
      anchor.setAttribute('aria-label', 'Anchor link for ' + heading.textContent);
      heading.insertBefore(anchor, heading.firstChild);
      
      // Create TOC item
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = heading.textContent.replace('#', '');
      li.appendChild(a);
      
      // Handle nesting
      if (level > currentLevel) {
        const newList = document.createElement('ul');
        const lastLi = currentList.lastElementChild;
        if (lastLi) {
          lastLi.appendChild(newList);
          listStack.push(newList);
          currentList = newList;
        }
      } else if (level < currentLevel) {
        const levelDiff = currentLevel - level;
        for (let i = 0; i < levelDiff; i++) {
          listStack.pop();
          if (listStack.length > 0) {
            currentList = listStack[listStack.length - 1];
          }
        }
      }
      
      currentLevel = level;
      currentList.appendChild(li);
    });
    
    tocNav.appendChild(toc);
    
    // Add scroll spy
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        const id = entry.target.id;
        const tocLink = tocNav.querySelector(`a[href="#${id}"]`);
        
        if (tocLink) {
          if (entry.isIntersecting) {
            // Remove other active classes
            tocNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            tocLink.classList.add('active');
          }
        }
      });
    }, {
      rootMargin: '-100px 0px -70% 0px'
    });
    
    headings.forEach(heading => observer.observe(heading));
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    // Handle clicks on anchor links
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a[href*="#"]');
      if (!link) return;
      
      const href = link.getAttribute('href');
      if (!href) return;
      
      // Handle both same-page anchors and cross-page anchors
      const [path, hash] = href.split('#');
      
      if (hash) {
        // If it's a same-page anchor or the path matches current page
        if (!path || path === window.location.pathname || path === window.location.pathname + '/') {
          e.preventDefault();
          const target = document.getElementById(hash);
          
          if (target) {
            const offset = 80; // Header height + padding
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
            
            // Update URL
            history.pushState(null, null, '#' + hash);
          }
        }
        // For cross-page anchors, let the browser handle it normally
      }
    });
    
    // Handle page load with hash
    function scrollToHash() {
      if (window.location.hash) {
        const targetId = window.location.hash.slice(1);
        const target = document.getElementById(targetId);
        
        if (target) {
          setTimeout(function() {
            const offset = 80; // Header height + padding
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }, 100); // Small delay to ensure page layout is complete
        }
      }
    }
    
    // Scroll to hash on page load
    scrollToHash();
    
    // Also handle hash changes
    window.addEventListener('hashchange', scrollToHash);
  }

  // Search modal
  function initSearch() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchModal = document.querySelector('.search-modal');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.getElementById('search-input');

    if (searchToggle && searchModal) {
      searchToggle.addEventListener('click', function() {
        searchModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (searchInput) searchInput.focus();
      });

      const closeSearch = function() {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
        if (searchInput) searchInput.value = '';
      };

      if (searchClose) {
        searchClose.addEventListener('click', closeSearch);
      }

      // Close on escape
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
          closeSearch();
        }
      });

      // Close on backdrop click
      searchModal.addEventListener('click', function(e) {
        if (e.target === searchModal) {
          closeSearch();
        }
      });
    }

    // Keyboard shortcut (Cmd/Ctrl + K)
    document.addEventListener('keydown', function(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (searchToggle) searchToggle.click();
      }
    });
  }

  // Initialize all features
  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initCollapsibles();
    initCodeCopy();
    generateTOC();
    // initSmoothScroll(); // Disabled - handled by simple-sidebar.js
    initSearch();
  });
})();