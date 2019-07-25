import { Component } from 'react';
import styled from 'styled-components';
import List from './List';
import CategoryName from './CategoryName';
import Subcategory from './Subcategory';

// *** STYLES ****
const StyledCategory = styled.li`
  border-bottom: 1px ${props => props.theme.shadowColor} solid;
  margin: 0;
  padding: 15px;
  list-style: none;
  font-weight: 600;
`;

const SubcategoryList = styled(List)`
  max-height: ${props => (props.isOpen ? '100vh' : '0')};
  transition: max-height 0.5s;
  overflow: hidden;
`;

// **** COMPONENT ****
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { isCategoryOpen: false };
  }

  handleNameClick = e => {
    this.setState({ isCategoryOpen: !this.state.isCategoryOpen });
  };

  render() {
    // TODO:
    // Add id-key to Subcategory list
    const subcategories = this.props.subcategories.map(subcategory => {
      return <Subcategory>{subcategory}</Subcategory>;
    });

    return (
      <StyledCategory>
        <CategoryName color={this.props.color} onClick={this.handleNameClick}>
          {this.props.name}
        </CategoryName>
        <SubcategoryList isOpen={this.state.isCategoryOpen}>
          {subcategories}
        </SubcategoryList>
      </StyledCategory>
    );
  }
}

export default Category;
