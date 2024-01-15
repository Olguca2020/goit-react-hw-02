import { Notification } from './components/Notification/Notification';
import { Description } from './components/Description/Description';
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Fidback';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const totalFeedback = values.good + values.neutral + values.bad;
  const ifReset= totalFeedback>0
  const handleClick = (ev )=> {
    const type = ev.target.textContent;    
    
    console.log(ev)
     if (type==="Reset"){
      console.log(123)
     }
     {
    setValues(values => ({
      ...values,
      [type]: values[type] + 1,     
    }))
  }
  };


    return (
      <>
        <Description />
      <Options values={values} handleClick={handleClick} ifReset={ifReset}/>
      {!totalFeedback ? <Notification /> : <Feedback values={values} totalFeedback={totalFeedback} />}
      </>
    );
  }


export default App;
