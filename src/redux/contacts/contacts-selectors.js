export const getContact = ({ contacts }) => contacts.contacts;

export const getFilterContacts = ({ contacts, filter }) => {
  if (!contacts) {
    return contacts.items;
  }
  const normalizedFilter = filter?.toLowerCase();
  const result = contacts?.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normalizedFilter);
  });
  return result;
};
