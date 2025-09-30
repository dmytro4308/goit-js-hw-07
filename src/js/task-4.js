const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const { email, password } = form.elements;
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    if (!emailVal || !passwordVal) {
        alert('All form fields must be filled in');
        return;
    }

    const data = {
        email: emailVal,
        password: passwordVal,
    };

    console.log(data);
    form.reset();
});
