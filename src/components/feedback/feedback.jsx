import React from 'react';
// import { handlerChangeState } from '../App';
export const Feedback = ({ handlerChangeState }) => {
  return (
    <>
      <div>
        <p>Please leave feedback</p>
        <button onClick={() => handlerChangeState('good')}>Good</button>
        <button onClick={() => handlerChangeState('neutral')}>Neutral</button>
        <button onClick={() => handlerChangeState('bad')}>Bad</button>
      </div>
    </>
  );
};
