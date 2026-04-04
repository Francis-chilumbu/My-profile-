// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.add(currentTheme + '-theme');

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-fill');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (barTop < windowHeight - 50) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }
    });
}

// Initial check and scroll event listener
animateSkillBars();
window.addEventListener('scroll', animateSkillBars);

// Smooth scrolling for navigation (if needed in future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add typing effect to subtitle
const subtitle = document.querySelector('.subtitle');
const originalText = subtitle.textContent;
let index = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = isDeleting
        ? originalText.substring(0, index--)
        : originalText.substring(0, index++);

    subtitle.textContent = currentText;

    if (!isDeleting && index === originalText.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && index === 0) {
        isDeleting = false;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, speed);
}

// Start typing effect after a delay
setTimeout(typeWriter, 1000);

// Add hover effects for contact items
const contactItems = document.querySelectorAll('.contact-item');

contactItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});

// Profile image hover effect
const profileImage = document.querySelector('.profile-image');

profileImage.addEventListener('mouseenter', () => {
    profileImage.style.transform = 'scale(1.1) rotate(5deg)';
    profileImage.style.transition = 'transform 0.3s ease';
});

profileImage.addEventListener('mouseleave', () => {
    profileImage.style.transform = 'scale(1) rotate(0deg)';
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});