import PropTypes from 'prop-types';
import { FilterContainer } from './Filter.styled';
const Filter = ({ filter, onChange }) => (
  <FilterContainer>
    <label>
      <span>{'Пошук контактів за ім`ям'}</span>
      <input
        type="text"
        name="filter"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={filter}
        onChange={onChange}
      />
    </label>
  </FilterContainer>
);

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
