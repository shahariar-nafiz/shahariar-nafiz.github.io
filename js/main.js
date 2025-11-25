document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".nav-item");
  const indicator = document.querySelector(".indicator");
  const pages = document.querySelectorAll(".page");

  const positions = [65, 230, 430, 610]; // exact pixel positions

  function activate(item) {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    const idx = Array.from(items).indexOf(item);
    gsap.to(indicator, { x: positions[idx], duration: 0.7, ease: "power3.out" });

    pages.forEach(p => p.classList.remove("active"));
    document.querySelector(item.getAttribute("href")).classList.add("active");
  }

  items.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      activate(item);
    });
  });

  // Start on Home
  activate(items[0]);
});
