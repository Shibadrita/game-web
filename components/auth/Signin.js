import { useState, useRef } from "react"
import { useRouter } from "next/router"
import { regexp, error } from "@/validation/auth"

import Input from "./Input"
import Button from "./Button"

const Signin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const [isEmailValid, setIsEmailValid] = useState(true)

    const emailChangeHandler = ({ target }) => setIsEmailValid(target.value.trim().match(regexp.email))
    const passwordChangeHandler = ({ target }) => setIsPasswordValid(target.value.trim().match(regexp.password))

    const router = useRouter()
    const signinHandler = () => {
        localStorage.setItem('playfusion-user', '123')
        router.replace('/')
    }

    return (<div className='bg-white dark:bg-slate-600 p-4 rounded'>
        <Input label={'Email'} type={'email'} ref={emailRef} isValid={isEmailValid} onChange={emailChangeHandler} error={error.email} />
        <Input label={'Password'} type={'password'} ref={passwordRef} isValid={true} onChange={passwordChangeHandler} />
        <Button label={'Signin'} onClick={signinHandler} />
    </div>)
}

export default Signin