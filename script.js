document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect for Hero Section
    const heroName = document.querySelector('.hero-name');
    const heroRoles = document.querySelector('.hero-roles');
    
    function typeWriter(element, text, speed = 40) {
        element.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Call typeWriter function for heroName and heroRoles if you want it for both
    typeWriter(heroName, heroName.textContent);
    typeWriter(heroRoles, heroRoles.textContent);  // Optional

    // Hamburger menu toggle function
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("show");

            // Optional: Change hamburger color when the menu is open
            if (navLinks.classList.contains("show")) {
                hamburger.style.color = "yellow"; // Change color when menu is open
            } else {
                hamburger.style.color = ""; // Reset to default
            }
        });
    }

    // Scroll to top button functionality
    const scrollToTopButton = document.querySelector("#scrollToTop");
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Particle Background Animation
    function createParticles() {
        const container = document.querySelector('.background-pattern');
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            particle.style.left = `${Math.random() * 50}%`;
            particle.style.top = `${Math.random() * 50}%`;
            particle.style.width = `${Math.random() * 100 + 1}px`;
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = `rgba(52, 152, 219, ${Math.random()})`;
            
            container.appendChild(particle);
            
            particle.animate([
                { transform: 'translate(0, 0)', opacity: 1 },
                { transform: `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px)`, opacity: 0 }
            ], {
                duration: Math.random() * 2000 + 2000,
                easing: 'ease-out',
                fill: 'forwards'
            });
            
            setTimeout(() => {
                particle.remove();
            }, 4000);
        }
        
        setInterval(createParticle, 100);
    }

    createParticles();

    //Email JS Contact Form
    const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        emailjs.sendForm('service_j1ox42k', 'template_5cc9kpd', this)
            .then(function () {
                alert('Message sent successfully!');
                contactForm.reset();
            }, function (error) {
                alert('Failed to send message. Please try again.');
                console.log('FAILED...', error);
            });
    });
}

    // Resume Button to open PDF in an iframe
    const resumeButton = document.getElementById("view-resume");
    if (resumeButton) {
        resumeButton.addEventListener("click", function () {
            const resumeUrl = "path/to/your/EPAPRADEITH_RACHETY_Resume.pdf"; // Update with the correct URL path for your resume
            const resumeContainer = document.getElementById("resume-container");
            const resumeFrame = document.getElementById("resume-frame");

            resumeFrame.src = resumeUrl;
            resumeContainer.style.display = "block";
        });
    }
});
