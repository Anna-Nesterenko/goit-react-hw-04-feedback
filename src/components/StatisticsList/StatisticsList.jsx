export const StatisticsList = ({ good, neutral, bad, total, percent }) => {
  //   console.log(values);
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {`${percent}%`}</p>
    </>
  );
};
