import React from 'react';
import ResponsiveImages from '../ResponsiveImages/ResponsiveImages';
import { StaticImage } from 'gatsby-plugin-image';

const Accomodation = () => (
	<>
		<section id="accomodation" className="full-width">
			<h2>Accomodation and Facilities</h2>
			<section id="barn" className="full-width">
				<h3>Barn #1</h3>
				<p>
					W can accomodate you in the newly restored and converted barn, a magical space with lovely
					views of the surrounding mountains and hills. The barn is ideal for 2-3 people, but can
					accomodate a maximum of 5, with a double, a single and a sofa bed (access to sleeping
					space requires climbing stairs or a ladder).{' '}
				</p>
				<div className="two-col" style={{ alignItems: 'flex-start' }}>
					<div className="inside">
						<h4>Inside</h4>
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
						<h4>Outside</h4>
						<ul>
							<li>Compost toilet</li>
							<li>Outdoor shower with spring water</li>
							<li>Covered terrace </li>
							<li>Rustic table and chairs</li>
						</ul>
					</div>
				</div>
				<ResponsiveImages>
					<StaticImage
						src="../../images/barn-outside.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/barn-in-winter-wide.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of barn in the winter"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/barn-view-through-window.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="View from the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/barn-living-room.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Barn living room"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/barn-living-room-3.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Barn living room"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/barn-living-room-4.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Barn living room"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/barn-kitchen.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Barn kitchen"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/barn-bathroom.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Barn bathroom"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/barn-table-outside.jpeg"
						formats={['auto', 'webp', 'avif']}
						alt="View from the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/barn-table-outside-2.jpeg"
						formats={['auto', 'webp', 'avif']}
						alt="View from the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/outdoor-shower-3.jpeg"
						formats={['auto', 'webp', 'avif']}
						alt="View from the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/outdoor-toilet.jpeg"
						formats={['auto', 'webp', 'avif']}
						alt="View from the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
				</ResponsiveImages>
				<section className="full-width">
					<p>
						20 metres from the barn, there is wood and a fireplace for an evening chat and
						stargazing by the fire. This is a self catering place but we can help you with your food
						shopping from the nearest town - about 40 min drive - and from our neighbours (we try
						and source most products from locals but will do a shopping trip to town when needed).
						You're free to use produce from our own gardens when the season is right, in exchange
						for a helping hand with gardening. Depending on the season, there are fruits in the
						trees, wild berries, many types of mushrooms and much foraging to be done.
					</p>
				</section>
			</section>
			<section id="lower barn" className="full-width">
				<h3>Barn #2</h3>
				<p>
					This is a renovated old wooden bar, a magical place in nature, secluded and with great
					views of the surrounding mountains! Perfect for families to experience simple, happy
					living into nature, or friends looking for a quiet place to connect and stargaze around
					the fire. It's a nature retreat, to experience peace, quiet and joy! You can have
					breakfast on the terrace and maybe even a bit of yoga. Sit by the fire in the evening, for
					laughter and chats with family and friends! The barn has large windows so you can see the
					stars at night
				</p>
				<div className="two-col" style={{ alignItems: 'flex-start' }}>
					<div className="inside">
						<h4>Inside</h4>
						<ul>
							<li>Small kitchen space</li>
							<li>Induction hob</li>
							<li>Small fridge</li>
							<li>Dining table</li>
							<li>Comfy large chair for the rainy day</li>
							<li>Two single and two double beds</li>
						</ul>
					</div>
					<div className="outside">
						<h4>Outside</h4>
						<ul>
							<li>Toilet, shower, washing area</li>
							<li>Terrace</li>
						</ul>
					</div>
				</div>
				<ResponsiveImages>
					<StaticImage
						src="../../images/lower_barn_outside_2.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_outside_3.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_outside_4.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_outside_6.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_outside_7.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_outside_8.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_entrance.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_terrace.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_terrace_3.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_terrace_4.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_view.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_view_2.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_main_room.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_main_room_3.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_main_room_4.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_main_room_5.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_main_room_6.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>

					<StaticImage
						src="../../images/lower_barn_main_room_8.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_beds.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_beds_2.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_swing.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_trees.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_washing_area.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_washing_area_2.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_washing_area_3.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_shower.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_shower_2.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/lower_barn_toilet.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
				</ResponsiveImages>
			</section>
			<section id="campsite" className="full-width">
				<h3>The Campsite</h3>
				<p>
					We have terraced some of the land and made space for around 6 tents (3-4 person)
					comfortably. When you come out of your tent you will be greeted with stunning views of the
					valley. Just below the campsite there is another barn with an outdoor platform and inside
					space for cups of tea, breakfast and rainy days. To the right is the shower and toilet
					block with 2 sinks, 2 toilets and an outdoor shower with views of the valley. You'll be
					surrounded by nature sounds - krickets, birds, and the odd barking from our friendly dogs
					who will want to do their duty and protect you. Come and experience nature in it's rawest
					form!
				</p>
				<ResponsiveImages>
					<StaticImage
						src="../../images/campsite-1.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/campsite-2.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/campsite-3.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/campsite-4.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/campsite-5.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/campsite-6.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/campsite-7.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
					<StaticImage
						src="../../images/campsite-8.jpg"
						formats={['auto', 'webp', 'avif']}
						alt="Outside of the barn"
						loading="lazy"
						layout="fullWidth"
						placeholder="blurred"
					/>
				</ResponsiveImages>
			</section>
		</section>
	</>
);

export default Accomodation;
