import React from 'react'
import flagBY from './../img/icons/flagBY.png'
import a1 from './../img/icons/LogoA1.png'
import telegram from './../img/icons/logo-telegram.svg'
import viber from './../img/icons/viber-logo.svg'
import gmail from './../img/icons/logo-gmail.svg'



export default function Contacts() {
	return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Minsk, Belarus <img className='logo-contact' src={flagBY} alt='BELARUS' /> </p >
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram <img src={telegram} alt="Telegram" /> / Viber <img src={viber} alt="Viber" /> </h2>
						<p> + 375 44 728-14-53 <img className='logo-contact' src={a1} alt='A1' /></p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email<img src={gmail} alt="gmail" /></h2>
						<p>  alexiwanov3214@mail.com </p>
					</li>
				</ul>

			</div>
		</main>
	)
}
