function loadStyleModeFromCookie() {
  const mode = getCookieValue('mode');
  if (mode != null) {
    setStyleMode(mode);
  }
}

function onDarkModeClick(event) {
  const button = event.target;
  const mode = button.value;

  setStyleMode(mode);
}

function setStyleMode(mode) {
  const body = document.body;
  const button = document.getElementById('dark-mode');

  if (mode === 'dark') {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';

    button.value = 'light'
    button.innerHTML = 'Light Mode'
    button.style.backgroundColor = '#333';
    button.style.color = 'white';

  } else if (mode === 'light') {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';

    button.value = 'dark'
    button.innerHTML = 'Dark Mode'
    button.style.backgroundColor = '#FFF';
    button.style.color = 'black';
  }

  document.cookie = 'mode=' + mode
}

function getCookieValue(name) {
    var values = document.cookie.match(
      '(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)'
    );

    return values ? values.pop() : null;
}
