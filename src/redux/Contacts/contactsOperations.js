import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://658ed0d02871a9866e79dff2.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
);
