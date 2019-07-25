import styled from 'styled-components';

const Action = styled.a`
  width: 50px;
  height: 50px;
  border: 1px solid ${props => props.theme.shadowColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.theme.classicShadow};
  margin: 5px;
`;

export default Action;
