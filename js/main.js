// The NICEHR Group - Main JavaScript
// A- Motion Design System

document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // Mobile Navigation
  // ============================================
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a link
  const links = navLinks?.querySelectorAll('a:not(.nav-dropdown > .nav-link)');
  links?.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      navToggle?.classList.remove('active');
    });
  });

  // Mobile dropdown toggle
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-link');
    if (toggle) {
      toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 968) {
          e.preventDefault();
          dropdowns.forEach(d => {
            if (d !== dropdown) d.classList.remove('active');
          });
          dropdown.classList.toggle('active');
        }
      });
    }
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-dropdown')) {
      dropdowns.forEach(d => d.classList.remove('active'));
    }
  });

  // ============================================
  // Scroll Reveal Animation System
  // ============================================
  const revealElements = () => {
    // Section headers
    document.querySelectorAll('.section-header').forEach(el => {
      if (!el.classList.contains('scroll-reveal')) {
        el.classList.add('scroll-reveal');
      }
    });

    // Cards with staggered delays
    document.querySelectorAll('.grid-2, .grid-3, .grid-4, .services-grid, .team-grid, .bento-grid').forEach(grid => {
      const cards = grid.querySelectorAll('.card, .bento-card, .team-card, .ehr-item');
      cards.forEach((card, index) => {
        if (!card.classList.contains('scroll-reveal')) {
          card.classList.add('scroll-reveal');
          card.setAttribute('data-delay', Math.min(index + 1, 6));
        }
      });
    });

    // Standalone cards
    document.querySelectorAll('.card:not(.scroll-reveal)').forEach((card, index) => {
      card.classList.add('scroll-reveal');
    });

    // Stats
    document.querySelectorAll('.stat-item').forEach((stat, index) => {
      if (!stat.classList.contains('scroll-reveal')) {
        stat.classList.add('scroll-reveal');
        stat.setAttribute('data-delay', Math.min(index + 1, 4));
      }
    });

    // Testimonials
    document.querySelectorAll('.testimonial, .testimonial-card').forEach(el => {
      if (!el.classList.contains('scroll-reveal')) {
        el.classList.add('scroll-reveal');
      }
    });

    // Feature blocks
    document.querySelectorAll('.feature-block').forEach(el => {
      if (!el.classList.contains('scroll-reveal')) {
        el.classList.add('scroll-reveal');
      }
    });

    // Certification badges
    document.querySelectorAll('.cert-badge').forEach((badge, index) => {
      if (!badge.classList.contains('scroll-reveal')) {
        badge.classList.add('scroll-reveal');
        badge.setAttribute('data-delay', Math.min(index + 1, 6));
      }
    });

    // EHR grid items
    document.querySelectorAll('.ehr-item').forEach((item, index) => {
      if (!item.classList.contains('scroll-reveal')) {
        item.classList.add('scroll-reveal');
        item.setAttribute('data-delay', Math.min(index + 1, 6));
      }
    });

    // FAQ items
    document.querySelectorAll('.faq-item').forEach((item, index) => {
      if (!item.classList.contains('scroll-reveal')) {
        item.classList.add('scroll-reveal');
        item.setAttribute('data-delay', Math.min(index + 1, 4));
      }
    });

    // Highlight boxes
    document.querySelectorAll('.highlight-box').forEach(el => {
      if (!el.classList.contains('scroll-reveal')) {
        el.classList.add('scroll-reveal');
      }
    });
  };

  revealElements();

  // Intersection Observer for scroll reveals
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');

        // Trigger stat counter if this is a stat item
        const statNumber = entry.target.querySelector('.stat-number');
        if (statNumber && !statNumber.dataset.counted) {
          animateCounter(statNumber);
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    scrollObserver.observe(el);
  });

  // ============================================
  // Stat Counter Animation
  // ============================================
  function animateCounter(element) {
    const text = element.textContent.trim();
    element.dataset.counted = 'true';

    // Parse the number and suffix
    const match = text.match(/^([<>]?)(\d+(?:,\d+)*)([\+KMB%]?)(.*)$/);
    if (!match) return;

    const prefix = match[1] || '';
    const targetNum = parseInt(match[2].replace(/,/g, ''), 10);
    const suffix = match[3] || '';
    const rest = match[4] || '';

    // Don't animate years or very large numbers
    if (targetNum > 9999 || text.includes('20')) {
      return;
    }

    const duration = 1500;
    const startTime = performance.now();

    element.classList.add('counting');

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentNum = Math.floor(easeOut * targetNum);

      element.textContent = prefix + currentNum.toLocaleString() + suffix + rest;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = text; // Restore original
        element.classList.remove('counting');
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // ============================================
  // Lifecycle Diagram Animation (Why TNG page)
  // ============================================
  const lifecycleSteps = document.querySelectorAll('[style*="background: var(--navy)"][style*="padding: 12px 20px"]');
  if (lifecycleSteps.length > 0) {
    lifecycleSteps.forEach((step, index) => {
      step.classList.add('lifecycle-step');
    });

    const lifecycleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const steps = entry.target.querySelectorAll('.lifecycle-step');
          steps.forEach(step => step.classList.add('revealed'));
        }
      });
    }, { threshold: 0.3 });

    const lifecycleContainer = document.querySelector('[style*="display: flex"][style*="justify-content: center"][style*="gap: 12px"]');
    if (lifecycleContainer) {
      lifecycleObserver.observe(lifecycleContainer.parentElement);
    }
  }

  // ============================================
  // Nav Shadow on Scroll
  // ============================================
  const nav = document.querySelector('.nav');
  if (nav) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
      } else {
        nav.style.boxShadow = 'none';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ============================================
  // Form Handler
  // ============================================
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you within 24 hours.');
      this.reset();
    });
  }

  // ============================================
  // Copyright Year
  // ============================================
  const startYear = 2012;
  const year = new Date().getFullYear();
  const copyrightEl = document.getElementById("copyrightYear");
  if (copyrightEl) copyrightEl.textContent = year > startYear ? `${startYear}–${year}` : `${year}`;

});

// Console branding
console.log('%c🏥 The NICEHR Group', 'font-size: 24px; font-weight: bold; color: #1a365d;');
console.log('%cDirect to Source. No Middleman.', 'font-size: 14px; color: #BFA980;');
