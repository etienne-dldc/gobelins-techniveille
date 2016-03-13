import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { push } from 'react-router-redux'
import { actions as appActions } from '../state/appReducer'
import { actions as catActions } from '../state/categoriesReducer'

import CategorySelectorItem from './CategorySelectorItem'

const mapStateToProps = ({ categories, app, articles }, ownProps) => ({
  categories: categories.data,
  articles: articles,
  open: app.categorySelectorOpen,
  selected: categories.selected,
  artId: ownProps.artId
})

export class ToolBar extends React.Component {
  static propTypes = {
    // state
    categories: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    openCatSelector: PropTypes.func.isRequired,
    closeCatSelector: PropTypes.func.isRequired,
    selectCategory: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    artId: PropTypes.number
  };

  render () {
    const { articles, categories, open, openCatSelector, closeCatSelector, selectCategory, selected, push, artId } = this.props
    const classes = classNames('tags', 'tags--dropdown', { 'is-opened': open })
    const cat = _.find(categories, {slug: selected})

    var catColor = '#0f878b'
    if (artId !== undefined && artId !== null) {
      const currentArt = _.find(articles, {id: artId})
      if (currentArt) {
        const currentCat = _.find(categories, {slug: currentArt.category})
        if (currentCat) {
          catColor = currentCat.color
        }
      }
    }

    return (
      <header className="toolbar">
        <button className="toolbar__btn-menu" onClick={() => push('/articles')}>
          <svg version="1.1" id="Calque_1" x="0px" y="0px" viewBox="0 0 53 48">
            <path style={{ fill: catColor }} d="M7.2,4.6h9v9h-9V4.6z"/>
            <path style={{ fill: catColor }} d="M22,4.6h9v9h-9V4.6z"/>
            <path style={{ fill: catColor }} d="M36.8,4.6h9v9h-9V4.6z"/>
            <path style={{ fill: catColor }} d="M7.2,19.5h9v9h-9V19.5z"/>
            <path style={{ fill: catColor }} d="M22,19.5h9v9h-9V19.5z"/>
            <path style={{ fill: catColor }} d="M36.8,19.5h9v9h-9V19.5z"/>
            <path style={{ fill: catColor }} d="M7.2,34.4h9v9h-9V34.4z"/>
            <path style={{ fill: catColor }} d="M22,34.4h9v9h-9V34.4z"/>
            <path style={{ fill: catColor }} d="M36.8,34.4h9v9h-9V34.4z"/>
          </svg>
        </button>
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
      </header>
    )
  }
}

export default connect(mapStateToProps, {...appActions, ...catActions, push})(ToolBar)
