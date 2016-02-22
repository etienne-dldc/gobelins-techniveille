import React, { Component, PropTypes } from 'react'
import { Provider, connect } from 'react-redux'
import { Router } from 'react-router'

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.any.isRequired,
    store: PropTypes.object.isRequired
  };

  get devTools () {
    if (false && __DEBUG__) {
      if (!window.devToolsExtension) {
        const DevTools = require('./DevTools').default
        return <DevTools />
      }
    }
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={this.props.history} routes={this.props.routes} />
          {this.devTools}
        </div>
      </Provider>
    )
  }
}
