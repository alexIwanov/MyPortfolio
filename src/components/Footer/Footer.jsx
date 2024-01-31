import React from 'react'
import './Footer.css';
import vk from './../../img/icons/vk.svg'
import gitHub from './../../img/icons/gitHub.svg';
import viber from './../../img/icons/viber_footer.svg';
import telegram from './../../img/icons/telegram_footer.svg';
import { NavLink } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item"> <NavLink to='https://vk.com/idiwanov'> <img src={vk} alt="Link" /></NavLink></li>
						<li className="social__item"> <img src={telegram} alt="Link" /></li>
						<li className="social__item"><img src={viber} alt="Link" /></li>
						<li className="social__item"><NavLink to='https://github.com/alexIwanov'><img src={gitHub} alt="Link" /></NavLink></li>
					</ul>
					<div className="copyright">
						<p>© 2024 Frontend</p>
					</div>
				</div>
			</div >
		</footer >
	)
}
