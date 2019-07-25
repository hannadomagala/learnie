import styled from 'styled-components';
import CategoryColor from './CategoryColor';

const StyledHeader = styled.header`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InlineHeading = styled.h2`
  display: inline-block;
`;

const HeaderColor = styled(CategoryColor)`
  display: inline-block;
`;

const Header = props => (
  <StyledHeader>
    {props.category && <HeaderColor color="red" />}
    <InlineHeading>{props.title}</InlineHeading>
  </StyledHeader>
);

export default Header;
