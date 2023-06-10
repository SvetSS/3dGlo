const currentDate = new Date();

const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];


let currentHours = currentDate.getHours();
console.dir(currentHours);
const period = currentHours >= 12 ? "PM" : "AM";
currentHours = currentHours % 12 || 12;
const currentMinutes = getZero(currentDate.getMinutes());
const currentSeconds = getZero(currentDate.getSeconds());


const currentYear = currentDate.getFullYear();
const nextYear = currentYear + 1;

const newYear = new Date();
newYear.setFullYear(nextYear, 0, 1);
const daysToNewYear = Math.floor((newYear - currentDate) / (1000 * 60 * 60 * 24));


let currentGreeting;
if (currentHours >= 5 && currentHours < 12) {
    currentGreeting = "Доброе утро";
} else if (currentHours >= 12 && currentHours < 18) {
    currentGreeting = "Добрый день";
} else if (currentHours >= 18 && currentHours < 22) {
    currentGreeting = "Добрый вечер";
} else {
    currentGreeting = "Доброй ночи";
}

document.getElementById("greetings").textContent = currentGreeting;
document.getElementById("currentDayOfWeek").textContent = `Сегодня: ${currentDayOfWeek}`;
document.getElementById("currentTime").textContent = `Текущее время: ${currentHours}:${currentMinutes}:${currentSeconds} ${period}`;
document.getElementById("daysToNewYear").textContent = `До нового года осталось ${daysToNewYear} дней`;

function getZero(number) {
    return number < 10 ? `0${number}` : number;
}