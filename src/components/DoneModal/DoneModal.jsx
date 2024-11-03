import React, { useEffect } from 'react'
import './DoneModal.css'

export default function DoneModal({ onClose }) {

	useEffect(() => {
		document.body.style.overflow = 'hidden'

		const handleEsc = event => {
			if (event.key === 'Escape') {
				onClose()
			}
		}
		document.addEventListener('keydown', handleEsc)

		return () => {
			document.body.style.overflow = ''
			document.removeEventListener('keydown', handleEsc)
		}
	}, [onClose])

	return (
		<div className='done__modal__wrapper'>
			<div className='done__modal'>
				<button className='done__modal__close-btn' onClick={onClose}>
					<img src='/Close.svg' alt='Close' />
				</button>
				<h2 className='done__modal__title'>Ваш заказ оформлен!</h2>
				<img src='/Donut.png' alt='Donut' className='done__modal__image' />
			</div>
		</div>
	)
}

