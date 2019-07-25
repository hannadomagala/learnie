import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid ${props => props.theme.shadowColor};
  border-radius: 10px;
  padding: 7px;
  outline: none;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  transition: box-shadow 0.2s ease-in;

  &:focus {
    box-shadow: ${props => props.theme.inputFocusShadow};
  }

  &::placeholder {
    font-weight: 400;
  }
`;

export default StyledInput;
