import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { actions as appActions } from '../state/appReducer'
import { actions as catActions } from '../state/categoriesReducer'

import CategorySelectorItem from './CategorySelectorItem'

const mapStateToProps = ({ categories, app }) => ({
  categories: categories.data,
  open: app.categorySelectorOpen,
  selected: categories.selected
})

export class CategorySelectorMobile extends React.Component {
  static propTypes = {
    // state
    categories: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    openCatSelector: PropTypes.func.isRequired,
    closeCatSelector: PropTypes.func.isRequired,
    selectCategory: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired
  };

  render () {
    const { articles, categories, open, openCatSelector, closeCatSelector, selectCategory, selected } = this.props
    const classes = classNames('tags', 'tags--dropdown', { 'is-opened': open })
    const cat = _.find(categories, {slug: selected})
    return (
      <header className="main-nav__header">
        <button className="main-nav__btn-close"></button>
        <div className={classes}>
          <button className="tags__btn-dropdown"  onClick={() => openCatSelector()}>
            Filtrer{ cat.slug === 'all' ? '' : (' : ') }
            { cat.slug === 'all' ? '' : (<span style={{color: cat.color}}>{cat.name}</span>) }
          </button>
          <ul className="tags__list">
            { categories.map((cat) => {
              return (<CategorySelectorItem
                selected={true}
                name={cat.name}
                color={cat.color}
                key={cat.slug}
                clickAction={() => {selectCategory(cat.slug); closeCatSelector() }}
              />)
            }) }
          </ul>
        </div>
        <button className="main-nav__btn-about">A propos</button>
      </header>
    )
  }
}

export default connect(mapStateToProps, {...appActions, ...catActions})(CategorySelectorMobile)
