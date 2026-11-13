/* ------------------------------------------------------------------
   FineOak — vanilla JS (Bootstrap 5). Plain JS, no libraries.
   One function per feature; guard clauses for missing elements.
------------------------------------------------------------------ */
(function () {
  'use strict';

  var prefersReduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------
     Navbar dropdowns (hover = CSS on desktop;
     click toggles .open for mobile / touch)
  ---------------------------------------- */
  function initDropdowns() {
    var toggles = document.querySelectorAll('.probootstrap-navbar .dropdown > a.dropdown-toggle');
    toggles.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var li = link.parentNode;
        li.classList.toggle('open');
      });
    });
    // Close open (mobile) dropdowns when tapping elsewhere
    document.addEventListener('click', function (e) {
      if (e.target.closest('.probootstrap-navbar')) return;
      document.querySelectorAll('.probootstrap-navbar .dropdown.open')
        .forEach(function (li) { li.classList.remove('open'); });
    });
  }

  /* ----------------------------------------
     Navbar scrolled state
  ---------------------------------------- */
  function initNavbarState() {
    var navbar = document.querySelector('.probootstrap-navbar');
    if (!navbar) return;
    var onScroll = function () {
      if (window.pageYOffset > 5) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ----------------------------------------
     Hero slider — vanilla fade (replaces flexslider)
  ---------------------------------------- */
  function initHeroSlider() {
    var slider = document.querySelector('.flexslider');
    if (!slider) return;
    var slidesWrap = slider.querySelector('.slides');
    if (!slidesWrap) return;
    var slides = Array.prototype.slice.call(slidesWrap.children);
    if (slides.length === 0) return;

    var current = 0;
    slides[0].classList.add('flex-active-slide');

    if (slides.length < 2) return; // single slide: nothing to animate

    // Build paging dots
    var nav = document.createElement('ol');
    nav.className = 'flex-control-nav flex-control-paging';
    var dots = slides.map(function (slide, i) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#';
      a.textContent = (i + 1);
      if (i === 0) a.className = 'flex-active';
      a.addEventListener('click', function (e) {
        e.preventDefault();
        go(i);
        restart();
      });
      li.appendChild(a);
      nav.appendChild(li);
      return a;
    });
    slider.appendChild(nav);

    function go(index) {
      slides[current].classList.remove('flex-active-slide');
      dots[current].classList.remove('flex-active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('flex-active-slide');
      dots[current].classList.add('flex-active');
    }

    var timer = null;
    function start() {
      if (prefersReduced) return;
      timer = window.setInterval(function () { go(current + 1); }, 6000);
    }
    function restart() {
      if (timer) window.clearInterval(timer);
      start();
    }
    start();
  }

  /* ----------------------------------------
     Scroll reveal (replaces waypoints)
  ---------------------------------------- */
  function initReveal() {
    var items = document.querySelectorAll('.probootstrap-animate');
    if (!items.length) return;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          // small stagger for a pleasant cascade
          var delay = (Array.prototype.indexOf.call(el.parentNode.children, el) % 6) * 60;
          window.setTimeout(function () { el.classList.add('is-revealed'); }, delay);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ----------------------------------------
     Feature showcase tabs (if present)
  ---------------------------------------- */
  function initShowcase() {
    var navs = document.querySelectorAll('.probootstrap-showcase-nav ul li a');
    navs.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var showcase = link.closest('.probootstrap-feature-showcase');
        if (!showcase) return;
        var li = link.closest('li');
        var index = Array.prototype.indexOf.call(li.parentNode.children, li);

        showcase.querySelectorAll('.probootstrap-showcase-nav ul li')
          .forEach(function (el) { el.classList.remove('active'); });
        li.classList.add('active');

        var images = showcase.querySelectorAll('.probootstrap-images-list li');
        images.forEach(function (el) { el.classList.remove('active'); });
        if (images[index]) images[index].classList.add('active');
      });
    });
  }

  /* ----------------------------------------
     Lightbox (replaces photoswipe)
  ---------------------------------------- */
  function initLightbox() {
    var gallery = document.querySelector('.probootstrap-gallery');
    if (!gallery) return;

    var links = Array.prototype.slice.call(
      gallery.querySelectorAll('figure > a[href]')
    );
    if (!links.length) return;

    var box = document.createElement('div');
    box.className = 'pb-lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-hidden', 'true');
    box.innerHTML =
      '<button type="button" class="pb-lightbox__btn pb-lightbox__close" aria-label="Close">&times;</button>' +
      '<button type="button" class="pb-lightbox__btn pb-lightbox__prev" aria-label="Previous">&#8249;</button>' +
      '<img alt="" src="img/gal_img_full_1.jpg">' +
      '<button type="button" class="pb-lightbox__btn pb-lightbox__next" aria-label="Next">&#8250;</button>';
    document.body.appendChild(box);

    var img = box.querySelector('img');
    var index = 0;

    function show(i) {
      index = (i + links.length) % links.length;
      img.src = links[index].getAttribute('href');
    }
    function open(i) {
      show(i);
      box.classList.add('is-open');
      box.setAttribute('aria-hidden', 'false');
    }
    function close() {
      box.classList.remove('is-open');
      box.setAttribute('aria-hidden', 'true');
    }

    links.forEach(function (link, i) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        open(i);
      });
    });

    box.querySelector('.pb-lightbox__close').addEventListener('click', close);
    box.querySelector('.pb-lightbox__prev').addEventListener('click', function () { show(index - 1); });
    box.querySelector('.pb-lightbox__next').addEventListener('click', function () { show(index + 1); });
    box.addEventListener('click', function (e) {
      if (e.target === box) close();
    });
    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(index - 1);
      else if (e.key === 'ArrowRight') show(index + 1);
    });
  }

  /* ---------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initDropdowns();
    initNavbarState();
    initHeroSlider();
    initReveal();
    initShowcase();
    initLightbox();
  });
})();
