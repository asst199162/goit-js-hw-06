const counter = {
    value : 0,
    increment() {
        this.value +=1;
    },
    decrement() {
        this.value -=1;
    }
};

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');


decrement.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.value
});
increment.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.value
});

