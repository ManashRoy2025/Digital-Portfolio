document.addEventListener('DOMContentLoaded', () => {
    
    // ------------------------------------------------------------------
    // 1. Smooth Scroll Navigation
    // Select all links with the class 'nav-link'
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default hash behavior (jumping)
            
            // Get the target section's ID from the href attribute (e.g., #about)
            const targetId = this.getAttribute('href'); 
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Use the built-in scrollIntoView method for smooth scrolling
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // ------------------------------------------------------------------
    // 2. Skill Bar Animation (Basic scroll-triggered effect)
    
    const skillContainer = document.querySelector('#skills');
    const skillItems = document.querySelectorAll('.skill-item');
    let skillsAnimated = false; // Flag to ensure animation runs only once

    // Function to run the animation
    const animateSkills = () => {
        skillItems.forEach(item => {
            // Read the proficiency level from the custom data attribute
            const level = item.getAttribute('data-level'); 
            // Apply the width to animate the bar (CSS transition handles the smoothness)
            item.style.width = `${level}%`; 
        });
        skillsAnimated = true;
    };

    // Check if the skills section is in view
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When the skill section is visible AND the animation hasn't run yet
            if (entry.isIntersecting && !skillsAnimated) {
                animateSkills();
                // Stop observing once the animation is done
                skillObserver.unobserve(entry.target); 
            }
        });
    }, {
        // Options for the observer
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    // Start observing the skills section
    if (skillContainer) {
        skillObserver.observe(skillContainer);
    }
    
    // ------------------------------------------------------------------
    // 3. Simple Form Submission Handling (For Contact Section)

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real project, you would send this data to a backend (like Formspree or Netlify Forms)
            
            alert('Thank you for your message! (Form submission logic goes here)');
            this.reset(); // Clear the form fields
        });
    }

});

// NOTE: For more advanced, time-based, or sequence-based animations, 
// replace the IntersectionObserver logic with GSAP and ScrollMagic.
// For example: GSAP.to(item, { width: level + '%', duration: 1.5, ease: 'power2.out' });
          
