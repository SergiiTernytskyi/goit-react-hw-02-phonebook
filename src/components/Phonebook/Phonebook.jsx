import { Component } from 'react';

export class Phonebook extends Component {
  state = {
    name: '',
  };

  inputChangeHandler = event => {
    this.setState({ name: event.currentTarget.value });
  };

  submitHandler = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.inputChangeHandler}
          />

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
