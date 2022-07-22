import styled from 'styled-components';

export const Button = styled.button`
  width: 55px;
  height: 35px;
  padding: 5px;
  margin-right: 5px;

  &:hover {
    background-color: gray;
    border-color: darkgray;
    box-shadow: 0 0 10px darkgray, 0 0 15px grey;
    color: white;
  }
`;
