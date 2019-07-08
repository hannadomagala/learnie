import React, { Component } from 'react';
import styled from 'styled-components';
import ArticleInfo from '../article-info';

// style
const Bar = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  padding: 10px;
  position: fixed;
  top: 60px;
  right: 0;
  background: white;
  border: 1px solid ${props => props.theme.shadowColor};
  border-right: none;
  border-top: none;
  transform: translateX(${props => (props.isOpen ? 0 : '100%')});
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
`;

const StyledInput = styled.input`
  border: 1px solid ${props => props.theme.shadowColor};
  border-radius: 10px;
  padding: 7px;
  outline: none;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  transition: box-shadow 0.2s ease-in;

  &:focus {
    box-shadow: ${props => props.theme.inputFocusShadow};
  }

  &::placeholder {
    font-weight: 400;
  }
`;

const Suggestions = styled.ul`
  margin: 0;
  margin-top: 5px;
  padding: 0;
  height: calc(100% - 25px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
const Suggestion = styled.li`
  margin: 0;
  padding: 10px 0px 10px 0px;
  list-style: none;
  border-bottom: 1px solid ${props => props.theme.shadowColor};
  &:last-child {
    border-bottom: none;
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
      <Bar isOpen={this.props.isOpen}>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Search by author or title..."
            value={this.state.value}
            onChange={this.handleChange}
          />
        </StyledForm>
        <Suggestions>
          <Suggestion>
            <ArticleInfo className="category">JavaScript > OOP</ArticleInfo>
            <h3>
              The Secret to Being a Top Developer Is Building Things! Here’s a
              List of Fun Apps to Build!
            </h3>
            <ArticleInfo className="author">Indrek Lasn</ArticleInfo>
          </Suggestion>
          <Suggestion>
            <ArticleInfo className="category">JavaScript > OOP</ArticleInfo>
            <h3>
              The Secret to Being a Top Developer Is Building Things! Here’s a
              List of Fun Apps to Build!
            </h3>
            <ArticleInfo className="author">Indrek Lasn</ArticleInfo>
          </Suggestion>
          <Suggestion>
            <ArticleInfo className="category">JavaScript > OOP</ArticleInfo>
            <h3>
              The Secret to Being a Top Developer Is Building Things! Here’s a
              List of Fun Apps to Build!
            </h3>
            <ArticleInfo className="author">Indrek Lasn</ArticleInfo>
          </Suggestion>
          <Suggestion>
            <ArticleInfo className="category">JavaScript > OOP</ArticleInfo>
            <h3>
              The Secret to Being a Top Developer Is Building Things! Here’s a
              List of Fun Apps to Build!
            </h3>
            <ArticleInfo className="author">Indrek Lasn</ArticleInfo>
          </Suggestion>
          <Suggestion>
            <ArticleInfo className="category">JavaScript > OOP</ArticleInfo>
            <h3>
              The Secret to Being a Top Developer Is Building Things! Here’s a
              List of Fun Apps to Build!
            </h3>
            <ArticleInfo className="author">Indrek Lasn</ArticleInfo>
          </Suggestion>
          <Suggestion>
            <ArticleInfo className="category">JavaScript > OOP</ArticleInfo>
            <h3>
              The Secret to Being a Top Developer Is Building Things! Here’s a
              List of Fun Apps to Build!
            </h3>
            <ArticleInfo className="author">Indrek Lasn</ArticleInfo>
          </Suggestion>
          <Suggestion>
            <ArticleInfo className="category">JavaScript > OOP</ArticleInfo>
            <h3>
              The Secret to Being a Top Developer Is Building Things! Here’s a
              List of Fun Apps to Build!
            </h3>
            <ArticleInfo className="author">Indrek Lasn</ArticleInfo>
          </Suggestion>
          <Suggestion>
            <ArticleInfo className="category">JavaScript > OOP</ArticleInfo>
            <h3>
              The Secret to Being a Top Developer Is Building Things! Here’s a
              List of Fun Apps to Build!
            </h3>
            <ArticleInfo className="author">Indrek Lasn</ArticleInfo>
          </Suggestion>
          <Suggestion>
            <ArticleInfo className="category">JavaScript > OOP</ArticleInfo>
            <h3>
              The Secret to Being a Top Developer Is Building Things! Here’s a
              List of Fun Apps to Build!
            </h3>
            <ArticleInfo className="author">Indrek Lasn</ArticleInfo>
          </Suggestion>
        </Suggestions>
      </Bar>
    );
  }
}

export default SearchForm;
