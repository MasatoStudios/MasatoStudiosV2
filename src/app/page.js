'use client'

import data from '../../public/data/Showcase.json'

import Image from 'next/image'
import styles from './page.module.css'

import Hero from './Components/Hero'
import Featured from './Components/FeaturedWork'
import Showcase from './Components/Showcase'

import './globals.css'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
	const [gradient, setGradient] = useState('')

	// USED FOR SIDE SCROLLING SECTION
	useEffect(() => {
		const sections = gsap.utils.toArray('.panel')

		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: '.container',
				pin: true,
				invalidateOnRefresh: true,
				anticipatePin: 1,
				scrub: 1.23,
				end: () => '+=' + document.querySelector('.container').offsetWidth,
			},
		})
	}, [])

	// USED FOR GRADIENT BACKGROUND
	// useEffect(() => {
	// 	// Define a list of colors
	// 	const colors = [
	// 		'#ff9a9e',
	// 		'#fad0c4',
	// 		'#fbc2eb',
	// 		'#a18cd1',
	// 		'#84fab0',
	// 		'#8fd3f4',
	// 	]

	// 	const generateGradient = () => {
	// 		const randomColor1 = colors[Math.floor(Math.random() * colors.length)]
	// 		const randomColor2 = colors[Math.floor(Math.random() * colors.length)]
	// 		return `linear-gradient(to right, ${randomColor1}, ${randomColor2})`
	// 	}

	// 	setGradient(generateGradient())

	// 	const interval = setInterval(() => {
	// 		setGradient(generateGradient())
	// 	}, 5000)

	// 	return () => clearInterval(interval)
	// }, [])

	return (
		<div>
			<Hero />

			<div className='container'>
				<section className='panel'>
					<Showcase title={'test 1'} />
				</section>
				<section className='panel'>
					<Showcase title={'test 2'} />
				</section>
				<section className='panel'>
					<Showcase title={'test 3'} />
				</section>
				<section className='panel'>
					<Showcase title={'test 4'} />
				</section>
			</div>

			<Featured />
		</div>
	)
}
