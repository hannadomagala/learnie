import styled from 'styled-components';
import ArticleInfo from '../../ArticleInfo';

const StyledSuggestion = styled.li`
  margin: 0;
  padding: 10px 0px 10px 0px;
  list-style: none;
  border-bottom: 1px solid ${props => props.theme.shadowColor};
  &:last-child {
    border-bottom: none;
  }
`;

const Suggestion = props => (
  <StyledSuggestion>
    <ArticleInfo className="category">JavaScript > OOP</ArticleInfo>
    <h3>
      The Secret to Being a Top Developer Is Building Things! Here’s a List of
      Fun Apps to Build!
    </h3>
    <ArticleInfo className="author">Indrek Lasn</ArticleInfo>
  </StyledSuggestion>
);

export default Suggestion;
