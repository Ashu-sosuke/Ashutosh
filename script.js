document.addEventListener('DOMContentLoaded', () => {

    /* --- Sticky Navbar & Active Links --- */
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Sticky Navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            backToTopBtn.classList.add('active');
        } else {
            navbar.classList.remove('scrolled');
            backToTopBtn.classList.remove('active');
        }

        // Active Link Update
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    /* --- Mobile Menu Toggle --- */
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-links');
    const menuIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
        if (navList.classList.contains('nav-active')) {
            menuIcon.classList.remove('bx-menu');
            menuIcon.classList.add('bx-x');
        } else {
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    });

    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('nav-active');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        });
    });

    /* --- Scroll Reveal Animations --- */
    const reveals = document.querySelectorAll('.reveal');

    function reveal() {
        var windowHeight = window.innerHeight;
        var elementVisible = 150;

        reveals.forEach(revealElement => {
            var elementTop = revealElement.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                revealElement.classList.add('active');
            }
        });
    }

    // Run once on load to show visible elements
    reveal();
    // Run on scroll
    window.addEventListener('scroll', reveal);

    /* --- Typing Animation --- */
    const typeText = "Android Developer | Kotlin | Jetpack Compose | Python | AI";
    const typeElement = document.querySelector('.typing-text');
    let i = 0;

    // Slight delay before typing begins
    setTimeout(() => {
        function typeWriter() {
            if (i < typeText.length) {
                typeElement.innerHTML += typeText.charAt(i);
                i++;
                setTimeout(typeWriter, 80); // Typing speed
            }
        }
        typeWriter();
    }, 1000);

});
