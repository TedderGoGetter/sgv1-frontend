import './signup.scss'
import { useRef, useState, useEffect } from 'react'
import axios from '../api/axios'

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/
//requires one uppercase character, a number, and 7 total characters




const Signup = () => {
    const userRef = useRef<any>()
    const errRef = useRef<HTMLInputElement>(null)

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)
    const [response, setResponse] = useState()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        console.log(result)
        console.log(email)
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [email, pwd, matchPwd])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const v1 = EMAIL_REGEX.test(email)
        const v2 = PWD_REGEX.test(pwd)
        if (!v1 || !v2 ) {
            setErrMsg("Invalid Entry")
            return
        }

        try {
            JSON.stringify({email, pwd})
            console.log(email, pwd)
            axios.post('auth/signup',
                {
                    email: email,
                    password: pwd,
                }
            ).then((res: any) => {
                console.log(res.data)
                setResponse(res.data)
                setSuccess(true)
            })

        } catch (err) {
           console.log(err) 
        }



    }


  return (
    <>
     {success ? (
        <div>
            <h1>Success!</h1>
        </div>
        
  ) : (
    <div>
        <p ref={errRef} className={errMsg ? "errmsg" : "blank"}>{errMsg}</p>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email"> Email:</label>
            <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
                required
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
            />
            <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "blank"}>
                Has to be a valid email.
            </p>

            <label htmlFor="password"> Password:</label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
            />
            <p id="pwdnote" className={pwdFocus && pwd && !validPwd ? "instructions" : "blank"}>
                Requires one uppercase character, a number, and 7 total characters.
            </p>

            <label htmlFor="confirm_password"> Confirm Password:</label>
            <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "blank"}>
                Must match original password.
            </p>

            <button
                disabled={!validEmail || !validPwd || !validMatch ? true : false }
            >Sign Up</button>


        </form>
    </div>
  )}</>
  )
}

export default Signup