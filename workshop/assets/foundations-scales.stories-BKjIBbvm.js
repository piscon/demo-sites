import{t as e}from"./rolldown-runtime-Dh6celcD.js";var t,n,r,i,a,o;function s(){return(s=e((()=>{t={title:`Foundations/Scales`},n={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">字号阶梯（推荐统一阶梯）</b><span class="ws-src">来源：assets-tokens/SCALES.json</span></div><p class="ws-note">每一档取自 14 模板 CSS 的实际高频值，basis 注明频次与覆盖模板数。18px（27 次 / 6 模板）常作副标题；64px（9 次 / 9 模板）为展示级大字，可按需加档</p></div><div class="ws-doc"><table class="ws-table"><tr><th>角色</th><th>值</th><th>样张</th><th>依据</th></tr><tr><td>caption 小字</td><td class="ws-hex">12px</td><td style="font-size:12px;line-height:1.3">恒力重工 Ag 2026</td><td>27 次 / 9 个模板</td></tr><tr><td>body-sm 正文小</td><td class="ws-hex">14px</td><td style="font-size:14px;line-height:1.3">恒力重工 Ag 2026</td><td>82 次 / 12 个模板（全域最高频字号）</td></tr><tr><td>body 正文</td><td class="ws-hex">16px</td><td style="font-size:16px;line-height:1.3">恒力重工 Ag 2026</td><td>62 次 / 12 个模板</td></tr><tr><td>h4 小标题</td><td class="ws-hex">20px</td><td style="font-size:20px;line-height:1.3">恒力重工 Ag 2026</td><td>33 次 / 5 个模板</td></tr><tr><td>h3 标题</td><td class="ws-hex">24px</td><td style="font-size:24px;line-height:1.3">恒力重工 Ag 2026</td><td>25 次 / 5 个模板</td></tr><tr><td>h2 大标题</td><td class="ws-hex">32px</td><td style="font-size:32px;line-height:1.3">恒力重工 Ag 2026</td><td>21 次 / 10 个模板</td></tr><tr><td>hero 主视觉标题</td><td class="ws-hex">48px</td><td style="font-size:48px;line-height:1.3">恒力重工 Ag 2026</td><td>12 次 / 10 个模板</td></tr></table></div>`},r={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">间距阶梯（4 的倍数体系）</b><span class="ws-src">来源：assets-tokens/SCALES.json</span></div><p class="ws-note">推荐统一阶梯，取自 14 模板实测高频值。</p></div><div class="ws-doc"><table class="ws-table"><tr><th>值</th><th>长度</th><th>依据</th></tr><tr><td class="ws-hex">4px</td><td><div style="background:#106eea;height:14px;width:4px"></div></td><td>377 次 / 12 个模板</td></tr><tr><td class="ws-hex">8px</td><td><div style="background:#106eea;height:14px;width:8px"></div></td><td>416 次 / 13 个模板</td></tr><tr><td class="ws-hex">12px</td><td><div style="background:#106eea;height:14px;width:12px"></div></td><td>41 次 / 9 个模板</td></tr><tr><td class="ws-hex">16px</td><td><div style="background:#106eea;height:14px;width:16px"></div></td><td>417 次 / 8 个模板</td></tr><tr><td class="ws-hex">24px</td><td><div style="background:#106eea;height:14px;width:24px"></div></td><td>349 次 / 6 个模板</td></tr><tr><td class="ws-hex">32px</td><td><div style="background:#106eea;height:14px;width:32px"></div></td><td>15 次 / 5 个模板</td></tr><tr><td class="ws-hex">48px</td><td><div style="background:#106eea;height:14px;width:48px"></div></td><td>338 次 / 6 个模板</td></tr><tr><td class="ws-hex">80px</td><td><div style="background:#106eea;height:14px;width:80px"></div></td><td>13 次 / 6 个模板（区块级大间距）</td></tr></table></div>`},i={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">圆角阶梯</b><span class="ws-src">来源：assets-tokens/SCALES.json</span></div><p class="ws-note">推荐统一阶梯，取自实测高频值。</p></div><div class="ws-doc"><div class="ws-grid"><div style="text-align:center"><div style="width:74px;height:54px;background:#106eea;border-radius:0px;margin:0 auto"></div><div style="font-size:12px;margin-top:6px"><b>none 直角</b><br><span class="ws-hex">0px</span></div></div><div style="text-align:center"><div style="width:74px;height:54px;background:#106eea;border-radius:4px;margin:0 auto"></div><div style="font-size:12px;margin-top:6px"><b>sm 小圆角</b><br><span class="ws-hex">4px</span></div></div><div style="text-align:center"><div style="width:74px;height:54px;background:#106eea;border-radius:12px;margin:0 auto"></div><div style="font-size:12px;margin-top:6px"><b>md 中圆角</b><br><span class="ws-hex">12px</span></div></div><div style="text-align:center"><div style="width:74px;height:54px;background:#106eea;border-radius:30px;margin:0 auto"></div><div style="font-size:12px;margin-top:6px"><b>lg 胶囊按钮</b><br><span class="ws-hex">30px</span></div></div><div style="text-align:center"><div style="width:74px;height:54px;background:#106eea;border-radius:50%;margin:0 auto"></div><div style="font-size:12px;margin-top:6px"><b>full 全圆</b><br><span class="ws-hex">50%</span></div></div></div></div>`},a={render:()=>`<div class="ws-doc"><style>
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
</style><div class="ws-head"><span class="ws-badge ">ready</span><b style="font-size:16px">阴影阶梯</b><span class="ws-src">来源：assets-tokens/SCALES.json</span></div><p class="ws-note">证据说明：阴影样本明显比另三类薄——多数 Bootstrap 系模板的阴影定义在其 .min.css 中，按本次口径未计入；以下 3 级取自自定义 CSS 中实际高频串。这批模板偏好「零偏移 + 大模糊 + 低透明度」的漫射阴影，而非层叠投影。</p></div><div class="ws-doc"><div class="ws-grid" style="background:#f7f9fb;padding:18px"><div style="text-align:center"><div style="width:120px;height:70px;background:#fff;border-radius:8px;box-shadow:0 0 20px rgba(0, 0, 0, 0.10);margin:14px auto"></div><div style="font-size:12px"><b>sm</b><br><span class="ws-hex">0 0 20px rgba(0, 0, 0, 0.10)</span><br>实际串 '0px 0px 20px rgba(0, 0, 0, 0.1)' 出现</div></div><div style="text-align:center"><div style="width:120px;height:70px;background:#fff;border-radius:8px;box-shadow:0 0 30px rgba(0, 0, 0, 0.10);margin:14px auto"></div><div style="font-size:12px"><b>md</b><br><span class="ws-hex">0 0 30px rgba(0, 0, 0, 0.10)</span><br>实际串 '0px 0px 30px rgba(0, 0, 0, 0.1)' 2 </div></div><div style="text-align:center"><div style="width:120px;height:70px;background:#fff;border-radius:8px;box-shadow:0 0 40px rgba(0, 0, 0, 0.08);margin:14px auto"></div><div style="font-size:12px"><b>lg</b><br><span class="ws-hex">0 0 40px rgba(0, 0, 0, 0.08)</span><br>全域最高频阴影串 '0px 0px 40px 0px rgba(0, 0, 0,</div></div></div></div>`},o=[`FontSize`,`Spacing`,`Radius`,`Shadow`]})))()}s();export{n as FontSize,i as Radius,a as Shadow,r as Spacing,o as __namedExportsOrder,t as default};