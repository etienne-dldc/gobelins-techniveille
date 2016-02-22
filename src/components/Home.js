import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log(state)
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
        { this.props.children }
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)
