const searchButton = document.querySelector('.search')
const inputField = document.querySelector('.input')
searchButton.addEventListener('click', () => {
  searchButton.classList.toggle('active')
  inputField.focus()
})
