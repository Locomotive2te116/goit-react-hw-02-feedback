import React from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistic } from './Statistic/Statistic';
import { Section } from './Section';
import { Notification } from './Notification/Notification';
let total = 0;

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerChangeState = stateName => {
    this.setState(prevState => ({
      [stateName]: prevState[stateName] + 1,
    }));
    // total += 1;
    this.countTotalFeedback();
    //this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback() {
    return (total += 1);
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral } = this.state;
    const positivePercentage = Math.floor(((good + neutral) / total) * 100);
    return positivePercentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    // const total = this.countTotalFeedback;
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        {/* // <Section title="Please leave feedback"> */}
        <Feedback handlerChangeState={this.handlerChangeState} />
        {/* </Section> */}
        {/* {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : ( */}
        {/* <Section> */}
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
        {/* </Section> */}
        {/* )} */}
      </div>
    );
  }
}
