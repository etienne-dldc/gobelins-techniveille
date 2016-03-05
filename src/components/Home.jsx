import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

const mapStateToProps = (state) => {
  return {}
}
export class Home extends React.Component {
  static propTypes = {
    // state
    children: PropTypes.element
  };

  render () {
    return (
      <div>
        <h1>My Home</h1>
        <Link to='/articles'>Voir les articles</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)
