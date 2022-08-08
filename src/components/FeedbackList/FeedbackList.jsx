import PropTypes from 'prop-types';

import { Button } from './FeedbackList.styled';

export const FeedbackList = ({ options, handleFeedback }) => {
  console.log('options :>> ', options);
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

FeedbackList.propTypes = {
  options: PropTypes.array.isRequired,
  handleFeedback: PropTypes.func.isRequired,
};
