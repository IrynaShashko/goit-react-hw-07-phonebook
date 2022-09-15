import React from 'react';
import { AppContainer, H1, H2, PhonebookContainer } from '../App/App.styled';
import ContactsForm from '../Phonebook/Phonebook';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';
// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addContact, removeContact } from 'redux/contacts/contacts-slice';
import { filterContact } from 'redux/filter/filter-slice';
import { getFilterContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const App = () => {
  const contacts = useSelector(getFilterContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddContact = payload => {
    const action = addContact(payload);
    dispatch(action);
  };

  const onRemoveContact = payload => {
    dispatch(removeContact(payload));
  };

  const onFilterContact = ({ target }) => {
    dispatch(filterContact(target.value));
  };

  return (
    <AppContainer>
      <PhonebookContainer>
        <H1>Phonebook</H1>
        <ContactsForm onSubmit={onAddContact} />
        <H2>Contacts</H2>
        <Filter search={filter} handleChange={onFilterContact} />
        <Contacts contacts={contacts} deleteContact={onRemoveContact} />
      </PhonebookContainer>
    </AppContainer>
  );
};

export default App;
