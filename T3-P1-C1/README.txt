GIRDER — Free Construction & General Contractor Website Template (by uiCookies)

Concept: A single-page site for a fictional family-owned general contractor ("Girder Construction Co., Columbus, Ohio", est. 2004) that self-performs its structural work. Where most contractor themes lean on stock inspiration, Girder is built around what actually wins jobs: fixed-price bids, a filterable project gallery (residential / commercial / renovation), a transparent five-stage build process on a blueprint grid, a real safety record (0.42 EMR) with OSHA/LEED/EPA certifications, the crew behind the work, and a request-a-quote form with project-type and budget selectors. It is deliberately distinct from its category sibling Fontanero (a lighter plumbing/repair template) in layout, palette and personality — Girder is heavier, squared-off and industrial.

Palette (industrial job-site — hued neutrals, not pure grey):
  Warm concrete    #E7E3DB   (page canvas — poured-concrete grey with a warm cast)
  Concrete band    #DDD7CA   (alternating section background)
  Paper surface    #F5F2EC   (cards, forms, tiles)
  Steel ink        #17191C   (body text, cool near-black)
  Graphite         #23272D   (dark sections, footer)
  Hi-vis orange    #F1541C   (PRIMARY accent — CTAs, active states, used sparingly)
  Caution amber    #F4A81D   (hazard stripes + tiny marks only — the safety-signage nod)

Font pairing:
  Display — Oswald (condensed, uppercase industrial grotesque; reads like engineering / job-site signage)
  Body/UI — Barlow (a low-contrast grotesque originally drawn for road signage; technical and legible, pairs cleanly with Oswald)
  (Deliberately NOT Inter or Space Grotesk.)

Layout idea: construction-signage language throughout — a hi-vis amber/steel HAZARD-STRIPE motif used sparingly as thin dividers and accent blocks, numbered "01 / 02" section kickers like drawing callouts, squared 4px corners instead of soft rounding, an engineering blueprint grid behind the dark process section, and stencil-style project/service numbers. The funnel: utility bar -> sticky header with Get-a-Quote -> industrial hero with a live stats band -> licensed/bonded trust strip -> services -> self-perform "why us" with animated counters -> filterable projects -> blueprint build-process -> team -> safety & certs -> testimonial -> quote form -> rich footer.

Build: Bootstrap 5 (self-hosted in css/vendor + js/vendor, relative paths), bespoke design in css/style.css, all interactions in vanilla js/main.js (sticky header, slide-in mobile nav, project filter, IntersectionObserver stat counters + scroll reveals, back-to-top, and an inline-validated quote form with a success state). Icons are inline SVG only; no icon fonts, no jQuery. Responsive 360–1440px, accessible (skip link, landmarks, focus-visible, aria labels on icon buttons), and respects prefers-reduced-motion.

© 2026 — Free for personal and commercial use.
