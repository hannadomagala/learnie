import styled from 'styled-components';

const StyledSelect = styled.select`
  border: 1px solid ${props => props.theme.shadowColor};
  border-radius: 10px;
  padding: 7px;
  width: 45%;
  display: block;
  outline: none;
  margin: 10px 0;
  position: relative;
  background: white;

  &:focus {
    box-shadow: ${props => props.theme.inputFocusShadow};
  }
`;

export default StyledSelect;
