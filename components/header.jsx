import styled from 'styled-components';

// style
const StyledHeader = styled.div`
  height: 20px;
  padding: 10px;
  border-bottom: 1px solid lightcoral;
`;

const Logo = styled.img`
  height: 20px;
`;

// component
const Header = () => (
  <>
    <StyledHeader>
      <Logo src="/static/logo.svg" />
    </StyledHeader>
  </>
);

export default Header;
