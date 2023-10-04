import Navbrand from "./Navbrand"
import NavLink from "./NavLink"
import User from "./User"

const Navbar = () => {
    return (<div className='w-full h-20 flex justify-around items-center fixed z-10'>
        <Navbrand />
        <div>
            <NavLink label={'Tic Tac Toe'} href={'/tic-tac-toe'} />
            <NavLink label={'Tetris'} href={'/tetris'} />
            <NavLink label={'Quiz Game'} href={'/quiz-game'} />
            <NavLink label={'Stone Paper Scissor'} href={'/stone-paper-scissor'} />
            <NavLink label={'Snake'} href={'/snake'} />
        </div>
        <User />
    </div>)
}

export default Navbar