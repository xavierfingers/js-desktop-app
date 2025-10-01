import { useState } from "react";
import "./src/index.css";

function App() {
  const [count, setCount] = useState(0);

 return (
    <div className="App">
      <h1>
        <span className="bolt">?</span> Vite + React + Electron <span className="bolt">?</span>
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        This is running inside Electron with Vite + React.
      </p>
    </div>
  );
}

export default App;



