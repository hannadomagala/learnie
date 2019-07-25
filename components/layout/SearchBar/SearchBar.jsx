import React, { Component } from 'react';
import styled from 'styled-components';
import Bar from '../Bar';
import Form from '../Form/Form';
import Input from '../Form/Input';
import Suggestion from './Suggestion';
import Suggestions from './Suggestions';

// **** STYLES ****
const StyledBar = styled(Bar)`
  height: calc(100vh - 60px);
`;

// **** COMPONENT ****
class SearchBar extends Component {
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
      <StyledBar isOpen={this.props.isOpen}>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Search by author or title..."
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Form>
        <Suggestions>
          <Suggestion />
          <Suggestion />
          <Suggestion />
        </Suggestions>
      </StyledBar>
    );
  }
}

export default SearchBar;
