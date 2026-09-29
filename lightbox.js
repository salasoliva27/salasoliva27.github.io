(() => {
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
