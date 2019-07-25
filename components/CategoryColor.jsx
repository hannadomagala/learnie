import styled from 'styled-components';

const CategoryColor = styled.span`
  display: block;
  margin: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.color};
`;

export default CategoryColor;
