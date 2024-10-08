
import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const CalculatorOperations = [
    {
      label: "Add",
      operator: "+",
    },
    {
      label: "Subtract",
      operator: "-",
    },
    {
      label: "Multiply",
      operator: "*",
    },
    {
      label: "Divide",
      operator: "/",
    },
    {
      label: "Equal",
      operator: "=",
    },
    {
      label: "Clear",
      operator: "AC",
    },
  ];



  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("")


  useEffect(() => {
    const calculatedNumbers = [];
    for (let i = 1; i <= 10; i++) {
      calculatedNumbers.push(i - 1);
    }
    calculatedNumbers.reverse()
    setNumbers(calculatedNumbers);
  }, []);

  const handleNumberClick = (number) => {
    setInput(prevInput => prevInput + number);
  };
  const handleOperation = (operation) => {
    if (operation === "AC") {
      setInput("");
    } else if (operation === "=") {
      try {
        // Safely evaluate the expression
        setInput(prevInput => `${eval(prevInput)}`);
      } catch (error) {
        alert("Invalid expression");
      }
    } else {
      setInput(prevInput => prevInput + operation);
    }
  };
  return (
    <div>


      <h1 className="calculator-heading">Time Pass Calculator</h1>
      <div>
        <div className="inp">
          <input type="text" name='input' value={input} onChange={(e) => setInput(e.target.value)} />
          {/* 
        <p>{input}</p> */}
        </div>
        <div className="container">
          <div className="numbers">
            {numbers.map((number) => (
              <button key={number} className="nums" onClick={() => (handleNumberClick(number))}>
                {number}
              </button>
            ))}
          </div>
          <div className="operations">
            <div className='oper'>
              {CalculatorOperations.map((operation, index) => (
                <button key={index} id={`op-${operation.label}`} className='opers' onClick={() => handleOperation(operation.operator)}>
                  {operation.operator}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;