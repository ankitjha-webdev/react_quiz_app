import React, { useEffect, useState } from 'react';

import { formatTime } from '../utils';

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3 id="rs">Your results</h3>
          <p>{correctAnswers} of {data.length}</p>
          <p><strong id="rs">{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p><strong id="rs">Your time:</strong> {formatTime(time)}</p>
          <button className="button is-rounded is-outlined mr-2" id="btn" onClick={onAnswersCheck}>Check your answers</button>
          <button className="button  is-rounded is-outlined" id="btn2" onClick={onReset}>Try it again</button>
        </div>
      </div>
    </div>
  );
}

export default End;