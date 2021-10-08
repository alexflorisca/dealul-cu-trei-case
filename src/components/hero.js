import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const container = {
	display: 'grid',
};

const textContainer = {
	gridArea: '1/1',
	position: 'relative',
	placeItems: 'center center',
	display: 'grid',
	paddingLeft: '30px',
	alignSelf: 'center',
};

const h1 = {
	color: 'white',
	fontFamily: 'Just Lovely, ui-serif, Georgia, Cambria, Times, serif',
	fontWeight: 200,
	textAlign: 'center',
	fontSize: '6em',
	padding: '10px',
	marginTop: '-100px',
};

const img = {
	gridArea: '1/1',
	maxHeight: '100vh',
	height: `100vh`,
};

const Hero = () => {
	return (
		<div style={container}>
			<StaticImage
				src="../images/barn-in-winter.jpg"
				layout="fullWidth"
				formats={['auto', 'webp', 'avif']}
				alt=""
				style={img}
				loading="eager"
			/>
			<div style={textContainer}>
				<h1 style={h1}>Dealul Cu Trei Case</h1>
			</div>
		</div>
	);
};

export default Hero;
