import React from 'react'
import { NavLink } from 'react-router-dom'
import './Project.css'


export default function Project(props) {
	return (
		<NavLink to={`/projectItem/${props.index}`}>
			<li className="project">

				<img src={props.img} alt="Project img" className="project__img" />
				<h3 className="project__title">{props.title}</h3>

			</li >
		</NavLink >
	)
}
