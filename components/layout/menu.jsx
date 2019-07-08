import styled from 'styled-components';

//styles
const StyledMenu = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: calc(100vh - 60px);
  margin-top: 60px;
  background: white;
  box-sizing: border-box;
  font-size: 1.2em;
  transform: translateX(${props => (props.isOpen ? 0 : '100vw')});
  transition: transform 0.3s linear;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }

  @media (min-width: 400px) {
    width: 70%;
    transform: translateX(${props => (props.isOpen ? '30vw' : '100vw')});
  }

  @media (min-width: 600px) {
    width: 40%;
    transform: translateX(${props => (props.isOpen ? '60vw' : '100vw')});
  }

  @media (min-width: 900px) {
    width: 30%;
    transform: translateX(0);
  }

  @media (min-width: 1050px) {
    width: 25%;
    transform: translateX(0);
  }

  @media (min-width: 1300px) {
    width: 17%;
    transform: translateX(0);
  }
`;

const CategoryList = styled.ul`
  margin: 0;
  padding: 0;
`;

const Category = styled.li`
  border-bottom: 1px ${props => props.theme.shadowColor} solid;
  margin: 0;
  padding: 15px;
  list-style: none;
  font-weight: 600;

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

const SubcategoryList = styled.ul`
  margin: 0;
  padding: 0;
`;

const Subcategory = styled.li`
  margin: 0;
  padding: 10px;
  list-style: none;
  font-size: 0.9em;
  font-weight: 500;

  &:first-child {
    margin-top: 10px;
  }
`;

// component
const Menu = props => (
  <StyledMenu isOpen={props.isOpen}>
    <CategoryList>
      <Category color={'red'}>
        JavaScript
        <SubcategoryList>
          <Subcategory>Object Oriented Programing</Subcategory>
          <Subcategory>Prototypes</Subcategory>
          <Subcategory>Various</Subcategory>
        </SubcategoryList>
      </Category>
      <Category color={'lightblue'}>
        React
        <SubcategoryList>
          <Subcategory>Hooks</Subcategory>
          <Subcategory>State</Subcategory>
          <Subcategory>Styled Components</Subcategory>
        </SubcategoryList>
      </Category>
      <Category color={'yellow'}>CSS</Category>
      <Category color={'violet'}>Interviews</Category>
      <Category color={'pink'}>CSS</Category>
      <Category>CSS</Category>
      <Category>CSS</Category>
      <Category>CSS</Category>
      <Category>CSS</Category>
      <Category>CSS</Category>
      <Category>CSS</Category>
      <Category>CSS</Category>
      <Category>CSS</Category>
      <Category>CSS</Category>
      <Category>CSS</Category>
      <Category>CSS</Category>
    </CategoryList>
  </StyledMenu>
);

export default Menu;
