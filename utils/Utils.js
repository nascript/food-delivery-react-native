function isValidEmail(value) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(value).toLowerCase())
}

function validateEmail(value, setEmailError) {
  if (value == '') {
    setEmailError('')
  } else if (isValidEmail(value)) {
    setEmailError('')
  } else {
    setEmailError('Invalid Email')
  }
}
function validateUserName(value, setUserNameError) {
  if (value == '') {
    setUserNameError('Username required')
  } else if (value.length < 3) {
    setUserNameError('Username must be 3 characters')
  } else {
    setUserNameError('')
  }
}

function validatePassword(value, setPasswordError) {
  if (value.length < 9) {
    setPasswordError('Password must be 9 characters')
  } else {
    setPasswordError('')
  }
}

const utils = {
  isValidEmail,
  validateEmail,
  validatePassword,
  validateUserName,
}

export default utils
