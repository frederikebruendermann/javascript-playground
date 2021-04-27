console.clear()
const box = document.querySelector('.box')
const buttonRotation = document.querySelector('.button-rotation')
const buttonBackground = document.querySelector('.button-background')
const buttonRadius = document.querySelector('.button-radius')

buttonRotation.addEventListener('click', () => {
  box.classList.toggle('rotate')
})

buttonBackground.addEventListener('click', () => {
  box.classList.toggle('blue')
})

buttonRadius.addEventListener('click', () => {
  box.classList.toggle('radius')
})
