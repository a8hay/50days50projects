const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const progressLine = document.querySelector('.progressLine')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

prevBtn.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }
  updateDom()
})

nextBtn.addEventListener('click', () => {
  currentActive++
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  updateDom()
})

function updateDom() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const totalActive = document.querySelectorAll('.active')
  progressLine.style.width =
    ((totalActive.length - 1) / (circles.length - 1)) * 100 + '%'

  if (currentActive === 1) {
    prevBtn.disabled = true
  } else if (currentActive == circles.length) {
    nextBtn.disabled = true
  } else {
    prevBtn.disabled = false
    nextBtn.disabled = false
  }
}
