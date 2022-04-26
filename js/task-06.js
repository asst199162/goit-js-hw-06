const input = document.querySelector('#validation-input');

input.addEventListener('blur', function (e) {
    const textLenght = e.target.value.length;
    const length = input.dataset.length;
    if (length == textLenght) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
});



