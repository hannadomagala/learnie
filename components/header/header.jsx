import styled from 'styled-components';
import Hamburger from './hamburger';

// style
const StyledHeader = styled.div`
  height: 20px;
  padding: 10px 20px 10px 20px;
  border-bottom: 1px solid ${props => props.theme.shadowColor};
  box-shadow: ${props => props.theme.classicShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 20px;
`;

// component
const Header = () => (
  <>
    <StyledHeader>
      <Logo src="/static/logo.svg" />
      <Hamburger />
    </StyledHeader>
  </>
);

export default Header;
