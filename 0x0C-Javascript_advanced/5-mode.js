function changeMode (size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = `${size}px`;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main () {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowecase', 'white', 'black');

  const text = document.createElement('p');
  const btnSpooky = document.createElement('button');
  const btnDarkMode = document.createElement('button');
  const btnScreamMode = document.createElement('button');

  text.innerHTML = 'Welcome Holberton!';
  btnSpooky.innerHTML = 'Spooky';
  btnDarkMode.innerHTML = 'Dark mode';
  btnScreamMode.innerHTML = 'Scream mode';

  document.body.appendChild(text);
  document.body.appendChild(btnSpooky);
  document.body.appendChild(btnDarkMode);
  document.body.appendChild(btnScreamMode);

  btnSpooky.onclick = () => spooky();
  btnDarkMode.onclick = () => darkMode();
  btnScreamMode.onclick = () => screamMode();
}

main();
