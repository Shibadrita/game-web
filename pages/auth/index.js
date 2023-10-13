import { useState } from "react"

import Head from "next/head"
import Toggle from "@/components/auth/Toggle"
import Signup from "@/components/auth/Signup"
import Signin from "@/components/auth/Signin"

const Auth = () => {
    const [isSignup, setIsSignup] = useState(true)
    const activateSignup = () => setIsSignup(true)
    const activateSignin = () => setIsSignup(false)

    return (<>
        <Head>
            <title>Authentication</title>
        </Head>
        <div className='h-full w-full flex justify-center items-center'>
            <div className='w-1/4 bg-blue-500 dark:bg-slate-800 p-1 pt-5 rounded'>
                <Toggle isSignup={isSignup} onSignup={activateSignup} onSignin={activateSignin} />
                {isSignup ? <Signup /> : <Signin />}
            </div>
        </div>
    </>)
}

export default Auth