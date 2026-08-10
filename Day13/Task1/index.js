var video = document.getElementById("video");
var source = document.getElementById("source");
var buttons = document.querySelectorAll(".menu button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var path = this.getAttribute("data-video");
        source.src = path;
        video.load();
        video.play();
    };
}
video.ondblclick = function () {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        video.requestFullscreen();
    }
};
video.onclick = function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

