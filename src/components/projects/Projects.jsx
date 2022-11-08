import React from "react";
import "./projects.css";
import calculadora from "../../assets/calculadora.jpg";
import appTareas from "../../assets/appTareas.jpg";
import henryFoods from "../../assets/henryFoods.jpg";
import rockStarPlace from "../../assets/rockStarPlace.jpg";
import weatherApp from "../../assets/weatherApp.jpg";
import tateti from "../../assets/tateti.jpg";
import appClima from "../../assets/appClimaNode.jpg";

const Projects = () => {
	return (
		<section id="projects" className="projects section">
			<h2 className="section__title">Mis proyectos</h2>

			<br></br>
			<br></br>

			<div className="projects__container container grid ">
				<div className="project__data card">
					<img src={appClima} alt="project" className="project__image" />
					<div class="card-bio">
						<p>app del clima en NodeJS.</p>
					</div>
					<h2 className="project__title">App del Clima en NodeJS</h2>
					<span className="project__subtitle">Node JS</span>
					<div className="project__url">
						<a
							className="linkProject"
							href="https://github.com/mgstraface/appclimanode"
							rel="noreferrer"
							target="_blank"
						>
							Code
						</a>
						<a
							className="linkProject"
							href="https://www.linkedin.com/feed/update/urn:li:activity:6995758904773079040/"
							rel="noreferrer"
							target="_blank"
						>
							Demo
						</a>
					</div>
				</div>
				<div className="project__data card">
					<img src={calculadora} alt="project" className="project__image" />
					<div class="card-bio">
						<p>Calculadora interactiva con REACT.</p>
					</div>
					<h2 className="project__title">Calculadora Interactiva</h2>
					<span className="project__subtitle">React - CSS</span>
					<div className="project__url">
						<a
							className="linkProject"
							href="https://github.com/mgstraface/calculadora"
							rel="noreferrer"
							target="_blank"
						>
							Code
						</a>
						<a
							className="linkProject"
							href="https://calculadora-woad-zeta.vercel.app"
							rel="noreferrer"
							target="_blank"
						>
							Deploy
						</a>
					</div>
				</div>

				<div className="project__data card">
					<img src={tateti} alt="project" className="project__image" />
					<div class="card-bio">
						<p>app TA-TE-TI o TRES EN LINEA.</p>
					</div>
					<h2 className="project__title">TA-TE-TI</h2>
					<span className="project__subtitle">React - CSS</span>
					<div className="project__url">
						<a
							className="linkProject"
							href="https://github.com/mgstraface/ta-te-ti"
							rel="noreferrer"
							target="_blank"
						>
							Code
						</a>
						<a
							className="linkProject"
							href="https://ta-te-ti-three.vercel.app"
							rel="noreferrer"
							target="_blank"
						>
							Deploy
						</a>
					</div>
				</div>

				<div className="project__data card">
					<img src={appTareas} alt="project" className="project__image" />
					<div class="card-bio">
						<p>App para organizar tareas.</p>
					</div>
					<h2 className="project__title">app Tareas</h2>
					<span className="project__subtitle">React - CSS</span>
					<div className="project__url">
						<a
							className="linkProject"
							href="https://github.com/mgstraface/apptareas"
							rel="noreferrer"
							target="_blank"
						>
							Code
						</a>
						<a
							className="linkProject"
							href="https://apptareas.vercel.app"
							rel="noreferrer"
							target="_blank"
						>
							Deploy
						</a>
					</div>
				</div>

				<div className="project__data card">
					<img src={weatherApp} alt="project" className="project__image" />
					<div class="card-bio">
						<p>Aplicación de clima con REACT y consultas a una API externa.</p>
					</div>
					<h2 className="project__title">Weather APP</h2>
					<span className="project__subtitle">React - CSS</span>
					<div className="project__url">
						<a
							className="linkProject"
							href="https://github.com/mgstraface/weatherapp"
							rel="noreferrer"
							target="_blank"
						>
							Code
						</a>
						<a
							className="linkProject"
							href="https://mgsweatherapp.vercel.app"
							rel="noreferrer"
							target="_blank"
						>
							Deploy
						</a>
					</div>
				</div>

				<div className="project__data card">
					<img src={henryFoods} alt="project" className="project__image" />
					<div class="card-bio">
						<p>Proyecto individual realizado en el bootcamp de soyHenry.</p>
					</div>
					<h2 className="project__title">Henry Foods</h2>
					<span className="project__subtitle">
						React - Redux - CSS - NodeJS - Express - Sequelize - API
					</span>
					<div className="project__url">
						<a
							className="linkProject"
							href="https://github.com/mgstraface/piHenryFoods"
							rel="noreferrer"
							target="_blank"
						>
							Code
						</a>
						<a
							className="linkProject"
							href="https://www.youtube.com/watch?v=QHltCVePVvA"
							rel="noreferrer"
							target="_blank"
						>
							Video demo
						</a>
					</div>
				</div>

				<div className="project__data card">
					<img src={rockStarPlace} alt="project" className="project__image" />
					<div class="card-bio">
						<p>Proyecto final del bootcamp de soyHenry, trabajando en grupo de 7 personas.</p>
					</div>
					<h2 className="project__title">RockStar Place</h2>
					<span className="project__subtitle">
						React - Redux - Styled Components - NodeMailer - Auth - MongoDB - MercadoPago - Leaflet
						- Cloudinary - TypeScript - NodeJS - Express
					</span>
					<div className="project__url">
						<a
							className="linkProject"
							href="https://github.com/SnowMoon272/PF-RockStar_Place"
							rel="noreferrer"
							target="_blank"
						>
							Code
						</a>
						<a
							className="linkProject"
							href="https://www.youtube.com/watch?v=k6iUCjMoBmc&t=9s/"
							rel="noreferrer"
							target="_blank"
						>
							Video demo
						</a>
						<a
							className="linkProject"
							href="https://pf-rock-star-place.vercel.app"
							rel="noreferrer"
							target="_blank"
						>
							Deploy
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
