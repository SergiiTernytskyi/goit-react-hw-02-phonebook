import styled from 'styled-components';

export const Card = styled.section`
  padding: 30px 15px;
  :not(:last-child) {
    margin-bottom: ${props => props.theme.space[5]}px;
  }

  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: ${props => props.theme.shadows.third};
`;

export const Title = styled.h2`
  margin-bottom: ${props => props.theme.space[5]}px;

  font-size: ${props => props.theme.fontSizes.xxl}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};

  color: ${props => props.theme.colors.secondary};
`;
