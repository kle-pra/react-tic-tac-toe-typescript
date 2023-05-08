import { useState } from "react";
import { Letter } from "../models";
import Square from "./square";

export default function Board() {

    const [situation, setSituation] = useState<Array<Letter | null>>(Array(9).fill(null));
    const [isX, setIsX] = useState<boolean>(true);

    const handleClick = (index: number) => {
        if (!situation[index] && !calculateWinner(situation)) {

            const newSituatuion = situation.slice();
            if (isX) {
                newSituatuion[index] = Letter.X;
            } else {
                newSituatuion[index] = Letter.O;
            }
            setSituation(newSituatuion);
            setIsX(!isX);
        }
    }

    return <div className="board">
        <Square pos={0} val={situation[0]} onHandleClick={handleClick} />
        <Square pos={1} val={situation[1]} onHandleClick={handleClick} />
        <Square pos={2} val={situation[2]} onHandleClick={handleClick} />

        <Square pos={3} val={situation[3]} onHandleClick={handleClick} />
        <Square pos={4} val={situation[4]} onHandleClick={handleClick} />
        <Square pos={5} val={situation[5]} onHandleClick={handleClick} />

        <Square pos={6} val={situation[6]} onHandleClick={handleClick} />
        <Square pos={7} val={situation[7]} onHandleClick={handleClick} />
        <Square pos={8} val={situation[8]} onHandleClick={handleClick} />
    </div>
}

function calculateWinner(squares: Array<Letter | null>): Letter | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}