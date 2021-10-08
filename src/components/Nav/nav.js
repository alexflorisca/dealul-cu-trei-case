import React, { useRef } from 'react';
import * as styles from './nav.module.css';
import Logo from '../../assets/d3c-logo-white.inline.svg';

export default function Nav() {
	const menu = useRef(null);
	const hamburger = useRef(null);

	const handleMenuClick = event => {
		menu.current.classList.toggle(styles.active);
		hamburger.current.classList.toggle(styles.active);
	};

	return (
		<nav className={styles.navbar}>
			<a href="/" className="logo">
				<Logo className={styles.logo} />
			</a>
			<ul ref={menu} className={styles.menu}>
				<li>
					<a className={styles.navLink} href="#our-story">
						Our Story
					</a>
				</li>
				<li>
					<a className={styles.navLink} href="#place">
						The Place
					</a>
				</li>
				<li>
					<a className={styles.navLink} href="#accomodation">
						Accomodation
					</a>
				</li>
				<li>
					<a className={styles.navLink} href="#travel">
						Travel
					</a>
				</li>
				<li>
					<a className={styles.navLink} href="#cost">
						Cost
					</a>
				</li>
				<li>
					<a className={styles.navLink} href="#contact">
						Contact Us
					</a>
				</li>
			</ul>
			<div role="button" ref={hamburger} className={styles.hamburger} onClick={handleMenuClick}>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
			</div>
		</nav>
	);
}
