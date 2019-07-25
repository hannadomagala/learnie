import styled from 'styled-components';

const CategoryName = styled.button`
  margin: 0;
  padding: 10px;
  background: none;
  text-align: left;
  width: 100%;
  border: none;
  outline: none;

  &::before {
    content: '';
    display: inline-block;
    margin-right: 7px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.color};
  }
`;

export default CategoryName;
