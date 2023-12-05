import React from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistic } from './Statistic/Statistic';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerChangeState = stateName => {
    // chooseButton
    this.setState(prevState => ({
      [stateName]: prevState[stateName] + 1,
    }));
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <div>
        <Feedback handlerChangeState={this.handlerChangeState} />
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}
