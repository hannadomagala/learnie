import styled from 'styled-components';

const Bar = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  position: fixed;
  top: 60px;
  right: 0;
  background: white;
  border: 1px solid ${props => props.theme.shadowColor};
  border-right: none;
  border-top: none;
  transform: translateX(${props => (props.isOpen ? '0' : '100%')});
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

export default Bar;
