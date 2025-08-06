document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect: Adds a 'scrolled' class to the navbar when the user scrolls down
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) { // Threshold in pixels for when the navbar changes
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initialize WOW.js for scroll animations (if not already done in HTML)
    // new WOW().init();

    console.log("Professional IT Company Home Page scripts loaded!");
    
});


