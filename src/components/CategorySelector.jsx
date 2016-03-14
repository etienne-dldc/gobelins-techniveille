import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import CategorySelectorItem from './CategorySelectorItem'
import { actions as catActions } from '../state/categoriesReducer'

const mapStateToProps = ({ categories }) => ({
  categories: categories.data,
  selected: categories.selected
})

export class CategorySelector extends React.Component {
  static propTypes = {
    // state
    categories: PropTypes.array.isRequired,
    selectCategory: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired
  };

  render () {
    const { categories, selectCategory, selected } = this.props
    return (
      <header className="main-nav__tags">
        <div className="tags">
          <ul className="tags__list">
            { categories.map((cat) => {
              return (<CategorySelectorItem
                selected={cat.slug === selected || selected === 'all'}
                underline={ cat.slug === selected }
                name={cat.name}
                color={cat.color}
                key={cat.slug}
                clickAction={() => selectCategory(cat.slug)}
              />)
            }) }
          </ul>
        </div>
      </header>
    )
  }
}

export default connect(mapStateToProps, catActions)(CategorySelector)
