import React, { PropTypes } from 'react'
import classNames from 'classnames'

export default function MenuItem ({ title, cover, disabled=false, overlayColor='#d35966', acessArticle, artUrl }) {
	var classes = classNames('list__item', {'is-disabled':disabled })
  return (
		<li className={classes} style={{ backgroundImage: `url('${cover}')` }}>
			<a className="list__link" href={artUrl} onClick={acessArticle}>
				<h2 className="list__title">{ title }</h2>
				<div className="list__overlay" style={{ backgroundColor: overlayColor }}></div>
			</a>
		</li>
  )
}
MenuItem.propTypes = {
  // state
  title: PropTypes.string.isRequired
};
