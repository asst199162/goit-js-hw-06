const form = document.querySelector('.login-form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    if (!email.trim() || !password.trim()) {
    alert ('Все поля должны быть заполнены')    
    }
    console.log({ email, password })
    form.reset()
})
