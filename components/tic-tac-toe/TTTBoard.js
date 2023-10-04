const TTTBoard = ({ board, handler, result }) => {
    const rows = [0, 1, 2]
    const interactionHandler = index => {
        if (isNaN(board[index])) return
        handler(index)
    }

    return (<div className='flex flex-col m-3'>
        {rows.map(row =>
            <div key={row} className={`flex transition-all ${result && 'blur-sm'}`}>
                {board.slice(row * 3, (row + 1) * 3).map((block, i) =>
                    <div
                        key={i}
                        className='w-32 h-32 flex justify-center items-center bg-teal-400 dark:bg-teal-600 hover:cursor-pointer m-px'
                        onClick={interactionHandler.bind(null, row * 3 + i)}
                    >
                        <span className='text-4xl'>{isNaN(block) && block}</span>
                    </div>
                )}
            </div>
        )}
        {result && <div className='text-5xl absolute h-[24rem] w-[24rem] flex justify-center items-center'>
            {result === 'huPlayer' ? 'You Won' : result === 'aiPlayer' ? 'You Lost' : 'Game Drawn'}
        </div>}
    </div>)
}

export default TTTBoard