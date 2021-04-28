const box = document.querySelector('[data-box]')
const rotationSlider = document.querySelector('[name="rotation"]')

rotationSlider.addEventListener('input', () => {
  box.style.transform = 'rotate(' + rotationSlider.value + 'deg)'
})
