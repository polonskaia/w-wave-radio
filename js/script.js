document.addEventListener('DOMContentLoaded', () => {
  const podcastsCards = document.querySelectorAll('.section-podcasts__item');
  const buttonMorePodcasts = document.querySelector('.section-podcasts__button');
  const selectButton = document.querySelector('.select__button');
  const selectList = document.querySelector('.select__list');
  const selectItems = document.querySelectorAll('.select__item');
  const selectItemButtons = document.querySelectorAll('.select-item__button');
  const guestLinks = document.querySelectorAll('.accordion-content__link');
  const guestCards = document.querySelectorAll('.section-guests__guest-card');
  const viewsButtons = document.querySelectorAll('.podcasts-item__activity-button_views');
  const likesButtons = document.querySelectorAll('.podcasts-item__activity-button_likes');
  const linksButtons = document.querySelectorAll('.podcasts-item__activity-button_links');

  hidePodcastsCards();
  activateCustomSelect();
  activateTabsInAccordion();

  viewsButtons.forEach((viewBtn) => {
    viewBtn.ariaLabel = `${viewBtn.textContent} просмотров`;
  });

  likesButtons.forEach((likeBtn) => {
    likeBtn.ariaLabel = `${likeBtn.textContent} лайков`;
  });

  linksButtons.forEach((linkBtn) => {
    linkBtn.ariaLabel = `${linkBtn.textContent} ссылок`;
  });

  selectButton.ariaLabel = `Выбрать автора. Выбранный автор - ${selectButton.innerHTML}`;

  function hidePodcastsCards() {
    if (podcastsCards.length > 8) {
      for (i = 8; i < podcastsCards.length; i++) {
        podcastsCards[i].classList.add('section-podcasts__item_hidden');
      }

      buttonMorePodcasts.addEventListener('click', () => {
        podcastsCards.forEach((card) => {
          card.classList.remove('section-podcasts__item_hidden');
        });

        buttonMorePodcasts.classList.add('hidden');
      });
    }
  }

  function activateCustomSelect() {
    selectButton.addEventListener('click', () => {
      selectList.classList.toggle('select__list_visible');
      selectButton.classList.toggle('select__button_is-open');
    });

    selectItemButtons.forEach((itemButton) => {
      itemButton.addEventListener('click', (event) => {
        event.stopPropagation();

        selectButton.innerHTML = event.target.innerHTML;
        selectButton.ariaLabel = `Выбрать автора. Выбранный автор - ${selectButton.innerHTML}`;
        selectList.classList.remove('select__list_visible');
        selectButton.classList.remove('select__button_is-open');

        selectItems.forEach((selectItem) => {
          selectItem.classList.remove('select__item_hidden');
        });

        event.target.parentNode.classList.add('select__item_hidden');
      });
    });

    document.addEventListener('click', (event) => {
      if (event.target !== selectButton) {
        selectList.classList.remove('select__list_visible');
        selectButton.classList.remove('select__button_is-open');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        selectList.classList.remove('select__list_visible');
        selectButton.classList.remove('select__button_is-open');
      }
    });
  }

  function activateTabsInAccordion() {
    guestLinks.forEach((guestLink) => {
      guestLink.addEventListener('click', (event) => {
        event.preventDefault();

        guestLinks.forEach((guestLink) => {
          guestLink.classList.remove('accordion-content__link_active');
        })

        event.target.classList.add('accordion-content__link_active');

        const path = event.currentTarget.dataset.path;

        guestCards.forEach((guestCard) => {
          guestCard.classList.remove('guest-card_active');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('guest-card_active');
      });
    });
  }
});
