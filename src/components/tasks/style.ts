import styled from "styled-components";

import { GoChecklist } from "react-icons/go";
import { HiOutlineTrash } from "react-icons/hi";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Check = styled(GoChecklist)`
  color: #fefefe;
  margin-right: 10px;
  font-size: 25px;
  float: right;
  cursor: pointer;
  &:hover {
    color: #00BFFF;
  }
`;

export const Trash = styled(HiOutlineTrash)`
  color: #fefefe;
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
  margin: 10px 0 10px 0%;
  padding: 0 15px 0 15px;
  word-wrap: normal;
  color: #fefefe;
`;
