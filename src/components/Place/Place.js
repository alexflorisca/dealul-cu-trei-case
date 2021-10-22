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
		</section>
		<ResponsiveImages>
			<StaticImage
				src="../../images/house-1.jpeg"
				formats={['auto', 'webp', 'avif']}
				alt="Our converted house"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/house-2.jpeg"
				formats={['auto', 'webp', 'avif']}
				alt="Our converted house"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/house-terrace.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Terrace of our converted house"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/house-babu.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Babu protecting our house"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
		</ResponsiveImages>
		<section className="full-width section zero-tp-mobile">
			<p>
				We're currently in the process of bringing these back to life. The middle house was our
				first project and that's where we now call home. We've also just finished converting the
				barn next to it and we're excited to share this with like minded people!
			</p>
		</section>
		<ResponsiveImages>
			<StaticImage
				src="../../images/view-in-summer.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="View in the summer"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/summer-view.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="View in the summer"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/terrace-sunset.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Terrace at sunset"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/sunset.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Sunset"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/dog-house-winter.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Dog house in winter"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/fire.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Fire"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/fireside-chats.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Chats by the fire"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/fireside-miki.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Guarding the fire"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/culita-cu-view.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Our neighbour on top of the hill"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/haybell-house.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Neighbouring haybel house"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/barn-in-winter-3.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="House in the winter"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/snow-dogs.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Dogs in the snow"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/snow-first-house.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Snowy sign Dealul Cu Trei Case"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/snowy-whiteout.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Winter wonderland"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/snowy-babu.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Snowy Babu, our first dog"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/snowy-flags.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Barn in the winter"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
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
					src="../../images/la-claie.jpg"
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
					farms and gardens. It's mesmerising to see how they live this busy but slow paced life,
					how they help each other and find freedom and happiness in simplicity.
				</p>
			</div>
		</section>
	</>
);

export default Place;
