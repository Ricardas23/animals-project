import React from 'react'
import { useRef, useState } from 'react'
const Register = ({users, setUsers, useEffect}) => {

  const usernameRef = useRef()
  const passwordRef = useRef()
  const passwordRef2 = useRef()

  const [errors, setErrors] = useState([])
  



  const containsNumber = (input) => {
      return /\d/.test(input)
  }

  function clearForm(){
      usernameRef.current.value = ''
      passwordRef.current.value = ''
  }

  function isFormValid() {
      let noErrors = true
      setErrors((e) => [])
      usernameRef.current.style.borderColor = null
      usernameRef.current.style.backgroundColor = null

      passwordRef.current.style.borderColor = null
      passwordRef.current.style.backgroundColor = null


      if (usernameRef.current.value.length < 4 || usernameRef.current.value.length > 20) {
          setErrors((currentValue) => [...currentValue, 'User name length must be 4..20!'])
          usernameRef.current.style.borderColor = "red"
        //   usernameRef.current.style.backgroundColor = "rgb(231, 185, 185, 0.2)"
          noErrors = false
      }

      if (passwordRef.current.value.length < 4 || passwordRef.current.value.length > 20 || !containsNumber(passwordRef.current.value)) {
          setErrors((currentValue) => [...currentValue, 'Password length must be: 4 to 20 symbols and it must contain number'])
          passwordRef.current.style.borderColor = "red";
        //   passwordRef.current.style.backgroundColor = "rgb(231, 185, 185, 0.2)"
          noErrors = false
      }

      if(passwordRef.current.value !== passwordRef2.current.value) {
        setErrors((currentValue) => [...currentValue, 'Password must match'])
        passwordRef2.current.style.borderColor = 'red'
        passwordRef.current.style.borderColor = 'red'
        noErrors = false
      }

      return noErrors;
  }

  function submit() {
      if (!isFormValid()) return;
      setUsers(current => [...current, {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
      }
      ])

      clearForm()
  }

//   useEffect(() => console.log(users) ,[users])

  return (
      <div className='register-container'>


          <img className='register-img' src='https://img.freepik.com/free-vector/different-pets-concept_52683-37940.jpg?w=2000'/>

          <div className="validations">
              <label for="username"> Username: </label>
              <input type="text" id='username' ref={usernameRef} />
          </div>
          <div className="validations">
              <label for="password"> Password: </label>
              <input type="text" id='password' ref={passwordRef} />
          </div>

          <div className="validations">
              <label for="password2"> Password: </label>
              <input type="text" id='password2' ref={passwordRef2} />
          </div>

          <div className='button-box'>
          <button onClick={submit}>Sign Up</button>
          </div>
          <div className="errors">
              {errors && errors.map((x, id) => <div key={id}>{x}</div>)}
          </div>

          
      </div>
  )
}
export default Register