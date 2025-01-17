function signUp() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confermaPassword').value;

    if (password != confirmPassword) {
        alert('le password non corrispondono');
    }
}