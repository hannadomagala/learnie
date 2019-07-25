import React, { Component } from 'react';
import styled from 'styled-components';

// **** COMPONENTS IMPORTS ****
import AddIcon from '../../svg/add-icon';
import Bar from '../Bar';
import Form from './Form';
import Input from './Input';
import Select from '../Form/Select';
import Wrapper from './Wrapper';
import SubmitInput from './SubmitInput';
import CategoryColor from '../../CategoryColor';
import AddCategory from './AddCategory';

// ***** STYLES *****
const actionIconStyle = {
  width: 'auto',
  height: '20px',
  padding: '10px'
};

const positionIcon = {
  position: 'absolute',
  left: '10px',
  top: '10px'
};

// ***** COMPONENT *****
class AddBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isNewCategoryOpen: false,
      isNewSubcategoryOpen: false
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Wysłane');
  };

  handleCategoryChange = e => {
    console.log(e.target.value);
  };

  onNewSubcategoryClick = e => {
    this.setState({ isNewSubcategoryOpen: !this.state.isNewSubcategoryOpen });
  };

  onNewCategoryClick = e => {
    this.setState({ isNewCategoryOpen: !this.state.isNewCategoryOpen });
  };

  getCategoryChoice = isNewCategoryOpen => {
    if (isNewCategoryOpen) {
      return (
        <Input
          type="text"
          name="category-choice"
          placeholder="New category name..."
          thick
        />
      );
    } else {
      return (
        <Select name="category-choice" onChange={this.handleCategoryChange}>
          <option value="Javascript">Javascript</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
        </Select>
      );
    }
  };

  getSubcategoryChoice = (isNewSubcategoryOpen, isNewCategoryOpen) => {
    if (isNewSubcategoryOpen || isNewCategoryOpen) {
      return (
        <Input
          type="text"
          name="subcategory-choice"
          placeholder="New subcategory name..."
          thick
        />
      );
    } else {
      return (
        <Select name="subcategory-choice">
          <option value="OOP">Object Oriented Programming</option>
          <option value="OOP">Object Oriented Programming</option>
          <option value="OOP">Object Oriented Programming</option>
        </Select>
      );
    }
  };

  render() {
    const { isNewSubcategoryOpen, isNewCategoryOpen } = this.state;

    const categoryChoice = this.getCategoryChoice(isNewCategoryOpen);
    const subcategoryChoice = this.getSubcategoryChoice(
      isNewSubcategoryOpen,
      isNewCategoryOpen
    );

    return (
      <Bar isOpen={this.props.isOpen}>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Input
              type="text"
              placeholder="URL goes here https://..."
              value={this.state.value}
              onChange={this.handleChange}
              wide
            />
            <Wrapper>
              <CategoryColor color="red" />
              {categoryChoice}
              {subcategoryChoice}
            </Wrapper>
            <Wrapper>
              <AddCategory onClick={this.onNewCategoryClick}>
                {isNewCategoryOpen ? '< Existing category' : '+ New category'}
              </AddCategory>
              {!isNewCategoryOpen && (
                <AddCategory onClick={this.onNewSubcategoryClick}>
                  {isNewSubcategoryOpen
                    ? '< Existing subcategory'
                    : '+ New subcategory'}
                </AddCategory>
              )}
            </Wrapper>
          </div>
          <label style={{ position: 'relative', display: 'inline-block' }}>
            <SubmitInput type="submit" value="" />
            <AddIcon style={actionIconStyle} positionicon={positionIcon} />
          </label>
        </Form>
      </Bar>
    );
  }
}

export default AddBar;
