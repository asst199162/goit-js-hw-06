const navEl = document.querySelectorAll('ul#categories ul');
console.log("Number of categories:", navEl.length);

const navElLi = document.querySelectorAll('li.item ul');

navElLi.forEach(function (number, index) {
    console.log(`Category: ${number.previousElementSibling.textContent}`)
    console.log(`Elements: ${number.children.length}`);
    });