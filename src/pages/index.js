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

import '../components/global.css';

const IndexPage = () => (
	<Layout>
		<Seo title="Dealul Cu Trei Case | Retreat in Muntii Apuseni" />
		<Hero />
		<Welcome />
		<OurStory />
		<Place />
		<Accomodation />
		<Travel />
		<RealityCheck />
		<section id="cost" className="full-width">
			<h2>Cost</h2>
			<p>
				We believe in the goodness of people and accept donations, to allow us to continue this
				eco-project and to be able to organise free camps and workshops for children and people that
				can't afford it.
			</p>
		</section>

		<Contact />

		<p id="footer" className="footer">
			Swing by and say hi, nu-i bai
		</p>
	</Layout>
);

export default IndexPage;
