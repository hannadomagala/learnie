import Header from './header';

const Layout = props => (
  <>
    <Header />
    {props.children}
  </>
);

export default Layout;
