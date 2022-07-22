export const FeedbackList = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(el => (
        <button type="button" name={el} key={el} onClick={onLeaveFeedback}>
          {el}
        </button>
      ))}
    </>
  );
};
