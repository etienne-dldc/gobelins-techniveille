import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import _ from 'lodash'
import { actions as artActions } from '../state/articlesReducer'
import ToolBar from './ToolBar'
import Article from './Article'
import ReactTransitionGroup from 'react-addons-transition-group'

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.articles,
    artId: parseInt(ownProps.params.id, 10),
    routing: ownProps
  }
}
export class Articles extends React.Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    artId: PropTypes.number.isRequired,
    push: PropTypes.func.isRequired
  };

  render () {
    const { articles, artId, push, next, prev } = this.props
    var currentArt = _.find(articles, {id: artId})
    return (
      <div>
        <ToolBar />
        <ReactTransitionGroup component="div">
          <Article art={currentArt} key={currentArt.id} />
        </ReactTransitionGroup>
      	<aside className="pagination">
          { artId > 0 ? (
            <button
              className="pagination__btn pagination__btn--top"
              onClick={() => prev(artId)}
            >I</button>
          ) : ''}

      		<span className="pagination__number">{ `${artId+1}/${articles.length}` }</span>
      		{ artId < articles.length-1 ? (
            <button
              className="pagination__btn pagination__btn--bottom"
              onClick={() => next(artId)}
            >I</button>
          ) : '' }
      	</aside>
      </div>
    )
  }
}

export default connect(mapStateToProps, { push, ...artActions })(Articles)
