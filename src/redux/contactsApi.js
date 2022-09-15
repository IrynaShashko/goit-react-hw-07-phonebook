import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://631c60881b470e0e1200664f.mockapi.io/api/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  console.log('data', data);
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data: result } = await instance.delete(`/${id}`);
  return result;
};
