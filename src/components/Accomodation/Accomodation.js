import React from 'react';
import ResponsiveImages from '../ResponsiveImages/ResponsiveImages';
import { StaticImage } from 'gatsby-plugin-image';

const Accomodation = () => (
	<>
		<section id="accomodation" className="full-width zero-tm-mobile">
			<h2>Accomodation and Facilities</h2>
			<p>
				For now, we can accomodate you in the newly restored and converted barn, a magical space
				with lovely views of the surrounding mountains and hills. The barn can accommodate max 5
				people, with a double, a single and a sofa bed (access to sleeping space requires climbing
				stairs or a ladder).{' '}
			</p>
			<div className="two-col" style={{ alignItems: 'flex-start' }}>
				<div className="inside">
					<h3>Inside</h3>
					<ul>
						<li>Small self catering kitchen</li>
						<li>Electric hob</li>
						<li>Pans, cutlery, glasses, mugs, etc...</li>
						<li>Bathroom with shower, sink and toilet</li>
						<li>Hot water available all year round</li>
						<li>Wood burner for those cold winter nights</li>
					</ul>
				</div>
				<div className="outside">
					<h3>Outside</h3>
					<ul>
						<li>Compost toilet</li>
						<li>Outdoor shower with spring water</li>
						<li>Covered terrace </li>
						<li>Rustic table and chairs</li>
					</ul>
				</div>
			</div>
		</section>
		<ResponsiveImages>
			<StaticImage
				src="../images/barn-outside.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Outside of the barn"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/barn-in-winter-wide.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Outside of barn in the winter"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/barn-living-room.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Barn living room"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/barn-living-room-3.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Barn living room"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/barn-living-room-4.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Barn living room"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/barn-kitchen.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Barn kitchen"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/barn-bathroom.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Barn bathroom"
				loading="lazy"
				layout="fullWidth"
			/>
			<StaticImage
				src="../images/fire-wide.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Fire by the barn"
				loading="lazy"
				layout="fullWidth"
			/>
		</ResponsiveImages>
		<section className="full-width">
			<p>
				20 metres from the barn, there is wood and a fireplace for an evening chat and stargazing by
				the fire. This is a self catering place but we can help you with your food shopping from the
				nearest town - about 40 min drive - and from our neighbours (we try and source most products
				from locals but will do a shopping trip to town when needed). You're free to use produce
				from our own gardens when the season is right, in exchange for a helping hand with
				gardening. Depending on the season, there are fruits in the trees, wild berries, many types
				of mushrooms and much foraging to be done.
			</p>
		</section>
	</>
);

export default Accomodation;
