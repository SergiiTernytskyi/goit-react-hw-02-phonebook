import styled from 'styled-components';

export const SubmitButton = styled.button`
  align-self: center;
  width: 200px;
  height: 50px;

  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: capitalize;

  color: #ffffff;
  background-color: #728697;
  border: transparent;
  border-radius: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  cursor: pointer;
  transition: box-shadow 250ms ease-out, background-color 250ms ease-out;

  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

    background-color: #ea4f16;
  }
`;
