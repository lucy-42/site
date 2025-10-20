// Windows XP Popup
const xpPopupOverlay = document.getElementById('xp-popup-overlay');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const backgroundMusic = document.getElementById('background-music');
const volumeControl = document.getElementById('volume-control');
const volumeSlider = document.getElementById('volume-slider');

// Handle "Yes" button - Play music
yesBtn.addEventListener('click', () => {
    xpPopupOverlay.classList.remove('visible');
    backgroundMusic.play();
    volumeControl.classList.add('visible');
});

// Handle "No" button - Don't play music
noBtn.addEventListener('click', () => {
    xpPopupOverlay.classList.remove('visible');
});

// Volume Control
volumeSlider.addEventListener('input', (e) => {
    backgroundMusic.volume = e.target.value / 100;
});

// Set initial volume
backgroundMusic.volume = 0.5;

// Collapsible Sections (Meraklı)
const merakliToggles = document.querySelectorAll('.merakli-toggle');

merakliToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        // Close all other sections
        merakliToggles.forEach(otherToggle => {
            if (otherToggle !== toggle) {
                otherToggle.setAttribute('aria-expanded', 'false');
                otherToggle.nextElementSibling.classList.remove('open');
            }
        });

        // Toggle current section
        toggle.setAttribute('aria-expanded', !isExpanded);
        content.classList.toggle('open');
    });
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
let isDarkTheme = true;

themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;

    if (isDarkTheme) {
        document.documentElement.style.setProperty('--bg-color', '#0c0a11');
        document.documentElement.style.setProperty('--text-color', '#d5cac7');
        document.documentElement.style.setProperty('--border-color', '#343237');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#f5f5f5');
        document.documentElement.style.setProperty('--text-color', '#1a1a1a');
        document.documentElement.style.setProperty('--border-color', '#d0d0d0');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Fade in sections on scroll
const fadeInSections = document.querySelectorAll('.fade-in-section');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

fadeInSections.forEach(section => {
    observer.observe(section);
});
