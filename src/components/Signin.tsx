import './signin.scss'
import axios from '../api/axios'
import { useState, useContext } from 'react'
import AuthContext from '../context/AuthProvider'

export default function Signin() {

    const { setAuth } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState()
  
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        JSON.stringify({email, password})

        try{
          axios
          .post('auth/signin', {
            email: email,
            password: password,
          })
          .then((res: any) => {
            // setResponse(res.data)
            if (res.data) console.log(res.data)
            const accessToken = res?.data?.access_token
          setAuth({email, password, accessToken})
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
