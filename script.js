// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

mobileMenuButton.addEventListener('click', function() {
    navbar.classList.toggle('active');
    this.innerHTML = navbar.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbar.classList.remove('active');
        mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Testimonial slider
const testimonials = [
    {
        content: "Joining FlexFit was the best decision I made for my health. The trainers are knowledgeable and supportive, and the community is amazing. I've lost 30 pounds in 4 months!",
        name: "Emily Johnson",
        role: "Member for 2 years",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        content: "The facilities are top-notch and always clean. The variety of classes keeps me motivated, and I've made significant strength gains since joining 6 months ago.",
        name: "Michael Thompson",
        role: "Member for 6 months",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        content: "As a busy professional, the 24/7 access has been a game-changer. The trainers helped me create a personalized program that fits my schedule and goals perfectly.",
        name: "Sarah Williams",
        role: "Member for 1 year",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
];

let currentTestimonial = 0;
const testimonialElement = document.querySelector('.testimonial');
const prevButton = document.getElementById('prev-testimonial');
const nextButton = document.getElementById('next-testimonial');

function showTestimonial(index) {
    testimonialElement.innerHTML = `
        <div class="testimonial-content">
            "${testimonials[index].content}"
        </div>
        <div class="testimonial-author">
            <div class="author-image">
                <img src="${testimonials[index].image}" alt="${testimonials[index].name}">
            </div>
            <div class="author-info">
                <h4>${testimonials[index].name}</h4>
                <p>${testimonials[index].role}</p>
            </div>
        </div>
    `;
}

prevButton.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

nextButton.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Initialize the first testimonial
showTestimonial(currentTestimonial);

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will contact you soon.');
        this.reset();
    });
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]');
        if (email.value) {
            alert(`Thank you for subscribing with ${email.value}!`);
            email.value = '';
        }
    });
}

// Animation on scroll
const animateElements = document.querySelectorAll('.animate-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

animateElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(element);
});