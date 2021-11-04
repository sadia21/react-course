import React, { useState } from "react";

function Statetutorial() {
  const [counter, setcounter] = useState(0);

  function Increment() {
    setcounter(counter + 1);
  }
  return (
    <div className="card">
      <div>
        {counter}
        <button className="btn" onClick={Increment}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default Statetutorial;
