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
            <NavLink label={'Quiz Game'} href={'/quiz-game'} />
            <NavLink label={'Stone Paper Scissor'} href={'/stone-paper-scissor'} />
            <NavLink label={'Snake'} href={'/snake'} />
        </div>
        <User name={user} />
    </div>)
}

export default Navbar