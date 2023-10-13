import { useState, useRef } from "react"
import { useRouter } from "next/router"
import { regexp, error } from "@/validation/auth"

import Input from "./Input"
import Button from "./Button"

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmRef = useRef()

    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [isConfirmValid, setIsConfirmValid] = useState(true)

    const emailChangeHandler = ({ target }) => setIsEmailValid(target.value.trim().match(regexp.email))
    const passwordChangeHandler = ({ target }) => setIsPasswordValid(target.value.trim().match(regexp.password))
    const confirmChangeHandler = ({ target }) => setIsConfirmValid(target.value.trim() === passwordRef.current.value.trim())

    const router = useRouter()
    const signupHandler = () => {
        localStorage.setItem('playfusion-user', '123')
        router.replace('/')
    }

    return (<div className='bg-white dark:bg-slate-600 p-4 rounded'>
        <Input label={'Email'} type={'email'} ref={emailRef} isValid={isEmailValid} onChange={emailChangeHandler} error={error.email} />
        <Input label={'Password'} type={'password'} ref={passwordRef} isValid={isPasswordValid} onChange={passwordChangeHandler} error={error.password} />
        <Input label={'Confirm Password'} type={'text'} ref={confirmRef} isValid={isConfirmValid} onChange={confirmChangeHandler} error={error.confirm} />
        <Button label={'Signup'} onClick={signupHandler} />
    </div>)
}

export default Signup