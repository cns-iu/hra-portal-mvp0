const navMenuBtn = document.querySelector('.mobile-nav-menu-btn');
const navMenu = document.querySelector('.mobile-nav-menu');
const banner = document.getElementById('collab-banner');

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
  const buttons = document.querySelectorAll('.web-nav-menu > .menu-btns > button');
  const isClosed = !event.target.classList.contains(openClass);
  for (const button of buttons) {
    button.classList.remove(openClass);
  }

  if (isClosed) {
    event.target.classList.add(openClass);
  }
}

// Logic to handle the scrolling of collaborators banner - (WIP)
let scrollingHorizontally = true;

banner.addEventListener("wheel", (event) => {
  event.deltaX = 0
  if (scrollingHorizontally) {
    banner.scrollBy({
      left: event.deltaY < 0 ? -70 : 70,
    });
    event.preventDefault();
    if (banner.scrollLeft >= banner.scrollWidth - banner.clientWidth - 100 && event.deltaY > 0) {
      scrollingHorizontally = false;
    } else if (banner.scrollLeft === 0 && event.deltaY < 0) {
      scrollingHorizontally = false;
    }
  } else {
    scrollingHorizontally = true;
  }
});