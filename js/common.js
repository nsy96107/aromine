var swiper = new Swiper(".col", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  slidesPerView: 2, //스와이퍼 갯수
  spaceBetween: 100, //사이 간격
});