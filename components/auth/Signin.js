import { useState, useRef } from "react"
import { useRouter } from "next/router"
import { regexp, error } from "@/validation/auth"
import { catchAsync } from "@/errors/async"
import { usePost } from "@/hooks/use-http"

import Input from "./Input"
import Button from "./Button"

const Signin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const [isEmailValid, setIsEmailValid] = useState(true)
    const emailChangeHandler = ({ target }) => setIsEmailValid(target.value.trim().match(regexp.email))

    const router = useRouter()
    const { postRequest } = usePost()
    const signinHandler = catchAsync(async () => {
        const { data } = await postRequest('/signin', {
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
        const { token } = data
        if (token) localStorage.setItem('playfusion-user', token)
        router.replace('/')
    })

    return (<div className='bg-white dark:bg-slate-600 p-4 rounded'>
        <Input label={'Email'} type={'email'} ref={emailRef} isValid={isEmailValid} onChange={emailChangeHandler} error={error.email} />
        <Input label={'Password'} type={'password'} ref={passwordRef} isValid={true} onChange={() => { }} />
        <Button label={'Signin'} onClick={signinHandler} />
    </div>)
}

export default Signin