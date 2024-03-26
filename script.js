const navMenuBtn = document.querySelector('.mobile-nav-menu-btn');
const navMenu = document.querySelector('.mobile-nav-menu');
const banner = document.getElementById('collab-banner');
const webMenuBar = document.querySelector('.web-nav-menu');
const webMenus = document.querySelectorAll('.menu-wrapper > div');
const openClass = 'open';

// Logic to handle the open/close of the mobile menu window
navMenuBtn.addEventListener('click', () => {
  navMenuBtn.classList.toggle('menu-opened');
  navMenu.classList.add('animated');
});

//Logic to hide opened menu when window size is too big
window.addEventListener('resize', (e) => {
  if (e.target.innerWidth >= 1280) {
    navMenuBtn.classList.remove('menu-opened');
  }
})

// Logic to handle the expand/collapse of the menu items
const toggles = document.querySelectorAll('.toggle');
toggles.forEach(function (toggle) {
  toggle.addEventListener('click', function () {
    this.classList.toggle('item-open');
    this.nextElementSibling.classList.add('animated')
  });
});

function hideMenu() {
  navMenuBtn.classList.remove('menu-opened');
}

// Logic to close the menu when clicked on the toolbar icon
const img = document.querySelector('.top-navigation > img');
const body = document.getElementsByTagName('body');
img.addEventListener('click', removeOpenClass);

document.addEventListener('click', (e) => {
  webMenus.forEach((menu) => {
    if (!menu.contains(e.target) && !webMenuBar.contains(e.target)) {
      removeOpenClass();
    }
  })
})

// Function to remove open class from the buttons and menus
function removeOpenClass() {
  const buttons = document.querySelectorAll('.web-nav-menu > .top-navigation > .menu-btns > button');
  const elements = [...buttons, ...webMenus]
  for (const el of elements) {
    el.classList.remove(openClass);
  }
}

function largeScreenMenuButtonClickHandler(event, i) {
  const isClosed = !event.target.classList.contains(openClass);
  removeOpenClass();
  if (isClosed) {
    event.target.classList.add(openClass);
    webMenus[i].classList.add(openClass);
  }
}

// Logic to handle the scrolling of collaborators banner - (WIP)
let scrollingHorizontally = true;

banner.addEventListener("wheel", (event) => {
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
