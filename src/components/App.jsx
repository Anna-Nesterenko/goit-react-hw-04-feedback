import { Component } from 'react';
import { FeedbackList } from './FeedbackList/FeedbackList';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { SectionTitle } from './SectionTitle/SectionTitle';
export class App extends Component {
  static defaultProps = {
    percent: 0,
  };

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
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good / total) * 100);
  };

  render() {
    return (
      <>
        <SectionTitle title="Please leave feedback" />
        <FeedbackList
          options={this.optionKeys}
          handleIncrement={this.onLeaveFeedback}
        ></FeedbackList>

        <SectionTitle title="Statistics" />
        <StatisticsList
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          percent={this.countPositiveFeedbackPercentage()}
        ></StatisticsList>
      </>
    );
  }
}
