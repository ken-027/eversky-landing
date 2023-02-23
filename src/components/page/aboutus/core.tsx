/** @format */
import styles from '@/styles/pages/aboutus.module.scss'
import star from '@/assets/star.svg'
import { ReactSVG } from 'react-svg'
import sky from '@/assets/night-sky.png'
import Caption from '@/components/common/caption'

const list: string[] = [
	'Invest in people and talent',
	'We support our businesses',
	'Operate independently',
	'Invest in people and talent',
	'We support our businesses',
]

const Core: React.FC<unknown> = () => {
	return (
		<section>
			<div className={styles.bannerContainer}>
				<Caption title='Our Core Values' className={styles.header} />
				<div className={styles.storyImage}>
					<img src={sky} alt='Night sky' />
				</div>
				<div className={styles.coreItems}>
					{list.map((item, index) => (
						<div key={index}>
							<ReactSVG src={star} />
							{item}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Core
