import styled from 'styled-components';

const StyledMenu = styled.nav`
  position: fixed;
  width: 100%;
  height: auto;
  margin-top: 20px;
  background: white;
  box-sizing: border-box;
  font-size: 1.2em;
  transform: translateX(${props => (props.isOpen ? '0' : '100vw')});
  transition: transform 0.3s linear;
`;

const Category = styled.li`
  border-bottom: 1px ${props => props.theme.shadowColor} solid;
  margin: 0;
  padding: 15px;
  list-style: none;

  &::before {
    content: '';
    display: inline-block;
    margin-right: 7px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: red;
  }
`;

const Menu = props => (
  <StyledMenu isOpen={props.isOpen}>
    <ul style={{ margin: 0, padding: 0 }}>
      <Category>JavaScript</Category>
      <Category>React</Category>
      <Category>CSS</Category>
    </ul>
  </StyledMenu>
);

export default Menu;
