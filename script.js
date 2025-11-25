// Navigation and Section Management with Smooth Animations
document.addEventListener('DOMContentLoaded', function() {
    // Set home as active by default
    showSection('home');
    
    // Navigation click handlers with smooth scroll
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('href').substring(1);
            smoothScrollToSection(targetSection);
            
            // Update URL without page reload
            history.pushState(null, '', `#${targetSection}`);
        });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.substring(1) || 'home';
        smoothScrollToSection(hash);
    });
    
    // Check initial URL hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        setTimeout(() => smoothScrollToSection(initialHash), 100);
    }
    
    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    }
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        }
    });
});

function smoothScrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;
    
    // Calculate position with offset for navbar
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = targetSection.offsetTop - navbarHeight;
    
    // Smooth scroll to section
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    
    // Show section after scroll completes
    setTimeout(() => showSection(sectionId), 300);
}

function showSection(sectionId) {
    // Hide all sections with animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.classList.contains('active')) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            setTimeout(() => {
                section.classList.remove('active');
            }, 300);
        }
    });
    
    // Show target section with animation
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        setTimeout(() => {
            targetSection.classList.add('active');
            setTimeout(() => {
                targetSection.style.opacity = '1';
                targetSection.style.transform = 'translateY(0)';
            }, 50);
        }, 350);
    }
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

function handleFormSubmit(form) {
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Success state
        submitBtn.textContent = '✓ Sent Successfully!';
        submitBtn.style.background = 'linear-gradient(135deg, #27ae60, #229954)';
        
        // Reset form
        form.reset();
        
        // Reset button after delay
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
        }, 3000);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
    }, 2000);
}

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project items and other animatable elements
document.addEventListener('DOMContentLoaded', () => {
    const animatableElements = document.querySelectorAll('.project-item, .about-content, .contact-form');
    animatableElements.forEach(el => {
        observer.observe(el);
    });
});
