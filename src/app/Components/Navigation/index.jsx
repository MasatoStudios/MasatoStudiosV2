// imports
import React from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

// styles
import styles from './navbar.module.css'

// TODO: Add styles (maybe the language selector)
// Add Font, style text and links when active, add hover effect

const Navbar = () => {
	return (
		<nav className={styles.navContainer}>
			<div className={styles.navNameContainer}>
				<Link className={clsx(styles.link)} href='/'>
					<span className={styles.navNameFullSpan}>
						<span className={styles.navNameFirst}>Masato</span>
						<span className={styles.navNameSecond}>Studios</span>
					</span>
				</Link>
			</div>
			<div className={styles.NavLinksContainer}>
				<Link className={clsx(styles.link)} href='/about'>
					About
				</Link>
				<Link className={clsx(styles.link)} href='/projects'>
					Projects
				</Link>
				<Link className={clsx(styles.link)} href='/contact'>
					Contact
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
