import { useSelector } from "react-redux";

const ScoreCard = () => {
    const score = useSelector((state) => state.score);
    return (
        <span className='text-lg p-2 m-2' >Current Score: {score}</span>
    );
}

export default ScoreCard;