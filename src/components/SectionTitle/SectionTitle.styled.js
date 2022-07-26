import styled from 'styled-components';

export const TitleWrapper = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  border: 1px solid darkgrey;
  padding: 30px;
  box-shadow: 0 0 10px darkgray, 0 0 15px grey, 0 0 25px darkgray, 0 0 40px grey,
    0 0 60px darkgray;

  background: gray;
  border-radius: 20px;
  /* backdrop-filter: blur(10px); */
`;
