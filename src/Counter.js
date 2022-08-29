import React, { useState } from "react";

// expot default function Test(){}
const Counter = () => {
  const [display, setDisplay] = useState(false);
  const [counter, setCounter] = useState(0);

  const countUp = () => {
    setCounter(counter + 1);
  };
  const countDown = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="ui center aligned grid" style={{ marginTop: 50 }}>
      <div className="ui card">
        <button
          className="ui primary button"
          onClick={() => {
            setDisplay(!display);
          }}
        >
          {display ? "Hide" : "Show"}
        </button>
        {display && (
          <div className="center aligned grid" style={{ margin: 20 }}>
            <div>
              <h1>Counter</h1>
              <p>Current number is {counter}</p>
              <button className="ui red inverted button" onClick={countUp}>
                +1
              </button>
              <button className="ui blue inverted button" onClick={countDown}>
                -1
              </button>
              <button className="ui green inverted button" onClick={reset}>
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Counter;
