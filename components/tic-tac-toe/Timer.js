import { useState, useEffect } from "react"

const Timer = ({ duration, handler }) => {
    const [time, setTime] = useState(duration)
    useEffect(() => {
        if (!time) handler()
        else setTimeout(() => setTime(time => --time), 1000)
    }, [time])
    return (<div className='text-7xl absolute translate-x-[30rem]'>{time}</div>)
}

export default Timer