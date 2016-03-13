import TweenMax from 'gsap'
import $ from 'jquery'
import ReactTransitionGroup from 'react-addons-transition-group'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import _ from 'lodash'
import { actions as artActions } from '../state/articlesReducer'
import ToolBar from './ToolBar'
import Article from './Article'

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.articles,
    categories: state.categories.data,
    artId: parseInt(ownProps.params.id, 10),
    selectedCat: state.categories.selected,
    routing: ownProps
  }
}
export class Articles extends React.Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    artId: PropTypes.number.isRequired,
    push: PropTypes.func.isRequired,
    selectedCat: PropTypes.string.isRequired
  };

  init (props) {
    this.props.setCurrent(props.artId)
    const { articles, categories, selectedCat, artId, push, navigate } = props
    const currentArt = _.find(articles, {id: artId})
    const currentCat = _.find(categories, {slug: currentArt.category})
    const catColor = currentCat.color
    const filterArticles = articles.filter((art) => {
      return selectedCat === 'all' || selectedCat === art.category
    })
    this.currentIndex = filterArticles.indexOf(currentArt)
    if (this.currentIndex === -1) {
      navigate(filterArticles[0].id, artId)
    }
    this.nextArtId = filterArticles[this.currentIndex+1] !== undefined ? filterArticles[this.currentIndex+1].id : false
    this.prevArtId = filterArticles[this.currentIndex-1] !== undefined ? filterArticles[this.currentIndex-1].id : false
  }

  componentWillUpdate (nextProps, nextState) {
    this.init(nextProps)
  }

  componentWillMount () {
    this.init(this.props)
  }

  componentDidMount () {
    this.handleKey = this.handleKey.bind(this)
    $(window).on('keyup', this.handleKey)
  }

  componentWillUnmount () {
    $(window).off('keyup', this.handleKey)
  }

  handleKey (e) {
    const { articles, categories, selectedCat, artId, push, navigate } = this.props
    const currentArt = _.find(articles, {id: artId})

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

    if (e.keyCode === 38) { // UP
      if (this.prevArtId !== false) {
        navigate(this.prevArtId, currentArt.id)
      }
    } else
    if (e.keyCode === 40) { // DOWN
      if (this.nextArtId !== false) {
        navigate(this.nextArtId, currentArt.id)
      }
    }

  }

  render () {
    const { articles, categories, selectedCat, artId, push, navigate } = this.props
    const currentArt = _.find(articles, {id: artId})

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
      <div>
        <ToolBar artId={artId} />
        <ReactTransitionGroup component="div">
          <Article art={currentArt} color={catColor} key={currentArt.id} />
        </ReactTransitionGroup>
      	<aside className="pagination">
          { this.prevArtId !== false ? (
            <button
              className="pagination__btn pagination__btn--top"
              onClick={() => navigate(this.prevArtId, currentArt.id)}
            >
              <svg version="1.1" id="Calque_1" x="0px" y="0px" viewBox="-10 -10 40 50">
                <path style={{ fill: catColor }} d="M10.1,28.4c0.4,0,0.7-0.3,0.7-0.7V3.8l6.1,6.2c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2c0.3-0.3,0.3-0.7,0-1l-7.2-7.3c-0.3-0.3-0.7-0.3-1,0L2.5,9c-0.3,0.3-0.3,0.7,0,1s0.7,0.3,1,0l5.9-6v23.7C9.4,28.1,9.7,28.4,10.1,28.4z"/>
              </svg>
            </button>
          ) : ''}

      		<span className="pagination__number">{ `${artId+1}/${articles.length}` }</span>
      		{ this.nextArtId !== false ? (
            <button
              className="pagination__btn pagination__btn--bottom"
              onClick={() => navigate(this.nextArtId, currentArt.id)}
            >
              <svg version="1.1" id="Calque_1" x="0px" y="0px" viewBox="-10 -10 40 50">
                <path style={{ fill: catColor }} d="M10.3,1.4c-0.4,0-0.7,0.3-0.7,0.7V26l-6.1-6.2c-0.1-0.1-0.3-0.2-0.5-0.2s-0.4,0.1-0.5,0.2c-0.3,0.3-0.3,0.7,0,1l7.2,7.3c0.3,0.3,0.7,0.3,1,0l7.2-7.3c0.3-0.3,0.3-0.7,0-1s-0.7-0.3-1,0l-5.9,6V2.1C11,1.7,10.7,1.4,10.3,1.4z"/>
              </svg>
            </button>
          ) : '' }
      	</aside>
      </div>
    )
  }
}

const ArticlesConnected = connect(mapStateToProps, { push, ...artActions })(Articles)

export default class ArticlesAnim extends React.Component {

  // inAnim () {
  //   console.log('in')
  //   if (this.anim) {
  //     this.anim.kill()
  //   }
  //   this.anim = TweenMax.from(this.refs.main , 0.4, {opacity: 0, delay: 0.4})
  // }
  //
  // outAnim (cb) {
  //   if (this.anim) {
  //     this.anim.kill()
  //   }
  //   this.anim = TweenMax.to(this.refs.main , 0.4,
  //     {opacity: 0, onComplete: cb}
  //   )
  // }
  //
  // componentDidAppear () {
  //   console.log('appear Articles')
  //   this.inAnim()
  // }
  //
  // componentDidEnter () {
  //   console.log('enter Articles')
  //   this.inAnim()
  // }
  //
  componentWillLeave (cb) {
    setTimeout(cb, 500)
  }

  render () {

    return (
      <div ref='main' style={{ height: '100%', width: '100%', position: 'absolute', zIndex: '100', overflow:'hidden' }}>
        <ArticlesConnected {...this.props} />
      </div>
    )
  }
}
