function timeToWalk(steps, stepLength, speed) {
    let timeInSec = steps * stepLength / 1000 / speed * 3600 + Math.floor(steps * stepLength / 1000 / 0.5) * 60;
    timeInSec = Number(timeInSec.toFixed(0));

    let hours = Math.floor(timeInSec / 3600);
    let minutes = Math.floor((timeInSec % 3600) / 60);
    let seconds = timeInSec % 60;

    let hh = hours.toString().padStart(2, '0');
    let mm = minutes.toString().padStart(2, '0');
    let ss = seconds.toString().padStart(2, '0');

    console.log(`${hh}:${mm}:${ss}`);
}

timeToWalk(4000, 0.60, 5);
console.log("------------");
timeToWalk(2564, 0.70, 5.5);