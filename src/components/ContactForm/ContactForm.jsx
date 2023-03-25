import { FormContainer, Button, FormTitle } from './ContactForm.styled';
import { Component } from 'react';

import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const contacts = this.props.contacts;

    if (contacts.find(contact => contact.name === name)) {
      window.alert(`Контакт ${name} вже є в списку`);
      return;
    }

    this.props.newContact({ name, number });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormContainer>
        <FormTitle>Телефонна книга</FormTitle>

        <form onSubmit={this.handleSubmit}>
          <label>
            <span>{'Ім`я'}</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter name (Rosie Simpson)"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <span>{'Телефон'}</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter phone (111-11-11)"
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <Button type="submit">
            <span>{'Додати контакт'}</span>
          </Button>
        </form>
      </FormContainer>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  newContact: PropTypes.func.isRequired,
};

export default ContactForm;
