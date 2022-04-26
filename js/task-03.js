const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const list = document.querySelector(".gallery");
list.style.listStyle = "none"

images.forEach(function (number, index) {
  const navEl = document.createElement("li")
  navEl.style.boxShadow = "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),0px 2px 1px rgba(0, 0, 0, 0.2)";
  navEl.style.borderRadius = "2px 2px 4px 4px";
  navEl.style.marginTop = "10px";
  navEl.style.background = "gray";
  navEl.style.width="505px";
  navEl.insertAdjacentHTML('beforeend', `<img src='${number.url}' alt='${number.alt}'  width="500" height="300">`);
  list.prepend(navEl)
});
