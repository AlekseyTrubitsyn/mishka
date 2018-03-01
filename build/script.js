(function() {
  const toggleButton = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  toggleButton.addEventListener('click', (event) => {
    event.preventDefault();

    menu.classList.toggle('header__menu--expanded');
  })
})();
