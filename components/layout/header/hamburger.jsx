import styled from 'styled-components';

const Wrapper = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`;

const StyledHamburger = styled.div`
  height: 4px;
  width: 25px;
  background-color: ${props => (props.isMenuOpen ? 'white' : props.fill)};
  border-radius: 5px;
  position: relative;

  @media (min-width: 900px) {
    display: none;
  }

  &::after,
  &::before {
    content: '';
    height: 4px;
    width: 25px;
    background-color: ${props => props.fill};
    border-radius: 5px;
    position: absolute;
  }

  &::before {
    top: ${props => (props.isMenuOpen ? 0 : -7)}px;
    transform: rotate(${props => (props.isMenuOpen ? 45 : 0)}deg);
    transition: 0.2s;
  }

  &::after {
    top: ${props => (props.isMenuOpen ? 0 : 7)}px;
    transform: rotate(${props => (props.isMenuOpen ? -45 : 0)}deg);
    transition: 0.2s;
  }
`;

const Hamburger = props => (
  <Wrapper onClick={props.onClick}>
    <StyledHamburger fill={props.fill} isMenuOpen={props.isMenuOpen} />
  </Wrapper>
);

export default Hamburger;
