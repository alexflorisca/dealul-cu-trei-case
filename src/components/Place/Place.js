import React from 'react';
import ResponsiveImages from '../ResponsiveImages/ResponsiveImages';
import { StaticImage } from 'gatsby-plugin-image';

const Place = () => (
	<>
		<section id="place" className="section full-width zero-tm-mobile">
			<h2>The Place</h2>
			<p>
				We live on a large hill with 3 old traditional wooden houses and 3 barns (hence the name!).
				As most young people in theses villages have moved to the city, old and beautiful wooden
				houses are becoming ruins very fast, the forest is re-growing and old traditions are
				starting to disappear. We wanted to restore and preserve some of these buildings and
				traditions
			</p>
			<p>
				We're currently in the process of bringing these back to life. The middle house was our
				first project and that's where we now call home. We've also just finished converting the
				barn next to it and we're excited to share this with like minded people!
			</p>
		</section>
		<ResponsiveImages>
			<StaticImage
				src="../images/barn-in-winter-2.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Barn in the winter"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/barn-in-winter-3.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Barn in the winter"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/view-in-summer.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="View in the summer"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/sunset.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Sunset"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/dog-house-winter.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Dog house in winter"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/barn-view-through-window.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="View from the barn"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/fire.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Fire"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/culita-cu-view.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Our neighbour on top of the hill"
				loading="lazy"
				layout="fullWidth"
			/>
		</ResponsiveImages>
		{/* </section> */}
		<p className="full-width">
			There is incredible energy and beauty here, unspoilt nature and amazing people living a very
			traditional life. Everything beats to its own rhythm and we try to respect and work in tandem
			with nature and the local culture and traditions. We capture water from the spring in the
			woods, buy dairy products, honey etc. from the neighbours and we have fruit trees and wild
			flowers as much as you can see. It is so beautifully quiet and away from the craziness of the
			world.
		</p>
		<section className="two-col">
			<div>
				<StaticImage
					src="../images/la-capite.jpg"
					formats={['auto', 'webp', 'avif']}
					alt="Working with the neighbours making hay bells"
					loading="lazy"
					layout="fullWidth"
				/>
			</div>
			<div className="text">
				<h3>Is it for you?</h3>
				<p>
					Dealul Cu Trei Case is a magical place for people that like quietness and nature, a great
					place for reflection and introspection. There are no TVs, limited phone signal and not
					really a place for party goers, sorry! This is a remote place and people still live
					traditionally, making the hay, picking fruits, making jams and pies, managing small home
					farms and gardens. Hopefully this gives you a flavour of the atmopshere around here to see
					if it's for you.
				</p>
			</div>
		</section>
	</>
);

export default Place;
