import React, { memo, useEffect, useRef } from 'react';
import { useBoard } from "./use-board";

const Board = () => {

    const [display, score, onKeyDown] = useBoard();
    const eBoard = useRef();

    useEffect(focusBoard, []);

    function focusBoard() {
        eBoard.current.focus();
    }

    return (
        <div ref={eBoard} className='inline-block p-5 m-5 border border-slate-600' tabIndex={0} onKeyDown={onKeyDown}>
            <div>
                <span className='text-lg'>Score:</span>
                <span className='text-lg'>{score.toLocaleString()}</span>
            </div>
            {display.map((row, index) => <Row row={row} key={index} />)}
        </div>
    );
};

const Row = memo(props => {
    return (
        <span className='flex'>
            {props.row.map((cell, index) => <Cell cell={cell} key={index} />)}
        </span>
    );
});

const Cell = memo(props => {
    const count = useRef(0);
    count.current++;
    const value = props.cell ? props.cell : 0;
    return (
        <span className={`inline-block h-8 w-8 box-border ${value === 0 ? 'bg-slate-700' : (value === 1) ? 'bg-slate-200' : (value === 2) ? 'bg-lime-500' : (value === 3) ? 'bg-red-700' : 'bg-inherit'}`}></span>
    );
});

export default memo(Board);