import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MenuItem from './MenuItem'
import CategorySelector from './CategorySelector'
import CategorySelectorMobile from './CategorySelectorMobile'
import { Link } from 'react-router'
import _ from 'lodash'
import $ from 'jquery'
import { push } from 'react-router-redux'

export class Menu extends React.Component {
  static propTypes = {
    // state
    articles: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    selectedCat: PropTypes.string.isRequired
  };

  render () {
    const { articles, categories, selectedCat, push, currentArt } = this.props
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
        <CategorySelectorMobile currentArt={currentArt} />
        <CategorySelector />
  	  	<main className="main-nav__main">
  	  		<aside className="main-nav__aside main-nav__aside--left">
            { currentArt !== null ? <Link to={`/article/${currentArt}`}><button>Retour</button></Link> : '' }
  	  		</aside>
  	  		<section className="main-nav__container">
  	  			<ul className="list--nav">
              { artsWithCat.map((art) => (<MenuItem
                  key={art.id}
                  title={art.title}
                  cover={art.cover}
                  overlayColor={art.category.color}
                  disabled={art.disabled}
                  acessArticle={(e) => {
                    e.preventDefault();
                    if (!art.disabled) {
                      push(`/article/${art.id}`)
                    }
                  }}
                  artUrl={`/article/${art.id}`}
                />)
              ) }
  	  			</ul>
  	  		</section>
  	  		<aside className="main-nav__aside main-nav__aside--right">
  	  			<Link to='/'><button>A propos</button></Link>
  	  		</aside>
  	  	</main>
        <CategorySelector />
      </div>
    )
  }
}

const mapStateToProps = ({ articles, categories, app }, ownProps) => {
  return ({
    articles,
    categories: categories.data,
    selectedCat: categories.selected,
    currentArt: app.currentArticle
  })
}
const MenuConnected = connect(mapStateToProps, { push })(Menu)

export default class MenuAnim extends React.Component {

  inAnim () {
    const fromHome = (this.props.location && this.props.location.state && this.props.location.state.from === 'home') ? true : false
    $(this.refs.main).css({ opacity: 0 })
    if (this.anim) {
      this.anim.kill()
    }
    // $(this.refs.main).css('overflow', 'hidden')
    const delay = fromHome ? 0.7 : 0.1
    this.anim = TweenMax.fromTo(this.refs.main , 0.4,
      {scale: 2, opacity: 0},
      {scale: 1, opacity: 1, delay: delay}
    )
  }

  outAnim (cb) {
    if (this.anim) {
      this.anim.kill()
    }
    $(this.refs.main).css('overflowY', 'hidden')
    this.anim = TweenMax.to(this.refs.main , 0.4,
      {scale: 2, opacity: 0, onComplete: () => {
        cb()
        $(this.refs.main).css('overflowY', 'auto')
      }}
    )
  }

  componentDidAppear () {
    this.inAnim()
  }

  componentDidEnter () {
    this.inAnim()
  }

  componentWillLeave (cb) {
    this.outAnim(cb)
  }

  render () {
    const divStyle = {
      height: '100%',
      position: 'absolute',
      zIndex: '1000',
      width: '100%',
      overflowX: 'hidden',
      overflowY: 'auto'
    }
    return (
      <div ref='container' style={divStyle}>
        <div ref='main'>
          <MenuConnected { ...this.props } />
        </div>
      </div>
    )
  }
}
