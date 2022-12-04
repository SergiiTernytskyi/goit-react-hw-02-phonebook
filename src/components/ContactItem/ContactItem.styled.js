import styled from 'styled-components';

export const Contact = styled.li`
  padding: 6px 20px;
  :not(:last-child) {
    margin-bottom: ${props => props.theme.space[4]}px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;

  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: ${props => props.theme.lineHeights.body};

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: ${props => props.theme.shadows.third}px;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.radii.round};
  border: 2px solid ${props => props.theme.colors.white};

  color: ${props => props.theme.colors.white};
  cursor: pointer;
  transition: border-color 250ms ease-out, color 250ms ease-out;

  :hover,
  :focus {
    border-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.accent};
  }
`;
