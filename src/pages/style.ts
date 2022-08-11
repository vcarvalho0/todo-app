import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;

export const BoxInput = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  align-items: center;
`;

export const BoxList = styled.div`
  display: flex;
  background-color: #171717;
  width: 550px;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  margin: 0 0 15px 0;
  border: 1px solid #fefefe;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const Title = styled.h1`
  margin: 20px 0 15px 0;
  color: #ffffff;
  font-size: 60px;
`;

export const Input = styled.input`
  width: 380px;
  height: 60px;
  border: 2px solid #dedede;
  background-color: #171717;
  color: #fefefe;
  border-radius: 20px;
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
  
  :focus::placeholder {
    color: transparent;
}
`;
