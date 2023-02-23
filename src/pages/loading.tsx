/** @format */
import styles from '@/styles/pages/loading.module.scss'
import star from '@/assets/star.svg'
import { ReactSVG } from 'react-svg'

const Loading: React.FC<unknown> = () => {
	return (
		<div className={styles.loadingContainer}>
			<div>
				<div className={styles.indicator}>
					{Array(3)
						.fill(0)
						.map((item, index) => (
							<ReactSVG key={index} src={star} />
						))}
				</div>
				<h2 className={styles.text}>
					Loading{' '}
					<span className={styles.circles}>
						{Array(3)
							.fill(0)
							.map((item, index) => (
								<span className={styles.circle} key={index}></span>
							))}
					</span>
				</h2>
			</div>
		</div>
	)
}

export default Loading
