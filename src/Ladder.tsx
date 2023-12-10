import "./Ladder.css";

import Row from "./Row";
import { CENTER_ROW_KEY } from "./constants";

const Ladder = ({ rowCount }: { rowCount: number }) => {
  return (
    <div className="ladder">
      {new Array(rowCount).fill(null).map((_, index) => {
        const minRowNum = CENTER_ROW_KEY - Math.floor(rowCount / 2);
        const rowIndexFromBottom = rowCount - index - 1;
        const rowNum = minRowNum + rowIndexFromBottom;

        return <Row rowNum={rowNum} key={rowNum} />;
      })}
    </div>
  );
};

export default Ladder;
