import "./App.css";

import { useState } from "react";

const MAX_ROW_COUNT = 7;
const MIN_ROW_COUNT = 3;
const DEFAULT_ROW_COUNT = 5;
const CENTER_ROW_KEY = 4; // A4

const KEYS = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

function App() {
  const [rowCount, setRowCount] = useState(DEFAULT_ROW_COUNT);

  return (
    <div className="app">
      <div className="control">
        <button
          className="row-button"
          onClick={() =>
            setRowCount((prev) => Math.min(prev + 1, MAX_ROW_COUNT))
          }
        >
          -
        </button>
        <button
          className="row-button"
          onClick={() =>
            setRowCount((prev) => Math.max(prev - 1, MIN_ROW_COUNT))
          }
        >
          +
        </button>
      </div>
      <div className="rows">
        {new Array(rowCount).fill(null).map((_, index) => {
          const minRowNum = CENTER_ROW_KEY - Math.floor(rowCount / 2);
          const rowIndexFromBottom = rowCount - index - 1;
          const rowKey = minRowNum + rowIndexFromBottom;
          const keys = KEYS.map((key) => `${key}${rowKey}`);

          const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
            const { key } = e.currentTarget.dataset;
            const audio = new Audio(`/sounds/${key}.mp3`);
            audio.play();
          };

          return (
            <ul className="piano-keys" key={index}>
              {keys.map((key, index) => (
                <li
                  className={`key ${key.includes("b") ? "black" : "white"}`}
                  role="button"
                  onClick={onClick}
                  key={index}
                  data-key={key}
                >
                  {key.includes("b") ? "" : key}
                </li>
              ))}
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
