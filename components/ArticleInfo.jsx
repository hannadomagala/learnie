import styled from 'styled-components';

const ArticleInfo = styled.span`
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
    background: ${props => props.color};
  }

  &.author {
    color: ${props => props.theme.themeColor};
    font-weight: 600;
    margin-right: 3px;
  }

  &.time {
    padding: 3px;
    color: rgb(200, 200, 200);
    font-size: 0.9em;
  }
`;

export default ArticleInfo;
