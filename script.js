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


// To be Fixed
function toggleSubMenu(index) {
  console.log(document.getElementsByClassName('menu-item-headers')[0].querySelector('ul:nth-child(2)'));
  // var subMenu = document.getElementsByClassName('menu-item-headers')[0].querySelector('ul:nth-child(2)');
  // console.log(subMenu);
  // subMenu.classList.toggle('unhide');
}
