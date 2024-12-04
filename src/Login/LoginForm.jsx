import React, { useState } from 'react'
import APIUrl from '../utils/Environment'
import axios from 'axios'

const LoginForm = () => {

const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [error, seterror] = useState('')
const  [success, setsuccess] = useState('')


let LoginForm = APIUrl.LoginPost

const handleLogin = async  (e) =>{
  e.preventDefault()
  seterror('')
  setsuccess('')

  try{
    const response = await axios.post(`${LoginForm}/auth/signin` , {
      email,
      password
    });
    setsuccess('Login successful');
    console.log('User Data' ,response.data)
  } catch(error){
    if(error.response){
      seterror(error.response.data.massage || ' Invalid Email or Password')  
    } else{
      seterror('Something went wrong! Please try again')
    }
  }

}

  return (
    <div>
      <h1>Login Page</h1>
      <form  onSubmit={handleLogin}> 
        <div >
          <label>Email</label>
          <br />
          <input type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
              required
          />
          <br />
          <label> Password</label>
          <br />
          <input type="password"
          value={password}
          onChange={(e)=> setpassword(e.target.value)}
           required
           />

        </div>
        <button type='submit'>Login</button>
      </form>
      {success &&  <p style={{ color: 'green'}}>{success}</p>}
     {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default LoginForm;