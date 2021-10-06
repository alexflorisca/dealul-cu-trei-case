import * as React from "react"
import Hero from '../components/hero'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Welcome from '../components/Welcome/welcome'
import { StaticImage } from "gatsby-plugin-image"

import '../components/global.css'

const IndexPage = () => (
  <Layout>
    <Seo title="Dealul Cu Trei Case | Retreat in Muntii Apuseni" />
    <Hero />
    <Welcome />
    {/* Our story */}
    <div id="our-story" className="two-col">
      <div className="image">
        <StaticImage 
          src="../images/mihaela-and-octavian.jpeg"
          formats={["auto", "webp", "avif"]}
          alt="Mihaela and Octavian Florisca"
          loading="lazy"
          layout="fullWidth" />
      </div>
      <div className="text">
        <h2>Our Story</h2>
        <p>Hello lovely people! We are Mihaela and Octavian, an oldish couple who after 3 years of backpacking around Austral-Asia, mostly volunteering and meeting awesome people from all over the world, have decided to settle down in the Transylvanian mountains called Apuseni.</p>
      </div>
    </div>

    {/* The place */}
    <section id="place" className="section full-width">
        <h2>The Place</h2>
        <p>We live on a large hill with 3 old traditional wooden houses and 3 barns (hence the name!). As most young people in theses villages have moved to the city, old and beautiful wooden houses are becoming ruins very fast, the forest is re-growing and old traditions are starting to disappear. We wanted to restore and preserve some of these buildings and traditions</p>
        
        <p>We're currently in the process of bringing these back to life. The middle house was our first project and that's where we now call home. We've also just finished converting the barn next to it and we're excited to share this with like minded people!</p>

       
      </section>
      <section className="image-grid-4-2">
        <StaticImage 
          src="../images/barn-in-winter-2.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Mihaela and Octavian Florisca"
          loading="lazy"
          layout="fullWidth" />
        <StaticImage 
          src="../images/barn-in-winter-3.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Mihaela and Octavian Florisca"
          loading="lazy"
          layout="fullWidth" />
        <StaticImage 
          src="../images/view-in-summer.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Mihaela and Octavian Florisca"
          loading="lazy"
          layout="fullWidth" />
        <StaticImage 
          src="../images/sunset.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Mihaela and Octavian Florisca"
          loading="lazy"
          layout="fullWidth" />
        <StaticImage 
          src="../images/dog-house-winter.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Mihaela and Octavian Florisca"
          loading="lazy"
          layout="fullWidth" />
        <StaticImage 
          src="../images/barn-view-through-window.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Mihaela and Octavian Florisca"
          loading="lazy"
          layout="fullWidth" />
        <StaticImage 
          src="../images/fire.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Mihaela and Octavian Florisca"
          loading="lazy"
          layout="fullWidth" />
        <StaticImage 
          src="../images/culita-cu-view.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Mihaela and Octavian Florisca"
          loading="lazy"
          layout="fullWidth" />
      </section>
      <p className="full-width">There is incredible energy and beauty here, unspoilt nature and amazing people living a very traditional life. Everything beats to it's own rhythm and we try to respect and work in tandem with nature and the local culture and traditions. We capture water from the spring in the woods, buy dairy products, honey etc. from the neighbours on other hills, have fruit trees and wild flowers as much as you can see. It is so beautifully quiet and away from the craziness of the world.</p>
      <section className="two-col">
        <div>
          <StaticImage 
            src="../images/quiet.jpg"
            formats={["auto", "webp", "avif"]}
            alt="Mihaela and Octavian Florisca"
            loading="lazy"
            layout="fullWidth" />
        </div>
        <div className="text">
          <h3>Is it for you?</h3>
          <p>Dealul Cu Trei Case is a magical place for people that like quietness and nature, a great place for reflection and introspection. There are not TVs, limited phone signal and not really a place for party goers, sorry! This is a remote place and people still live traditionally, making the hay, picking fruits, making jams and pies, managing small home farms and gardens. Hopefully this gives you a flavour of the atmopshere around here to see if it's for you.</p>
        </div>
      </section>
      

      {/* Accomodation */}
      <section id="accomodation" className="full-width">
       <h2>Accomodation and Facilities</h2>
       <p>For now, we can accomodate you in the newly restored and converted barn, a magical space with lovely views of the surrounding mountains and hills. The barn can accommodate max 5 people, with a double, a single and a sofa bed (access to sleeping space requires climbing stairs or a ladder). </p>
       <div className="two-col" style={{alignItems: 'flex-start'}}>
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
       <div className="image-grid-4-2">
       <StaticImage 
          src="../images/barn-outside.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Outside of the barn"
          loading="lazy"
          layout="fullWidth" />
        <StaticImage 
          src="../images/barn-in-winter-wide.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Outside of barn in the winter"
          loading="lazy"
          layout="fullWidth" />
       <StaticImage 
          src="../images/barn-living-room.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Barn living room"
          loading="lazy"
          layout="fullWidth" />
       <StaticImage 
          src="../images/barn-living-room-3.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Barn living room"
          loading="lazy"
          layout="fullWidth" />
       <StaticImage 
          src="../images/barn-living-room-4.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Barn living room"
          loading="lazy"
          layout="fullWidth" />
       <StaticImage 
          src="../images/barn-kitchen.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Barn kitchen"
          loading="lazy"
          layout="fullWidth" />
       <StaticImage 
          src="../images/barn-bathroom.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Barn bathroom"
          loading="lazy"
          layout="fullWidth" />
       <StaticImage 
          src="../images/fire-wide.jpg"
          formats={["auto", "webp", "avif"]}
          alt="Fire by the barn"
          loading="lazy"
          layout="fullWidth" />
     </div>
     <section className="full-width">
       <p>20 metres from the barn, there is wood and a fireplace for an evening chat and stargazing by the fire. This is a self catering place but we can help you with your food shopping from the nearest town - about 40 min drive - and from our neighbours (we try and source most products from locals but will do a shopping trip to town when needed). You're free to use produce from our own gardens when theseason is right, in exchange for a helping hand with gardening. Depending on the season,  there are fruits in the trees, wild berries, many types of mushrooms and much foraging to be done.</p>
      </section>


      {/* It's wild */}
      <section id="travel" className="full-width">
        <h2>Travel</h2>
        <p>Getting here is relatively simple, despite the remoteness. Nearest city is Deva (meaning God / deity in Indian religion) which is connected by train to most of the country. From Deva, there are regular busses to Brad which is the nearest town from here. From Brad, there are two mini busses daily which will drop you 900m away from our house.</p>
Do <a href="#contact">contact us</a> for advice or help with your journey, if you need to.
        <p>Hitchhiking is also popular in Romania and very feasible and an affordable way to move around. <strong>Nearest airports are Sibiu (recommended, 2h drive)</strong> and Cluj Napoca (3h drive) and Timisoara (3h drive). Transfer by private car is also possible and much faster than public transport, but of course more costly and more polluting. The last 900m to our place is on a relatively steep small road and requires 4x4 or it's a nice walk through a lovely forest (with a bench mid-way if one you need as rest). We can of course pick you up from the bottom of the hill as well, especially if you have luggage.</p>
      </section>

      {/* Reality Check */}
      <section className="full-width">
        <h2>Reality Check</h2>
        <p>As with everything - despite being quite idilicidyllic - it is no perfect place and not suitable for everyone. Here are a few things that might be useful in your decision to visit 'Dealul cu trei case' or not.</p>
        <h3>It's wild!</h3>
         <p>We are in the middle of a mountain, with it's many beauties but also potential hazards. There are wild animals like deer, foxes, snakes (non poisonous as far as we know), wild boar, wolfs, mice, insects, 'noisy' crickets, tick, bees, etc.... Strangely, bears don't seam to inhabit this area, although widely present in the Transylvanian mountains. This is an area of high biodiversity, quite rare nowadays. If you feel anxious about this or the remoteness, this might not be the place for you. There are no known local incidents of wild animals endangering humans as far as we and the neighbours know.</p>
        <h3>Lots of pets</h3>
        <p>We have one cat and four lively but friendly dogs, that are likely to follow you in your hikes and pretty much everywhere, (in exchange for cuddles :)</p>
        <h3>Access</h3>
        <p>The last 900m of the road to us is not paved and relatively steep, so in difficult weather like snow, it might not be drivable. In that very rare cases, access is only by foot.</p>
        <h3>It's hilly</h3>
        <p>The terrain is hilly and uneven. Good shoes are recommended and a fair level of fitness if you plan to hike. Also weather can change relatively fast so bring clothes for wet and dry weather, cold and hot.</p>
        <h3>Water</h3>
        <p>Water is from the nearest spring. We don't use any chemicals and filtration is only basic. Some people prefer to bring their own bottled water, but please be aware that this will create more plastic pollution. A refillable filter bottle might be a better option.</p>
        <h3>Living in harmony with nature</h3>
        <p>With 'living in harmony with nature' in mind, please use ecological soap and shampoo as these will wash our into the forest. Try to bring as little plastic and create as little rubbish as possible</p>
      </section>

      <section id="cost" className="full-width">
        <h2>Cost</h2>
        <p>We believe in the goodness of people and accept donations, to allow us to continue this eco-project and to be able to organise free camps and workshops for children and people that can't afford it.</p>
      </section>

      <section id="contact" className="full-width">
        <h2>Contact Us</h2>
        <p>We love to meet like minded people and share this place with you. If you like the sound of it please email us or find us on <a href="https://www.instagram.com/dealulcutreicase/">Instagram</a></p>
      </section>

      <section id="footer" className="footer">
      </section>
  </Layout>
)

export default IndexPage
