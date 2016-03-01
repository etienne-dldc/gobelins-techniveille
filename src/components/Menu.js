import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MenuItem from './MenuItem'

const mapStateToProps = ({ articles }) => {
  
  return ({ articles })
}

export class Menu extends React.Component {
  static propTypes = {
    // state
    articles: PropTypes.array.isRequired
  };

  render () {
    const { articles } = this.props
    return (
      <div className="main-nav">
    		<header className="main-nav__header">
    			<button className="main-nav__btn-close"></button>
    			<div className="tags tags--dropdown">
    				<button className="tags__btn-dropdown">Filtrer</button>
    				<ul className="tags__list">
    					<li className="tags__item"><button className="tags__btn">Santé</button></li>
    					<li className="tags__item"><button className="tags__btn">Industrie</button></li>
    					<li className="tags__item"><button className="tags__btn">Espace</button></li>
    					<li className="tags__item"><button className="tags__btn">Art/Mode</button></li>
    					<li className="tags__item"><button className="tags__btn">Science</button></li>
    					<li className="tags__item"><button className="tags__btn">Tout</button></li>
    				</ul>
    			</div>
    			<button className="main-nav__btn-about">A propos</button>
    		</header>
  	  	<header className="main-nav__tags">
  	  		<div className="tags">
  				<ul className="tags__list">
  					<li className="tags__item"><button className="tags__btn">Santé</button></li>
  					<li className="tags__item"><button className="tags__btn">Industrie</button></li>
  					<li className="tags__item"><button className="tags__btn">Espace</button></li>
  					<li className="tags__item"><button className="tags__btn">Art/Mode</button></li>
  					<li className="tags__item"><button className="tags__btn">Science</button></li>
  					<li className="tags__item"><button className="tags__btn">Tout</button></li>
  				</ul>
  			</div>
  	  	</header>
  	  	<main className="main-nav__main">
  	  		<aside className="main-nav__aside main-nav__aside--left">
  	  			<button>Retour</button>
  	  		</aside>
  	  		<section className="main-nav__container">
  	  			<ul className="list--nav">
              { articles.map((art) => {
                return <MenuItem title={art.title} />
              }) }

              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
  	  				<li className="list__item is-disabled" style={{ backgroundImage: `url('http://lorempicsum.com/futurama/320/320/1')` }}>
  	  					<a className="list__link" href="#">
  	  						<h2 className="list__title">10 imprimées maisons en 24 heures</h2>
  	  						<div className="list__overlay"></div>
  	  					</a>
  	  				</li>
              <MenuItem />
              <MenuItem />
  	  				<li className="list__item is-disabled" style={{ backgroundImage: `url('http://lorempicsum.com/futurama/320/320/1')` }}>
  	  					<a className="list__link" href="#">
  	  						<h2 className="list__title">10 imprimées maisons en 24 heures</h2>
  	  						<div className="list__overlay"></div>
  	  					</a>
  	  				</li>
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
  	  			</ul>
  	  		</section>
  	  		<aside className="main-nav__aside main-nav__aside--right">
  	  			<button>à propos</button>
  	  		</aside>
  	  	</main>
  	  	<footer className="main-nav__tags">
  	  		<div className="tags">
    				<ul className="tags__list">
    					<li className="tags__item"><button className="tags__btn">Santé</button></li>
    					<li className="tags__item"><button className="tags__btn">Industrie</button></li>
    					<li className="tags__item"><button className="tags__btn">Espace</button></li>
    					<li className="tags__item"><button className="tags__btn">Art/Mode</button></li>
    					<li className="tags__item"><button className="tags__btn">Science</button></li>
    					<li className="tags__item"><button className="tags__btn">Tout</button></li>
    				</ul>
    			</div>
  	  	</footer>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Menu)
