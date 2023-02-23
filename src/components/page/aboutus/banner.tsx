/** @format */

import banner from '@/assets/about-us.png'
import styles from '@/styles/pages/aboutus.module.scss'

const Banner: React.FC<unknown> = () => {
	return (
		<header className={styles.banner}>
			<div className={styles.bannerContainer}>
				<div className={styles.bannerImage}>
					<img src={banner} alt='About us banner' />
				</div>
				<h1 className={styles.bannerHeadline}>
					Banyan was founded on one simple but powerful vision: to help
					successful software businesses continue thriving long into the future.
				</h1>
			</div>
		</header>
	)
}

export default Banner
