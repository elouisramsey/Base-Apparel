const form = document.getElementById('form')
const input = document.querySelector('input')

form.addEventListener('submit', e => {
  e.preventDefault()
  const email = document.getElementById('email').value
  const errorMessage = document.getElementById('error-message')

  if (email.indexOf('@') === -1 || email.length < 6) {
    errorMessage.innerHTML = 'Please provide a valid email'
    errorMessage.classList.add('error-message')
    input.classList.toggle('input-error')
    return false
  }
  alert('form submitted')
  errorMessage.innerHTML = ''
  return true
})
