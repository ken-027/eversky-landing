/** @format */
import hero from '@/assets/hero.png'
import styles from '@/styles/pages/landing.module.scss'

// eslint-disable-next-line @typescript-eslint/ban-types
const Hero: React.FC<{}> = () => {
	return (
		<header className={styles.hero}>
			<div className={styles.heroContainer}>
				<div className={styles.heroImage}>
					<img src={hero} alt='Better planet' />
				</div>
				<div className={styles.heroWrapper}>
					<h1 className={styles.heroHeadline}>
						We buy and scale great software companies forever for a better
						planet
					</h1>
					<p className={styles.heroDescription}>
						We are EverSky. We help values-driven entrepreneurs ensure their
						life’s work continues to prosper in our permanent home.
					</p>
				</div>
			</div>
		</header>
	)
}

export default Hero
