import {useState, useEffect} from 'react';
import './Form.css';

// 1. create a form with 3 input fields, for the username, password and confirm password respectively
// 2. persist the state of the input fields entries
// 3. the password and confirm password input field should valid there entries by comparing both values
// 4. output to the user when both field match or dont match
// 5. bonus would be to style the form

function Form() {
  const [username, setUsername] = useState(window.localStorage.getItem('username') ?? '')
  const [password, setPassword] = useState(window.localStorage.getItem('password') ?? '')
  const [confrimPassword, setConfirmPassword] = useState(window.localStorage.getItem('confrimPassword') ?? '')
  const [isValidatingPassword, setIsValidatingPassword] = useState(false)
  const [isValidatingUsername, setiIsValidatingUsername] = useState(false)

  function isFormValid() {
    let isValid = true
    if (!isUserNameValid()) {
      isValid = false
      setiIsValidatingUsername(true)
    }
    if (!isPasswordValid()) {
      isValid = false
      setIsValidatingPassword(true)
    }
  }

  function isPasswordValid() {
    return password === confrimPassword
  }

  function isUserNameValid() {
    return username !== ''
  }

  function handleUsernameChange(e) {
    window.localStorage.setItem('username', e.target.value)
    setUsername(e.target.value)
  }

  function handlePasswordChange(e) {
    window.localStorage.setItem('password', e.target.value)
    setPassword(e.target.value)
  }

  function handleConfirmPasswordChange(e) {
    window.localStorage.setItem('confirmPassword', e.target.value)
    setConfirmPassword(e.target.value)
  }


  useEffect(() => {
    if (isValidatingPassword && isPasswordValid()) {
      setIsValidatingPassword(false)
    }

    if (isValidatingPassword && isPasswordValid()) {
      setIsValidatingPassword(false)
    }

    if (isValidatingUsername && isUserNameValid()) {
      setiIsValidatingUsername(false)
    }
  }, [username, password, confrimPassword])

  function handleSubmitClick() {
    if (isFormValid()) {
      setUsername('')
      setPassword('')
      setConfirmPassword('')
    }
  }
 
  return (
    <div className="form">
      {isValidatingPassword && <h1>Password mismatch</h1>}
      {isValidatingUsername && <h1>No username</h1>}
      <div className="formLine">
        <label htmlFor="username">Username</label>
        <input width={300} id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="formLine">
       <label htmlFor="password">Password</label>
       <input type="password" width={300} id="password" value={password} onChange={handlePasswordChange}  />
      </div>
      <div className="formLine">
        <label htmlFor="confirm-pasword">Confrim Password</label>
        <input type="password" width={300} id="confirm-pasword" value={confrimPassword} onChange={handleConfirmPasswordChange}  />
      </div>
      <input type="submit" width={300} value="Submit" onClick={handleSubmitClick} />
    </div>
  );
}

export default Form;
