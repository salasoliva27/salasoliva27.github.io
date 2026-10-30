// Portfolio v9: everything clickable opens a window that explains it.
// - Window contents live hidden in .win-sources (so i18n.js translates them); a click copies one into a window.
// - A step of an automation ("news-3") opens a small step window; steps of the same automation reuse it.
// - A technology opens "where I've used it", built from the stacks on the page.
// - Windows open from what was clicked, stack, drag by their bar (desktop), and are bottom sheets on a phone.
//   Esc closes the top one, the scrim closes all, focus goes back to what opened it.
(() => {
  const root = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  const phone = matchMedia("(max-width: 720px)");
  const UI = {
    en: {
      close: "Close",
      step: (n, of, name) => `Step ${n} of ${of} · ${name}`,
      whole: "Open the whole automation",
      prev: "Previous step",
      next: "Next step",
      tech: "Technology",
      used: (s) => `Where I've used ${s}`,
      exp: "Experience",
      openLive: "Open live",
      details: "Details",
      openSite: "Open the live site",
      allSites: "See all the websites",
      proposal: "Proposal",
      example: "Example",
      siteBody: (n) => `My AI designed this page from ${n}'s own brand — its colours, fonts, logo, photos and words. Nothing came from a template.`,
      siteProposal: "It was sent to the business as a free proposal; the page is theirs to use.",
      siteExample: "It was made as an example of what the AI does for a business like this one.",
      liveNote: "Live link — kept online and checked every day.",
      pause: "Pause",
      play: "Play",
      cap: ["Janus IA — click the screen to open it.", null, "Three reels from one night's run — click to open the newsroom.", "ClippMX's Lab: every automated workflow drawn as its steps.", "OZUM AI's guided onboarding, in Spanish — click to open the case."],
      siteCap: "open the live site",
    },
    es: {
      close: "Cerrar",
      step: (n, of, name) => `Paso ${n} de ${of} · ${name}`,
      whole: "Abrir la automatización completa",
      prev: "Paso anterior",
      next: "Paso siguiente",
      tech: "Tecnología",
      used: (s) => `Dónde he usado ${s}`,
      exp: "Experiencia",
      openLive: "Abrir en vivo",
      details: "Detalles",
      openSite: "Abrir el sitio en vivo",
      allSites: "Ver todos los sitios",
      proposal: "Propuesta",
      example: "Ejemplo",
      siteBody: (n) => `Mi IA diseñó esta página a partir de la marca de ${n}: sus colores, tipografías, logo, fotos y palabras. Nada salió de una plantilla.`,
      siteProposal: "Se le envió al negocio como propuesta gratuita; la página es suya para usarla.",
      siteExample: "Se hizo como ejemplo de lo que la IA hace para un negocio como este.",
      liveNote: "Enlace en vivo — se mantiene en línea y se revisa todos los días.",
      pause: "Pausa",
      play: "Reproducir",
      cap: ["Janus IA — haz clic en la pantalla para abrirlo.", null, "Tres reels de una sola noche — haz clic para abrir la sala de noticias.", "El Laboratorio de ClippMX: cada flujo automático dibujado como sus pasos.", "El onboarding guiado de OZUM AI, en español — haz clic para abrir el caso."],
      siteCap: "abrir el sitio en vivo",
    },
  };
  const t = () => UI[root.lang === "es" ? "es" : "en"];
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  const src = (id) => document.getElementById("w-" + id);
  const stepOf = (id) => { const m = /^(.+)-(\d+)$/.exec(id); return m && document.getElementById("flow-" + m[1]) ? { auto: m[1], n: +m[2] } : null; };
  const HUES = ["news", "clips", "models", "market", "photos", "ops"];

  // ── Flows get their running dot (an li taken out of the grid by CSS).
  document.querySelectorAll(".flow").forEach((f) => {
    const dot = el("li", "flow__dot"); dot.setAttribute("aria-hidden", "true"); f.append(dot);
  });

  // ── Where each technology is used: the stacks of the windows, and the experience rows.
  const usage = new Map();
  const use = (skill, item) => { const k = skill.trim(); if (!usage.has(k)) usage.set(k, []); const l = usage.get(k); if (!l.some((x) => x.key === item.key)) l.push(item); };
  document.querySelectorAll(".win-sources .win-src").forEach((s) => {
    const id = s.id.slice(2);
    if (stepOf(id)) return;
    s.querySelectorAll(".stack span").forEach((sp) => use(sp.textContent, { key: "w:" + id, id }));
  });
  document.querySelectorAll(".timeline li[data-tech]").forEach((li, i) => li.dataset.tech.split("|").forEach((k) => use(k, { key: "e:" + i, li })));
  function upgradeTech(scope) {
    scope.querySelectorAll(".stack span").forEach((sp) => {
      const k = sp.textContent.trim();
      if (!usage.has(k)) return;
      sp.classList.add("tech-link");
      sp.setAttribute("role", "button");
      sp.tabIndex = 0;
      sp.dataset.win = "skill:" + k;
    });
  }
  upgradeTech(document.querySelector("main"));

  // ── Window contents.
  function cloneFlow(auto, opts = {}) {
    const f = document.getElementById("flow-" + auto).cloneNode(true);
    f.removeAttribute("id");
    f.classList.add("in");
    if (opts.compact) f.classList.add("flow--compact");
    if (opts.current) f.querySelectorAll(".flow__step").forEach((b, i) => { if (i + 1 === opts.current) b.setAttribute("aria-current", "step"); });
    return f;
  }

  function render(id) {
    if (id.startsWith("skill:")) return renderSkill(id.slice(6));
    if (id.startsWith("site:")) return renderSite(id.slice(5));
    const st = stepOf(id);
    if (st) return renderStep(st, id);
    const s = src(id);
    if (!s) return null;
    const body = s.cloneNode(true);
    body.removeAttribute("id");
    body.className = "window__content";
    body.querySelectorAll("[data-flow]").forEach((slot) => slot.replaceWith(cloneFlow(slot.dataset.flow)));
    return { key: id, body, title: (s.querySelector("h2") || {}).textContent || "", hue: s.dataset.hue, narrow: false };
  }

  function renderStep({ auto, n }, id) {
    const flow = document.getElementById("flow-" + auto);
    const steps = [...flow.querySelectorAll(".flow__step")];
    const step = steps[n - 1];
    if (!step) return null;
    const name = (src(auto).querySelector("h2") || {}).textContent || "";
    const label = step.querySelector(".flow__label").textContent.trim();
    const body = el("div", "window__content");
    body.append(el("p", "w-kicker", t().step(n, steps.length, name.trim())), el("h2", null, label), cloneFlow(auto, { compact: true, current: n }));
    const s = src(id);
    if (s) [...s.children].forEach((c) => body.append(c.cloneNode(true)));
    const acts = el("p", "w-actions");
    const go = (win, text, cls = "act--go") => { const b = el("button", "act " + cls, text); b.type = "button"; b.dataset.win = win; acts.append(b); };
    if (n > 1) go(`${auto}-${n - 1}`, t().prev, "act--back");
    if (n < steps.length) go(`${auto}-${n + 1}`, t().next);
    go(auto, t().whole);
    body.append(acts);
    return { key: "step:" + auto, body, title: label, hue: src(auto).dataset.hue, narrow: true };
  }

  function renderSkill(skill) {
    const items = usage.get(skill);
    if (!items) return null;
    const body = el("div", "window__content");
    body.append(el("p", "w-kicker", t().tech), el("h2", null, skill), el("p", null, t().used(skill)));
    const list = el("ul", "skill-list");
    items.forEach((it) => {
      const li = el("li");
      const b = el("button", "act act--go");
      b.type = "button";
      if (it.id) {
        const s = src(it.id);
        li.append(el("span", "kicker", ((s.querySelector(".w-kicker") || {}).textContent || "").trim()));
        b.textContent = (s.querySelector("h2") || {}).textContent.trim();
        b.dataset.win = it.id;
      } else {
        li.append(el("span", "kicker", `${t().exp} · ${it.li.querySelector(".when").textContent.trim()}`));
        b.textContent = it.li.querySelector("h4").textContent.trim();
        b.dataset.goto = "#experience";
      }
      li.append(b);
      list.append(li);
    });
    body.append(list);
    return { key: "skill", body, title: skill, hue: "", narrow: true };
  }

  // ── Websites designed by my AI: sites.json (kept live and swapped by janus-ia scripts/portfolio-sites.mjs).
  let SITES = [];
  const lang = () => (root.lang === "es" ? "es" : "en");
  const sitesReady = fetch("sites.json", { cache: "no-cache" }).then((r) => r.json()).then((d) => { SITES = d.sites || []; }).catch(() => {});
  const siteBySlug = (slug) => SITES.find((s) => s.slug === slug);
  const imgOf = (s) => `img/sites/${s.slug}.jpg`;

  function renderSite(slug) {
    const s = siteBySlug(slug);
    if (!s) return null;
    const body = el("div", "window__content");
    // The live link sits right under the name, so it is seen without scrolling the window.
    const live = el("a", "act", t().openSite); live.href = s.url; live.target = "_blank"; live.rel = "noopener";
    const where = el("p", "w-where"); where.append(el("span", "w-note", s.area), live);
    body.append(el("p", "w-kicker", `${s.sample ? t().example : t().proposal} · ${s.industry[lang()]}`), el("h2", null, s.name), where);
    const frame = el("div", "w-site-frame");
    const img = el("img", "page-scroll"); img.src = imgOf(s); img.alt = ""; frame.append(img);
    body.append(frame, el("p", null, t().siteBody(s.name)), el("p", null, s.sample ? t().siteExample : t().siteProposal), el("p", "w-note", t().liveNote));
    const acts = el("p", "w-actions");
    const all = el("button", "act act--go", t().allSites); all.type = "button"; all.dataset.goto = "#websites";
    acts.append(all);
    body.append(acts);
    return { key: "site", body, title: s.name, hue: "news", narrow: false };
  }

  const grid = document.querySelector("[data-sites]");
  function renderGrid() {
    if (!grid || !SITES.length) return;
    grid.replaceChildren(...SITES.map((s) => {
      const art = el("article", "site"); art.dataset.win = "site:" + s.slug;
      const frame = el("div", "site-frame"); const img = el("img", "page-scroll"); img.src = imgOf(s); img.alt = ""; img.loading = "lazy"; frame.append(img);
      const acts = el("p", "site-acts");
      const live = el("a", "act", t().openLive); live.href = s.url; live.target = "_blank"; live.rel = "noopener";
      const more = el("button", "act act--go", t().details); more.type = "button"; more.dataset.win = "site:" + s.slug;
      acts.append(live, more);
      art.append(frame, el("p", "site-industry", s.industry[lang()]), el("h4", null, s.name), el("p", "site-area", s.area), acts);
      return art;
    }));
  }
  // One page scrolls at a time, in turn, while the grid is on screen (hover scrolls the one under the pointer).
  let rr = 0, rrTimer = null;
  function nextScroll() {
    const items = grid ? [...grid.querySelectorAll(".site")] : [];
    if (!items.length || reduce.matches) return;
    items.forEach((x) => x.classList.remove("is-scrolling"));
    const it = items[rr++ % items.length];
    void it.offsetWidth;
    it.classList.add("is-scrolling");
  }
  if (grid && "IntersectionObserver" in window) {
    new IntersectionObserver(([en]) => {
      clearInterval(rrTimer); rrTimer = null;
      if (en.isIntersecting && !reduce.matches) { nextScroll(); rrTimer = setInterval(nextScroll, 9500); }
    }, { threshold: 0.25 }).observe(grid);
  }

  // ── The showreel: scenes play in turn while it is on screen; hover, focus, an open window or Pause holds it.
  const reel = document.querySelector(".reel");
  const scenes = reel ? [...reel.querySelectorAll(".scene")] : [];
  const tabs = reel ? [...reel.querySelectorAll(".reel-tab")] : [];
  const caption = reel && reel.querySelector(".reel-caption");
  const pauseBtn = reel && reel.querySelector(".reel-pause");
  const DUR = 7500;
  let cur = 0, elapsed = 0, last = 0, held = false, hover = false, onScreen = false, siteTurn = 0, shownSite = null;
  function siteScene() {
    if (!SITES.length || !reel) return;
    const s = SITES[siteTurn % SITES.length];
    shownSite = s;
    const page = reel.querySelector(".browser-page"), img = page.querySelector("img"), url = reel.querySelector(".browser-url");
    page.dataset.win = "site:" + s.slug; page.setAttribute("aria-label", s.name);
    if (!img.src.endsWith(imgOf(s))) img.src = imgOf(s);
    url.href = s.url; url.textContent = s.url.replace(/^https:\/\//, "") + " ↗";
  }
  function setCaption() {
    if (!caption) return;
    caption.replaceChildren();
    if (cur === 1 && shownSite) {
      const s = shownSite, a = el("a", null, t().siteCap + " ↗");
      a.href = s.url; a.target = "_blank"; a.rel = "noopener";
      caption.append(`${s.industry[lang()]} · ${s.name}, ${s.area} — `, a);
    } else caption.textContent = t().cap[cur] || "";
  }
  function show(i) {
    cur = i; elapsed = 0;
    if (i === 1) siteScene();
    scenes.forEach((s) => s.classList.toggle("is-on", +s.dataset.scene === i));
    tabs.forEach((b) => { b.setAttribute("aria-current", String(+b.dataset.scene === i)); b.style.setProperty("--p", 0); });
    setCaption();
  }
  const running = () => !held && !hover && onScreen && !document.hidden && !reduce.matches && !wins.length;
  function tick(now) {
    const dt = last ? now - last : 0; last = now;
    if (running()) {
      elapsed += dt;
      const p = Math.min(1, elapsed / DUR);
      if (tabs[cur]) tabs[cur].style.setProperty("--p", p.toFixed(4));
      if (p >= 1) { if (cur === 1) siteTurn++; show((cur + 1) % scenes.length); }
    }
    requestAnimationFrame(tick);
  }
  if (reel) {
    tabs.forEach((b) => b.addEventListener("click", () => { if (+b.dataset.scene === 1 && cur === 1) siteTurn++; show(+b.dataset.scene); }));
    const win = reel.querySelector(".reel-window");
    win.addEventListener("pointerenter", () => { hover = true; });
    win.addEventListener("pointerleave", () => { hover = false; });
    win.addEventListener("focusin", () => { hover = true; });
    win.addEventListener("focusout", () => { hover = false; });
    pauseBtn.addEventListener("click", () => {
      held = !held;
      pauseBtn.setAttribute("aria-pressed", String(held));
      pauseBtn.textContent = held ? t().play : t().pause;
    });
    if ("IntersectionObserver" in window) new IntersectionObserver(([en]) => { onScreen = en.isIntersecting; }, { threshold: 0.3 }).observe(reel);
    else onScreen = true;
    show(0);
    requestAnimationFrame(tick);
  }
  sitesReady.then(() => { renderGrid(); siteScene(); setCaption(); });
  document.addEventListener("langchange", () => {
    renderGrid(); setCaption();
    if (pauseBtn) pauseBtn.textContent = held ? t().play : t().pause;
  });

  // ── The window manager.
  const page = [document.querySelector("header.top"), document.querySelector(".hero"), document.querySelector("main"), document.querySelector("footer")];
  const scrim = el("div", "window-scrim");
  scrim.hidden = true;
  document.body.append(scrim);
  const wins = [];
  let z = 60, uid = 0;

  function fill(w, r, id) {
    w.id = id;
    w.key = r.key;
    HUES.forEach((h) => w.el.classList.remove("hue-" + h));
    if (r.hue) w.el.classList.add("hue-" + r.hue);
    w.el.classList.toggle("window--narrow", !!r.narrow);
    w.el.querySelector(".window__title").textContent = r.title.trim();
    w.el.querySelector(".window__close").setAttribute("aria-label", t().close);
    const body = w.el.querySelector(".window__body");
    body.replaceChildren(r.body);
    body.scrollTop = 0;
    upgradeTech(body);
  }

  function place(w, offset) {
    if (phone.matches) { w.el.style.left = w.el.style.top = ""; return; }
    const W = w.el.offsetWidth, H = w.el.offsetHeight;
    const left = clamp((innerWidth - W) / 2 + offset, 12, Math.max(12, innerWidth - W - 12));
    const top = clamp((innerHeight - H) / 2 - 12 + offset, 16, Math.max(16, innerHeight - H - 16));
    w.el.style.left = left + "px";
    w.el.style.top = top + "px";
  }

  function fromTo(w, rect, entering) {
    const e = w.el.getBoundingClientRect();
    let tf = "scale(0.96)";
    if (rect && rect.width) {
      const s = clamp(rect.width / e.width, 0.2, 0.9);
      const dx = rect.left + rect.width / 2 - (e.left + e.width / 2);
      const dy = rect.top + rect.height / 2 - (e.top + e.height / 2);
      tf = `translate(${Math.round(dx)}px, ${Math.round(dy)}px) scale(${s.toFixed(3)})`;
    }
    if (entering) {
      w.el.style.transition = "none";
      w.el.style.transform = tf;
      w.el.style.opacity = "0";
      w.el.getBoundingClientRect();
      w.el.style.transition = "";
      w.el.style.transform = "";
      w.el.style.opacity = "";
    } else {
      w.el.style.transform = tf;
      w.el.style.opacity = "0";
    }
  }

  function front(w) {
    w.el.style.zIndex = ++z;
    const i = wins.indexOf(w);
    if (i > -1 && i !== wins.length - 1) { wins.splice(i, 1); wins.push(w); }
  }

  function setPage() {
    const any = wins.length > 0;
    page.forEach((p) => { if (p) p.inert = any; });
    scrim.hidden = !any;
    root.classList.toggle("has-window", any);
  }

  function setHash(id) {
    try {
      if (id && !id.startsWith("skill:")) history.replaceState(null, "", "#w-" + id);
      else if (!id) history.replaceState(null, "", location.pathname + location.search);
    } catch (e) { /* file:// */ }
  }

  function open(id, opener) {
    const r = render(id);
    if (!r) return;
    let w = wins.find((x) => x.key === r.key);
    if (w) {
      fill(w, r, id);
      front(w);
      w.el.focus({ preventScroll: true });
      setHash(id);
      return;
    }
    const win = el("div", "window");
    win.setAttribute("role", "dialog");
    win.tabIndex = -1;
    const tid = "wt" + ++uid;
    win.setAttribute("aria-labelledby", tid);
    win.innerHTML = `<div class="window__bar"><span class="window__title" id="${tid}"></span><button type="button" class="window__close"><svg class="ic" aria-hidden="true"><use href="#i-x"/></svg></button></div><div class="window__body"></div>`;
    w = { el: win, opener: opener || null };
    fill(w, r, id);
    const offset = wins.length * 28;
    document.body.append(win);
    wins.push(w);
    front(w);
    place(w, offset);
    if (!reduce.matches && !phone.matches) fromTo(w, opener && opener.isConnected ? opener.getBoundingClientRect() : null, true);
    setPage();
    win.focus({ preventScroll: true });
    setHash(id);
  }

  function close(w) {
    const i = wins.indexOf(w);
    if (i < 0) return;
    wins.splice(i, 1);
    const instant = reduce.matches || phone.matches;
    if (instant) w.el.remove();
    else {
      fromTo(w, w.opener && w.opener.isConnected ? w.opener.getBoundingClientRect() : null, false);
      setTimeout(() => w.el.remove(), 260);
    }
    setPage();
    const top = wins[wins.length - 1];
    if (top) { top.el.focus({ preventScroll: true }); setHash(top.id); }
    else { setHash(null); if (w.opener && w.opener.isConnected) w.opener.focus({ preventScroll: true }); }
  }
  const closeAll = () => { while (wins.length) close(wins[wins.length - 1]); };
  const winOf = (node) => wins.find((x) => x.el === node.closest(".window"));

  // ── Clicks: screenshots zoom, [data-goto] scrolls the page, [data-win] opens.
  const box = document.querySelector(".lightbox");
  document.addEventListener("click", (e) => {
    const shot = e.target.closest("a.shot");
    if (shot && box && typeof box.showModal === "function") {
      e.preventDefault();
      const img = box.querySelector("img");
      img.src = shot.getAttribute("href");
      img.alt = (shot.querySelector("img") || {}).alt || "";
      box.showModal();
      return;
    }
    const x = e.target.closest(".window__close");
    if (x) { close(winOf(x)); return; }
    const go = e.target.closest("[data-goto]");
    if (go) {
      closeAll();
      const target = document.querySelector(go.dataset.goto);
      if (target) target.scrollIntoView({ behavior: reduce.matches ? "auto" : "smooth" });
      return;
    }
    const trigger = e.target.closest("[data-win]");
    if (trigger) { e.preventDefault(); open(trigger.dataset.win, trigger); }
  });
  scrim.addEventListener("click", closeAll);
  if (box) box.addEventListener("click", (e) => { if (e.target === box || e.target.closest(".lightbox__close")) box.close(); });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && wins.length && !(box && box.open)) { e.preventDefault(); close(wins[wins.length - 1]); return; }
    if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches(".tech-link")) { e.preventDefault(); e.target.click(); }
  });

  // ── Bring to front on press; drag by the bar on desktop.
  document.addEventListener("pointerdown", (e) => {
    const node = e.target.closest && e.target.closest(".window");
    if (!node) return;
    const w = winOf(node);
    if (!w) return;
    front(w);
    const bar = e.target.closest(".window__bar");
    if (!bar || e.target.closest("button") || phone.matches || e.button !== 0) return;
    const r = node.getBoundingClientRect();
    const ox = e.clientX - r.left, oy = e.clientY - r.top;
    node.classList.add("window--drag");
    bar.setPointerCapture(e.pointerId);
    const move = (ev) => {
      node.style.left = clamp(ev.clientX - ox, 80 - r.width, innerWidth - 80) + "px";
      node.style.top = clamp(ev.clientY - oy, 8, innerHeight - 48) + "px";
    };
    const up = () => {
      node.classList.remove("window--drag");
      bar.removeEventListener("pointermove", move);
      bar.removeEventListener("pointerup", up);
      bar.removeEventListener("pointercancel", up);
    };
    bar.addEventListener("pointermove", move);
    bar.addEventListener("pointerup", up);
    bar.addEventListener("pointercancel", up);
  });
  addEventListener("resize", () => wins.forEach((w) => {
    if (phone.matches) { w.el.style.left = w.el.style.top = ""; return; }
    const r = w.el.getBoundingClientRect();
    if (!w.el.style.left || r.right > innerWidth || r.bottom > innerHeight) place(w, 0);
  }));

  // ── A language switch re-renders the open windows from their (now translated) sources.
  document.addEventListener("langchange", () => wins.forEach((w) => { const r = render(w.id); if (r) fill(w, r, w.id); }));

  // ── Reveal on scroll and count numbers up, once.
  function countUp(scope) {
    if (reduce.matches) return;
    scope.querySelectorAll("[data-count]").forEach((n) => {
      const to = +n.dataset.count, suffix = n.dataset.suffix || "", t0 = performance.now(), dur = 1100;
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur), v = Math.round(to * (1 - Math.pow(1 - p, 3)));
        n.textContent = v.toLocaleString("en-US") + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }
  const watched = document.querySelectorAll("[data-reveal], .flow, .spark-bars, .stats");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      countUp(en.target);
      io.unobserve(en.target);
    }), { threshold: 0.2 });
    watched.forEach((n) => io.observe(n));
  } else watched.forEach((n) => n.classList.add("in"));
  // Printing (or saving as PDF) shows everything, scrolled to or not.
  addEventListener("beforeprint", () => watched.forEach((n) => n.classList.add("in")));

  // ── A link to #w-<id> opens that window (after i18n.js has set the language).
  setTimeout(() => sitesReady.then(() => { if (/^#w-[\w:-]+$/.test(location.hash) && render(location.hash.slice(3))) open(location.hash.slice(3), null); }), 0);
})();
