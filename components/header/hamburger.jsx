import styled from 'styled-components';

// style
const StyledHamburger = styled.span`
  height: 4px;
  width: 25px;
  background-color: ${props => props.theme.themeColor};
  border-radius: 5px;
  position: relative;

  &::after,
  &::before {
    content: '';
    height: 4px;
    width: 25px;
    background-color: ${props => props.theme.themeColor};
    border-radius: 5px;
    position: absolute;
  }

  &::after {
    top: -7px;
  }

  &::before {
    top: 7px;
  }
`;

// component
const Hamburger = () => (
  <>
    <StyledHamburger />
  </>
);

export default Hamburger;
