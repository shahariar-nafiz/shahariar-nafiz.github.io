document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  const indicator = document.querySelector(".indicator");
  const pages = document.querySelectorAll(".page");

  function setActive(link) {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    const index = Array.from(links).indexOf(link);
    const positions = [80, 320, 520, 680]; // adjust these if you change spacing
    gsap.to(indicator, { x: positions[index], duration: 0.6, ease: "power2.out" });

    pages.forEach(p => p.classList.remove("active"));
    document.querySelector(link.getAttribute("href")).classList.add("active");
  }

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setActive(link);
      history.pushState(null, null, link.getAttribute("href"));
    });
  });

  // Form animation
  gsap.from(".contact-form > *", {
    scrollTrigger: "#contact",
    y: 50, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power2.out"
  });
});
