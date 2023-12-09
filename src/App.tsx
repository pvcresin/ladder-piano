import "./App.css";

import React, { useState } from "react";
import NOTE_KEYS from "./noteKeys";

const MAX_ROW_COUNT = 8;
const DEFAULT_ROW_COUNT = 5;

const CENTER_ROW = 4;

function App() {
  const [rowCount, setRowCount] = useState(DEFAULT_ROW_COUNT);

  return (
    <div className="app">
      <div className="control">
        <button
          className="row-button"
          onClick={() => setRowCount((prev) => prev - 1)}
        >
          -
        </button>
        <button
          className="row-button"
          onClick={() => setRowCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <div className="rows">
        {new Array(rowCount).fill(null).map((_, index) => {
          const minRowNum = CENTER_ROW - Math.floor(rowCount / 2);
          const rowIndexFromBottom = rowCount - index - 1;
          const rowKey = minRowNum + rowIndexFromBottom;
          return (
            <ul className="piano-keys" key={index}>
              <li className="key white" data-key="C">{`C${rowKey}`}</li>
              <li className="key black" data-key="Db">{`Db${rowKey}`}</li>
              <li className="key white" data-key="D">{`D${rowKey}`}</li>
              <li className="key black" data-key="Db">{`Db${rowKey}`}</li>
              <li className="key white" data-key="E">{`E${rowKey}`}</li>
              <li className="key white" data-key="F">{`F${rowKey}`}</li>
              <li className="key black" data-key="Gb">{`Gb${rowKey}`}</li>
              <li className="key white" data-key="G">{`G${rowKey}`}</li>
              <li className="key black" data-key="Ab">{`Ab${rowKey}`}</li>
              <li className="key white" data-key="A">{`A${rowKey}`}</li>
              <li className="key black" data-key="Bb">{`Bb${rowKey}`}</li>
              <li className="key white" data-key="B">{`B${rowKey}`}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
