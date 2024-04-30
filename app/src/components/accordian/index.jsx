import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (currIndex) => {
    setSelected(currIndex === selected ? null : currIndex);
  };

  const handleMultiSelection = (currIndex) => {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(currIndex);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(currIndex);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMutiple);
  };

  return (
    <div className="acc-wrapper">
      <div className="accordian">
        <button
          className="hover:bg-orange-800 rounded-lg"
          onClick={() => setMultiSelection(!multiSelection)}
        >
          Enable Multi Selection
        </button>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  multiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {multiSelection
                ? multiple.indexOf(item.id) === -1 && (
                    <div className="acc-content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="acc-content">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
