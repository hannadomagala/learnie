import styled from 'styled-components';

// **** COMPONENTS IMPORTS****
import List from './List';
import Category from './Category';
import MenuLayout from './MenuLayout';
import Welcome from './Welcome';

// **** STYLES ****
const Name = styled.span`
  border-bottom: 1.5px dashed ${props => props.theme.themeColor};
  font-weight: 600;
`;

// ***** COMPONENT *****
const Menu = props => {
  const { categories } = props;

  const categoriesToShow = categories.map(category => {
    return (
      <Category
        color={category.color}
        name={category.name}
        subcategories={category.subcategories}
        key={category._id}
      />
    );
  });

  return (
    <MenuLayout isOpen={props.isOpen}>
      <Welcome>
        Hi, <Name>Hanna</Name>!
      </Welcome>
      <List>{categoriesToShow}</List>
    </MenuLayout>
  );
};

export default Menu;
