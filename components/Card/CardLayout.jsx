import styled from 'styled-components';

const CardLayout = styled.article`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.shadowColor};
  box-shadow: ${props => props.theme.classicShadow};
  padding: 20px;
  margin: 15px 5px;
  line-height: 1.25em;
  display: flex;
  flex-direction: column;

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

export default CardLayout;
