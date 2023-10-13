import Link from "next/link"

const Options = () => {
    const signoutHandler = () => localStorage.removeItem('playfusion-user')

    return (<div className='absolute flex flex-col bg-slate-100 dark:bg-slate-500 mt-3 rounded'>
        <Link className='hover:bg-slate-200 dark:hover:bg-slate-600 text-sm px-3 py-2 rounded-t' href={'/profile'}>Your Account</Link>
        <Link className='hover:bg-slate-200 dark:hover:bg-slate-600 text-sm px-3 py-2 rounded-b' href={'/auth'} onClick={signoutHandler}>Sign Out</Link>
    </div>)
}

export default Options