import React, { useState, useEffect } from 'react'
import './OrderModal.css'
import OrderButton from '../OrderButton/OrderButton'

export default function OrderModal({ onClose, onConfirm }) {
	const [deliveryMethod, setDeliveryMethod] = useState('delivery')
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [address, setAddress] = useState('')
	const [floor, setFloor] = useState('')
	const [intercom, setIntercom] = useState('')
	const [errors, setErrors] = useState({})

	// Загрузка сохраненных данных пользователя при монтировании компонента
	useEffect(() => {
		const savedUserData = localStorage.getItem('userData')
		if (savedUserData) {
			const { name, phone, address, floor, intercom } =
				JSON.parse(savedUserData)
			setName(name)
			setPhone(phone)
			setAddress(address)
			setFloor(floor)
			setIntercom(intercom)
		}

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

	// Функция для валидации данных
	const validate = () => {
		const newErrors = {}
		if (!/^[a-zA-Zа-яА-Я]+$/.test(name))
			newErrors.name = 'Имя должно содержать только буквы'
		if (!/^\+?\d+$/.test(phone))
			newErrors.phone = 'Телефон должен содержать только цифры и знак +'
		if (deliveryMethod === 'delivery' && !address)
			newErrors.address = 'Адрес обязателен для доставки'
		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	// Сохранение данных пользователя в localStorage при отправке формы
	const handleSubmit = event => {
		event.preventDefault()
		if (validate()) {
			const userData = { name, phone, address, floor, intercom }
			localStorage.setItem('userData', JSON.stringify(userData)) // Сохранение данных пользователя
			onConfirm() // Завершение заказа
		}
	}

	return (
		<div className='modal-overlay'>
			<div className='modal'>
				<div className='modal__image-section'>
					<img src='/Donut.png' alt='Donut' className='modal__image' />
				</div>

				<div className='modal__form-section'>
					<div className='modal__header'>
						<h3 className='modal__title'>Доставка</h3>
						<button className='modal__close-btn' onClick={onClose}>
							<img src='/Close.svg' alt='Close' />
						</button>
					</div>

					<form className='modal__form' onSubmit={handleSubmit}>
						<label className='modal__label'>
							Ваше имя <span className='modal__required'>*</span>
							<input
								type='text'
								className={`modal__input ${
									errors.name ? 'modal__input--error' : ''
								}`}
								placeholder='Ваше имя'
								value={name}
								onChange={e => setName(e.target.value)}
								required
							/>
							{errors.name && <p className='modal__error'>{errors.name}</p>}
						</label>

						<label className='modal__label'>
							Телефон <span className='modal__required'>*</span>
							<input
								type='tel'
								className={`modal__input ${
									errors.phone ? 'modal__input--error' : ''
								}`}
								placeholder='Телефон'
								value={phone}
								onChange={e => setPhone(e.target.value)}
								required
							/>
							{errors.phone && <p className='modal__error'>{errors.phone}</p>}
						</label>

						{deliveryMethod === 'delivery' && (
							<label className='modal__label'>
								Адрес <span className='modal__required'>*</span>
								<input
									type='text'
									className={`modal__input ${
										errors.address ? 'modal__input--error' : ''
									}`}
									placeholder='Улица, дом, квартира'
									value={address}
									onChange={e => setAddress(e.target.value)}
									required
								/>
								{errors.address && (
									<p className='modal__error'>{errors.address}</p>
								)}
							</label>
						)}

						<div className='modal__input-row'>
							<input
								type='text'
								className='modal__input'
								placeholder='Этаж'
								value={floor}
								onChange={e => setFloor(e.target.value)}
							/>
							<input
								type='text'
								className='modal__input'
								placeholder='Домофон'
								value={intercom}
								onChange={e => setIntercom(e.target.value)}
							/>
						</div>

						<OrderButton />
					</form>
				</div>
			</div>
		</div>
	)
}
