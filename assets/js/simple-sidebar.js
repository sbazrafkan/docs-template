// Simple sidebar navigation
document.addEventListener('DOMContentLoaded', function() {
  console.log('Simple sidebar script initialized');
  
  // Function to scroll to element with offset
  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (!element) {
      console.log('Element not found:', elementId);
      return;
    }
    
    const header = document.querySelector('.site-header');
    const headerHeight = header ? header.offsetHeight : 0;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight - 20;
    
    console.log('Scrolling to:', elementId, 'at position:', offsetPosition);
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  
  // Handle all clicks on document
  document.addEventListener('click', function(e) {
    // Check if it's a link with hash
    const link = e.target.closest('a[href*="#"]');
    if (!link) return;
    
    const href = link.getAttribute('href');
    console.log('Link clicked:', href);
    
    // Check if it's a same-page hash link
    if (href.startsWith('#')) {
      e.preventDefault();
      const hash = href.substring(1);
      scrollToElement(hash);
      history.pushState(null, null, href);
      return;
    }
    
    // Check if it's a link to current page with hash
    const [path, hash] = href.split('#');
    if (hash && (path === window.location.pathname || path + '/' === window.location.pathname)) {
      e.preventDefault();
      scrollToElement(hash);
      history.pushState(null, null, '#' + hash);
    }
  });
  
  // Handle initial page load with hash
  if (window.location.hash) {
    setTimeout(function() {
      const hash = window.location.hash.substring(1);
      console.log('Initial hash found:', hash);
      scrollToElement(hash);
    }, 100);
  }
  
  // Update active states on scroll
  let scrollTimer;
  function updateActiveStates() {
    const sections = document.querySelectorAll('h2[id], h3[id]');
    const links = document.querySelectorAll('.sidebar-submenu a');
    
    let currentSection = '';
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
      if (section.offsetTop <= scrollPosition) {
        currentSection = section.getAttribute('id');
      }
    });
    
    links.forEach(link => {
      link.classList.remove('active');
      if (currentSection && link.getAttribute('href').endsWith('#' + currentSection)) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(updateActiveStates, 50);
  });
  
  // Initial update
  updateActiveStates();
});