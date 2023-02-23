/** @format */
import styles from '@/styles/pages/landing.module.scss'
import farm from '@/assets/farm.png'
import Caption from '@/components/common/caption'

const list: { title: string; description: string }[] = [
	{
		title: '$1-5M ARR',
		description: 'Your subscription model is trusted by loyal customers',
	},
	{
		title: '5+ years old',
		description: 'You have steady positive cash flow and room for growth',
	},
	{
		title: 'Stellar team',
		description: `You lead a values-driven team and —if you want— we'll work with you to transition`,
	},
	{
		title: 'Strong moat',
		description:
			'You have a sustainable competitive advantage that protects you long term',
	},
	{
		title: 'Little outside capital',
		description:
			'You’re ideally bootstrapped or raised little external capital',
	},
]

// eslint-disable-next-line @typescript-eslint/ban-types
const What: React.FC<{}> = () => {
	return (
		<section id='what'>
			<div className={styles.sectionContainer}>
				<Caption title='What we are looking for in a business' />
				<div className={styles.whatWrapper}>
					<img src={farm} alt='Arial View of Land' />
				</div>
				<div className={styles.whatItems}>
					{list.map((item, index) => (
						<div className={styles.whatItem} key={index}>
							<h4>{item.title}</h4>
							<p>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default What
