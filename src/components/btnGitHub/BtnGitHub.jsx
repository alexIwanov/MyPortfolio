import React from 'react'
import imgGitHub from './../../img/icons/gitHub-black.svg';
import './BtnGitHub.css'


export default function BtnGitHub({ children }) {
	return (
		<button className="btn-outline">
			<img src={imgGitHub} alt="gitHub link" />
			{children}
		</button>
	)
}
