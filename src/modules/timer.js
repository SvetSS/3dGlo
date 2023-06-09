const timer = deadLine => {
    console.log(deadLine);
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');


    const getTimeRemaining = () => {
        const dataStop = new Date(deadLine).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = ((dataStop - dateNow) / 1000), //second
            hours = Math.floor((timeRemaining / 60 / 60) % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            seconds = Math.floor(timeRemaining % 60);

        if (timeRemaining > 0) {
            return {
                timeRemaining, hours, minutes, seconds
            };
        } else {
            return {
                timeRemaining: 0, hours: 0, minutes: 0, seconds: 0
            };
        }
    };
    const getZero = num => {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else { return num; }
    };

    const updateClock = () => {
        const getTime = getTimeRemaining();
        timerHours.textContent = getZero(getTime.hours);
        timerMinutes.textContent = getZero(getTime.minutes);
        timerSeconds.textContent = getZero(getTime.seconds);

        const timeInterval = setInterval(updateClock, 1000);

        if (getTime.timeRemaining <= 0) {
            clearInterval(timeInterval);
        }
    };

    updateClock();
};
export default timer;
