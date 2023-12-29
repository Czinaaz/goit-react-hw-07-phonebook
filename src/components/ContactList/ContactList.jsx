import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../Filter/Filter';
import { filterContact } from '../../redux/Contacts/contactsSlice';
import { deleteContact } from '../../redux/Contacts/contactsOperations';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  console.log(contacts);

  const handlerFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  const filteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };


  const handlerDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Filter handlerFilter={handlerFilter} />
      <ul>
        {filteredContacts()?.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button type="button" onClick={() => handlerDelete(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};