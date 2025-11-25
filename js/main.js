document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const indicator = document.querySelector('.nav-indicator');

  // Positions for indicator (adjusted for spacing)
  const indicatorPositions = [20, 140, 280, 420];

  function switchPage(targetLink) {
    // Update active link
    navLinks.forEach(link => link.classList.remove('active'));
    targetLink.classList.add('active');

    // Switch pages
    const targetId = targetLink.getAttribute('href').substring(1);
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');

    // Animate indicator
    const index = Array.from(navLinks).indexOf(targetLink);
    gsap.to(indicator, {
      x: indicatorPositions[index],
      duration: 0.6,
      ease: 'power2.out'
    });

    // Page transition animation
    gsap.fromTo(`#${targetId} .content > *`, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
    );
  }

  // Event listeners
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchPage(link);
    });
  });

  // Form submission (demo - replace with real backend)
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (Demo - integrate with backend for real submissions)');
    form.reset();
  });

  // Emoji selection (optional visual feedback)
  const emojis = document.querySelectorAll('.emoji-grid button');
  emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
      emojis.forEach(btn => btn.style.transform = 'scale(1)');
      emoji.style.transform = 'scale(1.1)';
    });
  });

  // Initial load animation
  gsap.from('.nav-container', { y: -50, opacity: 0, duration: 1, ease: 'power2.out' });
});
