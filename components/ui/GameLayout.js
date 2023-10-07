const GameLayout = ({ name, instructions, children }) => {
    return (<div className='w-full flex mt-10'>
        <div className='w-1/3 p-3'>
            <h2 className='text-lg p-2'>Instruction</h2>
            <p className='text-sm px-2 py-3'>{instructions}</p>
        </div>
        <div className='w-2/3 flex flex-col items-center'>
            <h1 className='text-center text-2xl p-2 mb-10'>{name}</h1>
            {children}
        </div>
    </div>)
}

export default GameLayout