import { Component } from 'react';
import Layout from '../components/layout/main-layout';
import Stats from '../components/stats';
import Maybe from '../components/maybe';

class Index extends Component {
  render() {
    return (
      <>
        <Layout>
          <Stats />
          <Maybe />
        </Layout>
      </>
    );
  }
}

export default Index;
