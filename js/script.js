document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion-item__trigger-btn');
  const accordionItems = document.querySelectorAll('.accordion__item');
  const accordionArrows = document.querySelectorAll('.accordion-item__btn-arrow');
  const guestLinks = document.querySelectorAll('.accordion-item__content-link');
  const guestCards = document.querySelectorAll('.section-guests__guest-card');

  accordionButtons.forEach((accordionBtn) => {
    const accordionArrow = accordionBtn.querySelector('.accordion-item__btn-arrow');

    accordionBtn.addEventListener('click', () => {

      if (accordionBtn.closest('.accordion__item').classList.contains('accordion__item_active')) {
        accordionBtn.closest('.accordion__item').classList.remove('accordion__item_active');
        accordionArrow.classList.remove('rotate');
      } else {
        accordionItems.forEach((item) => {
          item.classList.remove('accordion__item_active');
        });

        accordionArrows.forEach((arrow) => {
          arrow.classList.remove('rotate');
        })

        accordionBtn.closest('.accordion__item').classList.toggle('accordion__item_active');
        accordionArrow.classList.toggle('rotate');
      }
    });
  });

  guestLinks.forEach((guestLink) => {
    guestLink.addEventListener('click', (event) => {
      event.preventDefault();

      for (i = 0; i < guestLinks.length; i++) {
        guestLinks[i].classList.remove('accordion-item__content-link_active');
      }

      event.target.classList.add('accordion-item__content-link_active');

      const path = event.currentTarget.dataset.path;

      guestCards.forEach((guestCard) => {
        guestCard.classList.remove('guest-card_active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('guest-card_active');
    });
  });
});
