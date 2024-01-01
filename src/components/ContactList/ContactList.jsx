import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../Filter/Filter';
import { filterContact } from '../../redux/Contacts/contactsSlice';
import { deleteContact } from '../../redux/Contacts/contactsOperations';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handlerFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handlerDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Filter handlerFilter={handlerFilter} />
      <ul className={css.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button className={css.buttons} type="button" onClick={() => handlerDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
