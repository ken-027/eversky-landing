/** @format */

import { ReactNode } from 'react'
import NavBar from './navbar'
import Footer from './footer'
import Head from './head'
import Contact from './contact'

type meta = {
	title: string
	description: string
	image: string
	url: string
}

const Page: React.FC<{
	documentTitle: string
	children: ReactNode
	meta?: meta
}> = ({ meta, children, documentTitle }) => {
	return (
		<>
			<Head
				documentTitle={documentTitle}
				image={meta?.image || ''}
				url={meta?.url || ''}
				description={meta?.description || ''}
				title={meta?.title || ''}
			/>
			<NavBar />
			<main>{children}</main>
			<Contact />
			<Footer />
		</>
	)
}

export default Page
