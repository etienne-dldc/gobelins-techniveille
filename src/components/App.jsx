import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import ReactTransitionGroup from 'react-addons-transition-group'
import CanvasBack from './CanvasBack'

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories.data,
    articles: state.articles,
    artId: parseInt(ownProps.params.id, 10),
    pathname: ownProps.location.pathname
  }
}
export class App extends React.Component {
  static propTypes = {
    // state
    children: PropTypes.element
  };

  render () {
    const { articles, categories, artId } = this.props
    const currentArt = _.find(articles, {id: artId})
    var catClass = null
    if (currentArt) {
      const currentCat = _.find(categories, {slug: currentArt.category})
      catClass = currentCat.class
    }
    const classes = classNames('tpl-single', (catClass ? catClass : 'tpl-green'))
    const path = this.props.pathname.replace(/^\//, '');
    const key = path.split('/')[0]
    return (
      <div className={classes} >
        <CanvasBack { ...this.props } />
        <ReactTransitionGroup>
          {React.cloneElement(this.props.children, {
            key: key
          })}
        </ReactTransitionGroup>
      </div>
    )
  }
}



export default connect(mapStateToProps)(App)
