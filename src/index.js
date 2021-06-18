class VideoApp {
    constructor({initalVolumeScale=0.5, playId, muteId, volumeId, videoId}) {
        this.play = document.getElementById(playId)
        this.mute = document.getElementById(muteId)
        this.volume = document.getElementById(volumeId)
        this.video = document.getElementById(videoId)
        this.currentVolumeScale = initalVolumeScale
        this.video.volume = this.currentVolumeScale 
        this.addEventListener();
    }

    addEventListener = () => {
        this.play.addEventListener("click", this.handlePlay)
        this.mute.addEventListener("click", this.handleMute)
        this.volume.addEventListener("input", this.handleVolume)
    }
    
    handlePlay = () => {
        this.video.paused ? this.video.play() : this.video.pause()
        this.play.innerText = this.video.paused ? "Play" : "Pause"
    }

    handleMute = () => {
        this.video.muted = this.video.muted ? false : true
        this.mute.innerText = this.video.muted ? "Unmuted" : "Muted"
        this.volume.value = this.video.muted ? 0 : this.currentVolumeScale
    }

    handleVolume = (event) => {
        this.video.volume = event.target.value
        this.currentVolumeScale = this.video.volume
    }

}

function init () {

new VideoApp({playId:"play", muteId:"mute", volumeId:"volume", videoId:"video"})

}

init();