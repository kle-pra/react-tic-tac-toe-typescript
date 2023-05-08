
export default function Square({ val, onHandleClick, pos }: any) {

    return (
        <div onClick={() => onHandleClick(pos)}
            className="square">{val}
        </div>
    );
}