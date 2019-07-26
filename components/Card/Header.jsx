import styled from 'styled-components';
import ArticleInfo from '../ArticleInfo';

// **** STYLES ****
const StyledHeading = styled.h3`
  min-height: 35px;
  margin: 15px 0 10px 0;
  display: flex;
  align-items: center;
  line-height: 1.3em;
`;

const Header = props => (
  <header>
    <StyledHeading>{props.title}</StyledHeading>

    {!props.nocategory && (
      <ArticleInfo color={props.category.color} className="category">
        {props.category.name} > {props.subcategory}
      </ArticleInfo>
    )}

    <ArticleInfo className="author">{props.author}</ArticleInfo>
    <ArticleInfo className="time">{props.time} min</ArticleInfo>
  </header>
);

export default Header;
