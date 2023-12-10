import "./App.css";

import { useState } from "react";

import Control from "./Control";

import { DEFAULT_ROW_COUNT, CENTER_ROW_KEY, KEYS } from "./constants";

function App() {
  const [rowCount, setRowCount] = useState(DEFAULT_ROW_COUNT);

  return (
    <div className="app">
      <Control
        rowCount={rowCount}
        onClickZoomOut={() => setRowCount((prev) => prev + 1)}
        onClickZoomIn={() => setRowCount((prev) => prev - 1)}
      />
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
