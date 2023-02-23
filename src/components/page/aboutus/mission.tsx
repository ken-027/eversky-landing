/** @format */
import Caption from '@/components/common/caption'
import styles from '@/styles/pages/aboutus.module.scss'

const Mission: React.FC<unknown> = () => {
	return (
		<section className={styles.missionSection}>
			<div className={styles.bannerContainer}>
				<Caption
					title='Our Mission & Vision'
					className={styles.missionHeader}
				/>
				<h2 className={styles.headline}>
					We’re on a mission to acquire, build, and grow great software
					businesses all over the world.{' '}
				</h2>
				<p className={styles.missionDesc}>
					Founder David Berkal has a background as both an entrepreneur and as a
					traditional investor. But his time as an investor left him
					disheartened by the short-term mentality of many of these firms.
				</p>
			</div>
		</section>
	)
}

export default Mission
