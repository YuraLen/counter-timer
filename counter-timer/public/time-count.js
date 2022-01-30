document.addEventListener("DOMContentLoaded", () => {
  const birthday = new Date("Jul 3 2022 0:00:00");

  const daysVal = document.querySelector(`.time-count_days .time-count_value`)
  const hoursVal = document.querySelector(`.time-count_hours .time-count_value`)
  const minutesVal = document.querySelector(`.time-count_minutes .time-count_value`)
  const secondsVal = document.querySelector(`.time-count_seconds .time-count_value`)

  const daysText = document.querySelector(`.time-count_days .time-count_text`)
  const hoursText = document.querySelector(`.time-count_hours .time-count_text`)
  const minutesText = document.querySelector(`.time-count_minutes .time-count_text`)
  const secondsText = document.querySelector(`.time-count_seconds .time-count_text`)


  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }


  const timeCount = () => {
    let now = new Date()
    console.log(now);

    let leftUntil = birthday - now

    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24)
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24
    let minutes = Math.floor(leftUntil / 1000 / 60) % 24
    let seconds = Math.floor(leftUntil / 1000) % 60

    daysVal.textContent = days
    hoursVal.textContent = hours
    minutesVal.textContent = minutes
    secondsVal.textContent = seconds

    daysText.textContent = declOfNum(days, ['день', 'дні', 'дні']);
    hoursText.textContent = declOfNum(hours, ['година', 'години', 'годин']);
    minutesText.textContent = declOfNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
    secondsText.textContent = declOfNum(seconds, ['секунда', 'секунди', 'секунд']);
  }
  timeCount()

  setInterval(timeCount, 1000)
});