import './signin.scss'
import axios from '../api/axios'
import { useState } from 'react'

export default function Signin() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState()
  
    const handleSubmit = (e: any) => {
        e.preventDefault()
      axios
        .post('auth/signin', {
          email: "teddy@mail.com",
          password: "123",
        })
        .then((res: any) => {
          setResponse(res.data)
          if (res.data) console.log(res.data)

        });


    }
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>Sign In</label>
      <input 
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        
      />
      <input 
        type='password' 
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
      >Submit</button>
      <label>{"hello"}</label>
    </form>
  </div>
  )
}
