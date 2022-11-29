import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: 4px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.15;

  color: #515e69;
`;

export const Input = styled.input`
  padding: 6px;
  margin-bottom: 20px;
  width: 100%;

  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;

  background-color: #b1c8dd;
  color: #728697;
  border: 1px solid #728697;
  border-radius: 12px;

  :hover,
  :focus {
    border: 1px solid #ea4f16;
  }
`;
