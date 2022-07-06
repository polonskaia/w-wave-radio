document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1025: {
        slidesPerView: 3,
      },
      1201: {
        slidesPerView: 4,
      }
    }
  });
});
