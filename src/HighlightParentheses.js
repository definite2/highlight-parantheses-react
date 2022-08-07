import React from 'react';

const HighlightParentheses = ({ text }) => {
  const pairKeyIndexStack = [];
  const highlightsIndexes = Array.from({ length: text.length }).map(
    (i) => false
  );
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '(') {
      pairKeyIndexStack.push(i);
    } else if (text[i] === ')' && pairKeyIndexStack.length !== 0) {
      highlightsIndexes[pairKeyIndexStack.pop()] = true;
      highlightsIndexes[i] = true;
    }
  }
  return (
    <>
      {[...text].map((str, i) => (
        <>
          {highlightsIndexes[i] ? (
            <i className="highlight">{str}</i>
          ) : (
            <>{str}</>
          )}
        </>
      ))}
    </>
  );
};

export default HighlightParentheses;
