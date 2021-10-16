import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ResponsiveImages from '../ResponsiveImages/ResponsiveImages';

const Activities = () => (
	<>
		<div className="zero-tm-mobile full-width">
			<h2>Activities</h2>
			<p>
				The nearest town, connected by bus, is about 40min away if you want to explore an old gold
				mining town (no more mining today but there is a gold museum you can visit). There is also a
				small ethnographic museum in the village and the local "pub". There are walks / hikes you
				can do from here and we can guide you. We have plans to mark and signpost a few longer walks
				but this is still work in progress.
			</p>
			<p>
				There is no TV but very good mobile phone connection (Vodafone only), although we do
				recommend a complete social media detox. There is also a big wooden platform with views all
				around, for yoga, Qigong, Tai Chi, or whatever you might want to practice. Living simple in
				nature is, we think, the highlight here! Oh,... and on a clear sky, one can be fascinated by
				the many stars at night (also visible from the bed in the barn).
			</p>
		</div>
		<ResponsiveImages>
			<StaticImage
				src="../../images/yoga-platform.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Yoga platform"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/yoga-2.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Yoga platform"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/cross.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="Walk up to the cross"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<StaticImage
				src="../../images/river.jpg"
				formats={['auto', 'webp', 'avif']}
				alt="River walk"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
		</ResponsiveImages>
	</>
);

export default Activities;
