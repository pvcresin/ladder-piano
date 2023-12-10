import "./Row.css";

import { KEYS } from "./constants";

const Row = ({ rowNum }: { rowNum: number }) => {
  const keys = KEYS.map((key) => `${key}${rowNum}`);

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const key = e.currentTarget.dataset.key;
    if (key === undefined) return;
    const audio = new Audio(`./sounds/${key}.mp3`);
    audio.play();
  };

  return (
    <ul className="row">
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
};

export default Row;
