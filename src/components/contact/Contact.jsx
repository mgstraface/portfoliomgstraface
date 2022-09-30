import React from "react";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import envelope from "../../assets/envelope.png";

import "./contact.css";

const Contact = () => {
	return (
		<section className="contact section" id="contact">
			<h2 className="section__title">Contacto</h2>
			<div className="contacto_social">
				<a
					href="https://github.com/mgstraface"
					rel="noreferrer"
					className="contacto-social-icon"
					target="_blank"
				>
					<img className="iconoCont" src={github} alt="github" />
				</a>
				<a
					href="mailto:matiasgstraface@gmail.com"
					rel="noreferrer"
					className="contacto-social-icon"
				>
					<img className="envelope" src={envelope} alt="mail" />
				</a>
				<a
					href="https://www.linkedin.com/in/matías-straface-369a66238/"
					rel="noreferrer"
					className="contacto-social-icon"
					target="_blank"
				>
					<img className="iconoCont" src={linkedin} alt="linkedin" />
				</a>
			</div>
		</section>
	);
};

export default Contact;
