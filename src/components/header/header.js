import React, { Component } from 'react';
import{ Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
			<header>
				<div className="logo">
					HighLevel3D
				</div>
				<nav>
					<ul>
						<li className="first">
						<Link to="/">home</Link>
						</li>
						<li>
							<Link to="/Products">products</Link>	 
						</li>
						<li className="last">
							<Link to="/">contact</Link>	 
						</li>
					</ul>
				</nav>
			</header>
    );
  }
}

export default Header;
