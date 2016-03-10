import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {}
}
export class App extends React.Component {
  static propTypes = {
    // state
    children: PropTypes.element
  };

  render () {
    return (
      <div className="tpl-green tpl-single">
        { this.props.children }
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
