import { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/MainLayout';
import CardsWrapper from '../components/CardsWrapper';
import Card from '../components/Card/Card';
import SectionHeader from '../components/SectionHeader';

class Index extends Component {
  render() {
    return (
      <>
        <Layout>
          <section>
            <SectionHeader
              category
              color="red"
              title="JavaScript > Object Oriented Programming"
            />
            <CardsWrapper>
              <Card nocategory />
              <Card nocategory />
              <Card nocategory />
            </CardsWrapper>
          </section>
        </Layout>
      </>
    );
  }
}

export default Index;
