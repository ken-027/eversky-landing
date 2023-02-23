/** @format */

import { ReactSVG } from 'react-svg'
import rightarrow from '@/assets/righ-arrow.svg'
import styles from '@/styles/layout/_contact.module.scss'
import Caption from '../common/caption'

// eslint-disable-next-line @typescript-eslint/ban-types
const Contact: React.FC<{}> = () => {
	return (
		<section id='contact' className={styles.contact}>
			<div className={styles.container}>
				<Caption
					title='We’d love to chat to see if we are the right fit for you'
					className={styles.header}
				/>
				<p className={styles.text}>Interested in selling your business?</p>
				<div className={styles.letsTalk}>
					<a href='#'>Let's talk</a>
					<ReactSVG src={rightarrow} />
				</div>
			</div>
		</section>
	)
}

export default Contact
