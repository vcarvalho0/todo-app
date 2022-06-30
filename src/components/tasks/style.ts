import styled from "styled-components";

import { HiCheckCircle } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Check = styled(HiCheckCircle)`
  color: #000000;
  margin-right: 10px;
  font-size: 25px;
  float: right;
  cursor: pointer;
  &:hover {
    color: #8cd867;
  }
`;

export const Trash = styled(HiOutlineTrash)`
  color: #000000;
  font-size: 25px;
  float: right;
  cursor: pointer;
  &:hover {
    color: #ea2b1f;
  }
`;

export const Task = styled.span`
  width: 380px;
  font-size: 20px;
  margin-bottom: 20px;
  padding: 0 15px 0 15px;
  overflow-wrap: break-word;
`;
