import { Component } from 'react';
import styled from 'styled-components';
import ArticleInfo from './article-info';
import ExternalIcon from './svg/external-icon';
import DoneIcon from './svg/done-icon';

//styles
const StyledCard = styled.article`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.shadowColor};
  box-shadow: ${props => props.theme.classicShadow};
  padding: 20px;
  margin: 15px 5px;
  line-height: 1.25em;

  @media (min-width: 500px) {
    width: calc(50% - 10px);
  }

  @media (min-width: 1100px) {
    width: calc(33% - 10px);
  }

  @media (min-width: 1450px) {
    width: calc(25% - 10px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 170px;
  background: url('https://miro.medium.com/max/1200/1*CFM9_VhPRrGG755enCmClw.jpeg')
    center center / cover no-repeat rgb(250, 250, 250);
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Action = styled.span`
  width: 50px;
  height: 50px;
  border: 1px solid ${props => props.theme.shadowColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.theme.classicShadow};
  margin: 5px;
`;

const actionIconStyle = {
  width: 'auto',
  height: '20px',
  padding: '10px'
};

//component
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
          <ArticleInfo className="category">JavaScript > OOP</ArticleInfo>
          <ArticleInfo className="author">Indrek Lasn</ArticleInfo>
          <ArticleInfo className="time">3 min read</ArticleInfo>
        </header>
        <p>
          You can only become a great developer by putting the effort in.
          Imagine for a moment. You can’t become physically fit by reading a lot
          about fitness. You...
        </p>
        <Actions>
          <Action>
            <DoneIcon style={actionIconStyle} />
          </Action>
          <Action>
            <ExternalIcon style={actionIconStyle} />
          </Action>
        </Actions>
      </StyledCard>
    );
  }
}

export default Card;
