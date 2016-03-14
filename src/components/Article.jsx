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

  componentDidAppear () {
    this.componentDidEnter()
  }

	componentDidEnter () {
    if (this.anim) {
      this.anim.forEach((tween) => {tween.kill()})
    }
		$(this.getElemsList(dir)).css('opacity', '0')
		var dir = this.getDirection()
		this.anim = TweenMax.staggerFromTo(this.getElemsList(dir), 0.4,
			{ y: 1000*dir, opacity:0},
			{ delay: 0.1, y: 0, opacity:1},
			0.05
		)
	}

	componentWillLeave (callback) {
    if (this.anim) {
      this.anim.forEach((tween) => {tween.kill()})
    }
		var dir = this.getDirection()
		this.anim = TweenMax.staggerTo(this.getElemsList(dir), 0.4,
			{ y: -1000*dir, opacity:0 },
			0.05,
      callback
		)
	}

  render () {
    const { art, color } = this.props

    var icon = null
    if (art.type == 'article') {
      icon = <path fill={color} d="M28.7,1v1.5H50V1H28.7z M28.7,12.2H50v-1.5H28.7V12.2z M28.7,20.9H50v-1.5H28.7V20.9z M3.5,29.6H50v-1.5H3.5V29.6z M3.5,38.3H50v-1.5H3.5V38.3z M3.5,47h23.3v-1.5H3.5V47z M23.7,1.1L23.7,1.1H3v19.6h20.7V1.1z M22.3,19.3h-18V2.5h18V19.3z" />
    } else
    if (art.type == 'video') {
      icon = <path fill={color} d="M6.1,4.4C3.3,4.4,1,6.6,1,9.4v27.9c0,2.8,2.3,5,5.1,5h40.9c2.8,0,5.1-2.2,5.1-5V9.4c0-2.8-2.3-5-5.1-5H6.1L6.1,4.4z M6.1,5.6h40.9c2.1,0,3.8,1.7,3.8,3.8V10H2.3V9.4C2.3,7.3,4,5.6,6.1,5.6L6.1,5.6z M2.3,11.3h48.4v24.1H2.3V11.3L2.3,11.3zM22.8,14.7c-0.3,0-0.6,0.1-0.9,0.2c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0.1c-0.1,0-0.2,0.1-0.2,0.2c0,0,0,0,0,0c-0.6,0.5-1,1.2-1,1.9c0,0,0,0,0,0v11v0v1.1v0c0,0.9,0.5,1.7,1.3,2.2c0.8,0.4,1.7,0.4,2.5,0c0,0,0,0,0,0l10.6-6.1h0c0.1,0,0.2-0.1,0.2-0.2c0,0,0,0,0,0c0.6-0.5,1-1.1,1-2c0-0.9-0.5-1.8-1.3-2.2L24,15C23.6,14.8,23.2,14.7,22.8,14.7L22.8,14.7z M22.8,16c0.2,0,0.4,0.1,0.6,0.2L34,22.2c0.4,0.2,0.7,0.7,0.7,1.1c0,0.5-0.3,0.9-0.7,1.1c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1l-10.4,6h0c-0.4,0.2-0.8,0.2-1.2,0c-0.4-0.2-0.6-0.7-0.6-1.1v0v-1.1v-11v0c0-0.4,0.2-0.9,0.6-1.1c0,0,0,0,0.1,0C22.4,16,22.6,16,22.8,16L22.8,16z M2.3,36.7h48.4v0.7c0,2.1-1.7,3.8-3.8,3.8H6.1c-2.1,0-3.8-1.7-3.8-3.8V36.7L2.3,36.7z"/>
    }

    const isMobile = $(window).width() < 480

    return (
			<div style={{position: isMobile ? 'relative' : 'absolute', width: '100%', height: '100%'}}>
				<article className="article">
					<div ref='icon' className="article__icon">
            <svg version="1.1" id="Calque_1" x="0px" y="0px" viewBox="0 0 53 48" >
              {icon}
            </svg>
					</div>
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
