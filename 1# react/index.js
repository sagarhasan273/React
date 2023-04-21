import React, { useState } from "react";
const domElement = ReactDOM.createRoot(document.querySelector("#root"));

function MyComponent() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

domElement.render(MyComponent());
