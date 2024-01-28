import React from 'react'
import { useParams } from 'react-router-dom'
import imgBig02 from './../img/projects/02-big.jpg';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import { projects } from './../components/ProjectList/ProjectList'



export default function ProjectItem() {
	const { id } = useParams()
	const project = projects[id]

	console.log(project)

	return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{project.title}</h1>
					<img src={project.imgBig} alt={project.title} className="project-details__cover" />
					<div className="project-details__desc">
						<p>Skills: {project.skills}</p>
					</div>

					{project.gitHubLink && <BtnGitHub >GitHub repo</BtnGitHub>}


				</div>
			</div>
		</main>
	)
}
