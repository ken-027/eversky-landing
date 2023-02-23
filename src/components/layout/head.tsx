/** @format */

import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

type meta = {
	title: string
	description: string
	image: string
	url: string
}

const Head: React.FC<meta & { documentTitle: string }> = ({
	title,
	description,
	image,
	url,
	documentTitle,
}) => {
	const location = useLocation()

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	useEffect(() => {}, [
		title,
		description,
		image,
		url,
		documentTitle,
		location.pathname,
	])

	return (
		<Helmet>
			<title>
				{!documentTitle ? import.meta.env.VITE_APP_NAME : documentTitle}
			</title>
			<meta name='description' content={description} />

			<meta property='og:title' content={title} />
			<meta property='og:image' content={image} />
			<meta property='og:type' content='website' />
			<meta property='og:description' content={description} />
			<meta property='og:url' content={url} />

			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:image' content={image} />
			<meta name='twitter:description' content={description} />
			<meta name='theme-color' content='#fff' />
		</Helmet>
	)
}

export default Head
