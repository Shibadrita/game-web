import Link from "next/link"

const Options = () => {
    return (<div className='absolute flex flex-col bg-slate-100 mt-3 rounded'>
        <Link className='hover:bg-slate-200 text-sm px-3 py-2 rounded-t' href={'/profile'}>Your Account</Link>
        <Link className='hover:bg-slate-200 text-sm px-3 py-2 rounded-b' href={'/'}>Sign Out</Link>
    </div>)
}

export default Options