import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import Section from './Section/Section';
import { ToastContainer } from 'react-toastify';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';

export const App = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  if (error) {
    // Obsługa błędów, np. renderowanie komunikatu o błędzie
    return (
      <Section title="Phone book">
        <p>Oops! Something went wrong.</p>
        <p>{error}</p>
      </Section>
    );
  }

  return (
    <>
      <Section title="Phone book">
        <ToastContainer />
        <ContactForm />
        {isLoading ? <p>Loading...</p> : <ContactList />}
      </Section>
    </>
  );
};

export default App;
