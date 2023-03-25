import styled from 'styled-components';

export const ContactListContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  span {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 500;
  }
  ul {
    list-style: none;
    padding-left: 10px;
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 15px;
  span {
    font-size: 20px;
  }
  button {
    cursor: pointer;
    //font-size: 16px;

    padding: 3px;
    border: 1px solid #a0a0a0;
    border-radius: 4px;
    background-color: #c0c0c0;
    transition: transform 250ms ease-in-out;
    :hover {
      background-color: #ff0505;
      transform: scale(1.05);
    }
  }
`;

export const ListTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  padding: 5px;
`;
