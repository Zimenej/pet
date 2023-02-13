var swiper = new Swiper(".content", {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  loop: true,
});
