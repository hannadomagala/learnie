import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 170px;
  background: url(${props => props.url}) center center / cover no-repeat
    rgb(250, 250, 250);
`;

export default ImageWrapper;
