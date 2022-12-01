import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FilterLabel = styled.label`
  margin-bottom: 4px;

  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: ${props => props.theme.lineHeights.heading};

  color: ${props => props.theme.colors.secondary};
`;

export const FilterInput = styled.input`
  padding: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  width: 100%;

  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.heading};

  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryText};
  border: 1px solid ${props => props.theme.colors.primaryText};
  border-radius: ${props => props.theme.radii.normal};

  :hover,
  :focus {
    border: 1px solid ${props => props.theme.colors.accent};
    outline-color: ${props => props.theme.colors.accent};
  }
`;
