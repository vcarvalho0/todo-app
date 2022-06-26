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
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 3%;
  color: #00000;
  font-size: 60px;
`;

export const Input = styled.input`
  width: 380px;
  height: 60px;
  border-radius: 10px;
  border: 2px solid #dedede;
  font-size: 20px;
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #d3d3d3;
    text-align: center;
    font-size: 20px;
  }
`;
export const Task = styled.li`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;
