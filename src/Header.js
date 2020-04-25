import React from 'react';
// import './assets/css/main.css';   this code is written in index.html
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		/* Header Section */
		<header id="header">
			<div className="inner">
				<Link to="/" className="logo">React Website</Link>
				<nav id="nav">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
				</nav>
				<a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
			</div>
		</header>
	)
}

export default Header;