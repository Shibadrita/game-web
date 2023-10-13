import Tab from "./Tab"

const Toggle = ({ onSignup, onSignin, isSignup }) => {
    return (<div className='flex justify-around'>
        <Tab label={'Signup'} onClick={onSignup} isActive={isSignup} />
        <Tab label={'Signin'} onClick={onSignin} isActive={!isSignup} />
    </div>)
}

export default Toggle