import React from 'react'
import { useSelector} from 'react-redux'
import { name,email
 } from '../../features/auth/authSlice'

function Profile() {
    const nam =useSelector(name)
    const emai = useSelector(email)
    
    return (
    <>
    <p>
     
        Hello, <b> {nam}</b> <br/>
        your email is {emai}
    </p>
    
    </>
  )
}

export default Profile