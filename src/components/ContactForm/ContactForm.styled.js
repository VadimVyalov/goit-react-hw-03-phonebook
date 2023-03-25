import styled from 'styled-components';
export const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    label {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: space-between;
      span {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.25;
        padding-right: 10px;
      }
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  background-color: #c0c0c0;
  transition: transform 250ms ease-in-out;
  :hover {
    background-color: #5090ff;
    transform: scale(1.05);
  }
`;

export const FormTitle = styled.h1`
  font-size: 20px;
  margin: 0;
  padding: 5px;
`;
