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
    <div className="two-col">
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
    <section className="section full-width">
        <h2>The Place</h2>
        <p>We live on a large hill with 3 old traditional wooden houses and 3 barns (hence the name!). As most young people in theses villages have moved to the city, old and beautiful wooden houses are becoming ruins very fast, the forest is re-growing and old traditions are starting to disappear. We wanted to restore and preserve some of these buildings and traditions</p>
        
        <p>We're currently in the process of bringing these back to life. The middle house was our first project and that's where we now call home. We've also just finished converting the barn next to it and we're excited to share this with like minded people!</p>

        <p>There is incredible energy and beauty here, unspoilt nature and amazing people living a very traditional life. Everything beats to it's own rhythm and we try to respect and work in tandem with nature and the local culture and traditions. We capture water from the spring in the woods, buy dairy products, honey etc. from the neighbours on other hills, have fruit trees and wild flowers as much as you can see. It is so beautifully quiet and away from the craziness of the world.</p>
      </section>
      <section className="image-grid">
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
      <section className="full-width">
       
      </section>


      <section className="two-col">
        <div>
          <StaticImage 
            src="../images/quiet.jpg"
            formats={["auto", "webp", "avif"]}
            alt="Mihaela and Octavian Florisca"
            loading="lazy"
            layout="fullWidth" />
        </div>
        <div class="text">
          <h3>Is it for you?</h3>
          <p>Dealul Cu Trei Case is a magical place for people that like quietness and nature, a great place for reflection and introspection. Not really for party goers, sorry!  This is remote place and people still live traditionally, making the hay, picking fruits and making jams and pies.</p>
        </div>
      </section>
  </Layout>
)

export default IndexPage
