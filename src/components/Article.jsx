import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import TweenMax from 'gsap'
import $ from 'jquery'
import { getStore } from '../core/configureStore'

export default class Article extends React.Component {
  static propTypes = {
    art: PropTypes.object.isRequired
  };

	// componentWillUnmount () {
	// 	console.log(this.props.test)
	// }

	getDirection () {
		const app = getStore().getState().app
		return app.lastArticle < app.currentArticle ? 1 : -1
	}

	getElemsList (dir) {
		const { img, title, link, icon, resume } = this.refs
		const list = [icon, img, title, resume, link]
		if (dir > 0) {
			return list
		}
		list.reverse()
		return list
	}

	componentDidEnter () {
    if (this.anim) {
      this.anim.forEach((tween) => {tween.kill()})
    }
		$(this.getElemsList(dir)).css('opacity', '0')
		var dir = this.getDirection()
		this.anim = TweenMax.staggerFromTo(this.getElemsList(dir), 0.7,
			{ y: 1000*dir, opacity:0},
			{ delay: 0.2, y: 0, opacity:1},
			0.1
		)
	}

	componentWillLeave (callback) {
    if (this.anim) {
      this.anim.forEach((tween) => {tween.kill()})
    }
		var dir = this.getDirection()
		this.anim = TweenMax.staggerTo(this.getElemsList(dir), 0.7,
			{ y: -1000*dir, opacity:0 },
			0.1,
      callback
		)
	}

  render () {
    const { art } = this.props
    return (
			<div style={{position: 'absolute', width: '100%', height: '100%'}}>
				<article className="article">
					<div ref='icon' className="article__icon"></div>
					<div ref='img'>
						<img className="article__img" src={art.cover} alt="" />
					</div>
					<h1 className="article__title" ref='title' >{art.title}</h1>
					<div ref='resume' className="article__content">
						<p>{art.resume}</p>
					</div>
					<a ref='link' href={art.link} target="_blank" className="article__btn">{art.button}</a>
				</article>
			</div>
    )
  }
}
