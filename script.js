function is_valid_password(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    let pattern = /\d/;
    if (!pattern.test(password)) {
        return "Password must contain at least one digit.";
    }

    let digits = Array.from(password).filter(digit => /\d/.test(digit)).map(Number);
    if (digits.reduce((sum, digit) => sum + digit, 0) !== 10) {
        return "Sum of digits in password must be 10.";
    }

    return "Password is valid.";
}

function checkPassword() {
    let password = document.getElementById("password").value;
    let validationDiv = document.getElementById("validation");
    let validationResult = is_valid_password(password);

    if (validationResult.includes("valid")) {
        validationDiv.style.color = "green";
    } else {
        validationDiv.style.color = "red";
    }

    validationDiv.textContent = validationResult;
}
