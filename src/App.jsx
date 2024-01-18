import { Notification } from './components/Notification/Notification';
import { Description } from './components/Description/Description';
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Fidback';
import { useState, useEffect } from 'react';

function App() {
  const [values, setValues] = useState(() => {
    const saveObject = window.localStorage.getItem('review-object');
    if (saveObject !== null) {
      return JSON.parse(saveObject);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = values.good + values.neutral + values.bad;
  const ifReset = totalFeedback > 0;
  const handleClickReset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('review-object', JSON.stringify(values));
  }, [values]);
  const handleClick = ev => {
    const type = ev.target.textContent;

    setValues(values => ({
      ...values,
      [type]: values[type] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options
        values={values}
        handleClickReset={handleClickReset}
        handleClick={handleClick}
        ifReset={ifReset}
      />
      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback values={values} totalFeedback={totalFeedback} />
      )}
    </>
  );
}

export default App;
