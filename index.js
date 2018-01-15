// write your code below!
function happyHolidays() {
  return "Happy Holidays!"
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}`
}

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(days, holiday) {
  `It's ${days} days until ${holiday}!`
}

console.log(happyHolidays())
console.log(happyHolidaysTo("Abba"))
console.log(happyHolidayTo("Hannukah", "Abba"))
console.log(holidayCountdown())