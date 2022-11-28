import { Contact, List } from './ContactsList.styled';

export const ContactsList = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      <List>
        {contacts.map(contact => {
          return <Contact key={contact.id}>{contact.text}</Contact>;
        })}
      </List>
    </>
  );
};
