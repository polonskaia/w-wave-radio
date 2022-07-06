document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion', {
    elementClass: 'accordion__item',
    triggerClass: 'accordion__trigger-btn',
    panelClass: 'accordion__content',
    activeClass: 'accordion__item_active',
    openOnInit: [0],
  });
});
