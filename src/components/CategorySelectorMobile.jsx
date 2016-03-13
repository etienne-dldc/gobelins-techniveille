import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { actions as appActions } from '../state/appReducer'
import { actions as catActions } from '../state/categoriesReducer'
import { Link } from 'react-router'

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
    const { articles, categories, open, openCatSelector, closeCatSelector, selectCategory, selected, currentArt } = this.props
    const classes = classNames('tags', 'tags--dropdown', { 'is-opened': open })
    const cat = _.find(categories, {slug: selected})

    return (
      <header className="main-nav__header">
        { currentArt !== null ? (
          <Link to={`/article/${currentArt}`}>
            <button className="main-nav__btn-close">
              <svg version="1.1" id="Calque_1" x="0px" y="0px" viewBox="0 0 27.5 20.1">
                <path fill={cat.color} d="M25,10.4c0-0.4-0.3-0.7-0.7-0.7H5.4l6.2-6.1c0.1-0.1,0.2-0.3,0.2-0.5s-0.1-0.4-0.2-0.5c-0.3-0.3-0.7-0.3-1,0L3.3,9.8c-0.3,0.3-0.3,0.7,0,1l7.3,7.2c0.3,0.3,0.7,0.3,1,0s0.3-0.7,0-1l-6-5.9h18.7C24.7,11.1,25,10.8,25,10.4z"/>
              </svg>
            </button>
          </Link>) : '' }

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
        <button className="main-nav__btn-about">
          <Link to='/'>A propos</Link>
        </button>
      </header>
    )
  }
}

export default connect(mapStateToProps, {...appActions, ...catActions})(CategorySelectorMobile)
