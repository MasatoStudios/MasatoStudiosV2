'use client'

import showcaseData from '../../public/data/Showcase.json'

import Image from 'next/image'

import Hero from './Components/Hero'
import Featured from './Components/FeaturedWork'
import Showcase from './Components/Showcase'

import './globals.css'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

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

	return (
		<div>
			<Hero />
			<div className='container'>
				{showcaseData.map((item) => (
					<div className='panel'>
						<Showcase key={item.id} showcaseID={item.id} title={item.title} text={item.text}/>
					</div>
				))}
			</div>

			<Featured />
		</div>
	)
}
