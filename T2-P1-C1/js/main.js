/* ==================================================================
 * Ductwise — main.js
 * Vanilla JavaScript only. One function per feature, guard clauses.
 * ================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var prefersReduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var fmt = function (n) { return Math.round(n).toLocaleString("en-US"); };
  var money = function (n) { return "¥" + fmt(n); };

  /* ----------------------------------------------------------------
   * Season switch: swaps heating/cooling copy and the accent colour.
   * The <head> script picks a default from the month (May–Sep = cool).
   * ---------------------------------------------------------------- */
  function initSeason() {
    var buttons = document.querySelectorAll("[data-season-set]");
    if (!buttons.length) return;

    function apply(season) {
      root.setAttribute("data-season", season);
      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-season-set") === season ? "true" : "false");
      });
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        var season = b.getAttribute("data-season-set");
        apply(season);
        try { localStorage.setItem("ductwise-season", season); } catch (e) { /* storage blocked */ }
      });
    });

    apply(root.getAttribute("data-season") === "cool" ? "cool" : "heat");
  }

  /* ----------------------------------------------------------------
   * Mobile nav: close the collapse after a link is tapped.
   * ---------------------------------------------------------------- */
  function initNav() {
    var collapse = document.getElementById("primary-nav");
    if (!collapse || !window.bootstrap) return;
    collapse.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (!collapse.classList.contains("show")) return;
        var inst = window.bootstrap.Collapse.getInstance(collapse);
        if (inst) inst.hide();
      });
    });
  }

  /* ----------------------------------------------------------------
   * Header shadow once the page scrolls.
   * ---------------------------------------------------------------- */
  function initStickyHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----------------------------------------------------------------
   * Reveal-on-scroll (content stays visible without JS).
   * ---------------------------------------------------------------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        o.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { obs.observe(el); });
  }

  /* ----------------------------------------------------------------
   * Keep a range slider and a number input in sync.
   * ---------------------------------------------------------------- */
  function pairRange(rangeId, numberId, onChange) {
    var range = document.getElementById(rangeId);
    var num = document.getElementById(numberId);
    if (!range || !num) return;
    range.addEventListener("input", function () { num.value = range.value; onChange(); });
    num.addEventListener("input", function () {
      var v = parseFloat(num.value);
      if (!isNaN(v)) range.value = Math.min(Math.max(v, range.min), range.max);
      onChange();
    });
  }

  /* ----------------------------------------------------------------
   * Repair-or-replace check (services.html): age x repair cost rule.
   * ---------------------------------------------------------------- */
  function initRepairReplace() {
    var tool = document.querySelector("[data-rr]");
    if (!tool) return;
    var type = tool.querySelector("#rr-type");
    var age = tool.querySelector("#rr-age");
    var cost = tool.querySelector("#rr-cost");
    var scoreEl = tool.querySelector("[data-rr-score]");
    var verdict = tool.querySelector("[data-rr-verdict]");
    var lifeEl = tool.querySelector("[data-rr-life]");
    var leftEl = tool.querySelector("[data-rr-left]");
    var pin = tool.querySelector("[data-rr-pin]");

    var VERDICTS = {
      repair: ["建议维修", "从数字看维修更划算。坚持每年保养，把它的价值用足。"],
      borderline: ["临界情况：两个价格都看看", "做决定前，请让对方在维修报价旁附上书面的更换方案。"],
      replace: ["开始询价更换", "换新系统可能更划算。把维修的钱投向新系统，并看看补贴。"]
    };

    function update() {
      var a = Math.max(parseFloat(age.value) || 0, 0);
      var c = Math.max(parseFloat(cost.value) || 0, 0);
      var life = parseInt(type.options[type.selectedIndex].getAttribute("data-life"), 10);
      var score = a * c;
      var key = score < 5000 ? "repair" : (score <= 7500 ? "borderline" : "replace");
      if (a >= life && key === "repair" && c > 300) key = "borderline";

      scoreEl.textContent = fmt(score);
      if (pin) pin.style.setProperty("--pos", (Math.min(score / 10000, 1) * 100).toFixed(1) + "%");
      verdict.className = "verdict " + key;
      verdict.innerHTML = "<strong>" + VERDICTS[key][0] + "</strong><span>" + VERDICTS[key][1] + "</span>";
      lifeEl.textContent = life + " 年";
      var left = life - a;
      leftEl.textContent = left > 0 ? left + (left === 1 ? " 年" : " 年") : "已超典型寿命";
    }

    pairRange("rr-age-range", "rr-age", update);
    type.addEventListener("change", update);
    cost.addEventListener("input", update);
    update();
  }

  /* ----------------------------------------------------------------
   * System size & cost estimate (plans.html). Rule-of-thumb only.
   * ---------------------------------------------------------------- */
  function initSizer() {
    var tool = document.querySelector("[data-sizer]");
    if (!tool) return;
    var form = tool.querySelector("form");
    var area = tool.querySelector("#sz-area");
    var out = function (k) { return tool.querySelector("[data-sz-" + k + "]"); };

    // 每平方英尺负荷系数（按气候区），未计密封与层高修正。
    var COOL = { mild: 19, mixed: 22, cold: 18, hot: 26 };
    var HEAT = { mild: 28, mixed: 35, cold: 45, hot: 20 };
    // Example installed prices: base + per ton (ductless priced per zone).
    var SYSTEMS = {
      ac:       { base: 3400, perTon: 1500, plan: "基础版",    detail: "中央空调与盘管，与现有管道匹配。" },
      furnace:  { base: 5800, perTon: 1700, plan: "舒享版", detail: "燃气供暖炉加中央空调，一起安装。" },
      heatpump: { base: 5200, perTon: 1900, plan: "舒享版", detail: "管道式热泵带辅助供暖，补贴前价格。" },
      ductless: { zone: 3100, first: 3900,  plan: "舒享版", detail: "" }
    };

    function value(name) {
      var el = form.querySelector('[name="' + name + '"]:checked') || form.querySelector('[name="' + name + '"]');
      return el ? el.value : "";
    }
    var round100 = function (n) { return Math.round(n / 100) * 100; };

    function update() {
      var sq = Math.min(Math.max(parseFloat(area.value) || 0, 30), 800) * 10.764;
      var climate = value("climate") || "mixed";
      var factor = parseFloat(value("tight")) * parseFloat(value("ceiling"));
      var sys = value("system") || "heatpump";

      var coolBtu = sq * COOL[climate] * factor;
      var heatBtu = sq * HEAT[climate] * factor;
      var tons = Math.max(1.5, Math.round(coolBtu / 12000 * 2) / 2);

      var spec = SYSTEMS[sys];
      var mid, detail = spec.detail, plan = spec.plan;
      if (sys === "ductless") {
        var zones = Math.max(1, Math.ceil(sq / 600));
        mid = spec.first + spec.zone * (zones - 1);
        detail = zones + " 台室内机，配 " + Math.ceil(zones / 4) + " 台室外机，补贴前价格。";
        if (zones > 4) plan = "全托管版";
      } else {
        mid = spec.base + spec.perTon * Math.min(tons, 5);
        if (tons > 5) { mid *= 2; detail = "负荷超过一套 5 吨系统，因此按两套系统估算。" + detail; plan = "全托管版"; }
      }

      out("tons").textContent = tons > 5 ? "5+" : tons.toFixed(1);
      out("pin").style.setProperty("--pos", (Math.min(Math.max((tons - 1.5) / 3.5, 0), 1) * 100).toFixed(1) + "%");
      out("cool").textContent = (coolBtu / 3412).toFixed(1) + " kW";
      out("heat").textContent = (heatBtu / 3412).toFixed(1) + " kW";
      out("cost").innerHTML = money(round100(mid * 0.88)) + " &ndash; " + money(round100(mid * 1.12));
      out("detail").textContent = detail;
      out("plan").textContent = plan;
    }

    pairRange("sz-area-range", "sz-area", update);
    form.addEventListener("change", update);
    update();
  }

  /* ----------------------------------------------------------------
   * Plans billing toggle (monthly / yearly).
   * ---------------------------------------------------------------- */
  function initBilling() {
    var buttons = document.querySelectorAll("[data-billing]");
    var prices = document.querySelectorAll(".plan-price[data-monthly]");
    if (!buttons.length || !prices.length) return;

    function apply(mode) {
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-billing") === mode ? "true" : "false"); });
      prices.forEach(function (p) {
        var unit = mode === "yearly" ? "/年" : "/月";
        p.innerHTML = "¥" + p.getAttribute("data-" + mode) + "<small>" + unit + "</small>";
        var note = p.nextElementSibling;
        if (note && note.hasAttribute("data-" + mode + "-note")) note.textContent = note.getAttribute("data-" + mode + "-note");
      });
    }
    buttons.forEach(function (b) { b.addEventListener("click", function () { apply(b.getAttribute("data-billing")); }); });
  }

  /* ----------------------------------------------------------------
   * Form validation (front-end only — nothing is sent).
   * Handles [data-required] fields and [data-required-group] choice sets.
   * ---------------------------------------------------------------- */
  function fieldOk(field) {
    if (field.type === "checkbox") return field.checked;
    var val = (field.value || "").trim();
    var kind = field.getAttribute("data-type") || field.type;
    if (!val) return !field.hasAttribute("data-required");
    if (kind === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if (kind === "phone") return val.replace(/\D/g, "").length >= 7;
    if (kind === "zip") return /^\d{5}$/.test(val);
    return true;
  }

  function setError(target, errId, bad) {
    target.classList.toggle("is-invalid", bad);
    if (target.matches("input, select, textarea")) target.setAttribute("aria-invalid", bad ? "true" : "false");
    var err = errId && document.getElementById(errId);
    if (err) err.classList.toggle("show", bad);
  }

  function initForms() {
    var forms = document.querySelectorAll("form[data-validate]");
    if (!forms.length) return;

    forms.forEach(function (form) {
      var card = form.closest(".form-card") || form.parentNode;
      var success = card.querySelector(".form-success");
      var fields = form.querySelectorAll("[data-required], [data-type]");
      var groups = form.querySelectorAll("[data-required-group]");

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var firstBad = null;

        groups.forEach(function (g) {
          var ok = !!g.querySelector("input:checked");
          setError(g, g.getAttribute("aria-describedby"), !ok);
          if (!ok && !firstBad) firstBad = g.querySelector("input");
        });
        fields.forEach(function (f) {
          var ok = fieldOk(f);
          setError(f, f.getAttribute("aria-describedby"), !ok);
          if (!ok && !firstBad) firstBad = f;
        });

        if (firstBad) {
          firstBad.focus();
          if (success) success.classList.remove("show");
          return;
        }

        form.dispatchEvent(new CustomEvent("form:valid"));
        form.reset();
        form.dispatchEvent(new Event("change"));
        if (success) {
          success.classList.add("show");
          success.focus();
          success.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "center" });
        }
      });

      // Clear errors as the visitor fixes them.
      form.addEventListener("input", function (e) { clearOne(e.target); });
      form.addEventListener("change", function (e) { clearOne(e.target); });
      function clearOne(t) {
        if (!t || !t.closest) return;
        var g = t.closest("[data-required-group]");
        if (g && g.classList.contains("is-invalid") && g.querySelector("input:checked")) setError(g, g.getAttribute("aria-describedby"), false);
        if (t.classList && t.classList.contains("is-invalid") && fieldOk(t)) setError(t, t.getAttribute("aria-describedby"), false);
      }
    });
  }

  /* ----------------------------------------------------------------
   * Booking form extras: live summary, emergency prompt, date min, ref.
   * ---------------------------------------------------------------- */
  function initBooking() {
    var form = document.querySelector("form[data-booking]");
    if (!form) return;
    var alertBox = form.querySelector("[data-emergency-alert]");
    var date = form.querySelector("#bk-date");
    var sum = function (k) { return document.querySelector('[data-sum="' + k + '"]'); };
    var ref = document.querySelector("[data-booking-ref]");

    if (date) {
      var d = new Date();
      var iso = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      date.min = iso;
    }

    function checked(name) {
      return Array.prototype.map.call(form.querySelectorAll('[name="' + name + '"]:checked'), function (i) { return i.value; });
    }

    // After a successful submit the form resets; keep the summary as a recap
    // until the visitor starts editing again.
    var frozen = false;

    function update(e) {
      if (e && e.isTrusted) frozen = false;
      if (frozen) { if (alertBox) alertBox.classList.remove("show"); return; }
      var sys = checked("system")[0];
      var sym = checked("symptoms");
      var urg = checked("urgency")[0];
      var win = checked("window")[0];
      if (sum("system")) sum("system").textContent = sys || "未选择";
      if (sum("symptoms")) sum("symptoms").textContent = sym.length ? (sym.length > 2 ? sym.slice(0, 2).join(", ") + " +" + (sym.length - 2) : sym.join(", ")) : "未勾选";
      if (sum("urgency")) sum("urgency").textContent = urg || "未选择";
      if (sum("window")) sum("window").textContent = win || "未选择";
      if (sum("date")) {
        var v = date && date.value;
        sum("date").textContent = v ? new Date(v + "T12:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }) : "未选择";
      }
      if (alertBox) alertBox.classList.toggle("show", urg === "Emergency");
    }

    form.addEventListener("change", update);
    form.addEventListener("input", update);
    form.addEventListener("form:valid", function () {
      if (ref) ref.textContent = "BK-" + String(Math.floor(10000 + Math.random() * 89999));
      frozen = true;
    });
    update();
  }

  /* ----------------------------------------------------------------
   * Office hours: highlight today and show open/closed status.
   * ---------------------------------------------------------------- */
  function initHours() {
    var table = document.querySelector("[data-hours]");
    var status = document.querySelector("[data-open-status]");
    if (!table) return;
    var now = new Date();
    var row = table.querySelector('[data-day="' + now.getDay() + '"]');
    if (!row) return;
    row.classList.add("today");
    if (!status) return;
    var open = parseFloat(row.getAttribute("data-open"));
    var close = parseFloat(row.getAttribute("data-close"));
    var h = now.getHours() + now.getMinutes() / 60;
    var isOpen = !isNaN(open) && h >= open && h < close;
    status.classList.toggle("open", isOpen);
    status.textContent = isOpen ? "办公室营业中" : "办公室休息 · 急修热线畅通";
  }

  /* ----------------------------------------------------------------
   * Current year in the footer.
   * ---------------------------------------------------------------- */
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  function boot() {
    initSeason();
    initNav();
    initStickyHeader();
    initReveal();
    initRepairReplace();
    initSizer();
    initBilling();
    initForms();
    initBooking();
    initHours();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
