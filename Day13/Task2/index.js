var images = document.querySelectorAll("img");
var topBox = document.getElementById("top");
var bottomBox = document.getElementById("bottom");
var selectedImage = null;
images.forEach(function (img) {
    img.addEventListener("dragstart", function () {
        selectedImage = this;
    });
});
function allowDrop(box) {
    box.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
    box.addEventListener("dragenter", function (e) {
        e.preventDefault();
    });
    box.addEventListener("drop", function (e) {
        e.preventDefault();
        this.appendChild(selectedImage);
        checkEmpty();
    });
}
function checkEmpty() {

    if (topBox.querySelectorAll("img").length == 0) {
        topBox.innerHTML = "Empty";
    }

    else if (topBox.innerHTML == "Empty") {
        topBox.innerHTML = "";
    }
}
allowDrop(bottomBox);
allowDrop(topBox);