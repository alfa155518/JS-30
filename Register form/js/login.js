let inputUser = document.querySelector(".user");

let inputPassword = document.querySelector(".password");

let inputEmail = document.querySelector(".email");

const btnSubmit = document.querySelector(".btn-submit");





btnSubmit.addEventListener("click", (e) => {
    if (inputUser.value === '' || inputPassword.value === '' || inputEmail.value === '') {
        console.log("You Must Write Correct Data")
    } else {
        localStorage.setItem("user", inputUser.value)
        localStorage.setItem("password", inputPassword.value)
        localStorage.setItem("email", inputEmail.value)
        window.location = 'sing-up.html'
    }
})