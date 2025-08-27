import React, { useState } from 'react'
import heads from '../images/heads.png';
import tails from '../images/tails.jpg';

const FlipCoin = () => {

    const [side, setSide] = useState('heads');
    const [headCount, setHeadCount] = useState(0);
    const [tailCount, setTailCount] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCoin = () => {

        setIsFlipped(true);

        setTimeout(() => {
            const isHeads = Math.round(Math.random()) === 1;
            if (isHeads) {
                setSide('heads');
                setHeadCount((prev) => prev + 1);
            }
            else {
                setSide('tails');
                setTailCount((prev) => prev + 1);
            }
        }, 300);

        setTimeout(() => {
            setIsFlipped(false);
        }, 600);
    }

    const reset = () => {
        setSide('heads');
        setHeadCount(0);
        setTailCount(0);
    };

    return (
    <>
        <div>
            <h1>Coin Flip App</h1>
            {side && (
                <img
                    src = {side === 'heads' ? heads : tails}
                    alt = {side}
                    className = {`coin ${isFlipped ? 'flip' : ''}`}
                />
            )}
            <div>
                <button onClick = {flipCoin}>
                    Flip Coin
                </button>
            </div>
            <p>Heads: {headCount} | Tails: {tailCount}</p>
            <button onClick = {reset}>
                Reset
            </button>
        </div>
    </>
    )
}

export default FlipCoin