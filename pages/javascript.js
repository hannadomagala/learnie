import { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/main-layout';
import CardsWrapper from '../components/cards-wrapper';
import Card from '../components/card';

const CategoryHeader = styled.h2`
  &::before {
    content: '';
    display: inline-block;
    margin-right: 7px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.color};
  }
`;

class Index extends Component {
  render() {
    return (
      <>
        <Layout>
          <section>
            <CategoryHeader color="red">
              JavaScript > Object Oriented Programming
            </CategoryHeader>
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
