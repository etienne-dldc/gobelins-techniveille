import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TweenMax from 'gsap'
import $ from 'jquery'
import _ from 'lodash'


const mapStateToProps = (state, ownProps) => {
  return {
    artId: state.app.currentArticle,
    nbrOfArticles: state.articles.length,
    pathname: ownProps.location.pathname
  }
}
export class CanvasBack extends React.Component {
  static propTypes = {};

  componentDidUpdate () {
    const newMode = (this.props.pathname == '/') ? 'home' : 'articles'
    if (newMode !== this.mode.type) {
      this.doModeTransition(newMode)
    }
    if (this.mode.type == 'articles') {
      const progress = this.props.artId / this.props.nbrOfArticles
      this.tweenProgress(progress)
    }
  }

  componentDidMount () {
    this.update = this.update.bind(this)
    this.updateMousePos = this.updateMousePos.bind(this)

    this.progressAnim = null
    this.verticalProgress = 0
    this.mode = {
      type: (this.props.pathname == '/') ? 'home' : 'articles',
      anim: null,
      circleColor: 'rgb(255, 255, 255)',
      circleSize: 0,
      inTransition: false
    }

    this.background = 'rgb(255, 255, 255)'

    this.dimentions = {
      width: $(window).width(),
      height: $(window).height()
    }

    this.canvas = this.refs.back
    this.canvas.width = this.dimentions.width
    this.canvas.height = this.dimentions.height
    this.ctx = this.canvas.getContext('2d')

    const area = this.dimentions.width * this.dimentions.height

    // Article
    const elemPerPixel = 0.0005
    const nbrElems = Math.floor(elemPerPixel * area)
    this.elements = []
    for (var i = 0; i < nbrElems; i++) {
      let newElem = this.getNewElement()
      if (newElem) {
        this.elements.push(newElem)
      }
    }

    // Home
    const elemPerPixelHome = 0.0002
    const nbrElemsHome = Math.floor(elemPerPixel * area)
    this.homeElements = []
    for (var i = 0; i < nbrElemsHome; i++) {
      let newElem = this.getNewHomeElement()
      if (newElem) {
        this.homeElements.push(newElem)
      }
    }

    this.mousePos = {
      x: 0,
      y: 0
    }

    this.updateMousePos = _.throttle(this.updateMousePos, 1000/60)

    $(window).on('mousemove', this.updateMousePos)

    TweenMax.ticker.addEventListener( 'tick', this.update)

  }

  componentWillUnmount () {
    TweenMax.ticker.removeEventListener( 'tick', this.update)
    $(window).off('mousemove', this.updateMousePos)
  }

  update () {

    const { width, height } = this.dimentions
    const ctx = this.ctx


    const renderArticleMode = () => {
      ctx.globalAlpha = 1
      ctx.fillStyle = 'rgb(255, 255, 255)'
      ctx.fillRect(0, 0, width, height)
      ctx.globalAlpha = 0.3
      for (var i = 0; i < this.elements.length; i++) {
        this.displayElem(this.elements[i])
      }
    } // end renderArticleMode

    const renderHomeMode = () => {
      ctx.globalAlpha = 1
      ctx.fillStyle = 'rgb(0, 0, 0)'
      ctx.fillRect(0, 0, width, height)
      ctx.globalAlpha = 0.3
      for (var i = 0; i < this.homeElements.length; i++) {
        this.displayElem(this.homeElements[i])
      }
    }

    if (this.mode.inTransition) {
      ctx.save()
        renderArticleMode()
        // if (this.mode.type === 'articles') {
        // } else {
        //   renderHomeMode()
        // }
        ctx.fillStyle = this.mode.circleColor
        ctx.beginPath();
        ctx.arc(this.dimentions.width/2, this.dimentions.height/2, this.mode.circleSize, 0, Math.PI*2);
        ctx.clip()
        renderHomeMode()
        // if (this.mode.type === 'articles') {
        // } else {
        //   renderArticleMode()
        // }
      ctx.restore()
    } else {
      if (this.mode.type === 'home') {
        renderHomeMode()
      } else
      if (this.mode.type === 'articles') {
        renderArticleMode()
      }
    }
  }

  doModeTransition (newMode) {
    this.mode.type = newMode
    const bigCircle = Math.sqrt(Math.pow(this.dimentions.width, 2) + Math.pow(this.dimentions.height, 2))
    var toCircleSize;
    if (newMode == 'articles') {
      this.mode.circleSize = bigCircle
      this.mode.circleColor = 'rgb(0, 0, 0)'
      toCircleSize = 0
    } else {
      this.mode.circleSize = 0
      this.mode.circleColor = 'rgb(255, 255, 255)'
      toCircleSize = bigCircle
    }
    if (this.mode.anim !== null) {
      this.mode.anim.kill()
    }
    this.mode.inTransition = true
    this.mode.anim = TweenMax.to(this.mode, 1, {
      circleSize: toCircleSize,
      onComplete: () => {
        this.mode.inTransition = false
      }
    })
  }

  tweenProgress (prog) {
    if (this.progressAnim !== null) {
      this.progressAnim.kill()
    }
    const that = this
    this.progressAnim = TweenMax.to(this, 0.7, {
      verticalProgress: prog
    })
  }

  distBetweenElems (left, right) {
    let xLeft = left.x
    let xRight = right.x
    if (left.height) {
      xLeft  = left.x / left.height
      xRight  = right.x / right.height
    }
    const xDiff = xLeft - xRight
    const yDiff = left.y - right.y
    return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2))
  }

  isNearElem (elem, list) {
    for (var i = 0; i < list.length; i++) {
      let right = list[i]
      const dist = this.distBetweenElems(elem, right)
      if (dist < 150) {
        return true
      }
    }
    return false
  }

  getNewElement () {
    const types = ['circle', 'full-circle', 'full-square', 'line', 'square']
    const colors = [ '#0f878b', '#84b9cd', '#772a5c', '#f8c986', '#d35966', '#4b4b4b']
    const result = {}
    const typeIndex = Math.floor(Math.random() * types.length)
    const colorIndex = Math.floor(Math.random() * colors.length)

    result.type = types[typeIndex]
    result.color = colors[colorIndex]
    result.size = 0.3 // Math.random()
    // result.rotation = Math.random() * Math.PI
    result.mouseVariation = Math.random() * 200
    result.height = 10000 + Math.floor(Math.random() * 50000)
    // let maxLoop = 50
    // do {
      // maxLoop = maxLoop - 1
      result.x = Math.floor(Math.random() * this.dimentions.width)
      result.y = Math.floor(Math.random() * (this.dimentions.height + result.height))
    // } while (maxLoop > 0 && this.isNearElem(result, this.elements))
    // if (maxLoop > 0) {
      return result
    // } else {
    //   return false
    // }
  }

  getNewHomeElement () {
    const types = ['circle', 'full-circle', 'full-square', 'line', 'square']
    const colors = [ '#0f878b', '#84b9cd', '#772a5c', '#f8c986', '#d35966', '#4b4b4b']
    const result = {}
    const typeIndex = Math.floor(Math.random() * types.length)
    const colorIndex = Math.floor(Math.random() * colors.length)
    const mouseRange = 400

    result.type = types[typeIndex]
    result.color = colors[colorIndex]
    result.size = 0.4 // Math.random()
    // result.rotation = Math.random() * Math.PI
    result.mouseVariation = Math.random() * mouseRange
    let maxLoop = 50
    do {
      maxLoop = maxLoop - 1
      result.x = Math.floor(Math.random() * (this.dimentions.width + (mouseRange*2))) - mouseRange
      result.y = Math.floor(Math.random() * (this.dimentions.height + (mouseRange*2))) - mouseRange
    } while (maxLoop >= 0 && this.isNearElem(result, this.homeElements))
    if (maxLoop > 0) {
      return result
    } else {
      return false
    }
  }

  updateMousePos (e) {
    this.mousePos.x = 1 - (e.pageX / this.dimentions.width)
    this.mousePos.y = 1 - (e.pageY / this.dimentions.height)
  }

  displayElem (elem) {
    const ctx = this.ctx
    const mouseX = elem.mouseVariation * (this.mousePos.x - 0.5)
    const mouseY = elem.mouseVariation * (this.mousePos.y - 0.5)
    const vertical = (elem.height !== undefined) ? elem.height * this.verticalProgress : 0
    const strokeSize = 2 + (elem.size * 4)
    const size = 10 + (elem.size * 15)
    ctx.fillStyle = elem.color
    ctx.strokeStyle = elem.color
    ctx.lineWidth = strokeSize

    ctx.save()
      // translate to position
      ctx.translate(elem.x, elem.y)
      // mouse move
      ctx.translate(mouseX, mouseY)
      // verticalProgress
      ctx.translate(0, -vertical)
      ctx.rotate(elem.rotation)
        if (elem.type === 'circle') {
          ctx.beginPath()
          ctx.arc(0, 0, size/2, 0, 2 * Math.PI)
          ctx.stroke()
        } else
        if (elem.type === 'full-circle') {
          ctx.beginPath()
          ctx.arc(0, 0, size/2, 0, 2 * Math.PI)
          ctx.fill()
        } else
        if (elem.type === 'full-square') {
          ctx.beginPath()
          ctx.rect(-size/2, -size/2, size, size)
          ctx.fill()
        } else
        if (elem.type === 'line') {
          ctx.beginPath()
          ctx.moveTo(-size/2, 0)
          ctx.lineTo(size/2, 0)
          ctx.stroke()
        } else
        if (elem.type === 'square') {
          ctx.beginPath()
          ctx.rect(-size/2, -size/2, size, size)
          ctx.stroke()
        }
    ctx.restore()

  }

  render () {
    return (
      <div style={{ height: '100%', width: '100%', fontSize: '18px', position: 'absolute', overflow: 'hidden' }}>
        <canvas ref='back'></canvas>
      </div>
    )
  }
}

const CanvasBackConnected = connect(mapStateToProps)(CanvasBack)

export default CanvasBackConnected
