(() => {
  const THEMES = ["dark", "light", "midnight", "sand", "terminal"];
  const root = document.documentElement;
  const btn = document.querySelector(".theme-btn");
  const menu = document.querySelector(".theme-menu");
  const items = menu ? [...menu.querySelectorAll("[data-theme-choice]")] : [];
  const nameEl = btn?.querySelector(".theme-name");
  const metaColor = document.querySelector('meta[name="theme-color"]');
  const osLight = matchMedia("(prefers-color-scheme: light)");

  const saved = () => { try { const t = localStorage.getItem("theme"); return THEMES.includes(t) ? t : null; } catch { return null; } };

  function apply(theme) {
    root.dataset.theme = theme;
    items.forEach((b) => b.setAttribute("aria-checked", String(b.dataset.themeChoice === theme)));
    const current = items.find((b) => b.dataset.themeChoice === theme);
    if (nameEl && current) nameEl.textContent = current.textContent.trim();
    if (metaColor) metaColor.content = getComputedStyle(root).getPropertyValue("--bg").trim();
  }

  function setOpen(open) {
    if (!btn || !menu) return;
    menu.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
    if (open) (items.find((b) => b.getAttribute("aria-checked") === "true") || items[0])?.focus();
  }

  apply(saved() || root.dataset.theme || (osLight.matches ? "light" : "dark"));

  osLight.addEventListener("change", (e) => { if (!saved()) apply(e.matches ? "light" : "dark"); });

  btn?.addEventListener("click", () => setOpen(menu.hidden));
  items.forEach((b, i) => {
    b.addEventListener("click", () => {
      apply(b.dataset.themeChoice);
      try { localStorage.setItem("theme", b.dataset.themeChoice); } catch {}
      setOpen(false);
      btn.focus();
    });
    b.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        items[(i + (e.key === "ArrowDown" ? 1 : items.length - 1)) % items.length].focus();
      }
    });
  });
  document.addEventListener("click", (e) => { if (menu && !menu.hidden && !e.target.closest(".theme-picker")) setOpen(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu && !menu.hidden) { setOpen(false); btn.focus(); } });

  const box = document.querySelector(".lightbox");
  if (!box || typeof box.showModal !== "function") return;
  const img = box.querySelector("img");
  document.querySelectorAll("a.shot").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      img.src = a.getAttribute("href");
      img.alt = a.querySelector("img")?.alt || "";
      box.showModal();
    });
  });
  box.addEventListener("click", (e) => { if (e.target === box || e.target.closest(".close")) box.close(); });
})();
