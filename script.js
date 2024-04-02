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

// Logic to add tabindex to the menu item anchor tags
const toggles = document.querySelectorAll('.toggle');
window.addEventListener('DOMContentLoaded', () => {
  toggles.forEach((toggle) => {
    const anchors = toggle.nextElementSibling.querySelectorAll('a');
    anchors.forEach((a) => {
      a.setAttribute('tabindex', '-1');
    })
  })
})

// Logic to handle the expand/collapse of the menu items
toggles.forEach(function (toggle) {
  toggle.addEventListener('click', function () {
    this.classList.toggle('item-open');
    this.nextElementSibling.classList.add('animated')
    const anchors = this.nextElementSibling.querySelectorAll('a');
    if (this.classList.contains('item-open')) {
      anchors.forEach((anchor) => {
        anchor.removeAttribute('tabindex');
      })
    } else {
      anchors.forEach((anchor) => {
        anchor.setAttribute('tabindex', '-1');
      })
    }
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

// Scroll Event to scroll the banner left/right
const sticky_section = document.querySelector('.collab-sticky');

window.addEventListener('scroll', () => {
  transform(sticky_section);
});

// Function to left scroll collaborators banner
function transform(section) {
  const scrollElement = section.querySelector('.scroll-section');
  const sideElement = section.querySelector('.collab-label');
  const scroll = window.scrollY;
  const viewHeight = window.innerHeight;
  const viewWidth = window.innerWidth;
  const { width: elementWidth, height: elementHeight } = scrollElement.getBoundingClientRect(); //actual banner
  const elementOffset = scrollElement.offsetTop;
  const { width: sectionElementWidth } = section.getBoundingClientRect();
  const { width: sideElementWidth } = sideElement.getBoundingClientRect();
  const leftOffset = viewWidth > 768 ? sideElementWidth : 0;

  const start = elementOffset - viewHeight / 2;
  const end = start + elementHeight;
  const clampedScroll = Math.min(Math.max(scroll, start), end);
  const translationFactor = (clampedScroll - start) / (end - start);
  const translation = translationFactor * Math.max(elementWidth - sectionElementWidth + leftOffset, 0);

  scrollElement.style.transform = `translate3d(${-translation}px, 0, 0)`;
}

const anchors = document.querySelectorAll('a')
anchors.forEach((anchor) => {
  console.log(anchor.href);
})