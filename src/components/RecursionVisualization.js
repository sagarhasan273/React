/* eslint-disable no-unused-vars */
/* eslint-disable no-promise-executor-return */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

function RecursionVisualization() {
  const [isRunning, setIsRunning] = useState(false);
  const [delay, setDelay] = useState(1000); // Default delay is 1 second
  const [callStack, setCallStack] = useState([]);
  const [result, setResult] = useState(null);

  let timeoutId = null;

  async function calculateFactorial(n) {
    if (n <= 1) {
      return 1;
    }
    await new Promise((resolve) => {
      timeoutId = setTimeout(resolve, delay);
    });
    const recursiveResult = await calculateFactorial(n - 1);

    // Simulate the recursion visualization
    await new Promise((resolve) => {
      timeoutId = setTimeout(resolve, delay);
    });

    const currentResult = n * recursiveResult;
    setCallStack((prevCallStack) => [...prevCallStack, currentResult]);
    return currentResult;
  }

  const startRecursion = async () => {
    setIsRunning(true);
    const n = 10; // Change this to any number
    const reslt = await calculateFactorial(n);
    setResult(reslt);
    setIsRunning(false);
  };

  const stopRecursion = () => {
    clearTimeout(timeoutId); // Stop the recursion by clearing the timeout
    setIsRunning(false);
  };

  const pauseRecursion = () => {
    setDelay(2000000);
  };

  const resumeRecursion = async () => {
    setDelay(1000);
  };

  return (
    <div>
      <h1>Factorial Calculation</h1>
      <div>
        <h2>Call Stack:</h2>
        <ul>
          {callStack.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Result:</h2>
        <p>{result}</p>
      </div>
      <div>
        <button onClick={startRecursion} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopRecursion} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={pauseRecursion} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resumeRecursion} disabled={isRunning}>
          Resume
        </button>
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
          placeholder="Delay (ms)"
        />
      </div>
    </div>
  );
}

export default RecursionVisualization;
