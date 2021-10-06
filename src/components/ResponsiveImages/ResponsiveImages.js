import React, { useEffect, useRef } from 'react';
import Showcase from './showcase';
import './showcase.css';

const ResponsiveImages = (props) => {
	const showcaseRef = useRef(null);
	const images = props.children.map(image => <li className="showcase__slide" key={image.props.src}>{image}</li>);

	useEffect(() => {
		new Showcase(showcaseRef.current, {
			breakpoints: [768],
			thumbPosition: 'bottom'
		})
	})

	return (
		<div className="showcase" ref={showcaseRef}>
			<div className="showcase__main">
				<ul className="showcase__content" aria-label="Image slideshow. Press left or right arrow to navigate" tabIndex="0">
					{images}
				</ul>
				<div className="showcase__controls">
        <button type="button" aria-label="previous" className="showcase__prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 443.52 443.52"><path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z"/></svg>
        </button>
        <button type="button" aria-label="next" className="showcase__next">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 443.52 443.52"><path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z"/></svg>
        </button>
      </div>
    </div>
    <div role="tablist" className="showcase__thumbs"></div>
	</div>
	);
}

export default ResponsiveImages;