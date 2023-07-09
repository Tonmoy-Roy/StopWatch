let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 10); // Update timer every 10 milliseconds
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

function reset() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    displayTime(elapsedTime);
}

function updateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    displayTime(elapsedTime);
}

function displayTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    const formattedTime = `${hours}:${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds)}`;
    document.getElementById('timer').textContent = formattedTime;
}

function padZero(value) {
    return value.toString().padStart(2, '0');
}