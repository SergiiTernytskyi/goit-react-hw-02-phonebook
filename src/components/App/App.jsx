import { Component } from 'react';
import { nanoid } from 'nanoid';

import { GlobalStyle } from '../GlobalStyle';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Container } from './App.styled';
import { Section } from 'components/Section/Section';
import { FilterForm } from 'components/FilterForm/FilterForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      return {
        contacts: [contact, ...contacts],
      };
    });
  };

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
          <ContactForm onSubmit={this.addContact} contacts={contacts} />
        </Section>

        {contacts.length > 0 && (
          <Section title="Contacts">
            <FilterForm
              title="Find contacts by name"
              value={filter}
              onChange={this.changeFilter}
            />
            <ContactsList
              contacts={filteredContacts}
              onDelete={this.deleteContact}
            />
          </Section>
        )}
      </Container>
    );
  }
}
