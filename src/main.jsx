import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <span className="badge">Small start. Big possibilities.</span>
      <h1>Hello, React.</h1>
      <p>Your tiny project is ready. Make something great.</p>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
      <small>Edit src/main.jsx to get started.</small>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
