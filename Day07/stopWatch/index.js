var h = 0;
var m = 0;
var s = 0;
var msValue = 0;

var timer = setInterval(run, 10);

function run() {
    msValue++;

    if (msValue == 100) {
        msValue = 0;
        s++;
    }

    if (s == 60) {
        s = 0;
        m++;
    }

    if (m == 60) {
        m = 0;
        h++;
    }

    time.innerHTML = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);

    ms.innerHTML = msValue < 10 ? "0" + msValue : msValue;
}

function pauseWatch() {
    clearInterval(timer);

    pauseBtn.innerHTML = "Continue";
    pauseBtn.className = "continue";
    pauseBtn.onclick = continueWatch;
}

function continueWatch() {
    timer = setInterval(run, 10);

    pauseBtn.innerHTML = "Pause";
    pauseBtn.className = "pause";
    pauseBtn.onclick = pauseWatch;
}

function clearWatch() {
    clearInterval(timer);

    h = 0;
    m = 0;
    s = 0;
    msValue = 0;

    time.innerHTML = "00:00:00";
    ms.innerHTML = "00";

    timer = setInterval(run, 10);

    pauseBtn.innerHTML = "Pause";
    pauseBtn.className = "pause";
    pauseBtn.onclick = pauseWatch;
}
