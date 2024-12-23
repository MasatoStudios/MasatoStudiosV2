import React from 'react'

import Navbar from '../Navigation'
import Image from 'next/image'
import Logo from '../../../../public/images/thumbnails/LogoNoMarkNoBackground.svg'
import styles from './hero.module.css'

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			<Navbar />
			<div className={styles.heroTextContainer}>
				<div className={styles.SloganLeft}>
					<h1 className={styles.SloganText}>
						INSERT SLOGAN HERE FOR THE COMPANY
					</h1>
				</div>
				<div className={styles.LogoRight}>
					<Image
						priority
						className={styles.Logo}
						src={Logo}
						alt='Masato Studios Logo'
					/>
				</div>
			</div>
		</div>
	)
}

export default Hero
