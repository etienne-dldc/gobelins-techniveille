import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MenuItem from './MenuItem'
import CategorySelector from './CategorySelector'
import CategorySelectorMobile from './CategorySelectorMobile'
import _ from 'lodash'
import { push } from 'react-router-redux'

const mapStateToProps = ({ articles, categories }) => {
  return ({
    articles,
    categories: categories.data,
    selectedCat: categories.selected
  })
}

export class Menu extends React.Component {
  static propTypes = {
    // state
    articles: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    selectedCat: PropTypes.string.isRequired
  };

  render () {
    const { articles, categories, selectedCat, push } = this.props
    const artsWithCat = articles.map((art) => {
      const cat = _.find(categories, {slug: art.category})
      if (cat) {
        const disabled = !(selectedCat === 'all' || selectedCat === cat.slug)
        return {
          ...art,
          category: cat,
          disabled
        }
      } else {
        console.error(`Can't find category ${art.category}`);
      }
    })
    return (
      <div className="main-nav">
        <CategorySelectorMobile />
        <CategorySelector />
  	  	<main className="main-nav__main">
  	  		<aside className="main-nav__aside main-nav__aside--left">
  	  			<button>Retour</button>
  	  		</aside>
  	  		<section className="main-nav__container">
  	  			<ul className="list--nav">
              { artsWithCat.map((art) => (<MenuItem
                  key={art.id}
                  title={art.title}
                  cover={art.cover}
                  overlayColor={art.category.color}
                  disabled={art.disabled}
                  acessArticle={(e) => {e.preventDefault(); push(`/article/${art.id}`)}}
                  artUrl={`/article/${art.id}`}
                />)
              ) }
  	  			</ul>
  	  		</section>
  	  		<aside className="main-nav__aside main-nav__aside--right">
  	  			<button>à propos</button>
  	  		</aside>
  	  	</main>
        <CategorySelector />
      </div>
    )
  }
}

export default connect(mapStateToProps, { push })(Menu)
