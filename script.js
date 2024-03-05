const navMenuBtn = document.querySelector('.mobile-nav-menu-btn');
const navMenu = document.querySelector('.mobile-nav-menu');

// Logic to handle the open/close of the mobile menu window
navMenuBtn.addEventListener('click', () => {
  navMenuBtn.classList.toggle('menu-opened');
  navMenu.classList.add('animated');
});

// Logic to handle the expand/collapse of the menu items
var toggles = document.querySelectorAll('.toggle');
toggles.forEach(function (toggle) {
  toggle.addEventListener('click', function () {
    this.classList.toggle('item-open');
    this.nextElementSibling.classList.add('animated')
  });
});

function hideMenu() {
  navMenuBtn.classList.remove('menu-opened');
}

function largeScreenMenuButtonClickHandler(event) {
  const openClass = 'open';
  const buttons = document.querySelectorAll('.web-nav-menu > button');
  const isClosed = !event.target.classList.contains(openClass);
  for (const button of buttons) {
    button.classList.remove(openClass);
  }

  if (isClosed) {
    event.target.classList.add(openClass);
  }
}