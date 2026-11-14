import{t as e}from"./rolldown-runtime-Dh6celcD.js";var t,n,r,i,a;function o(){return(o=e((()=>{t={title:`Blocks/process`},n={render:()=>`<div class="ws-doc"><style>
.ws-doc{font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#1c2733;max-width:1060px}
.ws-head{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:6px}
.ws-badge{font-size:11px;padding:2px 9px;border-radius:99px;color:#fff;background:#2e7d32}
.ws-badge.preview{background:#b26a00}.ws-badge.planned{background:#757575}
.ws-src{font-size:12px;color:#7a8794}
.ws-note{font-size:13px;color:#54626f;line-height:1.65;margin:4px 0 14px}
.ws-grid{display:flex;flex-wrap:wrap;gap:14px}
.ws-card{border:1px solid #dde3ea;border-radius:10px;overflow:hidden;width:158px;background:#fff}
.ws-swatch{height:64px}
.ws-meta{padding:8px 10px;font-size:12px;line-height:1.55}
.ws-meta b{font-size:12.5px}
.ws-hex{font-family:ui-monospace,Menlo,monospace;color:#37474f}
.ws-table{border-collapse:collapse;font-size:12.5px;margin:6px 0 14px}
.ws-table th,.ws-table td{border:1px solid #dde3ea;padding:5px 9px;text-align:left;vertical-align:top}
.ws-table th{background:#f2f5f8}
.ws-chip{display:inline-block;width:14px;height:14px;border-radius:4px;border:1px solid rgba(0,0,0,.18);vertical-align:-2px;margin-right:6px}
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T2-process（uc-ductwise）</b><span class="ws-src">来源：assets-blocks/process/T2-process.html</span></div><p class="ws-note">来源模板 uc-ductwise · 区块 T2-process；已链接模板原样 CSS（tpl/uc-ductwise/css/vendor/bootstrap.min.css、tpl/uc-ductwise/css/style.css）。槽位推断：{"cards": 4, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/uc-ductwise/css/vendor/bootstrap.min.css"><link rel="stylesheet" href="tpl/uc-ductwise/css/style.css"><section class="section bg-white" id="how">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow">How a visit works</span>
          <h2 class="section-title">From the first call to a working system</h2>
          <p class="section-lead">No surprise invoices and no waiting around all day. Here is what happens after you book.</p>
        </div>
        <div class="visit-grid">
          <div class="visit-step reveal">
            <div class="visit-num">01</div>
            <span class="when">2 minutes</span>
            <h3>Book or call</h3>
            <p>Pick a two-hour window online or call the line. Emergencies go straight to the technician on duty.</p>
          </div>
          <div class="visit-step reveal d1">
            <div class="visit-num">02</div>
            <span class="when">On the day</span>
            <h3>We text when we&rsquo;re on the way</h3>
            <p>You get your technician&rsquo;s name, van number and a live arrival estimate, so you are not stuck at home guessing.</p>
          </div>
          <div class="visit-step reveal d2">
            <div class="visit-num">03</div>
            <span class="when">Before any work</span>
            <h3>Diagnose, then quote</h3>
            <p>We test the system, show you the failed part and give you a flat-rate price. You decide; the diagnostic is credited to the repair.</p>
          </div>
          <div class="visit-step reveal d3">
            <div class="visit-num">04</div>
            <span class="when">Same visit</span>
            <h3>Fix, test, tidy up</h3>
            <p>Most repairs are done from the van stock. We record readings on your system card and leave the floor cleaner than we found it.</p>
          </div>
        </div>
      </div>
    </section></div>`},n.parameters={layout:`fullscreen`},r={render:()=>`<div class="ws-doc"><style>
.ws-doc{font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#1c2733;max-width:1060px}
.ws-head{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:6px}
.ws-badge{font-size:11px;padding:2px 9px;border-radius:99px;color:#fff;background:#2e7d32}
.ws-badge.preview{background:#b26a00}.ws-badge.planned{background:#757575}
.ws-src{font-size:12px;color:#7a8794}
.ws-note{font-size:13px;color:#54626f;line-height:1.65;margin:4px 0 14px}
.ws-grid{display:flex;flex-wrap:wrap;gap:14px}
.ws-card{border:1px solid #dde3ea;border-radius:10px;overflow:hidden;width:158px;background:#fff}
.ws-swatch{height:64px}
.ws-meta{padding:8px 10px;font-size:12px;line-height:1.55}
.ws-meta b{font-size:12.5px}
.ws-hex{font-family:ui-monospace,Menlo,monospace;color:#37474f}
.ws-table{border-collapse:collapse;font-size:12.5px;margin:6px 0 14px}
.ws-table th,.ws-table td{border:1px solid #dde3ea;padding:5px 9px;text-align:left;vertical-align:top}
.ws-table th{background:#f2f5f8}
.ws-chip{display:inline-block;width:14px;height:14px;border-radius:4px;border:1px solid rgba(0,0,0,.18);vertical-align:-2px;margin-right:6px}
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T3-process（uc-girder）</b><span class="ws-src">来源：assets-blocks/process/T3-process.html</span></div><p class="ws-note">来源模板 uc-girder · 区块 T3-process；已链接模板原样 CSS（tpl/uc-girder/css/vendor/bootstrap.min.css、tpl/uc-girder/css/style.css）。槽位推断：{"cards": 16, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/uc-girder/css/vendor/bootstrap.min.css"><link rel="stylesheet" href="tpl/uc-girder/css/style.css"><section class="section section--dark blueprint" id="process" aria-labelledby="proc-h">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="kicker"><span class="idx">04</span> How we build</span>
          <h2 id="proc-h">Five stages, no black boxes</h2>
          <p class="lead">Pre-construction is where projects are won or lost. We front-load the planning so the field crew builds from a clean set — not a running list of guesses.</p>
        </div>

        <div class="steps">
          <div class="step reveal">
            <div class="step__num">01
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 1 1-4-7.2"/><path d="M21 4l-9 9-3-3"/></svg>
            </div>
            <span class="step__tag">Week 1–2</span>
            <h3>Consult &amp; Site Survey</h3>
            <p>We walk the site, take measurements, pull the plat and talk budget honestly before a dollar is committed.</p>
          </div>
          <div class="step reveal">
            <div class="step__num">02
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h11l5 5v11H4z"/><path d="M9 4v4M8 13h8M8 17h5"/></svg>
            </div>
            <span class="step__tag">Week 3–5</span>
            <h3>Design &amp; Fixed Estimate</h3>
            <p>Drawings, material selections and a line-item bid you can actually read — locked as a fixed price.</p>
          </div>
          <div class="step reveal">
            <div class="step__num">03
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 4v5c0 4.4-3.4 8.3-8 9-4.6-.7-8-4.6-8-9V7l8-4Z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <span class="step__tag">Week 5–8</span>
            <h3>Permits &amp; Scheduling</h3>
            <p>We handle the permit package, inspections calendar and a look-ahead schedule down to the trade day.</p>
          </div>
          <div class="step reveal">
            <div class="step__num">04
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5Z"/></svg>
            </div>
            <span class="step__tag">Build phase</span>
            <h3>Construction</h3>
            <p>Self-perform crews, weekly owner walk-throughs and a clean, hoarded, hazard-marked site every single day.</p>
          </div>
          <div class="step reveal">
            <div class="step__num">05
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7l4-4h8l4 4v13H4z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
            <span class="step__tag">Closeout</span>
            <h3>Inspection &amp; Handover</h3>
            <p>Final inspections, punch list, warranty binder, as-builts and an 11-month follow-up walkthrough.</p>
          </div>
        </div>
      </div>
    </section></div>`},r.parameters={layout:`fullscreen`},i={render:()=>`<div class="ws-doc"><style>
.ws-doc{font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#1c2733;max-width:1060px}
.ws-head{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:6px}
.ws-badge{font-size:11px;padding:2px 9px;border-radius:99px;color:#fff;background:#2e7d32}
.ws-badge.preview{background:#b26a00}.ws-badge.planned{background:#757575}
.ws-src{font-size:12px;color:#7a8794}
.ws-note{font-size:13px;color:#54626f;line-height:1.65;margin:4px 0 14px}
.ws-grid{display:flex;flex-wrap:wrap;gap:14px}
.ws-card{border:1px solid #dde3ea;border-radius:10px;overflow:hidden;width:158px;background:#fff}
.ws-swatch{height:64px}
.ws-meta{padding:8px 10px;font-size:12px;line-height:1.55}
.ws-meta b{font-size:12.5px}
.ws-hex{font-family:ui-monospace,Menlo,monospace;color:#37474f}
.ws-table{border-collapse:collapse;font-size:12.5px;margin:6px 0 14px}
.ws-table th,.ws-table td{border:1px solid #dde3ea;padding:5px 9px;text-align:left;vertical-align:top}
.ws-table th{background:#f2f5f8}
.ws-chip{display:inline-block;width:14px;height:14px;border-radius:4px;border:1px solid rgba(0,0,0,.18);vertical-align:-2px;margin-right:6px}
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T4-process（uc-bedrock）</b><span class="ws-src">来源：assets-blocks/process/T4-process.html</span></div><p class="ws-note">来源模板 uc-bedrock · 区块 T4-process；已链接模板原样 CSS（tpl/uc-bedrock/assets/vendor/bootstrap6/css/bootstrap.min.css、tpl/uc-bedrock/assets/css/style.css）。槽位推断：{"cards": 6, "images": 0, "items": 5}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/uc-bedrock/assets/vendor/bootstrap6/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/uc-bedrock/assets/css/style.css"><section class="section bg-2" id="process">
    <div class="container">
      <div class="row g-7 mb-7">
        <div class="lg:col-5">
          <p class="eyebrow fs-sm fg-primary mb-3">Process</p>
          <h2 class="slab section-title fs-4xl mb-0">From enquiry<br>to handover</h2>
        </div>
        <div class="lg:col-7">
          <p class="fg-2 fs-lg mb-0">
            Five stages, and we will tell you at stage two if we think the
            programme in the tender documents is undeliverable.
          </p>
        </div>
      </div>

      <ol class="stepper md:stepper-horizontal mb-7">
        <li class="stepper-item active">Enquiry &amp; site visit</li>
        <li class="stepper-item active">Buildability review</li>
        <li class="stepper-item active">Tender submission</li>
        <li class="stepper-item">Mobilisation</li>
        <li class="stepper-item">Handover &amp; validation</li>
      </ol>

      <div class="row g-5">
        <div class="md:col-4">
          <p class="fw-bold mb-3">Buildability review comes before price</p>
          <p class="fg-2 fs-sm mb-0">We mark up the drawings and come back with what we would change. Roughly a third of our tenders include a compliant bid and an alternative.</p>
        </div>
        <div class="md:col-4">
          <p class="fw-bold mb-3">One team, start to finish</p>
          <p class="fg-2 fs-sm mb-0">The estimator who priced it attends the pre-start. The agent who ran the groundworks signs off the validation report.</p>
        </div>
        <div class="md:col-4">
          <p class="fw-bold mb-3">Weekly cost and programme</p>
          <p class="fg-2 fs-sm mb-0">Applications go in on the same day each month and progress photos are shared on Fridays whether or not anyone asks.</p>
        </div>
      </div>
    </div>
  </section></div>`},i.parameters={layout:`fullscreen`},a=[`T2Process`,`T3Process`,`T4Process`]})))()}o();export{n as T2Process,r as T3Process,i as T4Process,a as __namedExportsOrder,t as default};