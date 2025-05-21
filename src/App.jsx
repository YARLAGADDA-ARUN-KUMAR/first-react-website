import { useState } from 'react';
import "./App.css";

function App() {
  
  const [counter, changeCounter] = useState(3)

  const addCounter = () => {
    changeCounter(counter + 1)
  }
  const removeCounter = () => {
    changeCounter(counter - 1)
  }
  return (
    <>
      <div className="bg-gray-700 h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl bg-amber-700 p-4 text-white text-center rounded-2xl">
        Starting the React course 
      </h1>

      <h2 className="text-3xl my-6">Counter value: {counter}</h2>

      <div className="space-x-4">
        <button onClick={addCounter}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-3xl border-3"
        >
          Add value
        </button>
        <button onClick={removeCounter}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-3xl border-3"
        >
          Remove value
        </button>
      </div>
    </div>
    </>
  );
}

export default App;
