import React from 'react'
import { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = ({users, setUserLoggedIn}) => {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const [loginError, setLoginError] = useState()

  const nav = useNavigate()

  function login(user) {
    let loggedUser
    if (user?.username) {
      loggedUser = user
      setUserLoggedIn(user)
    } else {
      loggedUser = users.find(user => usernameRef.current.value === user.username && passwordRef.current.value === user.password)
      setUserLoggedIn(loggedUser);
      setLoginError(loggedUser ? '' : 'Bad username or password!')
    }
    loggedUser && nav('/')
  }

  return (
    <div className='login-container'>

      <img className='register-img' src='https://img.freepik.com/free-vector/different-pets-concept_52683-37940.jpg?w=2000'/>

      <div className="validations">
        <label for="username"> Username: </label>
        <input type="text" id='username' defaultValue='Ricardas' ref={usernameRef} />
      </div>
      <div className="validations">
        <label for="password"> Password: </label>
        <input type="text" id='password' defaultValue='Ricardas1' ref={passwordRef} />
      </div>
      <div className="error-message">{loginError}</div>

      <div className='button-box'>
      <button onClick={login}>Login</button>
      </div>
    </div>
  )
}

export default Login