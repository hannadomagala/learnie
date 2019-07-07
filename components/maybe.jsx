import Card from './card';
import SectionHeader from './section-header';
import CardsWrapper from './cards-wrapper';

const Maybe = props => (
  <section>
    <SectionHeader title="Maybe today?" />
    <CardsWrapper>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardsWrapper>
  </section>
);

export default Maybe;
