/** @format */
// cSpell:ignore eversky

import { ReactSVG } from 'react-svg'
import { Link } from 'react-router-dom'
import styles from '@/styles/layout/_footer.module.scss'
import logo from '@/assets/logo.svg'
import star from '@/assets/star.svg'

const links: { text: string; link: string }[] = [
	{ text: 'Home', link: '/eversky' },
	{ text: 'About', link: '/eversky/about-us' },
	{ text: 'Careers', link: '/eversky/careers' },
	{ text: 'Contact Us', link: '/eversky/contact-us' },
]

// eslint-disable-next-line @typescript-eslint/ban-types
const Footer: React.FC<{}> = () => {
	const mail = 'info@everskysoftware.com'
	const linkedIn = 'https://www.linkedin.com/'

	const scrollTop = () => window.scrollTo(0, 0)

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.header}>
					<ReactSVG src={logo} />
					<ReactSVG src={star} />
				</div>
				<p className={styles.text}>Constructing a sustainable future.</p>
				<div className={styles.contact}>
					<p>Contact</p>
					<a href={`mailto:${mail}`}>{mail}</a>
				</div>
				<ul className={styles.links}>
					{links.map((item, index) => (
						<li key={index}>
							<Link onClick={() => scrollTop()} to={item.link}>
								{item.text}
							</Link>
						</li>
					))}
				</ul>
				<div className={styles.bottom}>
					<p>
						Follow us on{' '}
						<a className={styles.linkedinLink} target='_blank' href={linkedIn}>
							Linkedin
						</a>
					</p>
					<p>&copy; EverSky Software Group</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
