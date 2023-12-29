import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOperations';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactManager = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    // addContact: (state, action) => {
    //   state.contacts.push(action.payload);
    // },

    // deleteContact: (state, action) => {
    //   state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    // },

    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {state.contacts = payload; state.isLoading = false } ,
    [addContact.fulfilled]: (state, { payload }) => {state.contacts = [...state.contacts, payload]; state.isLoading = false},
    // [deleteContact.fulfilled]: (state, { payload }) => {state.contacts.filter(({ id }) => id !== payload); state.isLoading = false},
    [deleteContact.fulfilled]: (state, { payload }) => {state.contacts = state.contacts.filter(({ id }) => id !== payload); state.isLoading = false},
    [fetchContacts.pending]: (state) => {state.isLoading = true; state.error = null},
    [addContact.pending]: (state) => {state.isLoading = true; state.error = null},
    [deleteContact.pending]: (state) => {state.isLoading = true; state.error = null},
    
    [fetchContacts.rejected]: (state, {payload}) => {state.isLoading = true; state.error = payload},
    [addContact.rejected]: (state, {payload}) => {state.isLoading = true; state.error = payload},
    [deleteContact.rejected]: (state, {payload}) => {state.isLoading = true; state.error = payload},
  },
});

export const { filterContact } = contactManager.actions;

export default contactManager.reducer;