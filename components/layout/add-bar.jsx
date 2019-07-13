import React, { Component } from 'react';
import styled from 'styled-components';
import AddIcon from '../svg/add-icon';

// ***** STYLES *****
const Bar = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  position: fixed;
  top: 60px;
  right: 0;
  background: white;
  border: 1px solid ${props => props.theme.shadowColor};
  border-right: none;
  border-top: none;
  transform: translateX(${props => (props.isOpen ? '0' : '100%')});
  transition: transform 0.5s;

  @media (min-width: 600px) {
    width: 60%;
  }

  @media (min-width: 800px) {
    width: 50%;
  }

  @media (min-width: 1100px) {
    width: 40%;
  }
`;

const StyledForm = styled.form`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: inline-block;
    width: 85%;
  }
`;

const StyledInput = styled.input`
  border: 1px solid ${props => props.theme.shadowColor};
  border-radius: 10px;
  padding: ${props => (props.thick ? '9px' : '7px')};
  margin: 10px 0;
  outline: none;
  box-sizing: border-box;
  width: ${props => (props.wide ? '100%' : '45%')};
  transition: box-shadow 0.2s ease-in;

  &:focus {
    box-shadow: ${props => props.theme.inputFocusShadow};
  }

  &::placeholder {
    font-weight: 400;
  }
`;

const StyledSelect = styled.select`
  border: 1px solid ${props => props.theme.shadowColor};
  border-radius: 10px;
  padding: 7px;
  width: 45%;
  display: block;
  outline: none;
  margin: 10px 0;
  position: relative;

  &:focus {
    box-shadow: ${props => props.theme.inputFocusShadow};
  }
`;

const SubmitInput = styled.input`
  width: 50px;
  height: 50px;
  border: 1px solid ${props => props.theme.shadowColor};
  border-radius: 50%;
  box-shadow: ${props => props.theme.classicShadow};
  margin: 5px;
  background: white;
  outline: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryColor = styled.span`
  display: block;
  margin: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
`;

const AddCategory = styled.button`
  background: none;
  display: inline-block;
  border: none;
  margin: 0 auto;
`;

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

  render() {
    const { isNewSubcategoryOpen, isNewCategoryOpen } = this.state;

    let subcategoryChoice = null;
    let categoryChoice = null;

    if (isNewSubcategoryOpen || isNewCategoryOpen) {
      subcategoryChoice = (
        <StyledInput
          type="text"
          name="subcategory-choice"
          placeholder="New subcategory name..."
          thick
        />
      );
    } else {
      subcategoryChoice = (
        <StyledSelect name="subcategory-choice">
          <option value="OOP">Object Oriented Programming</option>
          <option value="OOP">Object Oriented Programming</option>
          <option value="OOP">Object Oriented Programming</option>
        </StyledSelect>
      );
    }

    if (isNewCategoryOpen) {
      categoryChoice = (
        <StyledInput
          type="text"
          name="category-choice"
          placeholder="New category name..."
          thick
        />
      );
    } else {
      categoryChoice = (
        <StyledSelect
          name="category-choice"
          onChange={this.handleCategoryChange}
        >
          <option value="Javascript">Javascript</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
        </StyledSelect>
      );
    }

    return (
      <Bar isOpen={this.props.isOpen}>
        <StyledForm onSubmit={this.handleSubmit}>
          <div>
            <StyledInput
              type="text"
              placeholder="URL goes here https://..."
              value={this.state.value}
              onChange={this.handleChange}
              wide
            />
            <Wrapper>
              <CategoryColor />
              {categoryChoice}
              {subcategoryChoice}
            </Wrapper>
            <Wrapper>
              <AddCategory onClick={this.onNewCategoryClick}>
                + {isNewCategoryOpen ? 'Existing category' : 'New category'}
              </AddCategory>
              {!isNewCategoryOpen && (
                <AddCategory onClick={this.onNewSubcategoryClick}>
                  +{' '}
                  {isNewSubcategoryOpen
                    ? 'Existing subcategory'
                    : 'New subcategory'}
                </AddCategory>
              )}
            </Wrapper>
          </div>
          <label style={{ position: 'relative', display: 'inline-block' }}>
            <SubmitInput type="submit" value="" />
            <AddIcon style={actionIconStyle} positionicon={positionIcon} />
          </label>
        </StyledForm>
      </Bar>
    );
  }
}

export default AddBar;
