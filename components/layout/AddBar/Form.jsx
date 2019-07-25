import styled from 'styled-components';
import Form from '../Form/Form';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: inline-block;
    width: 85%;
  }
`;

export default StyledForm;
