/* =========================================================================
   GIRDER — main.js
   Vanilla JS only, no legacy libraries. Each feature is a guard-claused init().
   ========================================================================= */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==================================================== sticky header */
  function initHeader() {
    var header = document.getElementById('header');
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ==================================================== mobile nav */
  function initMobileNav() {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('nav');
    var backdrop = document.getElementById('backdrop');
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (backdrop) backdrop.classList.toggle('is-on', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }

    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    if (backdrop) backdrop.addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) setOpen(false);
    });
    // reset when resizing back to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 980 && nav.classList.contains('is-open')) setOpen(false);
    });
  }

  /* ==================================================== project filter */
  function initFilter() {
    var grid = document.getElementById('projGrid');
    var buttons = document.querySelectorAll('.filter');
    if (!grid || !buttons.length) return;
    var items = Array.prototype.slice.call(grid.querySelectorAll('.proj'));

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');
        buttons.forEach(function (b) {
          var active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        items.forEach(function (item) {
          var match = filter === 'all' || item.getAttribute('data-type') === filter;
          item.classList.toggle('is-hidden', !match);
        });
      });
    });
  }

  /* ==================================================== stat counters */
  function initCounters() {
    var groups = document.querySelectorAll('[data-counters]');
    if (!groups.length) return;

    function animate(el) {
      var target = parseFloat(el.getAttribute('data-count')) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      if (reduceMotion) { el.textContent = target + suffix; return; }
      var start = null;
      var dur = 1400;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(step);
    }

    if (!('IntersectionObserver' in window)) {
      groups.forEach(function (g) {
        g.querySelectorAll('[data-count]').forEach(animate);
      });
      return;
    }
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('[data-count]').forEach(animate);
          o.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    groups.forEach(function (g) { obs.observe(g); });
  }

  /* ==================================================== scroll reveal */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          o.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { obs.observe(el); });
  }

  /* ==================================================== back to top */
  function initToTop() {
    var btn = document.getElementById('toTop');
    if (!btn) return;
    var onScroll = function () {
      btn.classList.toggle('is-on', window.scrollY > 700);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ==================================================== quote form */
  function initForm() {
    var form = document.getElementById('quoteForm');
    if (!form) return;
    var success = document.getElementById('formSuccess');

    function fieldOf(input) { return input.closest('.field') || input.closest('.consent'); }

    function validateField(input) {
      var wrap = fieldOf(input);
      var ok = true;
      if (input.type === 'checkbox') {
        ok = input.checked;
      } else if (input.type === 'email') {
        ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
      } else if (input.hasAttribute('required')) {
        ok = input.value.trim().length > 0;
      }
      if (wrap && wrap.classList.contains('field')) wrap.classList.toggle('invalid', !ok);
      return ok;
    }

    var required = form.querySelectorAll('[required]');
    required.forEach(function (input) {
      input.addEventListener('blur', function () { validateField(input); });
      input.addEventListener('input', function () {
        var wrap = fieldOf(input);
        if (wrap && wrap.classList.contains('invalid')) validateField(input);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var allOk = true;
      var firstBad = null;
      required.forEach(function (input) {
        var ok = validateField(input);
        if (!ok && !firstBad) firstBad = input;
        if (!ok) allOk = false;
      });
      if (!allOk) {
        if (firstBad) firstBad.focus();
        return;
      }
      if (success) {
        success.classList.add('is-on');
        success.focus && success.focus();
      }
      form.querySelectorAll('input, select, textarea').forEach(function (el) {
        el.setAttribute('disabled', 'disabled');
      });
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.setAttribute('disabled', 'disabled');
    });
  }

  /* ==================================================== boot */
  function boot() {
    initHeader();
    initMobileNav();
    initFilter();
    initCounters();
    initReveal();
    initToTop();
    initForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
