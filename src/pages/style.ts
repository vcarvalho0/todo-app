import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  background-color: #fefefe;
  height: 550px;
  width: 550px;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 3%;
  color: #ffffff;
  font-size: 60px;
`;

export const Input = styled.input`
  width: 380px;
  height: 60px;
  border: 2px solid #dedede;
  border-radius: 5px;
  font-size: 20px;
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #dedede;
    text-align: center;
    font-size: 20px;
  }
  &:focus {
    border: 2px solid #2d3047;
  }
`;
