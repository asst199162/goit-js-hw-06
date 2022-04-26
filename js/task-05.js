const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', function (event) { event.currentTarget.value == "" ? output.textContent = "Anonymous" : output.textContent = this.value.trim()})
