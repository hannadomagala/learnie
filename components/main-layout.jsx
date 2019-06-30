import Header from './header/header';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  shadowColor: 'rgba(0, 0, 0, 0.03)',
  classicShadow: '3px 3px 10px rgba(0, 0, 0, 0.02)',
  themeColor: 'tomato'
};

const Layout = props => (
  <ThemeProvider theme={theme}>
    <>
      <Header />
      {props.children}
    </>
  </ThemeProvider>
);

export default Layout;
