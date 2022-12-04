import PropTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Contact, IconButton } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <Contact>
      {name}: {number}
      <IconButton
        type="button"
        aria-label="delete"
        onClick={() => {
          onDelete(id);
        }}
      >
        <FaRegTrashAlt size={25} />
      </IconButton>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
