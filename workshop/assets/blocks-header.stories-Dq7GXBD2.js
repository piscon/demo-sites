import{t as e}from"./rolldown-runtime-Dh6celcD.js";var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{t={title:`Blocks/header`},n={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T0-header（bm-bizland）</b><span class="ws-src">来源：assets-blocks/header/T0-header.html</span></div><p class="ws-note">来源模板 bm-bizland · 区块 T0-header；已链接模板原样 CSS（tpl/bm-bizland/assets/vendor/bootstrap/css/bootstrap.min.css、tpl/bm-bizland/assets/css/main.css）。槽位推断：{"cards": 8, "images": 1, "items": 17}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/bm-bizland/assets/vendor/bootstrap/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/bm-bizland/assets/css/main.css"><header id="header" class="header sticky-top">

    <div class="topbar d-flex align-items-center">
      <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
          <i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
        </div>
        <div class="social-links d-none d-md-flex align-items-center">
          <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div><!-- End Top Bar -->

    <div class="branding d-flex align-items-cente">

      <div class="container position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="tpl/bm-bizland/assets/img/logo.png" alt=""> -->
          <h1 class="sitename">BizLand</h1>
        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li><a href="#hero" class="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#team">Team</a></li>
            <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

      </div>

    </div>

  </header></div>`},n.parameters={layout:`fullscreen`},r={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T1-header-2（hc-industro）</b><span class="ws-src">来源：assets-blocks/header/T1-header-2.html</span></div><p class="ws-note">来源模板 hc-industro · 区块 T1-header-2；已链接模板原样 CSS（tpl/hc-industro/css/bootstrap.min.css、tpl/hc-industro/css/style.css）。槽位推断：{"cards": 2, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/hc-industro/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/hc-industro/css/style.css"><div class="container-fluid bg-dark px-0">
        <div class="row g-0 d-none d-lg-flex">
            <div class="col-lg-6 ps-5 text-start">
                <div class="h-100 d-inline-flex align-items-center text-white">
                    <span>Follow Us:</span>
                    <a class="btn btn-link text-light" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-link text-light" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-link text-light" href=""><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-link text-light" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="col-lg-6 text-end">
                <div class="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                    <span class="fs-5 fw-bold me-2"><i class="fa fa-phone-alt me-2"></i>Call Us:</span>
                    <span class="fs-5 fw-bold">+012 345 6789</span>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T1-header（hc-industro）</b><span class="ws-src">来源：assets-blocks/header/T1-header.html</span></div><p class="ws-note">来源模板 hc-industro · 区块 T1-header；已链接模板原样 CSS（tpl/hc-industro/css/bootstrap.min.css、tpl/hc-industro/css/style.css）。槽位推断：{"cards": 16, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/hc-industro/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/hc-industro/css/style.css"><nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <a href="index.html" class="navbar-brand ps-5 me-0">
            <h1 class="text-white m-0">Industro</h1>
        </a>
        <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="#" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">About</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service</a>
                    <div class="dropdown-menu bg-light m-0">
                        <a href="#" class="dropdown-item">Services</a>
                        <a href="#" class="dropdown-item">Service Details</a>
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Project</a>
                    <div class="dropdown-menu bg-light m-0">
                        <a href="#" class="dropdown-item">Projects</a>
                        <a href="#" class="dropdown-item">Project Details</a>
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu bg-light m-0">
                        <a href="#" class="dropdown-item">FAQs</a>
                        <a href="#" class="dropdown-item">Our Clients</a>
                        <a href="#" class="dropdown-item">Our Team</a>
                        <a href="#" class="dropdown-item">Features</a>
                        <a href="#" class="dropdown-item">Testimonial</a>
                        <a href="#" class="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="#" class="nav-item nav-link">Contact</a>
            </div>
            <a href="https://htmlcodex.com/downloading/?item=2628" class="btn btn-primary px-3 d-none d-lg-block">Buy Pro Version</a>
        </div>
    </nav></div>`},i.parameters={layout:`fullscreen`},a={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T10-header（uc-fineoak）</b><span class="ws-src">来源：assets-blocks/header/T10-header.html</span></div><p class="ws-note">来源模板 uc-fineoak · 区块 T10-header；已链接模板原样 CSS（tpl/uc-fineoak/css/vendor/bootstrap.min.css、tpl/uc-fineoak/css/style.min.css）。槽位推断：{"cards": 0, "images": 0, "items": 15}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/uc-fineoak/css/vendor/bootstrap.min.css"><link rel="stylesheet" href="tpl/uc-fineoak/css/style.min.css"><nav class="navbar navbar-expand-md navbar-default fixed-top probootstrap-navbar">
      <div class="container">
        <a class="navbar-brand" href="index.html" title="uiCookies:FineOak">FineOak</a>
          <button type="button" class="navbar-toggle navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#navbar-collapse" aria-expanded="false" aria-controls="navbar-collapse">
            <span class="visually-hidden">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

        <div id="navbar-collapse" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right ms-auto">
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle">Pages</a>
              <ul class="dropdown-menu">
                <li><a href="about.html">About Us</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="portfolio-single.html">Portfolio Single</a></li>
                <li class="dropdown-submenu dropdown">
                  <a href="#" class="dropdown-toggle"><span>Sub Menu</span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Second Level Menu</a></li>
                    <li><a href="#">Second Level Menu</a></li>
                    <li><a href="#">Second Level Menu</a></li>
                    <li><a href="#">Second Level Menu</a></li>
                  </ul>
                </li>
                <li><a href="services.html">Services</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav></div>`},a.parameters={layout:`fullscreen`},o={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T11-header（gh-fabrica）</b><span class="ws-src">来源：assets-blocks/header/T11-header.html</span></div><p class="ws-note">来源模板 gh-fabrica · 区块 T11-header；已链接模板原样 CSS（tpl/gh-fabrica/assets/app-CThAlR7_.css）。槽位推断：{"cards": 18, "images": 1, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/gh-fabrica/assets/app-CThAlR7_.css"><header>
        <div class="nav-sticky navbar fixed inset-x-0 top-0 z-120 w-full border-b lg:border-transparent lg:bg-transparent border-default-200 bg-body-bg transition-all duration-300 lg:[.nav-sticky-on]:border-default-200 [.nav-sticky-on]:bg-body-bg">
            <div class="container-full py-4.5">
                <div class="flex items-center justify-between">
                    <a href="index.html" class="flex items-center">
                        <img src="data:image/svg+xml,%3csvg%20width='202'%20height='40'%20viewBox='0%200%20202%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.3225%2011.0366H26.73V32.4866H21.195V15.6791L16.455%2032.4866H10.905L6.195%2015.6791V32.4866H0.915V11.0366H9.645L13.9725%2026.5016L18.3225%2011.0366ZM33.3413%2032.4866H27.5587L34.6538%2011.0366H42.2588L49.2488%2032.4866H43.3463L42.1463%2028.0991H34.5638L33.3413%2032.4866ZM35.7788%2023.7191H40.9538L38.3888%2014.3366L35.7788%2023.7191ZM70.0177%2011.0366V32.4866H62.4877L55.3552%2016.3841V32.4866H50.0752V11.0366H58.0552L64.7377%2026.0066V11.0366H70.0177ZM71.6963%2023.9366V11.0366H77.2313V23.4416C77.2313%2026.8466%2078.6113%2028.3016%2081.1613%2028.3016C83.7188%2028.3016%2085.0913%2026.8466%2085.0913%2023.4416V11.0366H90.6263V23.9366C90.6263%2029.7191%2086.7113%2032.9366%2081.1613%2032.9366C75.6188%2032.9366%2071.6963%2029.7191%2071.6963%2023.9366ZM107.306%2011.0366V15.6266H97.8563V19.9391H106.451V24.3491H97.8563V32.4866H92.3213V11.0366H107.306ZM111.769%2032.4866H105.986L113.081%2011.0366H120.686L127.676%2032.4866H121.774L120.574%2028.0991H112.991L111.769%2032.4866ZM114.206%2023.7191H119.381L116.816%2014.3366L114.206%2023.7191ZM132.422%2021.7616C132.422%2026.0516%20134.192%2028.3016%20137.417%2028.3016C139.967%2028.3016%20141.49%2026.7866%20141.977%2023.7116H147.467C146.702%2029.4416%20142.907%2032.9366%20137.41%2032.9366C131.252%2032.9366%20126.842%2028.5416%20126.842%2021.7616C126.842%2014.9816%20131.252%2010.5866%20137.41%2010.5866C142.907%2010.5866%20146.702%2014.0816%20147.467%2019.8116H141.977C141.49%2016.7366%20139.967%2015.2216%20137.417%2015.2216C134.192%2015.2216%20132.422%2017.4641%20132.422%2021.7616ZM166.033%2011.0366V15.6266H159.688V32.4866H154.153V15.6266H147.808V11.0366H166.033ZM184.725%2011.0366V15.6266H178.38V32.4866H172.845V15.6266H166.5V11.0366H184.725Z'%20fill='%23191919'/%3e%3ccircle%20cx='193.619'%20cy='7.60001'%20r='7'%20stroke='%23191919'%20stroke-width='1.2'/%3e%3cpath%20d='M192.49%2011.2156H190.831V3.70544H194.546C196.231%203.70544%20197.257%204.59006%20197.257%205.97606C197.257%207.18881%20196.441%207.98419%20195.176%208.02356C195.769%208.06556%20196.228%208.46981%20196.556%209.20481L197.459%2011.2156H195.619L194.708%209.21006C194.441%208.61681%20194.199%208.45406%20193.58%208.45406H192.49V11.2156ZM192.49%207.11531H194.354C195.139%207.11531%20195.598%206.73469%20195.598%206.07844C195.598%205.43269%20195.152%205.07569%20194.351%205.07569H192.49V7.11531Z'%20fill='%23191919'/%3e%3c/svg%3e" class="w-40.75" />
                    </a>
    
                    <div id="navbar" class="mx-auto hidden lg:flex items-center justify-center">
                        <a href="index.html" class="group flex items-center px-2.5 py-4.5 text-base font-medium text-default-800 transition-all hover:text-primary">
                            <span class="me-1.25 mb-0.5 flex size-1.75 scale-0 bg-primary transition-all duration-300 group-hover:scale-100"></span>
                            Home
                        </a>
    
                        <a href="about.html" class="group flex items-center px-2.5 py-4.5 text-base font-medium text-default-800 transition-all hover:text-primary">
                            <span class="me-1.25 mb-0.5 flex size-1.75 scale-0 bg-primary transition-all duration-300 group-hover:scale-100"></span>
                            About
                        </a>
    
                        <div class="hs-dropdown relative inline-flex [--trigger:hover]">
                            <button type="button" class="hs-dropdown-toggle group flex items-center px-2.5 py-4.5 text-base font-medium text-default-800 transition-all hover:text-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <span class="me-1.25 mb-0.5 flex size-1.75 scale-0 bg-primary transition-all duration-300 group-hover:scale-100"></span>
                                Pages
                                <i class="iconify tabler--chevron-down ms-3"></i>
                            </button>
    
                            <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden w-45 rounded-lg border border-default-200 bg-white p-2 opacity-0 transition-[opacity,margin] duration-300 before:absolute before:start-0 before:-top-4 before:h-4 before:w-full after:absolute after:start-0 after:-bottom-4 after:h-4 after:w-full" role="menu" aria-orientation="vertical">
                                <div class="flex flex-col gap-1">
                                    <a href="index.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Home </a>
                                    <a href="about.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">About</a>
                                    <a href="services.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Services</a>
                                    <a href="case-studies.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Case Studies</a>
                                    <a href="products.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Products</a>
                                    <a href="blog.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Blog</a>
                                    <a href="blog-detail.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Blog Details</a>
                                    <a href="faqs.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">FAQs</a>
                                    <a href="contact.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Contact</a>
                                    <a href="privacy-policy.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Privacy Policy</a>
                                    <a href="error-404.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">404</a>
                                </div>
                            </div>
                        </div>
    
                        <a href="services.html" class="group flex items-center px-2.5 py-4.5 text-base font-medium text-default-800 transition-all hover:text-primary">
                            <span class="me-1.25 mb-0.5 flex size-1.75 scale-0 bg-primary transition-all duration-300 group-hover:scale-100"></span>
                            Services
                        </a>
    
                        <a href="contact.html" class="group flex items-center px-2.5 py-4.5 text-base font-medium text-default-800 transition-all hover:text-primary">
                            <span class="me-1.25 mb-0.5 flex size-1.75 scale-0 bg-primary transition-all duration-300 group-hover:scale-100"></span>
                            Contact
                        </a>
                    </div>
    
                    <div class="flex items-center justify-end gap-4">
                        <a href="contact.html" class="group md:inline-flex hidden items-center gap-5 rounded rounded-ee-2xl bg-primary text-base font-medium text-white transition-all">
                            <!-- TEXT -->
                            <span class="py-3.75 ps-6">
                                <span class="relative block overflow-hidden">
                                    <span class="block group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                                        Get A Quote
                                    </span>
                                    <span class="absolute top-7 start-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                                        Get A Quote
                                    </span>
                                </span>
                            </span>
    
                            <!-- ICON -->
                            <span class="m-1.25 flex size-10 items-center justify-center rounded rounded-ee-xl bg-default-900 text-white">
                                <span class="relative block overflow-hidden">
                                    <span class="block group-hover:translate-x-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                                        <i class="iconify tabler--arrow-narrow-right flex size-6"></i>
                                    </span>
                                    <span class="absolute top-0 end-7 group-hover:end-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                                        <i class="iconify tabler--arrow-narrow-right flex size-6"></i>
                                    </span>
                                </span>
                            </span>
                        </a>
    
                        <div class="flex items-center lg:hidden">
                            <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="mobile-menu" data-hs-overlay="#mobile-menu" class="inline-flex size-12 items-center justify-center rounded-md bg-linear-to-tr from-primary-1 to-primary-2 text-base font-medium text-white transition-all">
                                <i class="iconify tabler--align-right size-6"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div id="mobile-menu" class="hs-overlay hs-overlay-open:translate-y-0 hs-overlay-open:top-21 [--body-scroll:true] fixed inset-x-0 top-0 z-110 h-78 -translate-y-full transform overflow-hidden bg-body-bg shadow-xl transition-all duration-300 lg:hidden" role="dialog" tabindex="-1" aria-labelledby="mobile-menu-label">
            <div class="flex max-h-78 flex-col gap-1 divide-y divide-default-200 overflow-y-auto">
                <a href="index.html" class="group flex items-center px-2.5 py-4.5 text-base font-medium text-default-800 transition-all hover:text-primary">
                    <span class="me-1.25 mb-0.5 flex size-1.75 scale-0 bg-primary transition-all duration-300 group-hover:scale-100"></span>
                    Home
                </a>
    
                <a href="about.html" class="group flex items-center px-2.5 py-4.5 text-base font-medium text-default-800 transition-all hover:text-primary">
                    <span class="me-1.25 mb-0.5 flex size-1.75 scale-0 bg-primary transition-all duration-300 group-hover:scale-100"></span>
                    About
                </a>
    
                <div class="hs-accordion">
                    <button type="button" class="hs-accordion-toggle group flex items-center px-2.5 py-4.5 text-base font-medium text-default-800 transition-all hover:text-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        <span class="me-1.25 mb-0.5 flex size-1.75 scale-0 bg-primary transition-all duration-300 group-hover:scale-100"></span>
                        Pages
                        <i class="iconify tabler--chevron-down ms-4"></i>
                    </button>
    
                    <div class="hs-accordion-content hidden w-full overflow-hidden ps-5 pb-4 transition-[height]">
                        <a href="index.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Home </a>
                        <a href="about.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">About</a>
                        <a href="services.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Services</a>
                        <a href="case-studies.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Case Studies</a>
                        <a href="products.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Products</a>
                        <a href="blog.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Blog</a>
                        <a href="blog-detail.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Blog Details</a>
                        <a href="faqs.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">FAQs</a>
                        <a href="contact.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Contact</a>
                        <a href="privacy-policy.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">Privacy Policy</a>
                        <a href="error-404.html" class="block rounded-sm px-3 py-2 text-sm font-semibold text-default-800 hover:bg-primary/6 hover:text-primary" tabindex="0">404</a>
                    </div>
                </div>
    
                <a href="services.html" class="group flex items-center px-2.5 py-4.5 text-base font-medium text-default-800 transition-all hover:text-primary">
                    <span class="me-1.25 mb-0.5 flex size-1.75 scale-0 bg-primary transition-all duration-300 group-hover:scale-100"></span>
                    Services
                </a>
    
                <a href="contact.html" class="group flex items-center px-2.5 py-4.5 text-base font-medium text-default-800 transition-all hover:text-primary">
                    <span class="me-1.25 mb-0.5 flex size-1.75 scale-0 bg-primary transition-all duration-300 group-hover:scale-100"></span>
                    Contact
                </a>
            </div>
        </div>
    </header></div>`},o.parameters={layout:`fullscreen`},s={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T2-header-2（uc-ductwise）</b><span class="ws-src">来源：assets-blocks/header/T2-header-2.html</span></div><p class="ws-note">来源模板 uc-ductwise · 区块 T2-header-2；已链接模板原样 CSS（tpl/uc-ductwise/css/vendor/bootstrap.min.css、tpl/uc-ductwise/css/style.css）。槽位推断：{"cards": 0, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/uc-ductwise/css/vendor/bootstrap.min.css"><link rel="stylesheet" href="tpl/uc-ductwise/css/style.css"><nav class="call-bar" aria-label="Quick contact">
    <a class="call" href="tel:+15550147720"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Call 24/7</a>
    <a class="book" href="booking.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> Book service</a>
  </nav></div>`},s.parameters={layout:`fullscreen`},c={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T2-header-3（uc-ductwise）</b><span class="ws-src">来源：assets-blocks/header/T2-header-3.html</span></div><p class="ws-note">来源模板 uc-ductwise · 区块 T2-header-3；已链接模板原样 CSS（tpl/uc-ductwise/css/vendor/bootstrap.min.css、tpl/uc-ductwise/css/style.css）。槽位推断：{"cards": 0, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/uc-ductwise/css/vendor/bootstrap.min.css"><link rel="stylesheet" href="tpl/uc-ductwise/css/style.css"><div class="topstrip">
    <div class="container">
      <p class="topstrip-msg m-0">
        <span class="pulse" aria-hidden="true"></span>
        <span><strong>Emergency line open</strong><span class="hide-xs"> &middot; a technician answers 24/7</span>: <a href="tel:+15550147720">(555) 014-7720</a></span>
      </p>
      <div class="topstrip-right">
        <span class="topstrip-hours">Office Mon&ndash;Fri 7am&ndash;7pm &middot; Sat 8am&ndash;4pm</span>
        <div class="season-switch" role="group" aria-label="Show seasonal content">
          <button type="button" data-season-set="heat" aria-pressed="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22c4 0 7-2.8 7-7 0-3.5-2.2-5.6-3.6-7.4-.3 1.9-1.2 3-2.4 3.5C13.4 7.5 12 4.6 9.5 2c.3 3.4-1.6 5.4-3 7.3C5.3 10.9 5 12.4 5 15c0 4.2 3 7 7 7z"/><path d="M12 22c-1.7 0-3-1.2-3-3 0-1.6 1.2-2.6 2-3.6.4 1 1 1.5 1.6 1.7.2-.9.8-1.6 1.4-2.1.6 1.1 1 2 1 3 0 2.3-1.3 4-3 4z"/></svg><span class="hide-xs">Heating</span><span class="visually-hidden d-sm-none">Heating season</span></button>
          <button type="button" data-season-set="cool" aria-pressed="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20M4.2 6.5l15.6 9M4.2 17.5l15.6-9"/><path d="m9 4 3 2.5L15 4M9 20l3-2.5 3 2.5M3.5 10.5l3.6-.6-1.3-3.5M20.5 13.5l-3.6.6 1.3 3.5M5.8 17.6l1.3-3.5-3.6-.6M18.2 6.4l-1.3 3.5 3.6.6"/></svg><span class="hide-xs">Cooling</span><span class="visually-hidden d-sm-none">Cooling season</span></button>
        </div>
      </div>
    </div>
  </div></div>`},c.parameters={layout:`fullscreen`},l={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T2-header（uc-ductwise）</b><span class="ws-src">来源：assets-blocks/header/T2-header.html</span></div><p class="ws-note">来源模板 uc-ductwise · 区块 T2-header；已链接模板原样 CSS（tpl/uc-ductwise/css/vendor/bootstrap.min.css、tpl/uc-ductwise/css/style.css）。槽位推断：{"cards": 6, "images": 0, "items": 5}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/uc-ductwise/css/vendor/bootstrap.min.css"><link rel="stylesheet" href="tpl/uc-ductwise/css/style.css"><header class="site-header">
    <nav class="navbar navbar-expand-lg" aria-label="Primary">
      <div class="container">
        <a class="brand" href="index.html" aria-label="Ductwise Heating &amp; Air, home">
          <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.83 16.38a6.08 6.08 0 0 1-8.62-7l5.41 1.45a6.08 6.08 0 0 1 7-8.62l-1.45 5.41a6.08 6.08 0 0 1 8.62 7l-5.41-1.45a6.08 6.08 0 0 1-7 8.62l1.45-5.41Z"/><path d="M12 12v.01"/></svg></span>
          <span>
            <span class="brand-name">Ductwise</span>
            <span class="brand-sub">Heating &amp; Air</span>
          </span>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primary-nav" aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation menu">
          <span class="toggler-bar"></span>
          <span class="toggler-bar"></span>
          <span class="toggler-bar"></span>
        </button>

        <div class="collapse navbar-collapse" id="primary-nav">
          <ul class="navbar-nav nav-menu ms-auto align-items-lg-center">
            <li class="nav-item"><a class="nav-link" href="index.html" aria-current="page">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="plans.html">Maintenance plans</a></li>
            <li class="nav-item"><a class="nav-link" href="index.html#reviews">Reviews</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
          </ul>
          <div class="nav-actions">
            <a class="nav-phone" href="tel:+15550147720"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span><span><small>Call 24/7</small><span class="num">(555) 014-7720</span></span></a>
            <a class="btn btn-accent" href="booking.html">Book service</a>
          </div>
        </div>
      </div>
    </nav>
  </header></div>`},l.parameters={layout:`fullscreen`},u={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T3-header-2（uc-girder）</b><span class="ws-src">来源：assets-blocks/header/T3-header-2.html</span></div><p class="ws-note">来源模板 uc-girder · 区块 T3-header-2；已链接模板原样 CSS（tpl/uc-girder/css/vendor/bootstrap.min.css、tpl/uc-girder/css/style.css）。槽位推断：{"cards": 3, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/uc-girder/css/vendor/bootstrap.min.css"><link rel="stylesheet" href="tpl/uc-girder/css/style.css"><div class="topbar">
    <div class="wrap topbar__inner">
      <span class="topbar__item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5c0 8.3 6.7 15 15 15l1-3.5-4.2-1.4-1.6 1.6a11 11 0 0 1-4.9-4.9l1.6-1.6L9 6 5.5 5H4Z"/></svg>
        <a href="tel:+16145550148">(614) 555-0148</a>
      </span>
      <span class="topbar__item topbar__hideable">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
        Mon–Fri 7:00a–5:30p · Sat by appointment
      </span>
      <span class="topbar__item topbar__hideable">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12l2 2 4-4"/><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3Z"/></svg>
        OH Lic. #GC-4471 · Bonded &amp; Insured
      </span>
      <span class="topbar__spacer topbar__social">
        <a href="#" aria-label="Girder on Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 22v-8h2.7l.4-3H13V9.1c0-.9.3-1.5 1.5-1.5H16V5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9V11H7.5v3H10v8h3Z"/></svg></a>
        <a href="#" aria-label="Girder on Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/></svg></a>
        <a href="#" aria-label="Girder on LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 8.5v9H4v-9h2.5ZM5.2 4.2A1.5 1.5 0 1 1 5.2 7.2a1.5 1.5 0 0 1 0-3ZM20 12.7V17.5h-2.5v-4.3c0-1.1-.4-1.8-1.4-1.8-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.8v4.3H11s.1-7.9 0-9h2.5v1.3c.3-.5 1-1.3 2.4-1.3 1.7 0 3.1 1.1 3.1 3.5Z"/></svg></a>
      </span>
    </div>
  </div></div>`},u.parameters={layout:`fullscreen`},d={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T3-header（uc-girder）</b><span class="ws-src">来源：assets-blocks/header/T3-header.html</span></div><p class="ws-note">来源模板 uc-girder · 区块 T3-header；已链接模板原样 CSS（tpl/uc-girder/css/vendor/bootstrap.min.css、tpl/uc-girder/css/style.css）。槽位推断：{"cards": 0, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/uc-girder/css/vendor/bootstrap.min.css"><link rel="stylesheet" href="tpl/uc-girder/css/style.css"><header class="header" id="header">
    <div class="wrap header__bar">
      <a class="brand" href="#top" aria-label="Girder Construction — home">
        <span class="brand__mark" aria-hidden="true">
          <!-- I-beam mark -->
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16M4 20h16M8 4v16M16 4v16"/></svg>
        </span>
        <span>Girder<small>Construction Co.</small></span>
      </a>

      <nav class="nav" id="nav" aria-label="Primary">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#about">Why Us</a>
        <a href="#process">Process</a>
        <a href="#team">Team</a>
        <a href="#safety">Safety</a>
        <a href="#quote" class="btn header__cta">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          Get a Quote
        </a>
      </nav>

      <button class="nav-toggle" id="navToggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header></div>`},d.parameters={layout:`fullscreen`},f={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T4-header-2（uc-bedrock）</b><span class="ws-src">来源：assets-blocks/header/T4-header-2.html</span></div><p class="ws-note">来源模板 uc-bedrock · 区块 T4-header-2；已链接模板原样 CSS（tpl/uc-bedrock/assets/vendor/bootstrap6/css/bootstrap.min.css、tpl/uc-bedrock/assets/css/style.css）。槽位推断：{"cards": 1, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/uc-bedrock/assets/vendor/bootstrap6/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/uc-bedrock/assets/css/style.css"><div class="top-strip">
  <div class="container d-flex flex-wrap justify-content-between align-items-center gap-3">
    <span>CHAS · Constructionline Gold · ISO 9001 / 14001 / 45001</span>
    <span>Tenders: <a href="mailto:tenders@bedrock.example">tenders@bedrock.example</a> · <a href="tel:01142000000">0114 200 0000</a></span>
  </div>
</div></div>`},f.parameters={layout:`fullscreen`},p={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T4-header（uc-bedrock）</b><span class="ws-src">来源：assets-blocks/header/T4-header.html</span></div><p class="ws-note">来源模板 uc-bedrock · 区块 T4-header；已链接模板原样 CSS（tpl/uc-bedrock/assets/vendor/bootstrap6/css/bootstrap.min.css、tpl/uc-bedrock/assets/css/style.css）。槽位推断：{"cards": 7, "images": 0, "items": 5}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/uc-bedrock/assets/vendor/bootstrap6/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/uc-bedrock/assets/css/style.css"><header class="site-header">
  <nav class="navbar lg:navbar-expand" aria-label="Main">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center gap-3 fw-bold" href="index.html">
        <span class="brand-mark" aria-hidden="true">B</span> BEDROCK
      </a>
      <dialog class="drawer drawer-end" tabindex="-1" id="navDrawer" aria-labelledby="navDrawerLabel">
        <div class="drawer-header">
          <h5 class="drawer-title" id="navDrawerLabel">Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
        </div>
        <div class="drawer-body mb-3 lg:mb-0">
          <ul class="nav navbar-nav me-auto" id="navScroll">
            <li class="nav-item"><a class="nav-link" href="#capabilities">Capabilities</a></li>
            <li class="nav-item"><a class="nav-link" href="#sectors">Sectors</a></li>
            <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
            <li class="nav-item"><a class="nav-link" href="#process">Process</a></li>
            <li class="nav-item"><a class="nav-link" href="#tender">Tender</a></li>
          </ul>
        </div>
      </dialog>
      <div class="d-flex align-items-center gap-3 ms-auto">
        <button class="btn-icon" type="button" id="themeToggle" aria-label="Toggle color mode">
          <svg class="theme-icon-light" width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="8" r="3.25"/><path d="M8 1v1.5M8 13.5V15M15 8h-1.5M2.5 8H1m11-4-1 1M5 11l-1 1m0-8 1 1m6 6 1 1"/></svg>
          <svg class="theme-icon-dark" width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/></svg>
        </button>
        <a class="btn-solid theme-primary d-none md:d-inline-flex" href="#tender">Request a tender</a>
        <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navDrawer" aria-controls="navDrawer" aria-label="Open navigation">
          <span class="navbar-toggler-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </nav>
</header></div>`},p.parameters={layout:`fullscreen`},m={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T5-header-2（hc-weldork）</b><span class="ws-src">来源：assets-blocks/header/T5-header-2.html</span></div><p class="ws-note">来源模板 hc-weldork · 区块 T5-header-2；已链接模板原样 CSS（tpl/hc-weldork/css/bootstrap.min.css、tpl/hc-weldork/css/style.css）。槽位推断：{"cards": 8, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/hc-weldork/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/hc-weldork/css/style.css"><div class="container-fluid bg-white sticky-top wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                <a href="index.html" class="navbar-brand d-lg-none">
                    <h1 class="fw-bold m-0">WELDORK</h1>
                </a>
                <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="index.html" class="nav-item nav-link active">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="service.html" class="nav-item nav-link">Services</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                <a href="team.html" class="dropdown-item">Our Team</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="404.html" class="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                    <div class="ms-auto d-none d-lg-block">
                        <a href="https://htmlcodex.com/downloading/?item=3556" class="btn btn-primary py-2 px-3">Buy Pro Version</a>
                    </div>
                </div>
            </nav>
        </div>
    </div></div>`},m.parameters={layout:`fullscreen`},h={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge preview">preview-only</span><b style="font-size:16px">区块 · T5-header（hc-weldork）</b><span class="ws-src">来源：assets-blocks/header/T5-header.html</span></div><p class="ws-note">来源模板 hc-weldork · 区块 T5-header；已链接模板原样 CSS（tpl/hc-weldork/css/bootstrap.min.css、tpl/hc-weldork/css/style.css）。槽位推断：{"cards": 2, "images": 0, "items": 0}。抽取置信度 low：结构预览为主，样式可能不完整，请对照来源模板整页核对。</p></div><div><link rel="stylesheet" href="tpl/hc-weldork/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/hc-weldork/css/style.css"><div class="container-fluid bg-primary text-white d-none d-lg-flex wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-3">
            <div class="d-flex align-items-center">
                <a href="index.html">
                    <h2 class="text-white fw-bold m-0">WELDORK</h2>
                </a>
                <div class="ms-auto d-flex align-items-center">
                    <small class="ms-4"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</small>
                    <small class="ms-4"><i class="fa fa-envelope me-3"></i>info@example.com</small>
                    <small class="ms-4"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</small>
                    <div class="ms-3 d-flex">
                        <a class="btn btn-sm-square btn-light text-primary ms-2" href=""><i
                                class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm-square btn-light text-primary ms-2" href=""><i
                                class="fab fa-twitter"></i></a>
                        <a class="btn btn-sm-square btn-light text-primary ms-2" href=""><i
                                class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div></div>`},h.parameters={layout:`fullscreen`},g={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge preview">preview-only</span><b style="font-size:16px">区块 · T6-header-2（hc-industrix）</b><span class="ws-src">来源：assets-blocks/header/T6-header-2.html</span></div><p class="ws-note">来源模板 hc-industrix · 区块 T6-header-2；已链接模板原样 CSS（tpl/hc-industrix/css/bootstrap.min.css、tpl/hc-industrix/css/style.css）。槽位推断：{"cards": 4, "images": 0, "items": 0}。抽取置信度 low：结构预览为主，样式可能不完整，请对照来源模板整页核对。</p></div><div><link rel="stylesheet" href="tpl/hc-industrix/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/hc-industrix/css/style.css"><div class="container-fluid bg-dark text-white p-0">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <small class="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>123 Street, New York, USA</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center">
                    <small class="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <small class="fa fa-envelope text-primary me-2"></small>
                    <small>info@example.com</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center mx-n2">
                    <a class="btn btn-square btn-link border-0 border-end border-secondary" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-square btn-link border-0 border-end border-secondary" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-square btn-link border-0 border-end border-secondary" href=""><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-square btn-link" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div></div>`},g.parameters={layout:`fullscreen`},_={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T6-header（hc-industrix）</b><span class="ws-src">来源：assets-blocks/header/T6-header.html</span></div><p class="ws-note">来源模板 hc-industrix · 区块 T6-header；已链接模板原样 CSS（tpl/hc-industrix/css/bootstrap.min.css、tpl/hc-industrix/css/style.css）。槽位推断：{"cards": 17, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/hc-industrix/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/hc-industrix/css/style.css"><nav class="navbar navbar-expand-lg bg-white navbar-light p-0">
        <a href="index.html" class="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
            <h2 class="m-0">Industrix</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav mx-auto p-4 p-lg-0">
                <a href="index.html" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">About</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service</a>
                    <div class="dropdown-menu bg-light m-0">
                        <a href="#" class="dropdown-item">Services</a>
                        <a href="#" class="dropdown-item">Service Details</a>
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Project</a>
                    <div class="dropdown-menu bg-light m-0">
                        <a href="#" class="dropdown-item">Projects</a>
                        <a href="#" class="dropdown-item">Project Details</a>
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu bg-light m-0">
                        <a href="#" class="dropdown-item">FAQs</a>
                        <a href="#" class="dropdown-item">Our Team</a>
                        <a href="#" class="dropdown-item">Our Clients</a>
                        <a href="#" class="dropdown-item">Testimonial</a>
                        <a href="#" class="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="#" class="nav-item nav-link">Contact</a>
            </div>
            <div class="navbar-phone border-start px-lg-5 d-none d-lg-flex align-items-center">
                <a href="https://htmlcodex.com/downloading/?item=3915" class="btn btn-primary">Buy Pro Version</a>
            </div>
        </div>
    </nav></div>`},_.parameters={layout:`fullscreen`},v={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T7-header（hc-electra）</b><span class="ws-src">来源：assets-blocks/header/T7-header.html</span></div><p class="ws-note">来源模板 hc-electra · 区块 T7-header；已链接模板原样 CSS（tpl/hc-electra/css/bootstrap.min.css、tpl/hc-electra/css/style.css）。槽位推断：{"cards": 16, "images": 2, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/hc-electra/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/hc-electra/css/style.css"><div class="container-fluid header-top">
            <div class="container d-flex align-items-center">
                <div class="d-flex align-items-center h-100">
                    <a href="#" class="navbar-brand" style="height: 125px;">
                        <h1 class="text-primary mb-0"><i class="fas fa-bolt"></i> Electra</h1>
                        <!-- <img src="tpl/hc-electra/img/logo.png" alt="Logo"> -->
                    </a>
                </div>
                <div class="w-100 h-100">
                    <div class="topbar px-0 py-2 d-none d-lg-block" style="height: 45px;">
                        <div class="row gx-0 align-items-center">
                            <div class="col-lg-8 text-center text-lg-center mb-lg-0">
                                <div class="d-flex flex-wrap">
                                    <div class="border-end border-primary pe-3">
                                        <a href="#" class="text-muted small"><i class="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                                    </div>
                                    <div class="ps-3">
                                        <a href="mailto:example@gmail.com" class="text-muted small"><i class="fas fa-envelope text-primary me-2"></i>example@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 text-center text-lg-end">
                                <div class="d-flex justify-content-end">
                                    <div class="d-flex border-end border-primary pe-3">
                                        <a class="btn p-0 text-primary me-3" href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn p-0 text-primary me-3" href="#"><i class="fab fa-twitter"></i></a>
                                        <a class="btn p-0 text-primary me-3" href="#"><i class="fab fa-instagram"></i></a>
                                        <a class="btn p-0 text-primary me-0" href="#"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                    <div class="dropdown ms-3">
                                        <a href="#" class="dropdown-toggle text-white" data-bs-toggle="dropdown"><small class="text-body"><i class="fas fa-globe-europe text-primary me-2"></i> English</small></a>
                                        <div class="dropdown-menu">
                                            <a href="#" class="dropdown-item">English</a>
                                            <a href="#" class="dropdown-item">Bangla</a>
                                            <a href="#" class="dropdown-item">French</a>
                                            <a href="#" class="dropdown-item">Spanish</a>
                                            <a href="#" class="dropdown-item">Arabic</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nav-bar px-0 py-lg-0" style="height: 80px;">
                        <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
                            <a href="#" class="navbar-brand-2">
                                <h1 class="text-primary mb-0"><i class="fas fa-bolt"></i> Electra</h1>
                                <!-- <img src="tpl/hc-electra/img/logo.png" alt="Logo"> -->
                            </a>  
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span class="fa fa-bars"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarCollapse">
                                <div class="navbar-nav mx-0 mx-lg-auto bg-white">
                                    <a href="index.html" class="nav-item nav-link active">Home</a>
                                    <a href="about.html" class="nav-item nav-link">About</a>
                                    <a href="service.html" class="nav-item nav-link">Service</a>
                                    <div class="nav-item dropdown">
                                        <a href="#" class="nav-link" data-bs-toggle="dropdown">
                                            <span class="dropdown-toggle">Pages</span>
                                        </a>
                                        <div class="dropdown-menu">
                                            <a href="team.html" class="dropdown-item">Our team</a>
                                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                            <a href="404.html" class="dropdown-item">404 Page</a>
                                        </div>
                                    </div>
                                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                                    <div class="nav-btn ps-3">
                                        <a href="https://htmlcodex.com/downloading/?item=3464" class="btn btn-primary py-2 px-4 ms-0 ms-lg-3"> Buy Pro Version</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div></div>`},v.parameters={layout:`fullscreen`},y={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge preview">preview-only</span><b style="font-size:16px">区块 · T8-header-2（hc-woody）</b><span class="ws-src">来源：assets-blocks/header/T8-header-2.html</span></div><p class="ws-note">来源模板 hc-woody · 区块 T8-header-2；已链接模板原样 CSS（tpl/hc-woody/css/bootstrap.min.css、tpl/hc-woody/css/style.css）。槽位推断：{"cards": 4, "images": 0, "items": 0}。抽取置信度 low：结构预览为主，样式可能不完整，请对照来源模板整页核对。</p></div><div><link rel="stylesheet" href="tpl/hc-woody/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/hc-woody/css/style.css"><div class="container-fluid bg-light p-0">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small class="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>123 Street, New York, USA</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center py-3">
                    <small class="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small class="fa fa-phone-alt text-primary me-2"></small>
                    <small>+012 345 6789</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center">
                    <a class="btn btn-sm-square bg-white text-primary me-1" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-sm-square bg-white text-primary me-1" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-sm-square bg-white text-primary me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-sm-square bg-white text-primary me-0" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div></div>`},y.parameters={layout:`fullscreen`},b={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T8-header（hc-woody）</b><span class="ws-src">来源：assets-blocks/header/T8-header.html</span></div><p class="ws-note">来源模板 hc-woody · 区块 T8-header；已链接模板原样 CSS（tpl/hc-woody/css/bootstrap.min.css、tpl/hc-woody/css/style.css）。槽位推断：{"cards": 12, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/hc-woody/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/hc-woody/css/style.css"><nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 class="m-0 text-primary">WooDY</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" class="nav-item nav-link active">Home</a>
                <a href="about.html" class="nav-item nav-link">About</a>
                <a href="service.html" class="nav-item nav-link">Service</a>
                <a href="project.html" class="nav-item nav-link">Project</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu fade-up m-0">
                        <a href="feature.html" class="dropdown-item">Feature</a>
                        <a href="quote.html" class="dropdown-item">Free Quote</a>
                        <a href="team.html" class="dropdown-item">Our Team</a>
                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        <a href="404.html" class="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">Contact</a>
            </div>
            <a href="" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i class="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav></div>`},b.parameters={layout:`fullscreen`},x={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T9-header-2（hc-constra）</b><span class="ws-src">来源：assets-blocks/header/T9-header-2.html</span></div><p class="ws-note">来源模板 hc-constra · 区块 T9-header-2；已链接模板原样 CSS（tpl/hc-constra/css/bootstrap.min.css、tpl/hc-constra/css/style.css）。槽位推断：{"cards": 8, "images": 1, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/hc-constra/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/hc-constra/css/style.css"><div class="container-fluid sticky-top px-0">
            <nav class="navbar navbar-expand-lg navbar-dark bg-light py-3 px-4">
                <a href="index.html" class="navbar-brand p-0">
                    <h1 class="text-secondary display-6"><i class="fas fa-city text-primary me-3"></i>Constra</h1>
                    <!-- <img src="tpl/hc-constra/img/logo.png" alt="Logo"> -->
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto pt-2 pt-lg-0">
                        <a href="index.html" class="nav-item nav-link active">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="service.html" class="nav-item nav-link">Services</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-lg-0">
                                <a href="feature.html" class="dropdown-item">Features</a>
                                <a href="blog.html" class="dropdown-item">Our Blog</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                    <div class="d-flex align-items-center flex-nowrap pt-3  pt-lg-0 ms-lg-2">
                        <a href="https://htmlcodex.com/downloading/?item=3351" class="btn btn-secondary py-2 px-4 flex-wrap flex-sm-shrink-0">Buy Pro Version</a>
                    </div>
                </div>
            </nav>
        </div></div>`},x.parameters={layout:`fullscreen`},S={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">区块 · T9-header（hc-constra）</b><span class="ws-src">来源：assets-blocks/header/T9-header.html</span></div><p class="ws-note">来源模板 hc-constra · 区块 T9-header；已链接模板原样 CSS（tpl/hc-constra/css/bootstrap.min.css、tpl/hc-constra/css/style.css）。槽位推断：{"cards": 2, "images": 0, "items": 0}。JS 驱动组件（轮播/滑杆等）在静态预览中呈首帧；图片已按原模板路径实载。</p></div><div><link rel="stylesheet" href="tpl/hc-constra/css/bootstrap.min.css"><link rel="stylesheet" href="tpl/hc-constra/css/style.css"><div class="container-fluid topbar d-none d-xl-block w-100">
            <div class="row gx-0 align-items-center" style="height: 45px;">
                <div class="col-lg-6 text-center text-lg-start mb-lg-0">
                    <div class="d-flex flex-wrap">
                        <a href="#" class="text-muted me-4"><i class="fas fa-map-marker-alt text-secondary me-2"></i>Find A Location</a>
                        <a href="#" class="text-muted me-4"><i class="fas fa-phone-alt text-secondary me-2"></i>+01234567890</a>
                        <a href="#" class="text-muted me-0"><i class="fas fa-envelope text-secondary me-2"></i>Example@gmail.com</a>
                    </div>
                </div>
                <div class="col-lg-6 text-center text-lg-end">
                    <div class="d-flex align-items-center justify-content-end">
                        <a href="#" class="text-muted me-3"><i class="fas fa-clock text-secondary me-2"></i>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</a>
                        <a href="#" class="btn btn-primary btn-square border border-white me-3"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="btn btn-primary btn-square border border-white me-3"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="btn btn-primary btn-square border border-white me-3"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="btn btn-primary btn-square border border-white me-3"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div></div>`},S.parameters={layout:`fullscreen`},C=[`T0Header`,`T1Header2`,`T1Header`,`T10Header`,`T11Header`,`T2Header2`,`T2Header3`,`T2Header`,`T3Header2`,`T3Header`,`T4Header2`,`T4Header`,`T5Header2`,`T5Header`,`T6Header2`,`T6Header`,`T7Header`,`T8Header2`,`T8Header`,`T9Header2`,`T9Header`]})))()}w();export{n as T0Header,a as T10Header,o as T11Header,i as T1Header,r as T1Header2,l as T2Header,s as T2Header2,c as T2Header3,d as T3Header,u as T3Header2,p as T4Header,f as T4Header2,h as T5Header,m as T5Header2,_ as T6Header,g as T6Header2,v as T7Header,b as T8Header,y as T8Header2,S as T9Header,x as T9Header2,C as __namedExportsOrder,t as default};