import { useState, useRef } from "react"
import { useRouter } from "next/router"
import { regexp, error } from "@/validation/auth"
import { catchAsync } from "@/errors/async"
import { usePost } from "@/hooks/use-http"

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
    const { postRequest } = usePost()
    const signupHandler = catchAsync(async () => {
        if (!isConfirmValid) return
        const { data } = await postRequest('/signup', {
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
        const { token } = data
        if (token) localStorage.setItem('playfusion-user', token)
        router.replace('/')
    })

    return (<div className='bg-white dark:bg-slate-600 p-4 rounded'>
        <Input label={'Email'} type={'email'} ref={emailRef} isValid={isEmailValid} onChange={emailChangeHandler} error={error.email} />
        <Input label={'Password'} type={'password'} ref={passwordRef} isValid={isPasswordValid} onChange={passwordChangeHandler} error={error.password} />
        <Input label={'Confirm Password'} type={'text'} ref={confirmRef} isValid={isConfirmValid} onChange={confirmChangeHandler} error={error.confirm} />
        <Button label={'Signup'} onClick={signupHandler} />
    </div>)
}

export default Signup