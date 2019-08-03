import styled from 'styled-components';
import ArticleInfo from '../../ArticleInfo';

// **** STYLES ****
const NotificationWrapper = styled.div`
  width: 200px;
  font-family: 'Muli', sans-serif;
`;
const ActionMessage = styled.h4`
  margin: 5px 0;
  font-size: 1.2em;
`;
const Title = styled.h5`
  margin: 5px 0;
  font-size: 1em;
`;

const SmallerArticleInfo = styled(ArticleInfo)`
  font-size: 0.8em;
`;

const actionMessage = {
  success: 'Article added!',
  error: 'Ooops! Adding article failed.',
  newCategory: 'New category added!',
  newSubcategory: 'New subcategory added!'
};

// **** COMPONENT ****
const Notification = props => (
  <NotificationWrapper>
    <ActionMessage>{actionMessage[props.action]}</ActionMessage>
    {props.action === 'success' && (
      <SmallerArticleInfo className="category" color={props.color}>
        {props.category}
      </SmallerArticleInfo>
    )}
    {(props.action === 'newCategory' || props.action === 'newSubcategory') && (
      <ArticleInfo className="category" color={props.color}>
        {props.category} {props.subcategory && ` > ${props.subcategory}`}
      </ArticleInfo>
    )}
    {props.action === 'success' && <Title>{props.title}</Title>}
  </NotificationWrapper>
);

export default Notification;
