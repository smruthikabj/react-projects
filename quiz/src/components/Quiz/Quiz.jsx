import { useState } from 'react';
import { data } from '../../assets/data';
import './Quiz.css';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [selected, setSelected] = useState(null);

  const question = data[index];

  const checkAns = (ans) => {
    if (!lock) {
      setSelected(ans);
      if (question.ans === ans) {
        setScore((prev) => prev + 1);
      }
      setLock(true);
    }
  };

  const next = () => {
    if (index === data.length - 1) {
      setResult(true);
      return;
    }
    setIndex((prev) => prev + 1);
    setSelected(null);
    setLock(false);
  };

  const reset = () => {
    setIndex(0);
    setLock(false);
    setScore(0);
    setResult(false);
    setSelected(null);
  };

  return (
    <div className="container">
      <h1>REACT.js QUIZ APP</h1>
      <hr />
      {!result ? (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <form>
            {[1, 2, 3, 4].map((num) => (
              <label
                key={num}
                className={
                  lock
                    ? num === question.ans
                      ? 'correct'
                      : num === selected
                      ? 'wrong'
                      : ''
                    : ''
                }
              >
                <input
                  type="radio"
                  name="option"
                  value={num}
                  onChange={() => checkAns(num)}
                  checked={selected === num}
                  disabled={lock}
                />
                {question[`option${num}`]}
              </label>
            ))}
          </form>
          <button onClick={next} disabled={!lock}>
            Next
          </button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      ) : (
        <>
          <h2>
            You scored {score} out of {data.length}
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Quiz;
