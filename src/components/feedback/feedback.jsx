import React from 'react';

export const Feedback = ({ handlerChangeState }) => {
  return (
    <>
      <div>
        <button onClick={() => handlerChangeState('good')}>Good</button>
        <button onClick={() => handlerChangeState('neutral')}>Neutral</button>
        <button onClick={() => handlerChangeState('bad')}>Bad</button>
      </div>
    </>
  );
};
