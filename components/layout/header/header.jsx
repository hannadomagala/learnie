import { Component } from 'react';
import styled from 'styled-components';
import Hamburger from './hamburger';
import Logo from '../../svg/Logo';
import SearchIcon from '../../svg/search-icon';
import SettingsIcon from '../../svg/settings-icon';
import AddIcon from '../../svg/add-icon';

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

const iconStyle = {
  width: '20px',
  height: '20px',
  padding: '10px',
  cursor: 'pointer'
};

const logoStyle = {
  width: '110px',
  height: 'auto'
};

// component
class Header extends Component {
  handleHamburgerClick = e => {
    this.props.onHamburgerClick(!this.props.isMenuOpen);
  };

  handleSearchClick = e => {
    this.props.onSearchClick(!this.props.isSearchOpen);
  };

  handleAddClick = e => {
    this.props.onAddClick(!this.props.isAddOpen);
  };

  render() {
    return (
      <>
        <StyledHeader>
          <Logo style={logoStyle} fill={this.props.theme.themeColor} />
          <Wrapper>
            <AddIcon
              style={iconStyle}
              fill="black"
              onClick={this.handleAddClick}
            />
            <SearchIcon
              style={iconStyle}
              fill="black"
              onClick={this.handleSearchClick}
            />
            <SettingsIcon style={iconStyle} fill="black" />
            <Hamburger
              fill="black"
              onClick={this.handleHamburgerClick}
              isMenuOpen={this.props.isMenuOpen}
            />
          </Wrapper>
        </StyledHeader>
      </>
    );
  }
}

export default Header;
