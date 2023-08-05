/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const btnFullScreen = document.querySelector(".full")

/* Build out functions */

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  
}


function updateBtn() {
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.innerHTML = icon
}


function skip() {
  video.currentTime += parseInt(this.dataset.skip)
}

function keySkip(e) {
  if (e.key == 'ArrowRight') {
    video.currentTime += 25
  }else if(e.key == 'ArrowLeft') {
    video.currentTime += -10
  }
}

function updateRange() {
  video[this.name] = this.value
}


function handelProgress() {
  const percent = (this.currentTime / this.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`
}


function scrub(e) {
  const scrubTime  = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}


function fullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}





video.addEventListener("click", togglePlay)
toggle.addEventListener("click", togglePlay)

video.addEventListener("play", updateBtn)
video.addEventListener("pause", updateBtn)

video.addEventListener("timeupdate", handelProgress)

skipButtons.forEach(skipBtn => {
  skipBtn.addEventListener("click", skip)
})

document.body.addEventListener("keyup", keySkip)

ranges.forEach(range => {
  range.addEventListener("change", updateRange)
  range.addEventListener("mousemove", updateRange)
})

progress.addEventListener("click", scrub)
progress.addEventListener("mousemove", scrub)


btnFullScreen.addEventListener("click", fullScreen)