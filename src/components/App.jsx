import { Component } from 'react';
import { FeedbackList } from './FeedbackList/FeedbackList';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { Notification } from './Notification/Notification';
import { Container } from './SectionTitle/SectionTitle.styled';
export class App extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const btnName = e.currentTarget.textContent;

    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));
  };

  optionKeys = Object.keys(this.state);

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const result = total && good / total;

    return Math.round(result * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const addFeedback = good > 0 || neutral > 0 || bad > 0;

    return (
      <Container>
        <SectionTitle title="Please leave feedback">
          <FeedbackList
            options={this.optionKeys}
            handleFeedback={this.onLeaveFeedback}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {addFeedback ? (
            <StatisticsList
              {...this.state}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionTitle>
      </Container>
    );
  }
}
