/** @format */
import styles from '@/styles/pages/landing.module.scss'
import grass from '@/assets/grass.png'
import Caption from '@/components/common/caption'
import star from '@/assets/star.svg'
import { ReactSVG } from 'react-svg'

const items: { title: string; description: string }[] = [
	{
		title: 'Continued legacy',
		description:
			'We plan to hold our businesses forever and will provide the capital to invest in building the company’s products and teams for decades.',
	},
	{
		title: 'Employee focus',
		description:
			'Banyan appreciates the strong relationships a privately owned business nurtures with employees and we are committed to building the best.',
	},
	{
		title: 'Experts in software',
		description:
			'Our focus on enterprise software businesses ensures we are well prepared to evaluate your business quickly and execute on growth after the transaction.',
	},
	{
		title: 'Quick decisions',
		description:
			'We respect the value of your time and will work hard to respond to all inquiries within 24 hours and can make acquisition decisions quickly.',
	},
	{
		title: 'Flexible terms',
		description:
			'Our terms are flexible and we will work in partnership with you on a structure and post-acquisition role that is right for you.',
	},
	{
		title: 'Fair valuations',
		description:
			'We acquire healthy businesses and have a strong sense of market valuations. While fit is important, we know that the valuation is too.',
	},
]

const How: React.FC<unknown> = () => {
	return (
		<section id='how'>
			<div className={styles.sectionContainer}>
				<Caption title='How We Buy Business' />
				<div className={styles.howWrapper}>
					<img src={grass} alt='Grass view' />
				</div>
				<h2 className={styles.headline}>
					Candor and transparency every step of the way
				</h2>
				<div className={styles.whyItems}>
					{items.map((item, index) => (
						<div className={styles.howItem} key={index}>
							<h4>
								{item.title} <ReactSVG src={star} />
							</h4>
							<p>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default How
