// Component : Component is part of UI which is responsible for rendering the content.
// ideally you should render the component content in such a way that it should not be split into multiple one, so that we can achieve the reusability of the component.

// there are several types of components are available :
// 1. class based components
// class based components :
//to create a class based component we have to fire a command called rcc
// 2. function based components
// 3. pure components

import React from "react";

const Footer = (props) => {
  return (
    <>
<footer id="footer">
	<div className="container">
		<div className="row">

			<div className="col-md-4">
				
				<div className="footer-item">
					<div className="company-brand">
						<img src="images/main-logo.png" alt="logo" className="footer-logo" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis.</p>
					</div>
				</div>
				
			</div>

			<div className="col-md-2">

				<div className="footer-menu">
					<h5>About Us</h5>
					<ul className="menu-list">
						<li className="menu-item">
							<a href="/">vision</a>
						</li>
						<li className="menu-item">
							<a href="/">articles </a>
						</li>
						<li className="menu-item">
							<a href="/">careers</a>
						</li>
						<li className="menu-item">
							<a href="/">service terms</a>
						</li>
						<li className="menu-item">
							<a href="/">donate</a>
						</li>
					</ul>
				</div>

			</div>
			<div className="col-md-2">

				<div className="footer-menu">
					<h5>Discover</h5>
					<ul className="menu-list">
						<li className="menu-item">
							<a href="/">Home</a>
						</li>
						<li className="menu-item">
							<a href="/">Books</a>
						</li>
						<li className="menu-item">
							<a href="/">Authors</a>
						</li>
						<li className="menu-item">
							<a href="/">Subjects</a>
						</li>
						<li className="menu-item">
							<a href="/">Advanced Search</a>
						</li>
					</ul>
				</div>

			</div>
			<div className="col-md-2">

				<div className="footer-menu">
					<h5>My account</h5>
					<ul className="menu-list">
						<li className="menu-item">
							<a href="/">Sign In</a>
						</li>
						<li className="menu-item">
							<a href="/">View Cart</a>
						</li>
						<li className="menu-item">
							<a href="/">My Wishtlist</a>
						</li>
						<li className="menu-item">
							<a href="/">Track My Order</a>
						</li>
					</ul>
				</div>

			</div>
			<div className="col-md-2">

				<div className="footer-menu">
					<h5>Help</h5>
					<ul className="menu-list">
						<li className="menu-item">
							<a href="/">Help center</a>
						</li>
						<li className="menu-item">
							<a href="/">Report a problem</a>
						</li>
						<li className="menu-item">
							<a href="/">Suggesting edits</a>
						</li>
						<li className="menu-item">
							<a href="/">Contact us</a>
						</li>
					</ul>
				</div>

			</div>

		</div>
		

	</div>
</footer>

<div id="footer-bottom">
	<div className="container">
		<div class="row">
			<div class="col-md-12">

				<div class="copyright">
					<div class="row">

						<div class="col-md-6">
							<p>{props.appName} {new Date().getFullYear()}</p>
						</div>

						<div class="col-md-6">
							<div class="social-links align-right">
								<ul>
									<li>
										<a href="/"><i class="icon icon-facebook"></i></a>
									</li>
									<li>
										<a href="/"><i class="icon icon-twitter"></i></a>
									</li>
									<li>
										<a href="/"><i class="icon icon-youtube-play"></i></a>
									</li>
									<li>
										<a href="/"><i class="icon icon-behance-square"></i></a>
									</li>
								</ul>
							</div>
						</div>

					</div>
				</div>

			</div>
		</div>
	</div>
</div>
    </>
  );
};

export default Footer;
