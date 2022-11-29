import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterInput, FilterLabel, Wrapper } from './FilterForm.styled';

export const FilterForm = ({ title }) => {
  const filterId = nanoid();
  return (
    <Wrapper>
      <FilterLabel htmlFor={filterId}>{title}</FilterLabel>
      <FilterInput type="text" id={filterId} />
    </Wrapper>
  );
};

FilterForm.propTypes = {
  title: PropTypes.string.isRequired,
};
