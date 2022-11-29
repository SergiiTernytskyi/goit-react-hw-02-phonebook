import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FilterLabel = styled.label`
  margin-bottom: 4px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.15;

  color: #515e69;
`;

export const FilterInput = styled.input`
  padding: 6px;
  margin-bottom: 30px;
  width: 100%;

  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;

  background-color: #e2ebf3;
  color: #728697;
  border: 1px solid #728697;
  border-radius: 12px;

  :hover,
  :focus {
    border: 1px solid #ea4f16;
  }
`;
