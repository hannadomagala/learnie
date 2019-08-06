import { Component } from 'react';
import axios from 'axios';

// **** COMPONENTS IMPORTS ****
import Layout from '../components/layout/MainLayout';
import Card from '../components/Card/Card';
import SectionHeader from '../components/SectionHeader';
import CardsWrapper from '../components/CardsWrapper';

// **** COMPONENT ****
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount = async () => {
    const articles = await this.getArticles();
    this.setState({ articles: articles.data });
  };

  getArticles = async () => {
    const response = await axios.get('/api/articles?random=true&number=8');
    return response;
  };

  render() {
    const { articles } = this.state;
    const articlesToShow = articles.map(article => {
      return (
        <Card
          title={article.title}
          category={article.category[0]}
          subcategory={article.subcategory}
          author={article.source}
          time={article.duration}
          description={article.description}
          image={article.image}
          key={article._id}
          url={article.url}
        />
      );
    });

    return (
      <>
        <Layout>
          <SectionHeader title="What are we reading today?" />
          <CardsWrapper>{articlesToShow}</CardsWrapper>
        </Layout>
      </>
    );
  }
}

export default Index;
