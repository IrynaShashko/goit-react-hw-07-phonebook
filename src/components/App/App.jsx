import React from 'react';
import { AppContainer, H1, H2, PhonebookContainer } from '../App/App.styled';
import ContactsForm from '../Phonebook/Phonebook';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

const App = () => {
  return (
    <AppContainer>
      <PhonebookContainer>
        <H1>Phonebook</H1>
        <ContactsForm />
        <H2>Contacts</H2>
        <Filter />
        <Contacts />
      </PhonebookContainer>
    </AppContainer>
  );
};

export default App;
