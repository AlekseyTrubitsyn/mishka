(function() {
  const toggleButton = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  const orderButton = document.getElementById('order-button');
  const popup = document.getElementById('popup');
  const popupForm = document.getElementById('popup-form');
  const popupOverlay = document.getElementById('popup-overlay');
  const popupCloseButton = document.getElementById('popup-close');

  toggleButton.addEventListener('click', (event) => {
    event.preventDefault();

    menu.classList.toggle('header__menu--expanded');
  });

  if (!(orderButton && popup && popupForm && popupOverlay && popupCloseButton)) return;

  orderButton.addEventListener('click', showPopup);
  popupOverlay.addEventListener('click', closePopup);
  popupCloseButton.addEventListener('click', closePopup);

  popupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    alert('Добавлено!');
    closePopup();
  });

  function closePopup(event) {
    if (event) event.preventDefault();

    popup.classList.add('hide');
    popupOverlay.classList.add('hide');
  }

  function showPopup(e) {
    console.log('showPopup');
    e.preventDefault();

    popup.classList.remove('hide');
    popupOverlay.classList.remove('hide');
  }
})();
