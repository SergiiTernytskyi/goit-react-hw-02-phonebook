import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const Contact = styled.li`
  padding: 6px 20px;
  :not(:last-child) {
    margin-bottom: 12px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;

  color: #ffffff;
  background-color: #b1c8dd;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #b1c8dd;
  border-radius: 50%;
  border: 2px solid #ffffff;

  color: #ffffff;
  cursor: pointer;
  transition: border-color 250ms ease-out, color 250ms ease-out;

  :hover,
  :focus {
    border-color: #ea4f16;
    color: #ea4f16;
  }
`;
