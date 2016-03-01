import React, { PropTypes } from 'react'

export default function MenuItem ({ title,   }) {
  return (
		<li className="list__item" style={{ backgroundImage: `url('http://lorempicsum.com/futurama/320/320/1')` }}>
			<a className="list__link" href="#">
				<h2 className="list__title">{ title }</h2>
				<div className="list__overlay"></div>
			</a>
		</li>
  )
}
MenuItem.propTypes = {
  // state
  title: PropTypes.string.isRequired
};
