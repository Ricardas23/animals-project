import React from 'react'
import { useRef,useState, useEffect } from 'react'
import Register from '../Components/Register'
const RegisterPage = ({users, setUsers}) => {

    return (
        <div className='register-wrapper'>
            <Register users={users} setUsers={setUsers}/>
        </div>
    )
}
export default RegisterPage