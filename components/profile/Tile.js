const Tile = ({ label, data }) => {
    return (<div className='w-1/3 flex justify-between p-2 mb-4'>
        <span className='absolute text-sm text-white bg-blue-600 dark:bg-slate-600 -translate-y-1/2 translate-x-3 p-1 rounded'>{label}</span>
        <span className='w-full border-2 border-blue-600 dark:border-slate-600 p-4 pb-2 rounded'>{data}</span>
    </div>)
}

export default Tile