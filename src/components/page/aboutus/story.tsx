/** @format */
// cSpell:ignore aboutus Berkal

import banner from '@/assets/about-us.png'
import styles from '@/styles/pages/aboutus.module.scss'
import Caption from '@/components/common/caption'

const Story: React.FC<unknown> = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<Caption title='Our Story' className={styles.header} />
				<div className={styles.storyImage}>
					<img src={banner} alt='Our story image' />
				</div>
				<h2 className={styles.headline}>
					We help owners confidently take the next step knowing their legacy
					will be protected.
				</h2>
				<p className={styles.storyDesc}>
					Founder David Berkal has a background as both an entrepreneur and as a
					traditional investor. But his time as an investor left him
					disheartened by the short-term mentality of many of these firms.
					Owners were often choosing between two bad options: selling to a
					competitor who was looking to drive profit by cutting costs, or to a
					traditional investment firm, who would resell the business a few years
					down the road. Banyan’s idea was to offer a third option. David raised
					capital from a world-class group of entrepreneurs aligned on a vision
					of a permanent holding company for great software businesses. As a
					private company, Banyan can look beyond quarterly earnings and focus
					on doing the right things over the long-term.
				</p>
			</div>
		</section>
	)
}

export default Story
