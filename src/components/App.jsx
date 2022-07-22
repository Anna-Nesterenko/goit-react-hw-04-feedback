import { Component } from 'react';
import { FeedbackList } from './FeedbackList/FeedbackList';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { StatisticsList } from './StatisticsList/StatisticsList';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const btnName = e.currentTarget.name;
    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));
  };

  optionKeys = Object.keys(this.state);

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const result =
      this.countTotalFeedback() && good / this.countTotalFeedback();

    return Math.round(result * 100);
  };

  render() {
    return (
      <>
        <SectionTitle title="Please leave feedback" />
        <FeedbackList
          options={this.optionKeys}
          handleFeedback={this.onLeaveFeedback}
        />

        <SectionTitle title="Statistics" />
        <StatisticsList
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          percent={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
