import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const Contact = styled.li`
  padding: 12px;
  :not(:last-child) {
    margin-bottom: 8px;
  }

  display: flex;
  align-items: center;
  justify-content: start;

  min-height: 40px;
  background-color: #728697;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
