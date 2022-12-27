import React from 'react'
import PropTypes from 'prop-types'

const SEO = ({ title, description, image }) => {
	return (
		<>
			<meta charSet="utf-8" />
			<title>Toltem | {title}</title>
			<meta name="robots" content="noindex, follow" />
			<meta
				name="description"
				content={description ? description : 'We build, solve & manage projects of all sizes through the window of technology'}
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="og:title" content={`Toltem | ${title}`}></meta>
			<meta name="twitter:title" content={`Toltem | ${title}`}></meta>
			<meta name="og:image" content={image ? image : '/images/toltem/logo.png'}></meta>
			<meta name="twitter:image" content={image ? image : '/images/toltem/logo.png'}></meta>
			<meta
				name="og:description"
				content={description ? description : 'We build, solve & manage projects of all sizes through the window of technology'}
			></meta>
			<meta
				name="twitter:description"
				content={description ? description : 'We build, solve & manage projects of all sizes through the window of technology'}
			></meta>
		</>
	)
}
SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
}

export default SEO
