import { Component } from 'react';
import { nanoid } from 'nanoid';

import { GlobalStyle } from '../GlobalStyle';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Container } from './App.styled';
import { Section } from 'components/Section/Section';
import { FilterForm } from 'components/FilterForm/FilterForm';

import { showWarningMessage } from '../../utils/warningMessage';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
  };

  // contacts: prevState.contacts.map(elem => {
  //       if (elem.name === contact.name) {
  //         return showWarningMessage(contact.name);
  //       }
  //        [contact, ...elem];
  //     }),
  // [contact, ...prevState.contacts]

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getContacts();

    return (
      <Container>
        <GlobalStyle />

        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>

        {contacts.length !== 0 && (
          <Section title="Contacts">
            <FilterForm
              title="Find contacts by name"
              value={filter}
              onChange={this.changeFilter}
            />
            <ContactsList
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </Section>
        )}
      </Container>
    );
  }
}
