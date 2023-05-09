import { useState } from "react";
import Board from "./components/board";
import { Letter } from "./models";

export default function App() {
  const [history, setHistory] = useState<Array<Array<Letter | null>>>([Array(9).fill(null)]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const latestPosition = history[history.length - 1];
  const isXTurn = currentStep % 2 == 0;

  const handleClick = (index: number) => {

    console.log(currentStep);
    const newSituation = latestPosition.slice();
    if (!latestPosition[index] && !calculateWinner(latestPosition)) {
      if (isXTurn) {
        newSituation[index] = Letter.X;
      } else {
        newSituation[index] = Letter.O;
      }
      setHistory([...history, newSituation]);
      setCurrentStep(history.length);
    }
  }

  const onGoToSituation = (step: number) => {
    setCurrentStep(step - 1);
    setHistory(history.slice(0, step));
  }

  return <>
    <Board
      handleClick={handleClick}
      position={latestPosition}
    />
    <ul>
      {history.map((position, i) => (
        i > 0 && <li key={JSON.stringify(position)}>

          <button
            onClick={() => onGoToSituation(i)}
            title={`${JSON.stringify(position)}`}
          >
            {i + 1 === 2 ? 'To the beginning' : 'To ' + i + '. position'}
          </button>
        </li>
      ))}
    </ul>
  </>
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