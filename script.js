const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const navMenuBtnIcon = document.querySelector('.mobile-nav-menu-btn > img');
const navMenuBtn = document.querySelector('.mobile-nav-menu-btn');

// Logic to handle the expand/collapse of the menu
var toggles = document.querySelectorAll('.toggle');
toggles.forEach(function (toggle) {
  toggle.addEventListener('click', function () {
    // Adds margin to the menu item heading
    toggle.classList.toggle('mb-3');
    // Rotates the arrow
    toggle.children[0].classList.toggle('rotate-180');
    var submenu = this.nextElementSibling;
    submenu.classList.toggle('grid');
  });
});

// Logic to handle the open/close of the mobile menu
navMenuBtn.addEventListener('click', () => {
  navMenuBtn.classList.toggle('open');
  mobileNavMenu.classList.toggle('unhide');
  navMenuBtn.classList.toggle('menu-open-btn');
  if (navMenuBtnIcon.src.includes('hamburger')) {
    navMenuBtnIcon.src = 'assets/images/close.svg';
  } else {
    navMenuBtnIcon.src = 'assets/images/hamburger.svg';
  }
});

function hideMenu() {
  mobileNavMenu.classList.remove('unhide');
  navMenuBtnIcon.src = 'assets/images/hamburger.svg';
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