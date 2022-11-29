import { Component } from 'react';
import { nanoid } from 'nanoid';

import { GlobalStyle } from '../GlobalStyle';
import { Phonebook } from '../Phonebook/Phonebook';
import { ContactsList } from '../ContactsList/ContactsList';
import { Container } from './App.styled';
import { Section } from 'components/Section/Section';
import { FilterForm } from 'components/ContactsList/FilterForm/FilterForm';

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

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <GlobalStyle />

        <Section title="Phonebook">
          <Phonebook onSubmit={this.addContact} />
        </Section>

        {this.state.contacts.length !== 0 && (
          <Section title="Contacts">
            <FilterForm title="Find contacts by name" />
            <ContactsList contacts={contacts} />
          </Section>
        )}
      </Container>
    );
  }
}
