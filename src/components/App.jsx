import  { useState } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statictics from "./Statictics";
import Notification from "./Notification";





export  function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // };

   const countTotalFeedback = () => {
    // const { good, neutral, bad } = state;
    return good + neutral + bad;
  }

  const onLeaveFeedback = event => {
    const { name } = event.target;
    switch (name) {
      case 'good': 
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  //  useState(prevState => {
  //     return { [name]: prevState[name] + 1 };
  //   });
  };

 

  const countPositiveFeedbackPercentage=() =>{
    
    const total = countTotalFeedback();
    const positivePercentage = total ? ((good / total) * 100).toFixed(0) : 0;

    return Number(positivePercentage);
  }



  
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good','neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
         </>
    )
  }

 

