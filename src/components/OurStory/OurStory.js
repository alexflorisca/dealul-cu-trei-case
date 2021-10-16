import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const OurStory = () => (
	<>
		<h2 style={{ textAlign: 'center' }}>Our Story</h2>
		<div id="our-story" className="two-col">
			<div className="image">
				<StaticImage
					src="../../images/mihaela-and-octavian.jpeg"
					formats={['auto', 'webp', 'avif']}
					alt="Mihaela and Octavian Florisca"
					loading="lazy"
					layout="fullWidth"
				/>
			</div>
			<div className="text">
				<p>
					Hello lovely people! We are Mihaela and Octavian, an oldish couple who after 3 years of
					backpacking around Austral-Asia, mostly volunteering and meeting awesome people from all
					over the world, have decided to settle down in the Transylvanian mountains called Apuseni.
				</p>
				<p>
					All of our life we loved mountains and being outdoors, we hiked and climbed many mountains
					on four continents so it was only a matter of time to live closer to nature. We gave up
					our comfy life in Britain, for something that we felt is bringing us closer to our nature
					and life purpose. The wandering around the world gave us the courage to move on with our
					life and do what feels right to our hearts. We're into meditation and yoga, connection
					with nature, hiking and simple life. We are at the early stages of this eco-project, still
					learning about the place, adjusting to the wild nature around. We are part of the local
					community; we help eachother with things like hay making, we share stories and laughs.
				</p>
			</div>
		</div>
	</>
);

export default OurStory;
