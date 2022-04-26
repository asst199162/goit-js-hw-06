function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color')
const body = document.querySelector('body')
const text = document.querySelector('.color')

btn.addEventListener('click', function() {
  const color = getRandomHexColor()
  body.style.backgroundColor = color;
  text.textContent = color;
})
