export const FeedbackList = ({ options, handleFeedback }) => {
  return (
    <>
      {options.map(el => (
        <button type="button" name={el} key={el} onClick={handleFeedback}>
          {el}
        </button>
      ))}
    </>
  );
};
