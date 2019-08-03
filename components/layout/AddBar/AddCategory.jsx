import styled from 'styled-components';

const Add = styled.button`
  background: none;
  display: inline-block;
  border: none;
  margin: 0 auto;
  cursor: pointer;

  &:focus {
    outline: none;
    font-weight: 600;
  }
`;

const AddCategory = ({ onClick, children }) => (
  <Add type="button" onClick={onClick}>
    {children}
  </Add>
);

export default AddCategory;
