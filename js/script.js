// Call Plugin Owl Carousel 2
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        autoplayTimeout: 3000,
        margin: 10,
        nav: true,
        navText: ['Anterior', 'Siguiente'],
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            700: {
                items: 2
            }
        }

    });
});