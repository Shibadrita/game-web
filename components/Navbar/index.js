import { useState, useEffect } from "react"
import { useGet } from "@/hooks/use-http"

import jwtDecode from "jwt-decode"
import Navbrand from "./Navbrand"
import NavLink from "./NavLink"
import User from "./User"

const Navbar = () => {
    const [user, setUser] = useState()
    const { getRequest } = useGet()
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('playfusion-user')
            if (!token) return
            const { id } = jwtDecode(token)
            const { data } = await getRequest(`/users/${id}`, token)
            setUser(data.user.firstname || data.user.username)
        })()
    }, [])

    return (<div className='w-full h-20 flex justify-around items-center fixed z-10'>
        <Navbrand />
        <div>
            <NavLink label={'Tic Tac Toe'} href={'/tic-tac-toe'} />
            <NavLink label={'Tetris'} href={'/tetris'} />
            <NavLink label={'Snake'} href={'/snake'} />
        </div>
        {user ? <User name={user} /> : <NavLink label={'Sign In'} href={'/auth'} />}
    </div>)
}

export default Navbar