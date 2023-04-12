import React, { Fragment,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/authAction";
import { getBooks} from '../../redux/actions/searchAction'
import api from "../../utils/api";

const Header = ({ auth: { isAuthenticated}, logout,getBooks,books:{books} }) => {
	const navigate = useNavigate();
	const [searchedValue, setSearchedValue] = useState();
    const [inputValue, setInputValue] = React.useState("");
  	const inputRef = React.createRef();
	const search = () => {
		
		setSearchedValue(inputValue)
		
		getBooks(inputValue,navigate);
	}

	//const [search,setSearch]=useState("");
    
	
	// const search = "Life+of+the+wild";
	// const searchBook = (evt) => {

	// 	if (evt.key === "Enter") {
	// 	  navigate('/Products', {
	// 		state: {
	// 		  data: [search]
	// 		}
	// 	  })
	// 	}
	//   }

	const authLinks = (
		<div id="header-wrap">

			<div className="top-content">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="social-links">
								<ul>
									<li>

										<a href="/"><i class="icon icon-facebook"></i></a>
									</li>
									<li>
										<a href="/"><i className="icon icon-twitter"></i></a>
									</li>
									<li>
										<a href="/"><i className="icon icon-youtube-play"></i></a>
									</li>
									<li>
										<a href="/"><i className="icon icon-behance-square"></i></a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-7">
							<div className="right-element">
								<Link to="/friends"><i className="icon icon-notes"></i><span className="user-account for-buy">Friends</span></Link>
								<Link to="/mybookshelf"  ><i className="icon icon-navicon"></i><span className="cart for-buy">My Books Shelf</span></Link>
								<Link to="/cart" ><i className="icon icon-clipboard"></i><span className="cart for-buy">Cart:(0 $)</span></Link>
								<a onClick={logout} href="#!">
									<i className="fas fa-sign-out-alt" />
									<span className="hide-sm">Logout</span>
								</a>




								<div className="search-box">
								

									<input
											type="text"
											ref={inputRef}
											value={inputValue}
											onChange={() => setInputValue(inputRef.current.value)}
											placeholder="Enter book and click icon"
											className="search-field text search-input"
										/>
											<button onClick={search} className="search-button"  ><i class="icon icon-search"></i></button>
								
								</div>



							</div>
						</div>

					</div>
				</div>
			</div>

			<header id="header">
				<div className="container">
					<div className="row">

						<div className="col-md-2">
							<div className="main-logo">
							<a href="/"><img src="images/main-logo.png" alt="logo" className="footer-logo" /></a>
							</div>

						</div>

						<div className="col-md-10">

							<nav id="navbar">
								<div className="main-menu stellarnav">
									<ul className="menu-list">
									<Link to="/dashboard"><span className="menu-item">Dashboard</span></Link>
										<li className="menu-item"><a href="/myshelf" className="nav-link" data-effect="About">My Books</a></li>
										<li className="menu-item"><a href="/quote" className="nav-link" >Quotes</a></li>
										<li className="menu-item"><a href="#popular-books" className="nav-link" data-effect="Shop">people</a></li>

									
									</ul>

									<div className="hamburger">
										<span className="bar"></span>
										<span className="bar"></span>
										<span className="bar"></span>
									</div>

								</div>
							</nav>

						</div>

					</div>
				</div>
			</header>

		</div>
	);

	//   <ul>
	//   <li>
	//     <Link to="/profiles">Developers</Link>
	//   </li>
	//   <li>
	//     <Link to="/register">Register</Link>
	//   </li>
	//   <li>
	//     <Link to="/login">Login</Link>
	//   </li>
	// </ul>
	//<Link to="/login">Login</Link> 
	const guestLinks = (<div id="header-wrap">

		<div className="top-content">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<div className="social-links">
							<ul>
								<li>

									<a href="/"><i class="icon icon-facebook"></i></a>
								</li>
								<li>
									<a href="/"><i className="icon icon-twitter"></i></a>
								</li>
								<li>
									<a href="/"><i className="icon icon-youtube-play"></i></a>
								</li>
								<li>
									<a href="/"><i className="icon icon-behance-square"></i></a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-5">
						<div className="right-element">

						<div className="search-box">
								

								<input
										type="text"
										ref={inputRef}
										value={inputValue}
										onChange={() => setInputValue(inputRef.current.value)}
										placeholder="Enter book and click icon"
										className="search-field text search-input"
									/>
									<button onClick={search} className="search-button"  ><i class="icon icon-search"></i></button>
							
							</div>




						</div>
					</div>

				</div>
			</div>
		</div>

		<header id="header">
			<div className="container">
				<div className="row">

					<div className="col-md-2">
						<div className="main-logo">
						<a href="/"><img src="images/main-logo.png" alt="logo" className="footer-logo" /></a>
						</div>

					</div>

					<div className="col-md-10">

						<nav id="navbar">
							<div className="main-menu stellarnav">
								<ul className="menu-list">
								<Link to="/"  ><span className="for-buy menu-item">Home</span></Link>
								<Link to="/about"  ><span className=" for-buy menu-item">About</span></Link>
									<Link to="/mybookshelf"  ><span className="for-buy menu-item">My Books</span></Link>
							<Link to="/register"><span className=" for-buy menu-item">Register</span></Link>
							<Link to="/login"  ><span className=" for-buy menu-item">Login</span></Link>

							<Link to="/Awards"  ><span className=" for-buy menu-item">Awards</span></Link>
								
							<Link to="/Join"  ><span className=" for-buy menu-item">Join</span></Link>

							
								</ul>

								<div className="hamburger">
									<span className="bar"></span>
									<span className="bar"></span>
									<span className="bar"></span>
								</div>

							</div>
						</nav>

					</div>

				</div>
			</div>
		</header>

	</div>);

	return (

		<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>

	);
};

Header.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state,ownProps) => ({
	auth: state.authReducer,
	books: state.searchReducer,
});

export default connect(mapStateToProps, { logout, getBooks})(Header);
