import { Letter } from "../models";
import Square from "./square";

type BoardProps = {
    position: (Letter | null)[],
    handleClick: (pos: number) => void
}

export default function Board({ position, handleClick }: BoardProps) {

    return <div className="board">
        <Square pos={0} val={position[0]} onHandleClick={handleClick} />
        <Square pos={1} val={position[1]} onHandleClick={handleClick} />
        <Square pos={2} val={position[2]} onHandleClick={handleClick} />

        <Square pos={3} val={position[3]} onHandleClick={handleClick} />
        <Square pos={4} val={position[4]} onHandleClick={handleClick} />
        <Square pos={5} val={position[5]} onHandleClick={handleClick} />

        <Square pos={6} val={position[6]} onHandleClick={handleClick} />
        <Square pos={7} val={position[7]} onHandleClick={handleClick} />
        <Square pos={8} val={position[8]} onHandleClick={handleClick} />
    </div>;
}
