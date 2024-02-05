import './signin.scss'
import axios from '../api/axios'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'

export default function Signin() {
  const { auth, setAuth } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: any) => {
      e.preventDefault()
      JSON.stringify({email, password})

      try{
        await axios
        .post('auth/signin', {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
          email: email,
          password: password,
        })
        .then((res: any) => {
          // setResponse(res.data)
          if (res.data) console.log(res.data)
          const accessToken = res?.data?.access_token
          setAuth({email, password, accessToken})
          console.log("auth equals")
          console.log(auth)
          console.log("rt is", res?.data?.refresh_token)
          localStorage.setItem('refreshToken', JSON.stringify(res?.data?.refresh_token))
        })
      } catch (err) {
        console.log(err)
      }
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
