/** @format */
import styles from '@/styles/pages/landing.module.scss'
import martin from '@/assets/martin.png'
import { AiFillLinkedin } from 'react-icons/ai'
import kevin from '@/assets/kevin.png'
import Caption from '@/components/common/caption'
import star from '@/assets/star.svg'
import { ReactSVG } from 'react-svg'

type person = {
	img: string
	name: string
	linkedIn: string
	position: string
	companies: string[]
	achievements: string[]
}

const people: person[] = [
	{
		img: martin,
		name: 'Martin Bell',
		linkedIn: 'https://linkedin.com/',
		position: 'Co-Founder & CEO',
		companies: ['Harvard', 'Rocket Internet', 'Bell Ventures'],
		achievements: [
			`Founder of Bell Ventures, via which he was Senior Advisor to 150+ investors — PE/VC firms, family offices, sovereign wealth funds — across the world on launching & scaling companies`,
			`Creator of 100 Tasks, the world’s leading e-learning system for entrepreneurship`,
			`Launched 20 companies in one year as Chief Architect of New Ventures at Rocket Internet via his 100-day launch process`,
			`Scaled 25 companies across the world through proven playbooks and best practices`,
			`Led 5 companies as an interim executive, some of which IPOed, like Zalando & Delivery Hero`,
		],
	},
	{
		img: kevin,
		name: 'Kevin Chin',
		linkedIn: 'https://linkedin.com/',
		position: 'Co-Founder & CEO',
		companies: ['JP Morgan', 'Arowana'],
		achievements: [
			`Founder of the award-winning B Corp accredited global investment group, Arowana`,
			`Successfully started, bought, built, fixed, scaled, and sold businesses across industries including software, education, fund management, media, infrastructure services and solar power`,
			`Led multiple exits and IPOed 5 businesses in Australia, New Zealand, and on the NASDAQ`,
			`Author of the book HyperTurnaround! and regular contributor to Inc.com`,
		],
	},
]

const Who: React.FC<unknown> = () => {
	return (
		<section id='who'>
			<div className={styles.sectionContainer}>
				<Caption title='Who We Are' />
				<h2 className={styles.headline}>
					Put your business in expert hands with a proven track record of
					creating essential products.
				</h2>
				<div className={styles.whyItems}>
					{people.map((item, index) => (
						<div className={styles.whoItem} key={index}>
							<div className={styles.whoWrapper}>
								<img src={item.img} alt={item.name} />
							</div>
							<h4>
								{item.name} <AiFillLinkedin />
							</h4>
							<p>{item.position}</p>
							<p>{item.companies.join(', ')}</p>
							<div className={styles.achievements}>
								{item.achievements.map((achievement, index) => (
									<div key={index}>
										<ReactSVG src={star} />
										{achievement}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Who
