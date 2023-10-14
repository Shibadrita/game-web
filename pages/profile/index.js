import { useState, useEffect } from "react"
import { useGet } from "@/hooks/use-http"

import jwtDecode from "jwt-decode"
import Tile from "@/components/profile/Tile"

const Profile = () => {
    const [user, setUser] = useState({})
    const { getRequest } = useGet()
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('playfusion-user')
            const { id } = jwtDecode(token)
            const { data } = await getRequest(`/users/${id}`, token)
            setUser(data.user)
            console.log(data.user)
        })()
    }, [])

    return (<div className='h-full w-full flex flex-col justify-center items-center p-3 mt-5'>
        <Tile label={'Full Name'} data={user.fullname || 'Not set yet'} />
        <Tile label={'Username'} data={user.username} />
        <Tile label={'Email'} data={user.email} />
        <Tile label={'Phone'} data={user.phone || 'Not set yet'} />
        <Tile label={'Reputation'} data={user.reputation || 'Not set yet'} />
        <Tile label={'Tic Tac Toe'} data={'NA'} />
        <Tile label={'Tetris'} data={'NA'} />
        <Tile label={'Snake'} data={'NA'} />
    </div>)
}

export default Profile