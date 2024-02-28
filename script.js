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
