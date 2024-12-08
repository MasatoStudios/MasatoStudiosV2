'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
	const [gradient, setGradient] = useState('')

	useEffect(() => {
		// Define a list of colors
		const colors = [
			'#ff9a9e',
			'#fad0c4',
			'#fbc2eb',
			'#a18cd1',
			'#84fab0',
			'#8fd3f4',
		]

		const generateGradient = () => {
			const randomColor1 = colors[Math.floor(Math.random() * colors.length)]
			const randomColor2 = colors[Math.floor(Math.random() * colors.length)]
			return `linear-gradient(to right, ${randomColor1}, ${randomColor2})`
		}

		setGradient(generateGradient())

		const interval = setInterval(() => {
			setGradient(generateGradient())
		}, 5000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div>
			<p>Hello World</p>
		</div>
	)
}
