import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="qualification ">
			<h2 className="section__title">Formación</h2>
			<span className="section__subtitle">Mis estudios</span>

			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggleState === 1
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(1)}
					>
						<i className="uil uil-graduation-cap qualification__icon">Educación</i>
					</div>

					<div
						className={
							toggleState === 2
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(2)}
					>
						<i className="uil uil-briefcase-alt qualification__icon">Experiencia</i>
					</div>
				</div>

				<div className="qualification__sections">
					<div
						className={
							toggleState === 1
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Desarrollo web full stack</h3>
								<span className="qualification__subtitle">Bootcamp soy Henry</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> abr 2022 - sep 2022
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<div className="qualification__line"></div>
							</div>
						</div>
						<br></br>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Técnico telefonía celular</h3>
								<span className="qualification__subtitle">EAIT Rosario</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2015 - 2016
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<div className="qualification__line"></div>
							</div>
						</div>
						<br></br>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Locución Nacional</h3>
								<span className="qualification__subtitle">ISET 18</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2010 - 2012
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<div className="qualification__line"></div>
							</div>
						</div>
						<br></br>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Escuela secundaria</h3>
								<span className="qualification__subtitle">E.E.M. n°310 José Gervasio Artigas</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2002-2007
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<div className="qualification__line"></div>
							</div>
						</div>
					</div>

					<div
						className={
							toggleState === 2
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
						onClick={() => toggleTab(2)}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Web Developer</h3>
								<span className="qualification__subtitle">Web developer Full Stack</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2022 - Presente
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<div className="qualification__line"></div>
							</div>
						</div>
						<br></br>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Administrativo taller central</h3>
								<span className="qualification__subtitle">Laromet S.A.</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2017 - 2021
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<div className="qualification__line"></div>
							</div>
						</div>
						<br></br>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Técnico telefonía celular</h3>
								<span className="qualification__subtitle">Autónomo</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2015 - 2017
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<div className="qualification__line"></div>
							</div>
						</div>
						<br></br>
					</div>
				</div>
			</div>
			<div className="secondBloob"></div>
			<div className="thirdBloob"></div>
			<div className="fourBloob"></div>
		</section>
	);
};

export default Qualification;
