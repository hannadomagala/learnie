import { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './search-bar';
import Hamburger from './hamburger';
import Logo from '../../svg/Logo';
import SearchIcon from '../../svg/search-icon';

// style
const StyledHeader = styled.header`
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  height: 60px;
  padding: 0px 20px;
  border-bottom: 1px solid ${props => props.theme.shadowColor};
  box-shadow: ${props => props.theme.classicShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const searchIconStyle = {
  width: 'auto',
  height: '20px',
  padding: '10px'
};

const logoStyle = {
  width: '110px',
  height: 'auto'
};

// component
class Header extends Component {
  handleHamburgerClick = e => {
    this.props.onHamburgerClick(!this.props.isOpen);
  };

  render() {
    return (
      <>
        <StyledHeader>
          <Logo style={logoStyle} fill={this.props.theme.themeColor} />
          <Wrapper>
            <SearchIcon style={searchIconStyle} fill="black" />
            {/* <SearchBar /> */}
            <Hamburger
              fill="black"
              something="blah"
              onClick={this.handleHamburgerClick}
              isOpen={this.props.isOpen}
            />
          </Wrapper>
        </StyledHeader>
      </>
    );
  }
}

export default Header;
