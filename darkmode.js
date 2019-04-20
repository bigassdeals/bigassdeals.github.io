function onDarkModeClick() {
  const button = event.target;
  const body = document.body;

  if (button.value === 'dark') {
    button.value = 'light'
    button.innerHTML = 'Light Mode'
    button.style.backgroundColor = '#333';
    button.style.color = 'white';
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  } else {
    button.value = 'dark'
    button.innerHTML = 'Dark Mode'
    button.style.backgroundColor = '#FFF';
    button.style.color = 'black';
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  }
}
