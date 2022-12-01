import styled from 'styled-components';

export const Container = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[4]}px;
  text-align: center;
`;
