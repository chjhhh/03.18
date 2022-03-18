// best combination swipe slider
var swiper = new Swiper(".mySwiperBest", {
    autoplay: {
        delay: 5000,
    },
    pagination: {
      el: ".mySwiperBest .swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView : 1,
    centeredSlides : true,
});