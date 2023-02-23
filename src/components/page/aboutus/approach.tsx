/** @format */
import styles from '@/styles/pages/aboutus.module.scss'
import banner from '@/assets/about-us.png'
import Caption from '@/components/common/caption'

const Approach: React.FC<unknown> = () => {
	return (
		<section>
			<div className={styles.bannerContainer}>
				<Caption title='Our Approach' className={styles.header} />
				<div className={styles.storyImage}>
					<img src={banner} alt='Our approach image' />
				</div>
				<h2 className={styles.headline}>
					Work closely with you to find the right solution, whether you want to
					stay at the helm.
				</h2>
			</div>
		</section>
	)
}

export default Approach
