let seconds = document.querySelector(".clock__second h2")
let minutes = document.querySelector('.clock__minute h2')
let hours = document.querySelector('.clock__hour h2')
let days = document.querySelector('.clock__day h2')

seconds.innerHTML = '45'
minutes.innerHTML = '15'
hours.innerHTML = '12'
days.innerHTML = '2'

setInterval(() => {
    seconds.innerHTML--;

    if (seconds.innerHTML == '-1') {
        seconds.innerHTML = '59'

        minutes.innerHTML = minutes.innerHTML - 1;
    }

    if (minutes.innerHTML == '-1') {
        minutes.innerHTML = '59'

        hours.innerHTML = hours.innerHTML - 1;
    }

    if (hours.innerHTML == '-1') {
        hours.innerHTML = '23'

        days.innerHTML = days.innerHTML - 1;
    }

    if (days.innerHTML == '-1') {
        days.innerHTML = '9'
    }
},1000)