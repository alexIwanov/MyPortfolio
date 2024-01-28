import React, { useEffect, useRef, useState } from 'react'
import './BtnDarkTheme.css'
import sun from './../../img/icons/sun.svg'
import moon from './../../img/icons/moon.svg'



export default function BtnDarkTheme() {

	const [darkTheme, setDarkTheme] = useState('light')
	const btnRef = useRef(null)

	useEffect(() => {

		if (darkTheme === 'dark') {
			document.body.classList.add('dark')
			btnRef.current.classList.add('dark-mode-btn--active')
		} else {
			document.body.classList.remove('dark')
			btnRef.current.classList.remove('dark-mode-btn--active')
		}


	}, [darkTheme])



	function toggleDarkTheme() {
		setDarkTheme((currrentValue) => {
			return currrentValue === 'light' ? 'dark' : 'light'
		})

	}

	return (
		<button ref={btnRef} onClick={toggleDarkTheme} className="dark-mode-btn">
			<img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
			<img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
		</button>
	)
}
