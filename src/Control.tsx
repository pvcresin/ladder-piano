import "./Control.css";

import { MAX_ROW_COUNT, MIN_ROW_COUNT } from "./constants";

function Control({
  rowCount,
  onClickZoomOut,
  onClickZoomIn,
}: {
  rowCount: number;
  onClickZoomOut: VoidFunction;
  onClickZoomIn: VoidFunction;
}) {
  const isMaxRowCount = rowCount === MAX_ROW_COUNT;
  const isMinRowCount = rowCount === MIN_ROW_COUNT;
  return (
    <div className="control">
      <button
        className="row-button"
        onClick={onClickZoomOut}
        disabled={isMaxRowCount}
      >
        -
      </button>
      <button
        className="row-button"
        onClick={onClickZoomIn}
        disabled={isMinRowCount}
      >
        +
      </button>
    </div>
  );
}

export default Control;
