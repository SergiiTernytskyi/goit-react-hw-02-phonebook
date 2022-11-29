import styled from 'styled-components';

// #b1c8dd

export const Card = styled.section`
  padding: 30px 15px;
  :not(:last-child) {
    margin-bottom: 12px;
  }

  background-color: #e2ebf3;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;

  font-size: 30px;
  font-weight: 700;
  line-height: 1.5;

  color: #515e69;
`;
