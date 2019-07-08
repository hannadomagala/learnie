import { Component } from 'react';
import Header from './header/header';
import Menu from './menu';
import SearchBar from './search-bar';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  shadowColor: 'rgba(0, 0, 0, 0.04)',
  classicShadow: '3px 3px 10px rgba(0, 0, 0, 0.02)',
  inputFocusShadow: '0px 0px 5px rgb(150, 206, 180, .15)',
  themeColor: 'rgb(150, 206, 180)'
};

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Muli:400,500,600&display=swap&subset=latin-ext');
    font-family: 'Muli', sans-serif;
    font-size: 13px;
    color: rgb(40, 40, 40);
  }

  h2 {
    margin: 14px 0px;
    display: inline-block;
    font-weight: 600;
  }

  h3 {
    margin: 7px 0;
  }
`;

const Content = styled.main`
  padding: 20px;
  margin-top: 40px;

  @media (min-width: 900px) {
    margin-left: 30%;
  }

  @media (min-width: 1050px) {
    margin-left: 25%;
  }

  @media (min-width: 1300px) {
    margin-left: 17%;
  }
`;

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isSearchOpen: false
    };
  }

  onHamburgerClick = boolean => {
    this.setState({ isMenuOpen: boolean, isSearchOpen: false });
  };

  onSearchClick = boolean => {
    this.setState({ isSearchOpen: boolean, isMenuOpen: false });
  };

  onContentClick = boolean => {
    this.setState({ isSearchOpen: false, isMenuOpen: false });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header
            theme={theme}
            onHamburgerClick={this.onHamburgerClick}
            onSearchClick={this.onSearchClick}
            isMenuOpen={this.state.isMenuOpen}
            isSearchOpen={this.state.isSearchOpen}
          />
          <Menu isOpen={this.state.isMenuOpen} />
          <SearchBar isOpen={this.state.isSearchOpen} />
          <Content theme={theme} onClick={this.onContentClick}>
            {this.props.children}
          </Content>
        </>
      </ThemeProvider>
    );
  }
}

export default Layout;
