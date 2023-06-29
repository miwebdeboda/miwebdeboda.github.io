function toggleMute() {
    var audio = document.getElementById("myAudio");
    if (audio.muted) {
        audio.muted = false;
    } else {
        audio.muted = true;
    }
}