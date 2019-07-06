import { Component } from 'react';
import styled from 'styled-components';

const StyledCard = styled.article`
  width: 90%;
  border: 1px solid ${props => props.theme.shadowColor};
  box-shadow: ${props => props.theme.classicShadow};
  padding: 10px;
  margin: 15px 0px;
  line-height: 1.25em;
  &:first-child {
    margin-top: 5px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 170px;
  background: rgb(250, 250, 250)
    url('https://miro.medium.com/max/1200/1*CFM9_VhPRrGG755enCmClw.jpeg')
    no-repeat;
  background-size: cover;
`;

const MetaData = styled.span`
  &.category {
    display: block;
    margin-bottom: 3px;
  }

  &.category::before {
    content: '';
    display: inline-block;
    margin-right: 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: red;
  }

  &.author {
    color: ${props => props.theme.themeColor};
    font-weight: 600;
    margin-right: 3px;
  }

  &.time {
    color: rgb(200, 200, 200);
    font-size: 0.9em;
  }
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleInfo: null
    };
  }

  render() {
    return (
      <StyledCard>
        <ImageWrapper />
        <header>
          <h3>
            The Secret to Being a Top Developer Is Building Things! Here’s a
            List of Fun Apps to Build!
          </h3>
          <MetaData className="category">JavaScript > OOP</MetaData>
          <MetaData className="author">Indrek Lasn</MetaData>
          <MetaData className="time">3 min read</MetaData>
        </header>
        <p>
          You can only become a great developer by putting the effort in.
          Imagine for a moment. You can’t become physically fit by reading a lot
          about fitness. You...
        </p>
      </StyledCard>
    );
  }
}

export default Card;
