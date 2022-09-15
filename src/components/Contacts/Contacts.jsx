import React from 'react';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsSlice';
// import { useSelector } from 'react-redux';
// import { getFilter } from 'redux/filter/filter-slice';
// import { getFilterContacts } from 'redux/contacts/contacts-selectors';
import { FiHeart } from 'react-icons/fi';
import {
  ContactsList,
  ContactsContainer,
  ContactsItem,
  ContactsItemButton,
  ContactsName,
  ContactsNumber,
} from '../Contacts/Contacts.styled';

const Contacts = () => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { data } = useGetContactsQuery();
  // const filterContacts = useSelector(getFilter);

  // const getContacts = getFilterContacts(data, filterContacts);
  // console.log('getContacts', getContacts);
  // console.log('filterContacts', filterContacts);
  // const showContacts = getContacts.lenght !== 0 ? getContacts : data;
  // console.log('showContacts', showContacts);
  return (
    <ContactsList>
      {data?.map(contact => {
        return (
          <ContactsItem key={contact.id}>
            <FiHeart />
            <ContactsContainer>
              <ContactsName>{contact.name}:</ContactsName>
              <ContactsNumber>{contact.phone}</ContactsNumber>
            </ContactsContainer>
            <ContactsItemButton
              type="button"
              onClick={() => deleteContact(contact.id)}
              disabled={isLoading}
            >
              X
            </ContactsItemButton>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};

export default Contacts;
