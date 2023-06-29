window.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById("myAudio");

    audio.addEventListener('canplaythrough', function () {
        audio.play();
    });
});