import { useState } from "react";
import Board from "./components/board";
import { Letter } from "./models";
import { calculateWinner } from "./utils";

export default function App() {
  const [history, setHistory] = useState<Array<Array<Letter | null>>>([Array(9).fill(null)]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const latestPosition = history[history.length - 1];
  const isXTurn = currentStep % 2 == 0;

  let status: string;
  const winner = calculateWinner(latestPosition);

  if (!winner) {
    status = isXTurn ? 'X\'s turn' : 'O\'s turn';
  } else {
    status = `${winner} wins!`;
  }

  const handleClick = (index: number) => {
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
  };

  const onGoToSituation = (step: number) => {
    setCurrentStep(step - 1);
    setHistory(history.slice(0, step));
  };

  return <>
    <h1>{status}</h1>
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
  </>;
}

