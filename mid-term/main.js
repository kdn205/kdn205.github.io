document.querySelector('button').onclick = function () {
    const userName = document.querySelector('input[name="userName"]').value;
    const password = document.querySelector('input[name="1stpassword"]').value;
    const cfpassword = document.querySelector('input[name="cfpassword"]').value;

    
    if (userName.length < 5 || userName.length > 15) {
        alert("Username must be between 5 and 15 characters.");
        return;
    }

    if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
        alert("Password must contain both letters and numbers.");
        return;
    }

    if (password !== cfpassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Registration successful!");
};


