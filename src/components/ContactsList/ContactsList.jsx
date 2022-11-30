import PropTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';

import { Contact, DeleteButton, List } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact key={id}>
            {name}: {number}{' '}
            <DeleteButton
              type="button"
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              <FaRegTrashAlt size={25} />
            </DeleteButton>
          </Contact>
        );
      })}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
