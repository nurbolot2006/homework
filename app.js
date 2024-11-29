const hoursEl = document.getElementById('hours')
const minEl = document.getElementById('minutes')
const secEl = document.getElementById('seconds')

const setTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    if (hours < 10 ) {
        hours = `0${hours}`;
    }
    if (minutes < 10 ) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10 ) {
        seconds = `0${seconds}`;
    }
    
    hoursEl.innerHTML = `${hours} : `;
    minEl.innerHTML = `${minutes} : `;
    secEl.innerHTML = `${seconds}`;
}

setInterval(setTime,)

const days = ["Sun", "Mun", "Tue", "Wed", "Thu", "Fri", "Sat"];
const now = new Date();
const dayIndex = now.getDay();

const daysContainer = document.getElementById('days');

days.forEach( (dayy, index) => {
    const dayEl = document.createElement('div')
    dayEl.className = 'day'
    dayEl.textContent = dayy

    if (index === dayIndex) {
        dayEl.classList.add('today')
    }

    daysContainer.appendChild(dayEl);
});