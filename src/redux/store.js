import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Contacts/contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
