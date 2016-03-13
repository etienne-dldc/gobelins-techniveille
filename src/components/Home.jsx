import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
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

    var canvas;
    var ctx;
    var canvasW;
    var canvasH;

    const init = () => {
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

      canvas = this.refs.back
      ctx = canvas.getContext('2d');
      window.onresize = draw;
      draw();
    }

    function draw() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      canvasW = canvas.width;
      canvasH = canvas.height;

      //ctx.strokeStyle = 'rgba(0,153,255,1)';

      var squareW = canvasW*1.5/100;
      var pos;

    // yellow empty squares
      ctx.fillStyle = 'rgba(248,201,124,1)';
      pos = {x: 33/100*canvasW, y:10/100*canvasH};
      ctx.fillRect(pos.x,pos.y,squareW,squareW);
      ctx.clearRect(pos.x+squareW*2/10, pos.y+squareW*2/10,squareW*6/10,squareW*6/10);

      pos = {x: 5/100*canvasW, y:34/100*canvasH};
      ctx.fillRect(pos.x,pos.y,squareW,squareW);
      ctx.clearRect(pos.x+squareW*2/10, pos.y+squareW*2/10,squareW*6/10,squareW*6/10);

      pos = {x: 20/100*canvasW, y:73/100*canvasH};
      ctx.fillRect(pos.x,pos.y,squareW,squareW);
      ctx.clearRect(pos.x+squareW*2/10, pos.y+squareW*2/10,squareW*6/10,squareW*6/10);

      pos = {x: 80/100*canvasW, y:25/100*canvasH};
      ctx.fillRect(pos.x,pos.y,squareW,squareW);
      ctx.clearRect(pos.x+squareW*2/10, pos.y+squareW*2/10,squareW*6/10,squareW*6/10);

      pos = {x: 95/100*canvasW, y:72/100*canvasH};
      ctx.fillRect(pos.x,pos.y,squareW,squareW);
      ctx.clearRect(pos.x+squareW*2/10, pos.y+squareW*2/10,squareW*6/10,squareW*6/10);

    // blue filled squares
      ctx.fillStyle = 'rgba(15,135,139,1)';

      pos = {x: 8/100*canvasW, y:13/100*canvasH};
      ctx.fillRect(pos.x+squareW*2/10, pos.y+squareW*2/10,squareW*6/10,squareW*6/10);

      pos = {x: 87/100*canvasW, y:59/100*canvasH};
      ctx.fillRect(pos.x+squareW*2/10, pos.y+squareW*2/10,squareW*6/10,squareW*6/10);

      pos = {x: 68/100*canvasW, y:9/100*canvasH};
      ctx.fillRect(pos.x+squareW*2/10, pos.y+squareW*2/10,squareW*6/10,squareW*6/10);

      pos = {x: 6/100*canvasW, y:85/100*canvasH};
      ctx.fillRect(pos.x+squareW*2/10, pos.y+squareW*2/10,squareW*6/10,squareW*6/10);

    // blue circles
      ctx.lineWidth = squareW*2/10;
      ctx.strokeStyle = 'rgba(211,89,102,1)';

      ctx.beginPath();
        pos = {x: 22/100*canvasW, y:21/100*canvasH};
        ctx.arc(pos.x, pos.y, squareW/2, 0, 2 * Math.PI, false);
        ctx.stroke();

      ctx.beginPath();
        pos = {x: 44/100*canvasW, y:8/100*canvasH};
        ctx.arc(pos.x, pos.y, squareW/2, 0, 2 * Math.PI, false);
        ctx.stroke();

      ctx.beginPath();
        pos = {x: 23/100*canvasW, y:90/100*canvasH};
        ctx.arc(pos.x, pos.y, squareW/2, 0, 2 * Math.PI, false);
      ctx.stroke();

      ctx.beginPath();
        pos = {x: 92/100*canvasW, y:19/100*canvasH};
        ctx.arc(pos.x, pos.y, squareW/2, 0, 2 * Math.PI, false);
      ctx.stroke();

      ctx.beginPath();
        pos = {x: 82/100*canvasW, y:85/100*canvasH};
        ctx.arc(pos.x, pos.y, squareW/2, 0, 2 * Math.PI, false);
      ctx.stroke();

    // red empty circles
      ctx.fillStyle = 'rgba(132,185,205,1)';

      ctx.beginPath();
        pos = {x: 12/100*canvasW, y:52/100*canvasH};
        ctx.arc(pos.x, pos.y, squareW/2, 0, 2 * Math.PI, false);
      ctx.fill();

      ctx.beginPath();
        pos = {x: 92/100*canvasW, y:8/100*canvasH};
        ctx.arc(pos.x, pos.y, squareW/2, 0, 2 * Math.PI, false);
      ctx.fill();

      ctx.beginPath();
        pos = {x: 79/100*canvasW, y:50/100*canvasH};
        ctx.arc(pos.x, pos.y, squareW/2, 0, 2 * Math.PI, false);
      ctx.fill();

      ctx.beginPath();
        pos = {x: 47/100*canvasW, y:92/100*canvasH};
        ctx.arc(pos.x, pos.y, squareW/2, 0, 2 * Math.PI, false);
      ctx.fill();

      ctx.beginPath();
        pos = {x: 92/100*canvasW, y:8/100*canvasH};
        ctx.arc(pos.x, pos.y, squareW/2, 0, 2 * Math.PI, false);
      ctx.fill();

    // purple lines
      ctx.strokeStyle = 'rgba(119,42,92,1)';

      ctx.beginPath();
        pos = {x: 30/100*canvasW, y:30/100*canvasH};
        ctx.moveTo(pos.x,pos.y);
        ctx.lineTo(pos.x + squareW, pos.y);
      ctx.stroke();

      ctx.beginPath();
        pos = {x: 63/100*canvasW, y:20/100*canvasH};
        ctx.moveTo(pos.x,pos.y);
        ctx.lineTo(pos.x + squareW, pos.y);
      ctx.stroke();

      ctx.beginPath();
        pos = {x: 19/100*canvasW, y:61/100*canvasH};
        ctx.moveTo(pos.x,pos.y);
        ctx.lineTo(pos.x + squareW, pos.y);
      ctx.stroke();

      ctx.beginPath();
        pos = {x: 68/100*canvasW, y:72/100*canvasH};
        ctx.moveTo(pos.x,pos.y);
        ctx.lineTo(pos.x + squareW, pos.y);
      ctx.stroke();

      ctx.beginPath();
        pos = {x: 68/100*canvasW, y:72/100*canvasH};
        ctx.moveTo(pos.x,pos.y);
        ctx.lineTo(pos.x + squareW, pos.y);
      ctx.stroke();

      ctx.beginPath();
        pos = {x: 90/100*canvasW, y:39/100*canvasH};
        ctx.moveTo(pos.x,pos.y);
        ctx.lineTo(pos.x + squareW, pos.y);
      ctx.stroke();

    }

    init();
  }

  render () {
    return (
      <div style={{ height: '100%', width: '100%', fontSize: '18px', position: 'absolute' }}>
        <canvas ref='back'></canvas>
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
          <p className='desc'>Avec l’impression 3D, il est devenu possible de réaliser des pièces en volume à partir d’un fichier numérique au moyen d’une imprimante. Ces pièces sont le plus souvent utilisées comme prototypes pour des usages industriels, mais pour tout autres styles d'usages par le grand public.</p>
          <p className='desc'>Découvrez sur notre site les articles les plus intéressants sur ce qui a été fait grâce à l'impression 3D !</p>
          <Link className='button' to='/articles'>ENTRER</Link>
        </div>
      </div>
    )
  }
}

const HomeConnected = connect(mapStateToProps)(Home)

export default class HomeAnim extends React.Component {

  componentWillLeave (cb) {
    setTimeout(cb, 500)
  }

  render () {
    return (
      <div ref='main' style={{ height: '100%', width: '100%', position: 'absolute', zIndex: '200', overflow:'hidden' }}>
        <HomeConnected {...this.props} />
      </div>
    )
  }
}
