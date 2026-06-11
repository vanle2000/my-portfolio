(function () {
  'use strict';

  /* ── Sidebar TOC builder ────────────────────────────────── */
  var content = document.getElementById('detail-content');
  var tocNav = document.getElementById('toc-nav');
  if (content && tocNav) {
    var headings = content.querySelectorAll('h2, h3');
    headings.forEach(function (h, i) {
      if (!h.id) {
        h.id = 'toc-' + i + '-' + h.textContent.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      }
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      if (h.tagName === 'H3') a.style.paddingLeft = 'calc(var(--space-sm) + 0.75rem)';
      tocNav.appendChild(a);
    });

    /* active link on scroll */
    var links = tocNav.querySelectorAll('a');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('is-active'); });
          var active = tocNav.querySelector('[href="#' + entry.target.id + '"]');
          if (active) active.classList.add('is-active');
        }
      });
    }, { rootMargin: '0px 0px -70% 0px' });

    headings.forEach(function (h) { observer.observe(h); });
  }

  /* ── Staggered reveal for project list rows ────────────────── */
  document.querySelectorAll('.project-list').forEach(function (list) {
    list.querySelectorAll(':scope > li').forEach(function (item, i) {
      item.style.transitionDelay = (i * 80) + 'ms';
    });
  });

  /* ── Fade-in-up / fade-on-scroll on appear ─────────────────── */
  var fadeEls = document.querySelectorAll('.fade-in-up, .fade-on-scroll');
  if (fadeEls.length) {
    var fadeObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(function (el) { fadeObserver.observe(el); });
  }

  /* ── Hero aurora fade + text parallax on scroll ────────────── */
  var hero = document.querySelector('.hero');
  var heroContent = document.querySelector('.hero__content');
  if (hero && heroContent) {
    var updateHero = function () {
      var progress = Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1);
      hero.style.opacity = 1 - progress;
      heroContent.style.transform = 'translateY(' + (progress * -40) + 'px)';
      heroContent.style.opacity = Math.max(0, 1 - progress / 0.8);
    };

    var heroTicking = false;
    window.addEventListener('scroll', function () {
      if (!heroTicking) {
        requestAnimationFrame(function () {
          updateHero();
          heroTicking = false;
        });
        heroTicking = true;
      }
    }, { passive: true });

    updateHero();
  }
})();
