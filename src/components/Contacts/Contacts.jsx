import React from 'react';
import { FiHeart } from 'react-icons/fi';
import propTypes from 'prop-types';
import {
  ContactsList,
  ContactsContainer,
  ContactsItem,
  ContactsItemButton,
  ContactsName,
  ContactsNumber,
} from '../Contacts/Contacts.styled';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(contact => {
        return (
          <ContactsItem key={contact.id}>
            <FiHeart />
            <ContactsContainer>
              <ContactsName>{contact.name}:</ContactsName>
              <ContactsNumber>{contact.number}</ContactsNumber>
            </ContactsContainer>
            <ContactsItemButton
              type="button"
              onClick={() => deleteContact(contact.id)}
            >
              X
            </ContactsItemButton>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: propTypes.array,
  deleteContact: propTypes.func.isRequired,
};

export default Contacts;
