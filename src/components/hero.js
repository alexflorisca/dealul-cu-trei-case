import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const container = {
	display: 'grid'
};

const textContainer = {
	gridArea: "1/1",
  position: "relative",
  placeItems: "center start",
  display: "grid",
	paddingLeft: '30px',
	alignSelf: 'center'
}

const h1 = {
	color: 'white',
	fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system',
	fontWeight: 200,
	fontSize: '3em',
	background: 'rgba(0,0,0,0.7)',
	padding: '10px'
}

const h2= {
  color: 'white',
	fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system',
	fontWeight: 200,
	fontSize: '1.7em',
	background: 'rgba(0,0,0,0.7)',
	padding: '10px',
	width: '60%',
	lineHeight: '1.4em'
}

const img = { 
	gridArea: '1/1',
	maxHeight: '100vh',
	height: `100vh`
}



const Hero = () => {
 return (
	<div style={container}>
		<StaticImage
			src="../images/barn-in-winter.jpg"
			layout="fullWidth"
			formats={["auto", "webp", "avif"]}
			alt=""
			style={img}
		/>
		<div style={textContainer}>
			<h1 style={h1}>Dealul Cu Trei Case</h1>
			<h2 style={h2}>Welcome to our little corner of nature in the Apuseni mountains, Romania</h2>

		</div>
	</div>
 )
}

export default Hero;