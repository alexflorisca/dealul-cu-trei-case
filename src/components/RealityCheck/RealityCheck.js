import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const RealityCheck = () => (
	<section className="full-width">
		<h2>Reality Check</h2>
		<p>
			As with everything - despite being quite idyllic - it is no perfect place and not suitable for
			everyone. Here are a few things that might be useful in your decision to visit 'Dealul cu trei
			case' or not.
		</p>
		<div className="two-col spaced">
			<StaticImage
				src="../../images/wild.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="It's wild"
				loading="lazy"
				layout="fullWidth"
				className="two-col-right"
			/>
			<div className="two-col-left">
				<h3>It's wild!</h3>
				<p>
					We are in the middle of a mountain, with it's many beauties but also potential hazards.
					There are wild animals like deer, foxes, snakes (non poisonous as far as we know), wild
					boar, wolfs, mice, insects, 'noisy' crickets, tick, bees, etc.... Strangely, bears don't
					seam to inhabit this area, although widely present in the Transylvanian mountains. This is
					an area of high biodiversity, quite rare nowadays. If you feel anxious about this or the
					remoteness, this might not be the place for you. There are no known local incidents of
					wild animals endangering humans as far as we and the neighbours know.
				</p>
			</div>
		</div>
		<div className="two-col spaced">
			<StaticImage
				src="../../images/pets.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Lot's of pets"
				loading="lazy"
				layout="fullWidth"
				className="two-col-left"
			/>
			<div className="two-col-right">
				<h3>Lots of pets</h3>
				<p>
					We have one cat and four lively but friendly dogs, that are likely to follow you in your
					hikes and pretty much everywhere, (in exchange for cuddles :)
				</p>
			</div>
		</div>
		<div className="two-col spaced">
			<StaticImage
				src="../../images/road.jpeg"
				formats={['auto', 'webp', 'avif']}
				alt="The road is steep and muddy"
				loading="lazy"
				layout="fullWidth"
				className="two-col-right"
			/>
			<div className="two-col-left">
				<h3>Access</h3>
				<p>
					The last 900m of the road to us is not paved and relatively steep, so in difficult weather
					like snow, it might not be drivable. In that very rare cases, access is only by foot.
				</p>
			</div>
		</div>
		<div className="two-col spaced">
			<StaticImage
				src="../../images/hilly.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="It's hilly"
				loading="lazy"
				layout="fullWidth"
				className="two-col-left"
			/>
			<div className="two-col-right">
				<h3>It's hilly</h3>
				<p>
					The terrain is hilly and uneven. Good shoes are recommended and a fair level of fitness if
					you plan to hike. Also weather can change relatively fast so bring clothes for wet and dry
					weather, cold and hot.
				</p>
			</div>
		</div>
		<div className="two-col spaced">
			<StaticImage
				src="../../images/spring.jpeg"
				formats={['auto', 'webp', 'avif']}
				alt="Water from the spring"
				loading="lazy"
				layout="fullWidth"
				className="two-col-right"
			/>
			<div className="two-col-left">
				<h3>Water</h3>
				<p>
					Water is from the nearest spring. We don't use any chemicals and filtration is only basic.
					Some people prefer to bring their own bottled water, but please be aware that this will
					create more plastic pollution. A refillable filter bottle might be a better option.
				</p>
			</div>
		</div>
		<div className="two-col spaced">
			<StaticImage
				src="../../images/harmony.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Harmony with nature"
				loading="lazy"
				layout="fullWidth"
				className="two-col-left"
			/>
			<div className="two-col-right">
				<h3>Living in harmony with nature</h3>
				<p>
					With 'living in harmony with nature' in mind, please use ecological soap and shampoo as
					these will wash out into the forest. Try to bring as little plastic and create as little
					rubbish as possible
				</p>
			</div>
		</div>
	</section>
);

export default RealityCheck;
