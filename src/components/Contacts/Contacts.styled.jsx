import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
`;
export const ContactsItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
  border: 1px solid #fff;
  border-radius: 50px;
  background-color: #f9c0e1;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.75);
  &:hover {
    scale: 1.01;
  }
`;
export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ContactsName = styled.p`
  font-size: 14px;
  margin: 0 20px;
  align-items: center;
`;
export const ContactsNumber = styled.p`
  font-size: 12px;
  margin: 0;
  margin-left: auto;
`;
export const ContactsItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  padding: 10px;
  height: 14px;
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.75);
  background-color: #000;
  margin-left: auto;
`;
