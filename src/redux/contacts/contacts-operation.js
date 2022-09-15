import * as api from '../contactsApi';

import actions from './contacts-actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchContactsLoading());
      const data = await api.getContacts();
      dispatch(actions.fetchContactsSuccess(data));
    } catch (error) {
      const { message, response } = error;
      const data = {
        message,
        status: response.status,
      };
      dispatch(actions.fetchContactsError(data));
    }
  };

  return func;
};

const isDublicate = ({ name, number }, contacts) => {
  const normalizedTitle = name.toLowerCase();

  const result = contacts.find(item => {
    return (
      normalizedTitle === item.name.toLowerCase() &&
      number === item.author.toLowerCase()
    );
  });

  return Boolean(result);
};

export const addContact = data => {
  const func = async (dispatch, getState) => {
    const { contacts } = getState();
    if (isDublicate(data, contacts.items)) {
      return alert(`${data.name} ${data.number} is alredy exist`);
    }
    try {
      dispatch(actions.addContactLoading());
      const result = await api.addContact(data);
      dispatch(actions.addContactSuccess(result));
    } catch (error) {
      dispatch(actions.addContactError(error.message));
    }
  };

  return func;
};

export const removeContact = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.removeContactLoading());
      await api.removeContact(id);
      dispatch(actions.removeContactSuccess(id));
    } catch (error) {
      dispatch(actions.removeContactError(error.message));
    }
  };

  return func;
};
