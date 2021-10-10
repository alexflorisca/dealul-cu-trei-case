import React from 'react';
import * as styles from './contact.module.css';
import EmailIcon from '../../assets/envelop.inline.svg';
import PhoneIcon from '../../assets/phone.inline.svg';
import InstagramIcon from '../../assets/instagram.inline.svg';

const Contact = () => (
	<section id="contact" className="full-width">
		<h2>Contact Us</h2>
		<div className="two-col" style={{ marginLeft: 0, alignItems: 'normal' }}>
			<p className="text" style={{ marginLeft: 0 }}>
				We love to meet like minded people and share this place with you. Please get in touch with
				us if you have any questions or just want to find out more :)
			</p>
			<div className="text">
				<p className={styles.contactRow}>
					<a href="mailto:oflorisca@gmail.com" target="_blank" rel="noreferrer">
						<EmailIcon width="20" className={styles.contactIcon} /> oflorisca@gmail.com
					</a>
				</p>
				<p className={styles.contactRow}>
					<a href="tel:+40 737564617" target="_blank" rel="noreferrer">
						<PhoneIcon width="20" className={styles.contactIcon} /> +40 737564617
					</a>
				</p>
				<p className={styles.contactRow}>
					<a href="https://www.instagram.com/dealulcutreicase/" target="_blank" rel="noreferrer">
						<InstagramIcon width="20" className={styles.contactIcon} /> Instagram
					</a>
				</p>
			</div>
		</div>
	</section>
);

export default Contact;
