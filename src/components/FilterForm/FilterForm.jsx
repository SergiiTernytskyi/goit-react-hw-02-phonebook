import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterInput, FilterLabel, Wrapper } from './FilterForm.styled';

export const FilterForm = ({ title, value, onChange }) => {
  const filterId = nanoid();
  return (
    <Wrapper>
      <FilterLabel htmlFor={filterId}>{title}</FilterLabel>
      <FilterInput
        type="text"
        id={filterId}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

FilterForm.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
