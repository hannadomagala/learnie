import styled from 'styled-components';

const StyledMenu = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: calc(100vh - 60px);
  margin-top: 60px;
  background: white;
  box-sizing: border-box;
  font-size: 1.2em;
  transform: translateX(${props => (props.isOpen ? 0 : '100vw')});
  transition: transform 0.3s linear;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }

  @media (min-width: 400px) {
    width: 70%;
    transform: translateX(${props => (props.isOpen ? '30vw' : '100vw')});
  }

  @media (min-width: 600px) {
    width: 40%;
    transform: translateX(${props => (props.isOpen ? '60vw' : '100vw')});
  }

  @media (min-width: 900px) {
    width: 30%;
    transform: translateX(0);
  }

  @media (min-width: 1050px) {
    width: 25%;
    transform: translateX(0);
  }

  @media (min-width: 1300px) {
    width: 17%;
    transform: translateX(0);
  }
`;

export default StyledMenu;
