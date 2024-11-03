import React from 'react'
import './Header.css'

const Header = React.memo(function Header() {
	return (
		<header className='header'>
			<div className='header__logo'>
				<a href='/'>
					<img src='/YM.svg' alt='YourMeal' />
				</a>
			</div>
			<div className='welcome__section'>
				<div>
					<img src='/Burger.png' alt='Burger' />
				</div>
				<div className='welcome__description'>
					<h1 className='welcome__title'>
						Только самые <span className='primary__text'>сочные бургеры!</span>
					</h1>
					<p className='price__delivery'>
						Бесплатная доставка от <span className='primary__price'>599₽</span>
					</p>
				</div>
			</div>
		</header>
	)
})

export default Header
