let allInputs = document.querySelectorAll("input");

let testImg = document.querySelector("img");

console.log(allInputs)




allInputs.forEach(input => {
    input.addEventListener("change", handelUpdate)
    input.addEventListener("mousemove", handelUpdate)
})


function handelUpdate() {
    const suffix = this.dataset.sizing || '' ;
    document.documentElement.style.setProperty(`--${this.id}`,this.value + suffix);
}