import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Button } from './Button/Button';
import { NameForm } from './NameForm/NameForm';
import { NumberForm } from './NumberForm/NumberForm';
import { Form } from './Phonebook.styled';

export class Phonebook extends Component {
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

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const nameId = nanoid();
    const phoneId = nanoid();

    return (
      <Form onSubmit={this.submitHandler}>
        <NameForm
          id={nameId}
          value={this.state.name}
          onChange={this.inputChangeHandler}
        />

        <NumberForm
          id={phoneId}
          value={this.state.number}
          onChange={this.inputChangeHandler}
        />

        <Button title="Add contact" />
      </Form>
    );
  }
}
