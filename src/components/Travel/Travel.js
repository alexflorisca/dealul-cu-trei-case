import React from 'react';

const Travel = () => (
	<section id="travel" className="full-width">
		<h2>Travel</h2>
		<iframe
			title="Google Maps"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176503.16614722888!2d22.807745120614896!3d46.2728473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474ed772c0858c77%3A0xfd85baeda41ab037!2sDealul%20cu%20trei%20case!5e0!3m2!1sen!2suk!4v1633862539169!5m2!1sen!2suk"
			width="100%"
			height="450"
			style={{ border: 0 }}
			allowFullScreen="true"
			loading="lazy"
		></iframe>
		<p>
			Getting here is relatively simple, despite the remoteness. Nearest city is Deva (meaning God /
			deity in Indian religion) which is connected by train to most of the country. From Deva, there
			are regular busses to Brad which is the nearest town from here. From Brad, there are two mini
			busses daily which will drop you 900m away from our house.
		</p>
		<p>
			Do <a href="#contact">contact us</a> for advice or help with your journey, if you need to.
		</p>
		<p>
			Hitchhiking is also popular in Romania and very feasible and an affordable way to move around.
		</p>
		<p>
			<strong>Nearest airports are Sibiu (recommended, 2h drive)</strong> and Cluj Napoca (3h drive)
			and Timisoara (3h drive). Transfer by private car is also possible and much faster than public
			transport, but of course more costly and more poluting. The last 900m to our place is on a
			relatively steep small road and requires 4x4 or it's a nice walk through a lovely forest (with
			a bench mid-way if you need a rest). We can of course pick you up from the bottom of the hill
			as well, especially if you have luggage.
		</p>
	</section>
);

export default Travel;
