import React, { useState } from 'react';
import HighlightParentheses from './HighlightParentheses';
import './App.css';
function App() {
  const [text, setText] = useState('(test(def)))()');
  return (
    <div className="App">
      <h1>Highlight Parentheses</h1>
      <input
        className="highlight-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <div className="highlight-label">Highlihted Text:</div>
      <div className="highlight-wrapper">
        <HighlightParentheses text={text} />
      </div>
    </div>
  );
}

export default App;
