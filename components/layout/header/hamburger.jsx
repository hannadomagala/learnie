import styled from 'styled-components';

const Hamburger = styled.div`
  height: 4px;
  width: 25px;
  background-color: ${props => (props.isOpen ? 'white' : props.fill)};
  border-radius: 5px;
  display: inline-block;
  position: relative;

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
    top: ${props => (props.isOpen ? 0 : -7)}px;
    transform: rotate(${props => (props.isOpen ? 45 : 0)}deg);
    transition: 0.2s;
  }

  &::after {
    top: ${props => (props.isOpen ? 0 : 7)}px;
    transform: rotate(${props => (props.isOpen ? -45 : 0)}deg);
    transition: 0.2s;
  }
`;

export default Hamburger;
