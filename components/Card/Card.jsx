import { Component } from 'react';
import styled from 'styled-components';

//**** COMPONENTS IMPORTS ****
import CardLayout from './CardLayout';
import ImageWrapper from './ImageWrapper';
import Header from './Header';
import Description from './Description';
import Actions from './Actions';
import Action from './Action';
import ExternalIcon from '../svg/external-icon';
import DoneIcon from '../svg/done-icon';

//**** STYLES ****/
const actionIconStyle = {
  width: 'auto',
  height: '20px',
  padding: '10px'
};

//**** COMPONENT ****/
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleInfo: null
    };
  }

  render() {
    const {
      nocategory,
      title,
      category,
      subcategory,
      author,
      time,
      description,
      image,
      url
    } = this.props;

    return (
      <CardLayout>
        <ImageWrapper url={image || '../../static/article-placeholder.jpg'} />
        <Header
          nocategory={nocategory}
          title={title}
          category={category}
          subcategory={subcategory}
          author={author}
          time={time}
        />
        <Description>{description}</Description>
        <Actions>
          <Action>
            <DoneIcon style={actionIconStyle} />
          </Action>
          <Action href={url} target="_blank">
            <ExternalIcon style={actionIconStyle} />
          </Action>
        </Actions>
      </CardLayout>
    );
  }
}

export default Card;
