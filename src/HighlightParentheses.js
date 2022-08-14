/**
 * React component which highlights paired parentheses
 */
import React from 'react';

const HighlightParentheses = ({ text }) => {
  // initialize a stack for parentheses:
  const parenthesesIndexStack = [];
  // initialize an array with length text.length, with inital values are false:
  const higlightedIndices = Array(text.length).fill(false);
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '(') {
      parenthesesIndexStack.push(i);
    } else if (text[i] === ')' && parenthesesIndexStack.length !== 0) {
      // since paired parentheses are found make corresponding indices' values to true:
      higlightedIndices[parenthesesIndexStack.pop()] = true; // opening parenthesis
      higlightedIndices[i] = true; // closing parenthesis
    }
  }
  return (
    <>
      {[...text].map((char, i) => (
        <>
          {higlightedIndices[i] ? (
            <i className="highlight">{char}</i>
          ) : (
            <>{char}</>
          )}
        </>
      ))}
    </>
  );
};

export default HighlightParentheses;
