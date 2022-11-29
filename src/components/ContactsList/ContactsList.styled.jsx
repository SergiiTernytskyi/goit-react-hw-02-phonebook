import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const Contact = styled.li`
  padding: 6px 20px;
  :not(:last-child) {
    margin-bottom: 8px;
  }

  display: flex;
  align-items: center;
  justify-content: start;
  min-height: 50px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;

  color: #ffffff;
  background-color: #728697;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
