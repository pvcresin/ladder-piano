import "./App.css";

import { useState } from "react";

import { DEFAULT_ROW_COUNT } from "./constants";
import Control from "./Control";
import Ladder from "./Ladder";

function App() {
  const [rowCount, setRowCount] = useState(DEFAULT_ROW_COUNT);

  return (
    <div className="app">
      <Control
        rowCount={rowCount}
        onClickZoomOut={() => setRowCount((prev) => prev + 1)}
        onClickZoomIn={() => setRowCount((prev) => prev - 1)}
      />
      <Ladder rowCount={rowCount} />
    </div>
  );
}

export default App;
