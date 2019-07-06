import Card from './card';
import SectionHeader from './section-header';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Maybe = props => (
  <section>
    <SectionHeader title="Maybe today?" />
    <Wrapper>
      <Card />
      <Card />
      <Card />
    </Wrapper>
  </section>
);

export default Maybe;
