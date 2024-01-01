import React from 'react';
import { useSelector } from 'react-redux';
import css from './Filter.module.css';

export default function Filter({ handlerFilter }) {
  const name = useSelector(state => state.contacts.filter);

  return (
    <label className={css.label}>
      Find user by name
      <input type="text" name="name" value={name} onChange={handlerFilter} className={css.input}/>
    </label>
  );
}