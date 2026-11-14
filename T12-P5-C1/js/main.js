/* ==================================================================
 * Tiller — main.js
 * Vanilla JavaScript, no jQuery. One function per feature, each with
 * guard clauses so it only runs on pages that have the markup.
 * ================================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------------
   * Shared data: 15 trading days of indicative spot bids ($/t).
   * Edit these arrays to change the price board, sparklines, chart
   * and the calculator's crop value.
   * ---------------------------------------------------------------- */
  var COMMODITIES = {
    wheat:  { name: "改性尼龙 PA6 / PA66", grade: "¥16,800 / 吨起", bu: 36.744, history: [15926, 16010, 15943, 16128, 16044, 16178, 16094, 16313, 16397, 16262, 16481, 16582, 16498, 16582, 16800] },
    barley:  { name: "PC / ABS 合金", grade: "¥19,500 / 吨起", bu: 45.93, history: [18486, 18584, 18506, 18720, 18622, 18778, 18681, 18934, 19032, 18876, 19130, 19246, 19149, 19246, 19500] },
    canola:  { name: "特种树脂与胶粘剂", grade: "¥28,000 / 吨起", bu: 44.092, history: [26544, 26684, 26572, 26880, 26740, 26964, 26824, 27188, 27328, 27104, 27468, 27636, 27496, 27636, 28000] },
    corn:  { name: "碳纤维复合材料", grade: "按规格报价", bu: 39.368, history: [5593, 5623, 5599, 5664, 5634, 5682, 5652, 5729, 5758, 5711, 5788, 5823, 5794, 5823, 5900] }
  };

  /* Formatting helpers */
  function money(n, decimals) {
    var d = decimals == null ? 0 : decimals;
    return "¥" + Number(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  }
  function num(n, decimals) {
    var d = decimals == null ? 0 : decimals;
    return Number(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  }
  function svgEl(tag, attrs) {
    var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(attrs || {}).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    return el;
  }
  function todayISO() {
    var d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }

  /* ----------------------------------------------------------------
   * Header: shadow on scroll, and expose its height as --header-h so
   * sticky sub-navigation and anchor offsets line up.
   * ---------------------------------------------------------------- */
  function initHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var setHeight = function () {
      document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
    };
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 10); };
    setHeight();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setHeight);
  }

  /* ----------------------------------------------------------------
   * Mobile navigation: Bootstrap's collapse opens the menu; close it
   * again after a link is chosen.
   * ---------------------------------------------------------------- */
  function initNav() {
    var collapse = document.getElementById("primary-nav");
    if (!collapse) return;
    collapse.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (!collapse.classList.contains("show") || !window.bootstrap) return;
        window.bootstrap.Collapse.getOrCreateInstance(collapse).hide();
      });
    });
  }

  /* ----------------------------------------------------------------
   * Smooth scrolling for same-page anchor links. Done in JS (not CSS
   * scroll-behavior) so programmatic scrolling and find-in-page stay
   * instant, and skipped entirely for reduced-motion users.
   * ---------------------------------------------------------------- */
  function initSmoothAnchors() {
    if (reduceMotion || !("scrollBehavior" in document.documentElement.style)) return;
    document.addEventListener("click", function (e) {
      var link = e.target.closest && e.target.closest('a[href*="#"]');
      if (!link || link.hasAttribute("data-quote") || link.hasAttribute("data-bs-toggle")) return;
      var url = new URL(link.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash || url.hash === "#") return;
      var target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", url.hash);
      if (target.id === "main") target.focus({ preventScroll: true });
    });
  }

  /* ----------------------------------------------------------------
   * Scroll spy for the home page menu and the services sub-nav.
   * ---------------------------------------------------------------- */
  function initScrollSpy() {
    if (!("IntersectionObserver" in window)) return;
    var links = Array.prototype.slice.call(document.querySelectorAll("[data-spy]"));
    if (!links.length) return;
    var byId = {};
    links.forEach(function (link) {
      var id = link.getAttribute("data-spy");
      (byId[id] = byId[id] || []).push(link);
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var own = byId[entry.target.id] || [];
        if (!entry.isIntersecting) {
          own.forEach(function (l) { l.classList.remove("active"); });
          return;
        }
        links.forEach(function (l) { l.classList.remove("active"); });
        own.forEach(function (l) { l.classList.add("active"); });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* ----------------------------------------------------------------
   * Reveal-on-scroll. Content is only hidden when the .js class is on
   * <html>, so everything stays visible without JavaScript.
   * ---------------------------------------------------------------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { observer.observe(el); });
  }

  /* ----------------------------------------------------------------
   * Count-up numbers (sustainability stats).
   * ---------------------------------------------------------------- */
  function initCountUp() {
    var nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;

    function finish(el) {
      var stat = el.closest(".impact-stat");
      if (stat) stat.classList.add("in");
    }
    function run(el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      if (isNaN(target)) return;
      finish(el);
      if (reduceMotion) { el.textContent = num(target) + suffix; return; }
      var start = null;
      var duration = 1500;
      function tick(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = num(Math.round(target * eased)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    if (!("IntersectionObserver" in window)) { nums.forEach(run); return; }
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { observer.observe(el); });
  }

  /* ----------------------------------------------------------------
   * Commodity price board: sparklines, unit toggle ($/t or $/bu) and
   * a 15-day chart for the selected commodity.
   * ---------------------------------------------------------------- */
  function initPriceBoard() {
    var table = document.querySelector(".price-table");
    if (!table) return;
    var rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr[data-commodity]"));
    var plot = document.getElementById("chart-plot");
    var unit = "t";
    var selected = "wheat";

    function factor(key) { return unit === "bu" ? COMMODITIES[key].bu : 1; }

    function sparkline(values, isUp) {
      var w = 96, h = 30, pad = 3;
      var min = Math.min.apply(null, values), max = Math.max.apply(null, values);
      var range = max - min || 1;
      var pts = values.map(function (v, i) {
        var x = pad + (i / (values.length - 1)) * (w - pad * 2);
        var y = pad + (1 - (v - min) / range) * (h - pad * 2);
        return [x.toFixed(1), y.toFixed(1)];
      });
      var colour = isUp ? "var(--up-on-dark)" : "var(--down-on-dark)";
      var svg = svgEl("svg", { viewBox: "0 0 " + w + " " + h, "aria-hidden": "true", focusable: "false" });
      svg.appendChild(svgEl("polyline", { points: pts.map(function (p) { return p.join(","); }).join(" "), fill: "none", stroke: colour, "stroke-width": "1.8", "stroke-linejoin": "round", "stroke-linecap": "round" }));
      var last = pts[pts.length - 1];
      svg.appendChild(svgEl("circle", { cx: last[0], cy: last[1], r: "2.6", fill: colour }));
      return svg;
    }

    rows.forEach(function (row) {
      var key = row.getAttribute("data-commodity");
      var data = COMMODITIES[key];
      var holder = row.querySelector(".spark");
      if (!data || !holder) return;
      var h = data.history;
      holder.appendChild(sparkline(h, h[h.length - 1] >= h[0]));
    });

    function drawChart(animate) {
      if (!plot) return;
      var data = COMMODITIES[selected];
      var f = factor(selected);
      var values = data.history.map(function (v) { return v / f; });
      var W = Math.max(plot.clientWidth, 240), H = plot.clientHeight || 200;
      var padL = 48, padR = 12, padT = 12, padB = 26;
      var min = Math.min.apply(null, values), max = Math.max.apply(null, values);
      var spread = (max - min) || 1;
      var lo = min - spread * 0.15, hi = max + spread * 0.15;
      var x = function (i) { return padL + (i / (values.length - 1)) * (W - padL - padR); };
      var y = function (v) { return padT + (1 - (v - lo) / (hi - lo)) * (H - padT - padB); };
      var decimals = unit === "bu" ? 2 : 0;

      var svg = svgEl("svg", { viewBox: "0 0 " + W + " " + H, role: "img" });
      var title = svgEl("title");
      title.textContent = data.name + " 近 15 日参考价走势：" + money(values[0], 2) + " → " + money(values[values.length - 1], 2);
      svg.appendChild(title);

      var defs = svgEl("defs");
      var grad = svgEl("linearGradient", { id: "chart-fill", x1: "0", y1: "0", x2: "0", y2: "1" });
      grad.appendChild(svgEl("stop", { offset: "0%", "stop-color": "#e6ba5c", "stop-opacity": ".32" }));
      grad.appendChild(svgEl("stop", { offset: "100%", "stop-color": "#e6ba5c", "stop-opacity": "0" }));
      defs.appendChild(grad);
      svg.appendChild(defs);

      for (var g = 0; g <= 3; g++) {
        var val = lo + ((hi - lo) * g) / 3;
        var gy = y(val);
        svg.appendChild(svgEl("line", { x1: padL, x2: W - padR, y1: gy, y2: gy, "class": "grid-line" }));
        var label = svgEl("text", { x: padL - 8, y: gy + 4, "text-anchor": "end", "class": "axis-label" });
        label.textContent = money(val, decimals);
        svg.appendChild(label);
      }
      var first = svgEl("text", { x: padL, y: H - 6, "class": "axis-label" });
      first.textContent = "15 days ago";
      var lastLabel = svgEl("text", { x: W - padR, y: H - 6, "text-anchor": "end", "class": "axis-label" });
      lastLabel.textContent = "Today";
      svg.appendChild(first);
      svg.appendChild(lastLabel);

      var d = values.map(function (v, i) { return (i ? "L" : "M") + x(i).toFixed(1) + " " + y(v).toFixed(1); }).join(" ");
      var area = d + " L" + x(values.length - 1).toFixed(1) + " " + (H - padB) + " L" + x(0).toFixed(1) + " " + (H - padB) + " Z";
      svg.appendChild(svgEl("path", { d: area, "class": "area" }));
      var line = svgEl("path", { d: d, "class": "line" });
      svg.appendChild(line);
      var lastV = values[values.length - 1];
      svg.appendChild(svgEl("circle", { cx: x(values.length - 1), cy: y(lastV), r: "4.5", "class": "dot" }));

      plot.innerHTML = "";
      plot.appendChild(svg);

      if (animate === true && !reduceMotion && line.getTotalLength) {
        var len = line.getTotalLength();
        line.style.strokeDasharray = len;
        line.style.strokeDashoffset = len;
        line.getBoundingClientRect();
        line.style.transition = "stroke-dashoffset .9s cubic-bezier(.22,.61,.36,1)";
        line.style.strokeDashoffset = "0";
      }

      var sum = values.reduce(function (a, b) { return a + b; }, 0);
      var set = function (id, v) { var el = document.getElementById(id); if (el) el.textContent = money(v, 2); };
      set("chart-high", max);
      set("chart-low", min);
      set("chart-avg", sum / values.length);
      var name = document.getElementById("chart-name");
      if (name) name.textContent = data.name + " · " + data.grade;
    }

    function renderPrices() {
      rows.forEach(function (row) {
        var f = factor(row.getAttribute("data-commodity"));
        row.querySelectorAll(".price[data-price]").forEach(function (el) {
          el.textContent = money(parseFloat(el.getAttribute("data-price")) / f, 2);
        });
        row.querySelectorAll(".per").forEach(function (el) { el.textContent = unit === "bu" ? "/bu" : "/t"; });
        var chg = row.querySelector(".chg[data-change]");
        if (chg) {
          var v = chg.querySelector(".chg-val");
          if (v) v.textContent = num(Math.abs(parseFloat(chg.getAttribute("data-change"))) / f, 2);
        }
      });
    }

    function select(key, animate) {
      selected = key;
      rows.forEach(function (row) {
        var on = row.getAttribute("data-commodity") === key;
        row.classList.toggle("is-selected", on);
        var btn = row.querySelector(".commodity-btn");
        if (btn) btn.setAttribute("aria-pressed", on ? "true" : "false");
      });
      drawChart(animate);
    }

    rows.forEach(function (row) {
      var btn = row.querySelector(".commodity-btn");
      if (btn) btn.addEventListener("click", function () { select(row.getAttribute("data-commodity"), true); });
    });

    document.querySelectorAll(".unit-btn").forEach(function (btn, _, all) {
      btn.addEventListener("click", function () {
        unit = btn.getAttribute("data-unit");
        all.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
        renderPrices();
        drawChart(true);
      });
    });

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(drawChart, 150);
    });

    select(selected);
  }

  /* ----------------------------------------------------------------
   * Yield and input calculator.
   * Rule-of-thumb agronomy: seed rate scales slightly with the yield
   * target; N, P and K follow nutrient removal per tonne of grain.
   * ---------------------------------------------------------------- */
  var CROPS = {
    wheat:  { label: "wheat",  seed: 100, seedPrice: 0.62, avg: 3.2, n: 23, p: 3.2, k: 4.5 },
    barley: { label: "barley", seed: 85,  seedPrice: 0.55, avg: 3.6, n: 19, p: 3.0, k: 5.0 },
    canola: { label: "canola", seed: 4.5, seedPrice: 24.0, avg: 1.6, n: 40, p: 6.5, k: 9.0 },
    corn:   { label: "corn",   seed: 22,  seedPrice: 13.5, avg: 7.5, n: 16, p: 3.0, k: 4.0 }
  };
  var INPUT_PRICES = { urea: 760, map: 980, mop: 690 };   // member $/t
  var SOIL_N = 35;           // kg/ha mineral N assumed available
  var N_EFFICIENCY = 0.65;

  function estimateInputs(area, cropKey, target, credit) {
    var c = CROPS[cropKey];
    var seedFactor = Math.min(1.15, Math.max(0.9, 0.9 + 0.1 * (target / c.avg)));
    var seedHa = c.seed * seedFactor;
    var nNeed = Math.max(0, (target * c.n) / N_EFFICIENCY - SOIL_N - credit);
    var pNeed = target * c.p * 1.1;
    var kNeed = target * c.k;
    var mapHa = pNeed / 0.22;
    var ureaHa = Math.max(0, nNeed - mapHa * 0.11) / 0.46;
    var mopHa = kNeed / 0.5;
    var r = {
      seedHa: seedHa, ureaHa: ureaHa, mapHa: mapHa, mopHa: mopHa,
      seedT: (seedHa * area) / 1000, ureaT: (ureaHa * area) / 1000, mapT: (mapHa * area) / 1000, mopT: (mopHa * area) / 1000
    };
    r.seedCost = seedHa * area * c.seedPrice;
    r.ureaCost = r.ureaT * INPUT_PRICES.urea;
    r.mapCost = r.mapT * INPUT_PRICES.map;
    r.mopCost = r.mopT * INPUT_PRICES.mop;
    r.totalCost = r.seedCost + r.ureaCost + r.mapCost + r.mopCost;
    r.costHa = r.totalCost / area;
    r.harvestT = area * target;
    var hist = COMMODITIES[cropKey].history;
    r.priceUsed = hist[hist.length - 1];
    r.grossValue = r.harvestT * r.priceUsed;
    return r;
  }

  function initCalculator() {
    var form = document.getElementById("calc-form");
    if (!form) return;
    var area = document.getElementById("calc-area");
    var crop = document.getElementById("calc-crop");
    var prev = document.getElementById("calc-prev");
    var yieldIn = document.getElementById("calc-yield");
    var error = document.getElementById("calc-error");
    var summary = document.getElementById("calc-summary");
    var avgHint = form.querySelector('[data-calc="avg"]');
    var hintCrop = document.getElementById("calc-yield-hint");
    if (!area || !crop || !yieldIn) return;

    var outputs = {};
    document.querySelectorAll("[data-out]").forEach(function (el) { outputs[el.getAttribute("data-out")] = el; });
    var segs = {};
    document.querySelectorAll("[data-seg]").forEach(function (el) { segs[el.getAttribute("data-seg")] = el; });

    function out(key, text) { if (outputs[key]) outputs[key].textContent = text; }

    function update() {
      var a = parseFloat(area.value);
      var t = parseFloat(yieldIn.value);
      var problems = [];
      var badArea = isNaN(a) || a < 1 || a > 5000;
      var badYield = isNaN(t) || t < 0.5 || t > 15;
      if (badArea) problems.push("Enter a field size between 1 and 5,000 ha.");
      if (badYield) problems.push("Enter a target yield between 0.5 and 15 t/ha.");
      area.classList.toggle("is-bad", badArea);
      yieldIn.classList.toggle("is-bad", badYield);
      area.setAttribute("aria-invalid", badArea ? "true" : "false");
      yieldIn.setAttribute("aria-invalid", badYield ? "true" : "false");
      if (error) error.textContent = problems.join(" ");
      if (problems.length) return;

      var r = estimateInputs(a, crop.value, t, parseFloat(prev ? prev.value : 0) || 0);
      var c = CROPS[crop.value];
      if (summary) summary.textContent = num(a) + " ha of " + c.label + " at " + num(t, 1) + " t/ha";
      out("seedT", num(r.seedT, 1));
      out("seedHa", num(r.seedHa, r.seedHa < 10 ? 1 : 0));
      out("ureaT", num(r.ureaT, 1));
      out("ureaHa", num(r.ureaHa));
      out("mapT", num(r.mapT, 1));
      out("mapHa", num(r.mapHa));
      out("mopT", num(r.mopT, 1));
      out("mopHa", num(r.mopHa));
      out("seedCost", money(r.seedCost));
      out("ureaCost", money(r.ureaCost));
      out("mapCost", money(r.mapCost));
      out("mopCost", money(r.mopCost));
      out("totalCost", money(r.totalCost));
      out("costHa", money(r.costHa));
      out("harvestT", num(r.harvestT));
      out("grossValue", money(r.grossValue));
      out("priceUsed", money(r.priceUsed, 2));
      var total = r.totalCost || 1;
      [["seed", r.seedCost], ["urea", r.ureaCost], ["map", r.mapCost], ["mop", r.mopCost]].forEach(function (pair) {
        if (segs[pair[0]]) segs[pair[0]].style.setProperty("--w", ((pair[1] / total) * 100).toFixed(1) + "%");
      });
    }

    crop.addEventListener("change", function () {
      var c = CROPS[crop.value];
      yieldIn.value = (Math.round(c.avg * 1.1 * 10) / 10).toFixed(1);
      if (avgHint) avgHint.textContent = num(c.avg, 1) + " t/ha";
      if (hintCrop && hintCrop.firstChild) hintCrop.firstChild.textContent = "District average for " + c.label + ": ";
      update();
    });
    [area, yieldIn, prev].forEach(function (el) {
      if (!el) return;
      el.addEventListener("input", update);
      el.addEventListener("change", update);
    });
    form.addEventListener("submit", function (e) { e.preventDefault(); update(); });
    update();
  }

  /* ----------------------------------------------------------------
   * Form validation for every form[data-validate]. Uses the browser's
   * constraint validation plus two extras: data-after (a date that must
   * not be before another field) and required radio groups.
   * Forms are front-end only: on success they show a confirmation.
   * ---------------------------------------------------------------- */
  function checkField(field) {
    var wrap = field.closest(".field");
    var ok = field.checkValidity();
    if (ok && field.getAttribute("data-after") && field.value) {
      var other = document.getElementById(field.getAttribute("data-after"));
      if (other && other.value && field.value < other.value) ok = false;
    }
    if (field.type === "radio") {
      var group = field.form ? field.form.querySelectorAll('input[name="' + field.name + '"]') : [];
      Array.prototype.forEach.call(group, function (r) { r.setAttribute("aria-invalid", ok ? "false" : "true"); });
    } else {
      field.setAttribute("aria-invalid", ok ? "false" : "true");
    }
    if (wrap) wrap.classList.toggle("is-invalid", !ok);
    return ok;
  }

  function initForms() {
    document.querySelectorAll("form[data-validate]").forEach(function (form) {
      var fields = function () {
        return Array.prototype.filter.call(form.elements, function (el) {
          return el.willValidate && el.type !== "submit" && el.type !== "button";
        });
      };

      form.addEventListener("input", function (e) {
        var wrap = e.target.closest && e.target.closest(".field");
        if (wrap && wrap.classList.contains("is-invalid")) checkField(e.target);
      });
      form.addEventListener("change", function (e) {
        var wrap = e.target.closest && e.target.closest(".field");
        if (wrap && wrap.classList.contains("is-invalid")) checkField(e.target);
      });

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var firstBad = null;
        var seenRadio = {};
        fields().forEach(function (field) {
          if (field.type === "radio") {
            if (seenRadio[field.name]) return;
            seenRadio[field.name] = true;
          }
          if (!checkField(field) && !firstBad) firstBad = field;
        });
        if (firstBad) { firstBad.focus(); return; }

        var nameField = form.querySelector('[name="name"]');
        var slot = form.querySelector("[data-success-name]");
        if (slot && nameField && nameField.value.trim()) slot.textContent = nameField.value.trim().split(/\s+/)[0];
        form.classList.add("is-sent");
        var success = form.querySelector(".form-success");
        if (success) success.focus();
      });

      form.querySelectorAll("[data-reset-form]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          form.reset();
          form.classList.remove("is-sent");
          form.querySelectorAll(".is-invalid").forEach(function (w) { w.classList.remove("is-invalid"); });
          form.dispatchEvent(new Event("change"));
        });
      });
    });
  }

  /* ----------------------------------------------------------------
   * Soil-test booking: live cost estimate and date limits.
   * ---------------------------------------------------------------- */
  function initSoilBooking() {
    var form = document.getElementById("soil-form");
    if (!form) return;
    var fieldsIn = document.getElementById("st-fields");
    var from = document.getElementById("st-from");
    var to = document.getElementById("st-to");
    var total = document.getElementById("st-total");
    var breakdown = document.getElementById("st-break");
    var today = todayISO();
    if (from) from.min = today;
    if (to) to.min = today;

    function update() {
      var n = parseInt(fieldsIn && fieldsIn.value, 10);
      var pkg = form.querySelector('input[name="package"]:checked');
      var depth = form.querySelector('input[name="depth"]:checked');
      var collect = document.getElementById("st-collect");
      if (!pkg || isNaN(n) || n < 1 || n > 80) {
        if (total) total.textContent = "$0";
        if (breakdown) breakdown.textContent = "请输入 1–80 之间的参观人数查看估算。";
        return;
      }
      var price = parseFloat(pkg.getAttribute("data-price"));
      var sub = depth && depth.value === "two" ? 18 : 0;
      var pickup = collect && collect.checked ? 12 : 0;
      var sum = n * (price + sub + pickup);
      if (total) total.textContent = money(sum);
      if (breakdown) {
        var parts = [n + " 人" + " × " + money(price) + " " + pkg.getAttribute("data-name")];
        if (sub) parts.push("深度路线 " + money(n * sub));
        if (pickup) parts.push("接送服务 " + money(n * pickup));
        breakdown.textContent = parts.join(" + ");
      }
    }

    if (from && to) {
      from.addEventListener("change", function () {
        to.min = from.value || today;
        if (to.value && from.value && to.value < from.value) to.value = from.value;
      });
    }
    form.addEventListener("input", update);
    form.addEventListener("change", update);
    form.addEventListener("reset", function () { setTimeout(update, 0); });
    update();
  }

  /* ----------------------------------------------------------------
   * Machinery catalogue: category and availability filters, sorting,
   * and member / standard rate display.
   * ---------------------------------------------------------------- */
  var STANDARD_MARKUP = 1.15;
  function standardRate(member) { return Math.round((member * STANDARD_MARKUP) / 5) * 5; }

  function initMachinery() {
    var grid = document.getElementById("machine-grid");
    if (!grid) return;
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".machine-card"));
    var catButtons = document.querySelectorAll(".filter-btn[data-cat]");
    var availSelect = document.getElementById("filter-avail");
    var sortSelect = document.getElementById("filter-sort");
    var rateToggle = document.getElementById("rate-toggle");
    var countEl = document.getElementById("result-count");
    var rateNote = document.getElementById("rate-note-text");
    var empty = document.getElementById("empty-state");
    var state = { cat: "all", avail: "any", sort: "featured" };

    function apply() {
      var shown = 0;
      cards.forEach(function (card) {
        var catOk = state.cat === "all" || card.getAttribute("data-cat") === state.cat;
        var a = card.getAttribute("data-avail");
        var availOk = state.avail === "any" || (state.avail === "now" ? a === "now" : a !== "booked");
        var show = catOk && availOk;
        card.hidden = !show;
        if (show) shown++;
      });

      var sorted = cards.slice().sort(function (x, y) {
        var dx = parseFloat(x.getAttribute("data-daily")), dy = parseFloat(y.getAttribute("data-daily"));
        if (state.sort === "daily-asc") return dx - dy;
        if (state.sort === "daily-desc") return dy - dx;
        return parseInt(x.getAttribute("data-order"), 10) - parseInt(y.getAttribute("data-order"), 10);
      });
      sorted.forEach(function (card) { grid.appendChild(card); });

      if (countEl) countEl.textContent = "显示 " + shown + " / 共 " + cards.length + " 项产品";
      if (empty) empty.classList.toggle("show", shown === 0);
    }

    function renderRates() {
      var standard = rateToggle && rateToggle.checked;
      cards.forEach(function (card) {
        ["daily", "weekly"].forEach(function (kind) {
          var el = card.querySelector('[data-rate="' + kind + '"]');
          if (!el) return;
          var member = parseFloat(card.getAttribute("data-" + kind));
          el.textContent = money(standard ? standardRate(member) : member);
        });
        var label = card.querySelector(".rate-type");
        if (label) label.textContent = standard ? "标准价" : "会员价";
      });
      if (rateNote) rateNote.textContent = standard ? "当前显示标准价（会员价低 15%）" : "当前显示会员价，含税含运费";
    }

    catButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.cat = btn.getAttribute("data-cat");
        catButtons.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
        apply();
      });
    });
    if (availSelect) availSelect.addEventListener("change", function () { state.avail = availSelect.value; apply(); });
    if (sortSelect) sortSelect.addEventListener("change", function () { state.sort = sortSelect.value; apply(); });
    if (rateToggle) rateToggle.addEventListener("change", renderRates);

    document.querySelectorAll("[data-reset-filters]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state = { cat: "all", avail: "any", sort: "featured" };
        catButtons.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-cat") === "all" ? "true" : "false"); });
        if (availSelect) availSelect.value = "any";
        if (sortSelect) sortSelect.value = "featured";
        apply();
      });
    });

    apply();
    renderRates();
  }

  /* ----------------------------------------------------------------
   * Hire quote: the form lives in the page (works without JS); with JS
   * it moves into a native <dialog> opened from each machine card.
   * ---------------------------------------------------------------- */
  function initQuote() {
    var form = document.getElementById("quote-form");
    if (!form) return;
    var dialog = document.getElementById("quote-dialog");
    var machine = document.getElementById("q-machine");
    var days = document.getElementById("q-days");
    var start = document.getElementById("q-start");
    var km = document.getElementById("q-km");
    var kmWrap = document.getElementById("q-km-wrap");
    var member = document.getElementById("q-member");
    var operator = document.getElementById("q-operator");
    var subtitle = document.getElementById("quote-machine-label");
    var rateToggle = document.getElementById("rate-toggle");
    if (start) start.min = todayISO();

    var rates = {};
    document.querySelectorAll(".machine-card[data-code]").forEach(function (card) {
      rates[card.getAttribute("data-code")] = {
        daily: parseFloat(card.getAttribute("data-daily")),
        weekly: parseFloat(card.getAttribute("data-weekly")),
        name: card.querySelector("h3") ? card.querySelector("h3").textContent : ""
      };
    });

    function setLine(id, text) { var el = document.getElementById(id); if (el) el.textContent = text; }

    function update() {
      var delivery = form.querySelector('input[name="delivery"]:checked');
      var delivering = delivery && delivery.value === "deliver";
      if (kmWrap) kmWrap.hidden = !delivering;
      if (km) km.required = !!delivering;

      var r = rates[machine && machine.value];
      var d = parseInt(days && days.value, 10);
      if (subtitle) subtitle.textContent = r ? machine.value + " · " + r.name : "选择产品、日期与交付方式";
      if (!r || isNaN(d) || d < 1 || d > 60) {
        ["q-hire", "q-delivery", "q-operator-cost", "q-waiver", "q-total"].forEach(function (id) { setLine(id, "—"); });
        setLine("q-hire-label", "产品小计");
        return;
      }
      var standard = member && !member.checked;
      var daily = standard ? standardRate(r.daily) : r.daily;
      var weekly = standard ? standardRate(r.weekly) : r.weekly;
      var weeks = Math.floor(d / 7);
      var rest = d % 7;
      var hire = weeks * weekly + Math.min(rest * daily, weekly);
      var dist = parseFloat(km && km.value) || 0;
      var deliveryCost = delivering ? Math.max(0, dist - 20) * 3.2 * 2 : 0;
      var operatorCost = operator && operator.checked ? d * 8 * 68 : 0;
      var waiver = hire * 0.06;
      setLine("q-hire-label", "订购 " + d + " 台/件" + (standard ? "（标准价）" : "（会员价）"));
      setLine("q-hire", money(hire));
      setLine("q-delivery", delivering ? (deliveryCost ? money(deliveryCost) : "免费") : "自提");
      setLine("q-operator-cost", operatorCost ? money(operatorCost) : "—");
      setLine("q-waiver", money(waiver));
      setLine("q-total", money(hire + deliveryCost + operatorCost + waiver));
    }

    form.addEventListener("input", update);
    form.addEventListener("change", update);

    var canDialog = dialog && typeof dialog.showModal === "function";
    if (canDialog) {
      var body = dialog.querySelector(".dialog-body");
      var home = document.getElementById("quote-home");
      if (body) body.appendChild(form);
      if (home) home.hidden = true;

      var open = function (code) {
        form.classList.remove("is-sent");
        if (code && machine) machine.value = code;
        if (member && rateToggle) member.checked = !rateToggle.checked;
        update();
        dialog.showModal();
        var focusTarget = code ? start : machine;
        if (focusTarget) focusTarget.focus();
      };

      document.querySelectorAll("[data-quote]").forEach(function (trigger) {
        trigger.addEventListener("click", function (e) {
          e.preventDefault();
          open(trigger.getAttribute("data-quote"));
        });
      });
      dialog.querySelectorAll("[data-close-dialog]").forEach(function (btn) {
        btn.addEventListener("click", function () { dialog.close(); });
      });
      dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
      dialog.addEventListener("close", function () {
        if (form.classList.contains("is-sent")) {
          form.reset();
          form.classList.remove("is-sent");
          form.querySelectorAll(".is-invalid").forEach(function (w) { w.classList.remove("is-invalid"); });
        }
      });
    } else {
      document.querySelectorAll("[data-quote]").forEach(function (trigger) {
        trigger.addEventListener("click", function () {
          if (machine) machine.value = trigger.getAttribute("data-quote");
          update();
        });
      });
    }
    update();
  }

  /* ----------------------------------------------------------------
   * Boot
   * ---------------------------------------------------------------- */
  function init() {
    initHeader();
    initNav();
    initSmoothAnchors();
    initScrollSpy();
    initReveal();
    initCountUp();
    initPriceBoard();
    initCalculator();
    initForms();
    initSoilBooking();
    initMachinery();
    initQuote();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
