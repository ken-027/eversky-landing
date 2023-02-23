/** @format */
import { ReactSVG } from 'react-svg'
import star from '@/assets/star.svg'
import styles from '@/styles/pages/landing.module.scss'

const Caption: React.FC<{ title: string; className?: string }> = ({
	title,
	className,
}) => {
	return (
		<div className={className || styles.header}>
			<h3>{title}</h3>
			<ReactSVG src={star} />
		</div>
	)
}

export default Caption
