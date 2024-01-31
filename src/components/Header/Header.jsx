import React from 'react'
import './Header.css'


export default function Header() {
	return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>Hi, my name is <em>Alexander</em></strong><br />
					a frontend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=134Cwi2vRvYXVM9ZX-U9Of1y3oduz2kKM" download className="btn">Download CV</a>
			</div>
		</header >
	)
}
