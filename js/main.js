document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const indicator = document.querySelector(".indicator");
  const pages = document.querySelectorAll(".page");

  const positions = [50, 210, 410, 590]; // exact pixel positions

  function activate(link) {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    const i = Array.from(links).indexOf(link);
    gsap.to(indicator, { x: positions[i], duration: 0.7, ease: "power3.out" });

    pages.forEach(p => p.classList.remove("active"));
    document.querySelector(link.getAttribute("href")).classList.add("active");
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      activate(link);
      history.pushState(null, null, link.getAttribute("href"));
    });
  });

  // Init
  activate(document.querySelector(".nav-link"));
});
