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

  /* ── Fade-in-up on scroll/appear ──────────────────────────── */
  var fadeEls = document.querySelectorAll('.fade-in-up');
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
})();
