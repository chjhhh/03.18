// header swipe slider
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3000,
    },
    pagination: {
      el: ".mySwiper .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
});