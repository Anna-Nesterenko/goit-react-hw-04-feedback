import { Button } from './FeedbackList.styled';

export const FeedbackList = ({ options, handleFeedback }) => {
  return (
    <>
      {options.map(el => (
        <Button type="button" name={el} key={el} onClick={handleFeedback}>
          {el}
        </Button>
      ))}
    </>
  );
};
