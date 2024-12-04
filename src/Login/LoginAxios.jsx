 import axios from 'axios'
import React, { useState } from 'react'
import APIUrl from '../utils/Environment'

const LoginAxios = () => {
   
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    


     let LoginForm = APIUrl.LoginPost
     const handleLogin =  async (e) => {
        e.preventDefault()  // page reload hona sa rokta ha ya 
        setError('')
        setSuccess('')
        
          
        try{
            const response = await axios.post(`${LoginForm}/auth/signin` , {
                email,
                password
            });
            setSuccess('Login successful!');
            console.log('User Data', response.data)
        } catch(error){
            if(error.response) {
                setError(error.response.data.message || 'Invalid Email or password');

            } else{
                setError('Something went wrong! Please try again.');
            }
        }
    }


  return (
    <div >
        <h1>Login Page</h1>
     <form onSubmit={handleLogin}> 
     <div>
        <label>Email</label>
        <br />
        <input type="email" 
         value={email}
         onChange={(e) => 
            setemail(e.target.value)
         } required
        />
        <br />
        <label>Password </label>
        <br />
        <input type="password" 
         value={password}
         onChange={(e) => 
            setPassword(e.target.value)
         } required
        /> 

     </div>
     <button type='submit'>Login</button>
     </form>
     {success &&  <p style={{ color: 'green'}}>{success}</p>}
     {error && <p style={{ color: 'red' }}>{error}</p>}

    </div>
  )


}

export default LoginAxios;