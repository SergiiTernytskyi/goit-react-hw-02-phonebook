import PropTypes from 'prop-types';
import { Contact, List } from './ContactsList.styled';

export const ContactsList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Contact key={contact.id}>
            {contact.name}: {contact.number}
          </Contact>
        );
      })}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
