import styled from 'styled-components';
import Input from '../Form/Input';

const StyledInput = styled(Input)`
  padding: ${props => (props.thick ? '9px' : '7px')};
  margin: 10px 0;
  width: ${props => (props.wide ? '100%' : '45%')};
`;

export default StyledInput;
