const Button = ({ label, onClick }) => {
    return (<div className='flex justify-center p-2'>
        <button className='bg-blue-500 dark:bg-slate-800 text-white hover:cursor-pointer focus:bg-blue-600 focus:dark:bg-slate-900 px-5 py-1 rounded' onClick={onClick}>{label}</button>
    </div>)
}

export default Button