// single selection
// multiple selection
import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  // function mapData(dataItem){
  //     return (
  //         <p>{dataItem.question}</p>
  //     )
  // }

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    // console.log("current Id: ", getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    // console.log("Current Id: ", getCurrentId);
    // console.log("cpyMultiple: ", cpyMultiple);
    // console.log("Index of current Id: ", findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1){
        // If not found, add a new element to array
        cpyMultiple.push(getCurrentId);
    }else{
        // If found, remove that element from current index 
        cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMultiple);
  }

//   console.log("selected: ", selected);  // This selected variable updated after complete running the function calling it.
//   console.log("multiple: ", multiple); 

  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {
            enableMultiSelection
            ? (<p>Disable Multi Selection</p>)
            : (<p>Enable Multi Selection</p>)
        }
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          // data.map(mapData)
          data.map((dataItem) => (
            <div className="item">
              <div className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }                
              >
                <h3>{dataItem.question}</h3> <span>+</span>
              </div>
              <div>
                {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && <div className="acc-content ">{dataItem.answer}</div>
                : selected === dataItem.id && <div className="acc-content ">{dataItem.answer}</div>}
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
