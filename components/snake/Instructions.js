const Instructions = ({ resetBoard = () => { } }) => {
    return (<div className='w-2/3 p-2 m-2'>
        <div className='text-lg'>How to Play</div>
        <div className='text-xs py-3'>NOTE: Start the game by pressing <span className='bg-slate-200 dark:bg-slate-500 font-mono rounded px-1'>D</span></div>
        <div className='flex justify-between m-3'>
            <div className='flex flex-col'>
                <span className='text-sm'>
                    <span className='bg-slate-200 dark:bg-slate-500 font-mono rounded px-1'>W</span> Move Up
                </span>
                <span className='text-sm'>
                    <span className='bg-slate-200 dark:bg-slate-500 font-mono rounded px-1'>A</span> Move Left
                </span>
                <span className='text-sm'>
                    <span className='bg-slate-200 dark:bg-slate-500 font-mono rounded px-1'>S</span> Move Down
                </span>
                <span className='text-sm'>
                    <span className='bg-slate-200 dark:bg-slate-500 font-mono rounded px-1'>D</span> Move Right
                </span>
            </div>
            <div className='flex flex-col'>
                <button className='bg-blue-500 focus:bg-blue-700 dark:bg-slate-500 dark:focus:bg-slate-700 p-2 rounded' onClick={resetBoard}>Reset game</button>
            </div>
        </div>
    </div>);
}

export default Instructions;