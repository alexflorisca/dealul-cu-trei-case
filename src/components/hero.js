import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const container = {
	position: 'relative'
};

const h1 = {
	position: 'absolute',
  top: '40%',
  left: '15%',
  zIndex: 1,
  color: 'white',
  width: '70%',
  textAlign: 'center',
}

const img = { 
	marginBottom: `1.45rem`, 
	height: `100vh` 
}



const Hero = () => {
 return (
	<div style={container}>
		<h1 style={h1}>Welcome to our nature retreat in paradise</h1>
		<StaticImage
			src="../images/barn-in-winter.jpg"
			loading="eager"
			objectFit="cover"
			formats={["auto", "webp", "avif"]}
			alt="Welcome to paradise"
			style={img}
		/>
	</div>
 )
}

export default Hero;