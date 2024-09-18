const welcomeMessageHeader = document.querySelector('#welcome > h2')

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

var welcomeMessage = "Good Morning"

if (isAfternoon) { 
    welcomeMessage = "Good Afternoon"
}
else if (isEvening) {
    welcomeMessage = "Good Evening"
}

welcomeMessageHeader.textContent = welcomeMessage