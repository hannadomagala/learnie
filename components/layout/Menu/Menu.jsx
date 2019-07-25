import styled from 'styled-components';
import List from './List';
import Category from './Category';
import MenuLayout from './MenuLayout';
import Welcome from './Welcome';

// ***** COMPONENT *****
const Menu = props => (
  <MenuLayout isOpen={props.isOpen}>
    <Welcome>Hi, Hanna!</Welcome>
    <List>
      <Category
        color="red"
        name="JavaScript"
        subcategories={['Object Oriented Programming', 'Prototypes', 'Various']}
      />
      <Category
        color="lightblue"
        name="React"
        subcategories={['Hooks', 'State', 'Styled Components']}
      />
      <Category
        color="yellow"
        name="CSS"
        subcategories={['Grid', 'Flexbox', 'Performance']}
      />
      <Category
        color="violet"
        name="Interview"
        subcategories={['Questions', 'Attitude', 'Various']}
      />
    </List>
  </MenuLayout>
);

export default Menu;
