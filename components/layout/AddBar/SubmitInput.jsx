import styled from 'styled-components';

const SubmitInput = styled.input`
  width: 50px;
  height: 50px;
  border: 1px solid ${props => props.theme.shadowColor};
  border-radius: 50%;
  box-shadow: ${props => props.theme.classicShadow};
  margin: 5px;
  background: white;
  outline: none;
`;

export default SubmitInput;
