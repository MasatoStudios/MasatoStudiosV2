import React from 'react'
import './navbar.module.css' // Make sure to create a CSS file for styling

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-logo'>
				<img src='/path/to/your/logo.png' alt='Logo' />
			</div>
			<div className='navbar-menu'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					width='24'
					height='24'
				>
					<path
						d='M3 6h18M3 12h18M3 18h18'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
					/>
				</svg>
			</div>
		</nav>
	)
}

export default Navbar
