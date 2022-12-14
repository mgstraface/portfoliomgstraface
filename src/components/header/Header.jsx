import React, { useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
	/* Toggle menu */
	const [Toggle, showMenu] = useState(false);
	const [activeNav, setActiveNav] = useState("#home");

	const [nav, setNav] = useState(false);

	const handleClick = () => setNav(!nav);

	return (
		<header className="header">
			<ScrollspyNav
				scrollTargetIds={["home", "about", "skills", "projects", "contact"]}
				activeNavClass="active-link"
				offset={-50}
				scrollDuration={10}
			>
				<nav className="nav container">
					<p className="nav__logo">
						<img src={logo} alt="nav-brand" />
						<span>Matías Straface</span>
					</p>

					<div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
						<ul className="nav__list grid">
							<li onClick={handleClick} className="nav__item">
								<a
									href="#home"
									onClick={() => setActiveNav("#home")}
									className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
								>
									<i className="uil uil-estate nav__icon"></i> Home
								</a>
							</li>
							<li className="nav__item">
								<a
									href="#about"
									onClick={() => setActiveNav("#about")}
									className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
								>
									<i className="uil uil-user nav__icon"></i> Sobre mí
								</a>
							</li>
							<li className="nav__item">
								<a
									href="#skills"
									onClick={() => setActiveNav("#skills")}
									className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
								>
									<i className="uil uil-file-alt nav__icon"></i> Skills
								</a>
							</li>
							<li className="nav__item">
								<a
									href="#projects"
									onClick={() => setActiveNav("#projects")}
									className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}
								>
									<i className="uil uil-scenery nav__icon"></i> Proyectos
								</a>
							</li>
							<li className="nav__item">
								<a
									href="#contact"
									onClick={() => setActiveNav("#contact")}
									className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
								>
									<i className="uil uil-message nav__icon"></i> Contacto
								</a>
							</li>
						</ul>

						<i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
					</div>

					<div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
						<i className="uil uil-bars"></i>
					</div>
				</nav>
			</ScrollspyNav>
		</header>
	);
};

export default Header;
