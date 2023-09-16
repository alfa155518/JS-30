let inputUser = document.querySelector(".user");

let inputPassword = document.querySelector(".password");

let inputEmail = document.querySelector(".email");

const btnSubmit = document.querySelector(".btn-submit");






btnSubmit.addEventListener("click", (e) => {
    if (inputUser.value === '' || inputPassword.value === '' || inputEmail.value === '') {
        console.log("Data False")
    } else {
        if (inputUser.value === localStorage.getItem("user") && inputPassword.value === localStorage.getItem("password") && inputEmail.value === localStorage.getItem("email")) {
            console.log("Data Correct")
            window.location  = 'index.html'
        } else {
            console.log("Data False")
        }
    }
})