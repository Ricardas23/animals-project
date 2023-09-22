import React from 'react'
import Login from '../Components/Login'
const LoginPage = ({ users, setUserLoggedIn }) => {
    
    return (
      <div className='login-wrapper'>
       <Login users={users} setUserLoggedIn={setUserLoggedIn} />
      </div>
    )
  }


export default LoginPage