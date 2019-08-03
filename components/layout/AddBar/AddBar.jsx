import React, { Component } from 'react';
import axios from 'axios';
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';

// **** COMPONENTS IMPORTS ****
import AddIcon from '../../svg/add-icon';
import Bar from '../Bar';
import Form from './Form';
import Input from './Input';
import Select from '../Form/Select';
import Wrapper from './Wrapper';
import SubmitInput from './SubmitInput';
import CategoryColor from '../../CategoryColor';
import AddCategory from './AddCategory';
import Notification from '../Notification/Notification';

// **** HELPERS *****/
import getRandomColor from './helpers/getRandomColor';
import getAlias from './helpers/getAlias';

// ***** STYLES *****
const actionIconStyle = {
  width: 'auto',
  height: '20px',
  padding: '10px'
};

const positionIcon = {
  position: 'absolute',
  left: '10px',
  top: '10px'
};

// ***** COMPONENT *****
class AddBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryValue: null,
      newCategoryValue: '',
      subcategoryValue: '',
      urlValue: '',
      subcategories: [],
      categoryColor: '',
      isNewCategoryOpen: false,
      isNewSubcategoryOpen: false
    };
  }

  componentDidMount = () => {
    // if categories got loaded before component did mount
    // set initial category to first one loaded from server
    if (this.props.categories[0]) {
      this.setState({
        categoryValue: this.props.categories[0],
        categoryColor: this.props.categories[0].color,
        subcategories: this.props.categories[0].subcategories,
        subcategoryValue: this.props.categories[0].subcategories[0].name
      });
    } else {
      this.setState({
        categoryValue: {}
      });
    }
  };

  componentDidUpdate = prevProps => {
    // if categories get loaded from server after componentDidMount
    // set initial category to first one loaded from server
    if (this.props.categories !== prevProps.categories) {
      this.setState({
        categoryValue: this.props.categories[0],
        categoryColor: this.props.categories[0].color,
        subcategories: this.props.categories[0].subcategories,
        subcategoryValue: this.props.categories[0].subcategories[0].name
      });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    // TODO
    // validation
    // userID from server

    // create request body to add new article to mongoDB
    const {
      categoryValue,
      subcategoryValue,
      urlValue,
      categoryColor,
      newCategoryValue,
      isNewCategoryOpen,
      isNewSubcategoryOpen
    } = this.state;

    const articleBody = {
      url: urlValue,
      user: '5d3771a273caf9266425905b',
      category: categoryValue._id,
      subcategory: subcategoryValue
    };

    // if we're not creating new subcategory or category
    // then add new article to db
    if (!isNewCategoryOpen && !isNewSubcategoryOpen) {
      try {
        const { data } = await axios.post('/api/articles', articleBody);
        toast.notify(
          <Notification
            title={data.title}
            color={data.category.color}
            category={data.category.name}
            action="success"
          />,
          { position: 'bottom-right' }
        );

        // clean up after article is added
        this.props.onAddFormSubmit();
        this.setState({
          categoryValue: this.props.categories[0],
          categoryColor: this.props.categories[0].color,
          subcategories: this.props.categories[0].subcategories,
          subcategoryValue: this.props.categories[0].subcategories[0].name,
          newCategoryValue: '',
          isNewCategoryOpen: true,
          isNewSubcategoryOpen: false,
          urlValue: ''
        });
        this.setState({
          isNewCategoryOpen: false
        });

        return;
      } catch (err) {
        toast.notify(<Notification action="error" />, {
          position: 'bottom-right'
        });
        return;
      }
    }
    //
    // if we're creating only new subcategory
    // then update category with it and add new article to db
    if (isNewSubcategoryOpen && !isNewCategoryOpen) {
      const subcategoryBody = {
        subcategory: {
          name: subcategoryValue,
          alias: getAlias(subcategoryValue)
        }
      };

      try {
        const { data } = await axios.post('/api/articles', articleBody);
        const updatedCategory = await axios.put(
          `/api/categories/${categoryValue._id}`,
          subcategoryBody
        );
        toast.notify(
          <Notification
            subcategory={data.subcategory}
            color={data.category.color}
            category={data.category.name}
            action="newSubcategory"
          />,
          { position: 'bottom-right' }
        );
        toast.notify(
          <Notification
            title={data.title}
            color={data.category.color}
            category={data.category.name}
            action="success"
          />,
          { position: 'bottom-right' }
        );

        // clean up after article is added
        this.props.onAddFormSubmit();
        this.setState({
          categoryValue: this.props.categories[0],
          categoryColor: this.props.categories[0].color,
          subcategories: this.props.categories[0].subcategories,
          subcategoryValue: this.props.categories[0].subcategories[0].name,
          newCategoryValue: '',
          isNewCategoryOpen: true,
          isNewSubcategoryOpen: false,
          urlValue: ''
        });
        this.setState({
          isNewCategoryOpen: false
        });
        //i know this is not cool, but it's temporary solution to category select re-render..

        return;
      } catch (err) {
        toast.notify(<Notification action="error" />, {
          position: 'bottom-right'
        });
        return;
      }
    }

    // if we're creating new category
    // then add new category and then new article to db
    if (isNewCategoryOpen) {
      // save new category to database
      const categoryBody = {
        name: newCategoryValue,
        alias: getAlias(newCategoryValue),
        color: categoryColor,
        subcategory: {
          name: subcategoryValue,
          alias: getAlias(subcategoryValue)
        },
        userID: '5d3771a273caf9266425905b'
      };

      try {
        const newCategory = await axios.post('/api/categories/', categoryBody);

        toast.notify(
          <Notification
            color={newCategory.data.color}
            category={newCategory.data.name}
            action="newCategory"
          />,
          { position: 'bottom-right' }
        );

        const articleBody = {
          url: urlValue,
          user: '5d3771a273caf9266425905b',
          category: newCategory.data._id,
          subcategory: subcategoryValue
        };

        const { data } = await axios.post('/api/articles', articleBody);

        toast.notify(
          <Notification
            title={data.title}
            color={data.category.color}
            category={data.category.name}
            action="success"
          />,
          { position: 'bottom-right' }
        );

        // clean up after article is added
        this.props.onAddFormSubmit();
        this.setState({
          categoryValue: this.props.categories[0],
          categoryColor: this.props.categories[0].color,
          subcategories: this.props.categories[0].subcategories,
          subcategoryValue: this.props.categories[0].subcategories[0].name,
          newCategoryValue: '',
          isNewCategoryOpen: false,
          isNewSubcategoryOpen: false,
          urlValue: ''
        });

        return;
      } catch (err) {
        toast.notify(<Notification action="error" />, {
          position: 'bottom-right'
        });
        return;
      }
    }
  };

  handleUrlChange = e => {
    this.setState({
      urlValue: e.target.value
    });
  };

  handleCategoryChange = e => {
    // find current category object by id given in select value
    const { categories } = this.props;
    const currentCategory = categories.find(
      category => category._id === e.target.value
    );
    // if we're not going to add new subcategory then make first one default
    if (!this.state.isNewSubcategoryOpen) {
      this.setState({
        categoryValue: currentCategory,
        categoryColor: currentCategory.color,
        subcategories: currentCategory.subcategories,
        subcategoryValue: currentCategory.subcategories[0].name
      });
      // if we're going to add new subcategory then do not change its value
    } else {
      this.setState({
        categoryValue: currentCategory,
        categoryColor: currentCategory.color,
        subcategories: currentCategory.subcategories
      });
    }
  };

  handleSubcategoryChange = e => {
    this.setState({
      subcategoryValue: e.target.value
    });
  };

  handleNewCategoryChange = e => {
    this.setState({
      newCategoryValue: e.target.value
    });
  };

  onNewSubcategoryClick = e => {
    if (this.state.isNewSubcategoryOpen) {
      this.setState({
        //state when subcategory is going to return to select
        isNewSubcategoryOpen: !this.state.isNewSubcategoryOpen,
        subcategoryValue: this.props.categories[0].subcategories[0].name
      });
    } else {
      this.setState({
        // state when subcategory is going to be an input
        isNewSubcategoryOpen: !this.state.isNewSubcategoryOpen,
        subcategoryValue: ''
      });
    }
  };

  onNewCategoryClick = e => {
    if (this.state.isNewCategoryOpen) {
      // state when category is going to return to select
      this.setState({
        isNewCategoryOpen: !this.state.isNewCategoryOpen,
        categoryColor: this.props.categories[0].color,
        newCategoryValue: ''
      });
    } else {
      // state when category is going to be an input
      this.setState({
        isNewCategoryOpen: !this.state.isNewCategoryOpen,
        categoryColor: getRandomColor(),
        newCategoryValue: '',
        subcategoryValue: ''
      });
    }
  };

  onCategoryColorClick = e => {
    if (this.state.isNewCategoryOpen) {
      this.setState({ categoryColor: getRandomColor() });
    }
  };

  getCategoryChoice = isNewCategoryOpen => {
    // if we're going to add new category make category-choice an input
    if (isNewCategoryOpen) {
      return (
        <Input
          type="text"
          name="category-choice"
          placeholder="New category name..."
          value={this.state.newCategoryValue}
          onChange={this.handleNewCategoryChange}
          thick
        />
      );
      // if we're not going to add new category than make category-choice a select
    } else {
      return (
        <Select name="category-choice" onChange={this.handleCategoryChange}>
          {this.props.categories.map(category => {
            return (
              <option value={category._id} key={category._id}>
                {category.name}
              </option>
            );
          })}
        </Select>
      );
    }
  };

  getSubcategoryChoice = (isNewSubcategoryOpen, isNewCategoryOpen) => {
    // if we're going to add new subcategory || category make subcategory-choice an input
    if (isNewSubcategoryOpen || isNewCategoryOpen) {
      return (
        <Input
          type="text"
          name="subcategory-choice"
          placeholder="New subcategory name..."
          value={this.state.subcategoryValue}
          onChange={this.handleSubcategoryChange}
          thick
        />
      );
      // if we're not going to add new category than make category-choice a select
    } else {
      return (
        <Select
          name="subcategory-choice"
          onChange={this.handleSubcategoryChange}
        >
          {this.state.subcategories.map(subcategory => {
            return (
              <option value={subcategory.name} key={subcategory._id}>
                {subcategory.name}
              </option>
            );
          })}
        </Select>
      );
    }
  };

  render() {
    const {
      isNewSubcategoryOpen,
      isNewCategoryOpen,
      categoryValue,
      categoryColor
    } = this.state;

    const categoryChoice = this.getCategoryChoice(isNewCategoryOpen);
    const subcategoryChoice = this.getSubcategoryChoice(
      isNewSubcategoryOpen,
      isNewCategoryOpen
    );

    return (
      <Bar isOpen={this.props.isOpen}>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Input
              type="text"
              name="url"
              placeholder="URL goes here https://..."
              value={this.state.urlValue}
              onChange={this.handleUrlChange}
              wide
            />
            <Wrapper>
              <CategoryColor
                color={categoryColor}
                onClick={this.onCategoryColorClick}
                switchmode={isNewCategoryOpen}
              />
              {categoryChoice}
              {subcategoryChoice}
            </Wrapper>
            <Wrapper>
              <AddCategory onClick={this.onNewCategoryClick}>
                {isNewCategoryOpen ? '< Existing category' : '+ New category'}
              </AddCategory>
              {!isNewCategoryOpen && (
                <AddCategory onClick={this.onNewSubcategoryClick}>
                  {isNewSubcategoryOpen
                    ? '< Existing subcategory'
                    : '+ New subcategory'}
                </AddCategory>
              )}
            </Wrapper>
          </div>
          <label style={{ position: 'relative', display: 'inline-block' }}>
            <SubmitInput type="submit" value="" />
            <AddIcon style={actionIconStyle} positionicon={positionIcon} />
          </label>
        </Form>
      </Bar>
    );
  }
}

export default AddBar;
