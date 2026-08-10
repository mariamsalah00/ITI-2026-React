var data = location.search.substring(1);
var arr = data.split("&");

var firstName    = arr[0].split("=")[1];
var age = arr[1].split("=")[1];
var gender = arr[2].split("=")[1];
var color = arr[3].split("=")[1];

username.innerHTML = firstName;
username.style.color = color;

userage.innerHTML = age;

if (gender == "Male")
    img.src = "images/boy.jpg";
else img.src = "images/girl.jpg";
