import PropTypes from 'prop-types';
import { Input } from './NameForm.styled';
import { Label } from './NameForm.styled';

export const NameForm = ({ id, value, onChange }) => {
  return (
    <>
      <Label htmlFor={id}>Name</Label>
      <Input
        id={id}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        onChange={onChange}
      />
    </>
  );
};

NameForm.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
