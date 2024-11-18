var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 6,
        },
    },
});

var swiper = new Swiper(".mySwiperCar", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 4800,

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});