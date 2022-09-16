import React from 'react';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-slice';
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
  const filterContacts = useSelector(getFilter);

  const getContacts = data?.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts.toLocaleLowerCase())
  );
  return (
    <ContactsList>
      {getContacts?.map(contact => {
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
