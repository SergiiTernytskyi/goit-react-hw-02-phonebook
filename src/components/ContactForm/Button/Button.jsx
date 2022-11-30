import PropTypes from 'prop-types';
import { SubmitButton } from './Button.styled';

export const Button = ({ title }) => {
  return <SubmitButton type="submit">{title}</SubmitButton>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
