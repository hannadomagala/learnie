import React, { Component } from 'react';
import styled from 'styled-components';

// style
const InlineForm = styled.form`
  display: inline-block;
  margin: 10px;
  overflow: hidden;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 10px;
  padding: 7px;
  outline: none;
  position: relative;
  box-sizing: border-box;
  width: 90px;
  transition: width 0.4s ease-in;

  &::placeholder {
    color: ${props => props.theme.themeColor};
    font-weight: 600;
  }

  &:focus {
    width: 70vw;

    @media (min-width: 350px) {
      width: 40vw;
    }

    @media (min-width: 700px) {
      width: 20vw;
    }
  }
`;

// component
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <InlineForm onSubmit={this.handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Search"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </InlineForm>
    );
  }
}

export default SearchForm;
