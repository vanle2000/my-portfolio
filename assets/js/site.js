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

  /* ── Scroll-driven car on the Experience page ─────────────── */
  var experienceRoad = document.querySelector('[data-experience-road]');
  if (experienceRoad) {
    var roadMap = experienceRoad.querySelector('.experience-road__map');
    var roadPath = experienceRoad.querySelector('[data-experience-route]');
    var roadCar = experienceRoad.querySelector('[data-experience-car]');
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (roadMap && roadPath && roadCar) {
      var roadLength = roadPath.getTotalLength();
      var roadFrameRequested = false;

      var placeRoadCar = function (progress) {
        var point = roadPath.getPointAtLength(roadLength * progress);
        var nextPoint = roadPath.getPointAtLength(
          Math.min(roadLength, roadLength * progress + 2)
        );
        var mapRect = roadMap.getBoundingClientRect();
        var viewBox = roadMap.viewBox.baseVal;
        var scaleX = mapRect.width / viewBox.width;
        var scaleY = mapRect.height / viewBox.height;
        var x = (point.x - viewBox.x) * scaleX;
        var y = (point.y - viewBox.y) * scaleY;
        var dx = (nextPoint.x - point.x) * scaleX;
        var dy = (nextPoint.y - point.y) * scaleY;
        var vectorLength = Math.sqrt(dx * dx + dy * dy) || 1;
        var laneOffset = mapRect.width <= 96 ? 10 : 22;

        x += (-dy / vectorLength) * laneOffset;
        y += (dx / vectorLength) * laneOffset;

        var angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        roadCar.style.transform =
          'translate3d(' + x + 'px,' + y + 'px,0) ' +
          'translate(-50%,-50%) rotate(' + angle + 'deg)';
        roadCar.classList.add('is-ready');
      };

      var updateRoadCar = function () {
        roadFrameRequested = false;
        var roadRect = experienceRoad.getBoundingClientRect();
        var viewportHeight = window.innerHeight;
        var travelDistance = Math.max(
          1,
          roadRect.height - viewportHeight * 0.45
        );
        var progress = (viewportHeight * 0.38 - roadRect.top) / travelDistance;
        progress = Math.min(1, Math.max(0, progress));
        placeRoadCar(reducedMotion.matches ? 0.03 : progress);
      };

      var requestRoadUpdate = function () {
        if (!roadFrameRequested) {
          roadFrameRequested = true;
          window.requestAnimationFrame(updateRoadCar);
        }
      };

      window.addEventListener('scroll', requestRoadUpdate, { passive: true });
      window.addEventListener('resize', requestRoadUpdate);
      if (reducedMotion.addEventListener) {
        reducedMotion.addEventListener('change', requestRoadUpdate);
      } else {
        reducedMotion.addListener(requestRoadUpdate);
      }
      requestRoadUpdate();
    }
  }

})();
