import * as React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Welcome from '../components/Welcome/welcome';
import Place from '../components/Place/Place';
import Accomodation from '../components/Accomodation/Accomodation';
import Travel from '../components/Travel/Travel';
import RealityCheck from '../components/RealityCheck/RealityCheck';
import OurStory from '../components/OurStory/OurStory';
import Contact from '../components/Contact/Contact';
import Activities from '../components/Activities/Activities';
import Events from '../components/Events/Events';

import '../components/global.css';

const IndexPage = () => (
	<Layout>
		<Seo title="Dealul Cu Trei Case | Retreat in Muntii Apuseni" />
		<Hero />
		<Welcome />
		<OurStory />
		<Place />
		<Activities />
		<Accomodation />
		<Travel />
		<Events />
		<RealityCheck />
		<section id="cost" className="full-width">
			<h2>Cost</h2>
			<p>
				We believe in the goodness of people and accept donations, to allow us to continue this
				eco-project and to be able to organise free camps and workshops for children and people that
				can't afford it.
			</p>
			<p>
				We also need as much help as we can with various jobs like renovation work, gardening,
				cooking, wood splitting, making beautiful things, etc. So if you have a particular skill or
				talent and would like to help us as a volunteer, please get in touch! We can provide
				accomodation and food in exchange for your help.
			</p>
		</section>

		<Contact />

		<p id="footer" className="footer">
			Swing by and say hi, nu-i bai
		</p>
	</Layout>
);

export default IndexPage;
