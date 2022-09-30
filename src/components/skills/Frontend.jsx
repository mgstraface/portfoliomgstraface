import React from "react";
import skills from "../../assets/tecnologias.png";

const Frontend = () => {
	return (
		<div className="skills__section">
			<h2 className="section__title">Skills</h2>

			<div className="skills__content">
				<img src={skills} className="LogosTecnologias" alt="logosTecnologias" />
			</div>
		</div>
	);
};

export default Frontend;
