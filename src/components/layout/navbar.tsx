/** @format */
// cSpell:ignore eversky

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '@/styles/layout/_navbar.module.scss'
import logo from '@/assets/logo.svg'
import { ReactSVG } from 'react-svg'
import { Spin as Hamburger } from 'hamburger-react'

const links: { location: string; text: string }[] = [
	{ location: '/eversky/about-us', text: 'About Us' },
	{ location: '/eversky/careers', text: 'Careers' },
]

// eslint-disable-next-line @typescript-eslint/ban-types
const NavBar: React.FC<{}> = () => {
	const [open, setOpen] = useState<boolean>(false)

	const scrollTop = () => window.scrollTo(0, 0)

	useEffect(() => {
		const html = document.querySelector('html') as unknown as HTMLElement
		if (open) html.style.overflowY = 'hidden'
		else html.style.overflowY = 'auto'
	}, [open])

	const toggle = () => setOpen((prevState) => !prevState)

	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<Link
					onClick={() => scrollTop()}
					className={styles.logo}
					to={'/eversky'}
				>
					<ReactSVG src={logo} />
				</Link>
				<span className={styles.burger}>
					<Hamburger
						label='Show menu'
						rounded
						size={30}
						duration={0.6}
						distance='sm'
						easing='ease-in-out'
						direction='right'
						onToggle={toggle}
						toggled={open}
					/>
				</span>
				<ul className={`${styles.menuContainer} ${open ? styles.show : ''}`}>
					{links.map((item, index) => (
						<li key={index}>
							<Link onClick={() => scrollTop()} to={item.location}>
								{item.text}
							</Link>
						</li>
					))}
					<li>
						<a type='button' onClick={() => setOpen(false)} href='#contact'>
							Contact us
						</a>
					</li>
				</ul>
				<div
					onClick={() => setOpen(false)}
					className={`${styles.backdrop} ${styles.menuContainer} ${
						open ? styles.show : ''
					}`}
				></div>
			</div>
		</nav>
	)
}

export default NavBar
