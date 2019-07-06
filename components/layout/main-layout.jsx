import { Component } from 'react';
import Header from './header/header';
import Menu from './menu';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  shadowColor: 'rgba(0, 0, 0, 0.03)',
  classicShadow: '3px 3px 10px rgba(0, 0, 0, 0.02)',
  themeColor: '#96ceb4'
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
      isMenuOpen: false
    };
  }

  onHamburgerClick = boolean => {
    this.setState({ isMenuOpen: boolean });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header
            theme={theme}
            onHamburgerClick={this.onHamburgerClick}
            isOpen={this.state.isMenuOpen}
          />
          <Menu isOpen={this.state.isMenuOpen} />
          <Content>{this.props.children}</Content>
        </>
      </ThemeProvider>
    );
  }
}

export default Layout;
