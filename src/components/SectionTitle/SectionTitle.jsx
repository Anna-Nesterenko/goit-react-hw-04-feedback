import PropTypes from 'prop-types';

import { TitleWrapper } from './SectionTitle.styled';

export const SectionTitle = ({ title, children }) => {
  return (
    <TitleWrapper>
      <h2>{title}</h2>
      {children}
    </TitleWrapper>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
