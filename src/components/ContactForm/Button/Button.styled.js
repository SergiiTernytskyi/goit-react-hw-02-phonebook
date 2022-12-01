import styled from 'styled-components';

export const SubmitButton = styled.button`
  align-self: center;
  width: 150px;
  height: 40px;

  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: ${props => props.theme.lineHeights.body};
  text-transform: capitalize;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primaryText};
  border: transparent;
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: ${props => props.theme.shadows.first};

  cursor: pointer;
  transition: box-shadow 250ms ease-out, background-color 250ms ease-out;

  :hover {
    box-shadow: ${props => props.theme.shadows.second};
    background-color: ${props => props.theme.colors.accent};
  }
`;
