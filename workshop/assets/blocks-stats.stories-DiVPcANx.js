import{t as e}from"./rolldown-runtime-Dh6celcD.js";var t,n,r,i,a,o;function s(){return(s=e((()=>{t={title:`Blocks/stats`},n={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T0-stats（bm-bizland）</b><span class="ws-src">来源：assets-blocks/stats/T0-stats.html</span></div><p class="ws-note">来源模板 bm-bizland · 区块 T0-stats；已链接模板原样 CSS（tpl/bm-bizland/assets/vendor/bootstrap/css/bootstrap.min.css、tpl/bm-bizland/assets/css/main.css）。槽位推断：{"cards": 8, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/bm-bizland/assets/vendor/bootstrap/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/bm-bizland/assets/css/main.css"><section id="stats" class="stats section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i class="bi bi-emoji-smile"></i>
            <div class="stats-item">
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
              <p>Happy Clients</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i class="bi bi-journal-richtext"></i>
            <div class="stats-item">
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
              <p>Projects</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i class="bi bi-headset"></i>
            <div class="stats-item">
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i class="bi bi-people"></i>
            <div class="stats-item">
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
              <p>Hard Workers</p>
            </div>
          </div><!-- End Stats Item -->

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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T1-stats（hc-industro）</b><span class="ws-src">来源：assets-blocks/stats/T1-stats.html</span></div><p class="ws-note">来源模板 hc-industro · 区块 T1-stats；已链接模板原样 CSS（tpl/hc-industro/css/bootstrap.min.css、tpl/hc-industro/css/style.css）。槽位推断：{"cards": 0, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/hc-industro/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/hc-industro/css/style.css"><div class="container-fluid facts my-5 p-5">
        <div class="row g-5">
            <div class="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
                <div class="text-center border p-5">
                    <i class="fa fa-certificate fa-3x text-white mb-3"></i>
                    <h1 class="display-2 text-primary mb-0">25</h1>
                    <span class="fs-5 fw-semi-bold text-white">Years Experience</span>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.3s">
                <div class="text-center border p-5">
                    <i class="fa fa-users-cog fa-3x text-white mb-3"></i>
                    <h1 class="display-2 text-primary mb-0">135</h1>
                    <span class="fs-5 fw-semi-bold text-white">Team Members</span>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.5s">
                <div class="text-center border p-5">
                    <i class="fa fa-users fa-3x text-white mb-3"></i>
                    <h1 class="display-2 text-primary mb-0">957</h1>
                    <span class="fs-5 fw-semi-bold text-white">Happy Clients</span>
                </div>
            </div>
            <div class="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.7s">
                <div class="text-center border p-5">
                    <i class="fa fa-check-double fa-3x text-white mb-3"></i>
                    <h1 class="display-2 text-primary mb-0">1839</h1>
                    <span class="fs-5 fw-semi-bold text-white">Projects Done</span>
                </div>
            </div>
        </div>
    </div></div>`},r.parameters={layout:`fullscreen`},i={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T2-stats（uc-ductwise）</b><span class="ws-src">来源：assets-blocks/stats/T2-stats.html</span></div><p class="ws-note">来源模板 uc-ductwise · 区块 T2-stats；已链接模板原样 CSS（tpl/uc-ductwise/css/vendor/bootstrap.min.css、tpl/uc-ductwise/css/style.css）。槽位推断：{"cards": 14, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/uc-ductwise/css/vendor/bootstrap.min.css"><link rel="stylesheet" href="tpl/uc-ductwise/css/style.css"><section class="proof-bar" aria-label="Ductwise at a glance">
      <div class="container">
        <div class="proof-grid">
          <div class="proof"><div class="proof-num">52<small>min</small></div><div class="proof-label">Average emergency arrival time last winter</div></div>
          <div class="proof"><div class="proof-num">4.9<small>/5</small></div><div class="proof-label">From 1,260 local reviews</div></div>
          <div class="proof"><div class="proof-num">24/7</div><div class="proof-label">Emergency line answered by a technician</div></div>
          <div class="proof"><div class="proof-num">2<small>yr</small></div><div class="proof-label">Labor warranty on every repair we make</div></div>
        </div>
      </div>
    </section></div>`},i.parameters={layout:`fullscreen`},a={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge preview">preview-only</span><b style="font-size:16px">区块 · T6-stats（hc-industrix）</b><span class="ws-src">来源：assets-blocks/stats/T6-stats.html</span></div><p class="ws-note">来源模板 hc-industrix · 区块 T6-stats；已链接模板原样 CSS（tpl/hc-industrix/css/bootstrap.min.css、tpl/hc-industrix/css/style.css）。槽位推断：{"cards": 4, "images": 0, "items": 0}。抽取置信度 low：结构预览为主，样式可能不完整，请对照来源模板整页核对。</p></div><div><link rel="stylesheet" href="tpl/hc-industrix/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/hc-industrix/css/style.css"><div class="container-fluid py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-primary me-3">
                            <i class="fa fa-users text-white"></i>
                        </div>
                        <h1 class="display-5 mb-0">3453</h1>
                    </div>
                    <h3 class="text-uppercase mb-3">Happy Customers</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla, vestibulum sed mollis non, efficitur in mauris.</span>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-primary me-3">
                            <i class="fa fa-check text-white"></i>
                        </div>
                        <h1 class="display-5 mb-0">4234</h1>
                    </div>
                    <h3 class="text-uppercase mb-3">Project Done</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla, vestibulum sed mollis non, efficitur in mauris.</span>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-primary me-3">
                            <i class="fa fa-award text-white"></i>
                        </div>
                        <h1 class="display-5 mb-0">3123</h1>
                    </div>
                    <h3 class="text-uppercase mb-3">Awards Win</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla, vestibulum sed mollis non, efficitur in mauris.</span>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-primary me-3">
                            <i class="fa fa-users-cog text-white"></i>
                        </div>
                        <h1 class="display-5 mb-0">1831</h1>
                    </div>
                    <h3 class="text-uppercase mb-3">Expert Workers</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nulla, vestibulum sed mollis non, efficitur in mauris.</span>
                </div>
            </div>
        </div>
    </div></div>`},a.parameters={layout:`fullscreen`},o=[`T0Stats`,`T1Stats`,`T2Stats`,`T6Stats`]})))()}s();export{n as T0Stats,r as T1Stats,i as T2Stats,a as T6Stats,o as __namedExportsOrder,t as default};