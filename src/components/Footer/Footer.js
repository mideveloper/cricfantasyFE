import React from "react";

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-footer-2 ftco-section">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-2">
					<div className="ftco-footer-widget">
						<h2 className="ftco-heading-2">Knights</h2>
					</div>
				</div>
				<div className="col-md">
					<div className="foo-nav navbar-collapse">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item "><a href="index.html" className="nav-link">Home</a></li>
							<li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
							<li className="nav-item"><a href="games.html" className="nav-link">Games</a></li>
							<li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
							<li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
							<li className="nav-item active"><a href="#" className="nav-link">Play</a></li>
						</ul>
					</div>
				</div>
				<div className="col-md-3">
					<p className="copyright">
						All rights reserved 10Pearls
					</p>
				</div>
			</div>
		</div>
	</footer>
  );
};

export default Footer;
