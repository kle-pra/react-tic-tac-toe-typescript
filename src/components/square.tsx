import { Letter } from "../models";

type SquareProps = {
    val?: Letter | null,
    onHandleClick: (pos: number) => void,
    pos: number
}

export default function Square({ val, onHandleClick, pos }: SquareProps) {
    return (
        <div onClick={() => onHandleClick(pos)}
            className="square">{val}
        </div>
    );
}