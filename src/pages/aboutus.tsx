/** @format */
// cSpell:ignore eversky aboutus

import Page from '@/components/layout/page'
import Approach from '@/components/page/aboutus/approach'
import Banner from '@/components/page/aboutus/banner'
import Mission from '@/components/page/aboutus/mission'
import Story from '@/components/page/aboutus/story'
import Core from '@/components/page/aboutus/core'

// eslint-disable-next-line @typescript-eslint/ban-types
const AboutUs: React.FC<{}> = () => {
	const title = `${import.meta.env.VITE_APP_NAME} | About Us`

	return (
		<Page
			documentTitle={title}
			meta={{
				title: title,
				description:
					'Banyan was founded on one simple but powerful vision: to help successful software businesses continue thriving long into the future.',
				image: '/eversky/about-us.png',
				url: 'https://kenneth-andales.github.io/eversky',
			}}
		>
			<div className='container'>
				<Banner />
				<Story />
				<Mission />
				<Approach />
				<Core />
			</div>
		</Page>
	)
}

export default AboutUs
