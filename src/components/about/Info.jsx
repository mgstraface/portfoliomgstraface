import React from "react";

const Info = () => {
	return (
		<div className="about__info grid">
			<div className="about__box">
				<i className="bx bx-award about__icon"></i>

				<h3 className="about__title">Experiencia</h3>
				<span className="about__subtitle">1 Año</span>
			</div>

			<div className="about__box">
				<i className="bx bx-support about__icon"></i>

				<h3 className="about__title">Disponibilidad</h3>
				<span className="about__subtitle">Full time</span>
			</div>
		</div>
	);
};

export default Info;
