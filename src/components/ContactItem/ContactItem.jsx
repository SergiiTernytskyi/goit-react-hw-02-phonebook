import PropTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Contact, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <Contact>
      {name}: {number}{' '}
      <DeleteButton
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        <FaRegTrashAlt size={25} />
      </DeleteButton>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
