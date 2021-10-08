import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const OurStory = () => (
	<div id="our-story" className="two-col">
		<div className="image">
			<StaticImage
				src="../images/mihaela-and-octavian.jpeg"
				formats={['auto', 'webp', 'avif']}
				alt="Mihaela and Octavian Florisca"
				loading="lazy"
				layout="fullWidth"
			/>
		</div>
		<div className="text">
			<h2>Our Story</h2>
			<p>
				Hello lovely people! We are Mihaela and Octavian, an oldish couple who after 3 years of
				backpacking around Austral-Asia, mostly volunteering and meeting awesome people from all
				over the world, have decided to settle down in the Transylvanian mountains called Apuseni.
			</p>
		</div>
	</div>
);

export default OurStory;
