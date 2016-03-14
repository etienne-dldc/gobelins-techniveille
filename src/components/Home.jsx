import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import Vivus from 'vivus'

const mapStateToProps = (state) => {
  return {}
}
export class Home extends React.Component {
  static propTypes = {
    // state
    children: PropTypes.element
  };

  componentDidMount () {

    var cube = new Vivus('logosvg', {
      type: 'delayed',
      start: 'autostart',
      duration: 400//,
      //animTimingFunction: Vivus.EASE_IN
    });

    setTimeout(function(){
      document.getElementsByClassName('logo-container')[0].classList.add('finished');
      cube.el.classList.add('done');
      setTimeout(function(){document.getElementsByClassName('text-container')[0].classList.add('enabled');}, 100);
    }, 1500);

  }

  letsGo () {
    this.props.push({
      pathname: '/articles',
      state: {
        from: 'home'
      }
    })
  }

  render () {
    return (
      <div ref='main' style={{ height: '100%', width: '100%', fontSize: '18px', position: 'absolute' }}>
        { /* <canvas ref='back'></canvas> */ }
        <div className='logo-container'>
          <svg id='logosvg' x='0px' y='0px' viewBox='-269 509.5 538 565' enable-background='new -269 509.5 538 565'>
            <g transform='translate(-664.5,-949.25)'>
              <path fill='none' stroke='#FFFFFF' strokeWidth='10' d='M410.9,2007h358l147.5-176.9v-356.8H562.1l-151.8,181.8V2007H410.9z&#xD;&#xA;&#x9;&#x9; M880.3,1819.1H767.1 M729.8,1819.1H593.3l-123.6,147.5 M879.7,1539.4l-112.6,137.7V1947l112.6-128.5v-30.6 M598.2,1682h131.6&#xD;&#xA;&#x9;&#x9;v285.2H448.3V1682h113.8 M562.1,1472.7v330.5l-113.8,136.5 M856.5,1506.4l-118.7,140.8H598.2 M562.1,1647.1h-99.8l99.8-122.4&#xD;&#xA;&#x9;&#x9; M729.8,1788.5H598.2v-282.1h281.5v282.1H767.1'/>
            </g>
          </svg>
        </div>
        <div className='text-container'>
          <h1 className='title'>L'IMPRIMANTE 3D</h1>
          <h2 className='subtitle'>POURQUOI EST-ELLE SI RÉVOLUTIONNAIRE ?</h2>
          <p className='desc'>Avec l’impression 3D, il est devenu possible de réaliser des pièces en volume à partir d’un fichier numérique au moyen d’une imprimante. Ces pièces sont le plus souvent utilisées comme prototypes pour des usages industriels, mais pour tout autres styles d'usages par le grand public. Découvrez sur notre site les articles les plus intéressants sur ce qui a été fait grâce à l'impression 3D !</p>
          <button className='button' onClick={() => this.letsGo()}>ENTRER</button>
        </div>
      </div>
    )
  }
}

const HomeConnected = connect(mapStateToProps, { push })(Home)

export default class HomeAnim extends React.Component {

  componentWillLeave (cb) {
    TweenMax.to(this.refs.main, 1, { opacity: 0 })
    setTimeout(cb, 2000)
  }

  render () {
    return (
      <div ref='main' style={{ height: '100%', width: '100%', position: 'absolute', zIndex: '200', overflow:'hidden' }}>
        <HomeConnected {...this.props} />
      </div>
    )
  }
}
