import React, { Component } from 'react';
import{ Link } from 'react-router-dom';
import { 
	Button ,
	Dropdown, 
	DropdownToggle, 
	DropdownMenu, 
	DropdownItem 
} from 'reactstrap';


// img
import Logo from '../../Assets/img/logo2.png';


class Header extends Component {
	constructor(props){
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen : false
		};
	}

	toggle(){
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}
  render() {
    return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
				<a className="navbar-brand" href="index-2.0.html"><img src={Logo} /></a>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="search-form">
						google search
					</div>

					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
						<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
							<DropdownToggle 
								caret 
								className="btn-explore"
								tag="div"
							>
								分類目錄
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem header>Header</DropdownItem>
								<DropdownItem>Another Action</DropdownItem>
								<DropdownItem>Another Action</DropdownItem>
							</DropdownMenu>
						</Dropdown>
						</li>
						<li className="nav-item">
							<a className="nav-link btn btn-outline-secondary" href="/dashboard"><i class="fa fa-user-circle-o" aria-hidden="true"></i> 登入</a>
						</li>
					</ul>
				</div>



			</nav>	


    );
  }
}

export default Header;
