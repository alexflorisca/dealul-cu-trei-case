import React, { useRef } from 'react';
import * as styles from './nav.module.css';
import Logo from '../../../assets/d3c-logo-white.inline.svg'

export default function Nav() {

	const menu = useRef(null);
	const hamburger = useRef(null);

	const handleMenuClick = (event) => {
		menu.current.classList.toggle(styles.active);
		hamburger.current.classList.toggle(styles.active);
	}


	return (
		<nav className={styles.navbar}>
			<a href="/" className="logo">
				<Logo className={styles.logo} />
			</a>
			<ul ref={menu} className={styles.menu}>
				<li><a className={styles.navLink} href="#">The place</a></li>
				<li><a className={styles.navLink} href="#">The people</a></li>
				<li><a className={styles.navLink} href="#">Contact us</a></li>
			</ul>
			<div ref={hamburger} className={styles.hamburger} onClick={handleMenuClick}>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
			</div>
		</nav>
	)
}