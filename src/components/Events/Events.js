import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";

const Events = () => 
<section id="events" className="full-width">
		<h2>Events</h2>
		<p>We organise events from time to time to share this magical place and connect people with nature and themselves</p>
		<StaticImage
				src="../../images/retreat.webp"
				formats={['auto', 'webp', 'avif']}
				alt="Yoga platform"
				loading="lazy"
				layout="fullWidth"
				placeholder="blurred"
			/>
			<h3 style={{marginTop:'10px'}}>Nature retreat (11-18th June 2022)</h3>
			<p>This year sees our first retreat! It will be a relaxing 6 days breathing, connecting, walking, meditating, fireside chats and experiencing the local customs</p>
			<p><strong>You can <Link to="https://purposefull.uk/retreats">find out more</Link> or book by <Link to="/contact">contacting us</Link></strong></p>

	</section>

export default Events;