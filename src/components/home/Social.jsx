import React from "react";

const Social = () => {
	return (
		<div className="home__social">
			<a
				href="https://github.com/mgstraface"
				rel="noreferrer"
				className="home__social-icon"
				target="_blank"
			>
				<i className="uil uil-github-alt"></i>
			</a>
			<a
				href="https://www.linkedin.com/in/matías-straface-369a66238/"
				rel="noreferrer"
				className="home__social-icon"
				target="_blank"
			>
				<i className="uil uil-linkedin-alt"></i>
			</a>
			<a href="mailto:matiasgstraface@gmail.com" rel="noreferrer" className="home__social-icon">
				<i className="uil uil-envelope-alt"></i>
			</a>
		</div>
	);
};

export default Social;
