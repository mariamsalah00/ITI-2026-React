var Images = [

    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
];

var CurrentImage = 0;
var Timer = null;
function StartSlide() {

    if (Timer == null) {
        Timer = setInterval(function () {
            CurrentImage++;
            if (CurrentImage == Images.length) {
                CurrentImage = 0;
            }
            imgSlide.src = Images[CurrentImage];
        }, 1000);
    }
}

function StopSlide() {
    clearInterval(Timer);
    Timer = null;
}

function NextImage() {

    CurrentImage++;
    if (CurrentImage == Images.length) {
        CurrentImage = 0;
    }
    imgSlide.src = Images[CurrentImage];
}

function PreviousImage() {

    CurrentImage--;
    if (CurrentImage < 0) {
        CurrentImage = Images.length - 1;
    }
    imgSlide.src = Images[CurrentImage];
}