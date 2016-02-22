import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log(state)
  return {}
}
export class App extends React.Component {
  static propTypes = {
    // state
    children: PropTypes.element
  };

  render () {
    return (
      <div>
        <h1>My App</h1>
        { this.props.children }
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
