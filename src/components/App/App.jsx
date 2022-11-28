import { Component } from 'react';
import { nanoid } from 'nanoid';

import { GlobalStyle } from '../GlobalStyle';
import { Phonebook } from '../Phonebook/Phonebook';
import { ContactsList } from '../ContactsList/ContactsList';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = text => {
    const contact = {
      id: nanoid(),
      text,
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

        <Phonebook onSubmit={this.addContact} />

        <ContactsList contacts={contacts} />
      </Container>
    );
  }
}
