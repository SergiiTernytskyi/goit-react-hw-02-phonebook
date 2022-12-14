import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Component } from 'react';
import { Button } from './Button/Button';
import { NameForm } from './NameForm/NameForm';
import { NumberForm } from './NumberForm/NumberForm';
import { Form } from './ContactForm.styled';

import { showWarningMessage } from '../../utils/warningMessage';

export class ContactForm extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  state = {
    name: '',
    number: '',
  };

  inputChangeHandler = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  submitHandler = event => {
    event.preventDefault();
    const { value } = event.currentTarget.name;
    const { contacts, onSubmit } = this.props;

    if (
      contacts.find(elem => elem.name.toLowerCase() === value.toLowerCase())
    ) {
      return showWarningMessage(value);
    }

    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const nameId = nanoid();
    const phoneId = nanoid();
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.submitHandler}>
        <NameForm id={nameId} value={name} onChange={this.inputChangeHandler} />

        <NumberForm
          id={phoneId}
          value={number}
          onChange={this.inputChangeHandler}
        />

        <Button title="Add contact" />
      </Form>
    );
  }
}
