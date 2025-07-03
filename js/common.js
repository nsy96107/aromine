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

  slidesPerView: 3, //스와이퍼 갯수
  spaceBetween: 20, //사이 간격
  centeredSlides: true,
});