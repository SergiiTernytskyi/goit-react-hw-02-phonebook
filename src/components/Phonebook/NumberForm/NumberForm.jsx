import PropTypes from 'prop-types';
import { Input, Label } from './NumberForm.styled';

export const NumberForm = ({ id, value, onChange }) => {
  return (
    <>
      <Label htmlFor={id}>Number</Label>
      <Input
        id={id}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={value}
        onChange={onChange}
      />
    </>
  );
};

NumberForm.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
