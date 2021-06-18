const play = document.getElementById("play")
const mute = document.getElementById("mute")
const volume = document.getElementById("volume")
const video = document.getElementById("video")

let currentVolumeScale = 0.5
video.volume = currentVolumeScale 

function addListener() {
    play.addEventListener("click", handlePlay)
    mute.addEventListener("click", handleMute)
    volume.addEventListener("input", handleVolume)
}

function handlePlay() {
    video.paused ? video.play() : video.pause()
    play.innerText = video.paused ? "Play" : "Pause"
}

function handleMute() {
    video.muted = video.muted ? false : true
    mute.innerText = video.muted ? "Unmuted" : "Muted"
    volume.value = video.muted ? 0 : currentVolumeScale
}

function handleVolume (event) {
    video.volume = event.target.value
    currentVolumeScale = video.volume
}

function init () {
    addListener();
}

init();