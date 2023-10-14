import { useState } from "react"
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi"

import Options from "./Options"

const User = ({ name }) => {
    const [isOpened, setIsOpened] = useState(false)
    const toggleHandler = () => setIsOpened(isOpened => !isOpened)

    return (<div className='hover:cursor-pointer' onClick={toggleHandler}>
        <div className='flex items-center'>
            <span>{name}</span>
            <span className='text-xs mx-2'>
                {isOpened ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
            </span>
        </div>
        {isOpened && <Options />}
    </div>)
}

export default User