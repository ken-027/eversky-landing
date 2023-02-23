/** @format */
import styles from '@/styles/pages/landing.module.scss'
import arialview from '@/assets/arial-view.png'
import Caption from '@/components/common/caption'

const list: { title: string; description: string }[] = [
	{
		title: 'Your Permanent Home',
		description:
			'We know that you care deeply about your team and customers. Thus, we want to provide you with a long-term solution that meets your needs. We buy, hold, and scale software businesses for life.',
	},
	{
		title: 'Hands-On Entrepreneurs',
		description:
			'Like you, we’ve been in the trenches running a tech business. Having multiple times over built something from nothing, we know what it’s like to be in your shoes.',
	},
	{
		title: 'Proven People & Playbooks',
		description:
			'To ensure your long-term success, we’re here to help you by connecting you to the right expertise and resources.',
	},
]

// eslint-disable-next-line @typescript-eslint/ban-types
const WhyUs: React.FC<{}> = () => {
	return (
		<section id='why'>
			<div className={styles.sectionContainer}>
				<Caption className={styles.header} title='Why Us' />
				<h2 className={styles.headline}>
					Put your business in expert hands with a proven track record of
					creating essential products.
				</h2>
				<div className={styles.whyItems}>
					{list.map((item, index) => (
						<div className={styles.whyItem} key={index}>
							<h4>{item.title}</h4>
							<p>{item.description}</p>
						</div>
					))}
				</div>
				<div className={styles.whyWrapper}>
					<img src={arialview} alt='Arial View of Land' />
				</div>
			</div>
		</section>
	)
}

export default WhyUs
