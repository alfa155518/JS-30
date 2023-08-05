document.addEventListener("keydown", drumFunction);



function drumFunction(e) {
const audioKey = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if (!audioKey) return;
audioKey.currentTime = 0;
audioKey.play();
key.classList.add("active");
setTimeout(() => {
    key.classList.remove("active");
}, 800);
}
