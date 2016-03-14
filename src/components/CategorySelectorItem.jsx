import React, { PropTypes } from 'react'
import classNames from 'classnames'

export default function CategorySelectorItem ({ name, hdlClick, color, clickAction, selected, underline }) {
  const classes = classNames('tags__btn', { 'isSelected': selected })
  console.log(classes)
  return (
    <li className="tags__item" style={{ color, opacity: (selected ? '1' : '0.5') }}>
      <button className={classes} style={{
          borderBottom: (underline ? '3px solid' : 'none'),
          borderTop: (underline ? '3px solid transparent' : 'none')
        }} onClick={() => clickAction()}>{name}</button>
    </li>
  )
}
// CategorySelectorItem.propTypes = {
//   // state
// };
