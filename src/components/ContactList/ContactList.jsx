import {
  ContactListContainer,
  ContactItem,
  ListTitle,
} from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return contacts.length ? (
    <ContactListContainer>
      <ListTitle>Контакти</ListTitle>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: <span>{number}</span>
            <button type="button" onClick={() => deleteContact(id)}>
              delete
            </button>
          </ContactItem>
        ))}
      </ul>
    </ContactListContainer>
  ) : (
    <ListTitle>Контактів нема</ListTitle>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
