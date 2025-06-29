// Wartet, bis das gesamte HTML-Dokument geladen ist, bevor das Skript ausgeführt wird.
document.addEventListener('DOMContentLoaded', function() {

    // --- FUNKTION FÜR DAS MOBILE HAMBURGER-MENÜ ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('header nav');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });


    // --- FUNKTION FÜR "SMOOTH SCROLLING" ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    }


    // --- FUNKTION: AKTIVEN NAV-LINK BEIM SCROLLEN HERVORHEBEN ---
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const menuLink = document.querySelector(`nav a[href="#${id}"]`);

            if (entry.isIntersecting) {
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('nav-link-active');
                });
                if (menuLink) {
                    menuLink.classList.add('nav-link-active');
                }
            }
        });
    }, { 
        rootMargin: '-30% 0px -70% 0px' 
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});