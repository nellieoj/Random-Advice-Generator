'use strict'
const generateBtn = document.querySelector('.generate-btn')
const advice = document.querySelector('.advice')
const adviceNum = document.querySelector('.advice-number')

// Data API
const adviceApi = function () {
  const request = fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then(
      (data) => (
        (advice.textContent = '"' + data.slip.advice + '"'),
        (adviceNum.textContent = 'Advice #' + data.slip.id)
      )
    )
}
// Button Functionality
generateBtn.addEventListener('click', adviceApi)
