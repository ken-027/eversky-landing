/** @format */
// cSpell:ignore eversky whyus

import { Helmet } from 'react-helmet-async'
import Page from '@/components/layout/page'
import Hero from '@/components/page/landing/hero'
import How from '@/components/page/landing/how'
import What from '@/components/page/landing/what'
import Who from '@/components/page/landing/who'
import WhyUs from '@/components/page/landing/whyus'

// eslint-disable-next-line @typescript-eslint/ban-types
const Landing: React.FC<{}> = () => {
	return (
		<Page
			documentTitle={import.meta.env.APP_NAME}
			meta={{
				image: `/eversky/landing.png`,
				title: `EverSky | We buy and scale great software companies forever for a better planet`,
				description: `We are Eversky. We help values-driven entrepreneurs their life's work continues to prosper in our permanent home`,
				url: 'https://kenneth-andales.github.io/eversky',
			}}
		>
			<Hero />
			<WhyUs />
			<Who />
			<How />
			<What />
		</Page>
	)
}

export default Landing
