import React, { PropTypes } from 'react'
import classNames from 'classnames'

export default function CategorySelectorItem ({ name, hdlClick, color, clickAction, selected }) {
  return (
    <li className="tags__item" style={{ color, opacity: (!selected ? '0.5' : '1') }}>
      <button className="tags__btn" onClick={() => clickAction()}>{name}</button>
    </li>
  )
}
// CategorySelectorItem.propTypes = {
//   // state
// };
