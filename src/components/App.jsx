import { useState } from 'react';
import { FeedbackList } from './FeedbackList/FeedbackList';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { Notification } from './Notification/Notification';
import { Container } from './SectionTitle/SectionTitle.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionKeys = { good, neutral, bad };
  const optionsKeysObj = Object.keys(optionKeys);

  const onLeaveFeedback = e => {
    const btnName = e.currentTarget.textContent;

    switch (btnName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(optionKeys).reduce((total, item) => total + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = total && good / total;

    return Math.round(result * 100);
  };

  const addFeedback = good > 0 || neutral > 0 || bad > 0;

  return (
    <Container>
      <SectionTitle title="Please leave feedback">
        <FeedbackList
          options={optionsKeysObj}
          handleFeedback={onLeaveFeedback}
        />
      </SectionTitle>
      <SectionTitle title="Statistics">
        {addFeedback ? (
          <StatisticsList
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percent={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </SectionTitle>
    </Container>
  );
}
