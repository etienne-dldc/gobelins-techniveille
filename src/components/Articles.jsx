import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {}
}
export class Articles extends React.Component {
  static propTypes = {
    // state
  };

  render () {
    return (
      <div>
        <h1>My Articles</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Articles)
