import React from 'react'
import Header from '../components/Header/Header'

export default function Home() {
	return (
		<>
			<Header />
			<main className="section">
				<div className="container">

					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS,SCSS, NPM, Yarn, TailwindCSS, </p>
						</li>

					</ul>

				</div>
			</main>
		</>
	)
}
