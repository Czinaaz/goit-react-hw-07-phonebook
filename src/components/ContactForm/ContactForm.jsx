import React, { useState, useEffect } from 'react';
import { addContact } from '../../redux/Contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { toast } from 'react-toastify';

import { fetchContacts } from '../../redux/Contacts/contactsOperations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const user = { name, number };
    const repeatCont = contacts?.some(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );

    if (repeatCont) {
      toast.error(`Invalid data entry`, { className: css.toast });
      return;
    }

    dispatch(addContact(user));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          className={css.input1}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input1}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
