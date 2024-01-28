import React from 'react'
import { projects } from './../components/ProjectList/ProjectList'
import Project from '../components/Project/Project'


export default function Projects() {
	return (
		<div>
			<main className="section">
				<div className="container">
					<h2 className="title-1">Projects</h2>
					<ul className="projects">
						{projects.map((project, index) => <Project
							key={project.id}
							title={project.title}
							img={project.img}
							imgBig={project.imgBig}
							link={project.gitHubLink}
							index={index}
						/>)}
					</ul>
				</div>
			</main>

		</div>
	)
}
