import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;

  width: 100%;
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    justify-content: space-between;
    span {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.25;
      padding-right: 10px;
    }
  }
`;
