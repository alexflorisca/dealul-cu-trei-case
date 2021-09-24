import * as React from "react"
import { Link } from "gatsby"
import Hero from '../components/hero'
import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = () => (
  <Layout>
    <Seo title="Dealul Cu Trei Case | Retreat in Muntii Apuseni" />
    <Hero />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
