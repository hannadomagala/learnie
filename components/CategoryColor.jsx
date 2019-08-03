import styled from 'styled-components';

const CategoryColor = styled.span`
  display: block;
  margin: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.color};
  transition: background 0.3s;
  animation: ${props =>
    props.switchmode ? '.3s infinite alternate pulse' : null};
  cursor: ${props => (props.switchmode ? 'pointer' : 'default')};

  @keyframes pulse {
    from {
      transform: scale(1.2);
    }

    to {
      transform: scale(0.9);
    }
  }
`;

export default CategoryColor;
