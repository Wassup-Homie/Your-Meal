import React, { useState } from 'react'
import './Cart.css'
import OrderButton from '../OrderButton/OrderButton'
import OrderModal from '../OrderModal/OrderModal'
import DoneModal from '../DoneModal/DoneModal'
import { addOrder } from '../../data'

function Cart({ cartItems, incrementItem, decrementItem }) {
	const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
	const [isDoneModalOpen, setIsDoneModalOpen] = useState(false)

	const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	)

	const deliveryPrice = totalPrice >= 599 ? 0 : 599

	const handleOrderButtonClick = () => {
		setIsOrderModalOpen(true)
	}

	const closeOrderModal = () => {
		setIsOrderModalOpen(false)
	}

	const closeDoneModal = () => {
		setIsDoneModalOpen(false)
	}

	const handleConfirmOrder = () => {
		addOrder(cartItems)
		setIsOrderModalOpen(false)
		setIsDoneModalOpen(true)
	}

	return (
		<div className='order__cart'>
			{cartItems.length === 0 ? (
				<div className='cart__description'>
					<h3 className='cart__name'>Корзина</h3>
					<p className='cart__item'>Тут пока пусто :(</p>
				</div>
			) : (
				<>
					<div className='cart__products'>
						<h3 className='cart__title'>Корзина</h3>
						<span className='counter'>{totalItems}</span>
					</div>
					<hr className='line' />

					<div className='cart__items'>
						{cartItems.map(item => (
							<div key={item.id}>
								<div className='order__info'>
									<img src={item.img} alt={item.name} />
									<div className='food__items'>
										<p className='food__name'>{item.name}</p>
										<p className='food__weight'>{item.weight}</p>
										<p className='food__price'>{item.price}₽</p>
									</div>
									<div className='counters'>
										<button
											className='decrement__btn'
											onClick={() => decrementItem(item.id)}
										>
											-
										</button>
										<span className='counter__prod'>{item.quantity}</span>
										<button
											className='increment__btn'
											onClick={() => incrementItem(item.id)}
										>
											+
										</button>
									</div>
								</div>
								<hr className='line' />
							</div>
						))}
					</div>

					<div className='result'>
						<h4 className='result__title'>Итого</h4>
						<span className='result__price'>{totalPrice + deliveryPrice}₽</span>
					</div>

					<div className='order__button'>
						<OrderButton onClick={handleOrderButtonClick} />
					</div>

					<div className='delivery__info'>
						<img src='/Доставка.svg' alt='Доставка' />
						<p className='delivery__status'>
							{deliveryPrice === 0
								? 'Бесплатная доставка'
								: `Доставка ${deliveryPrice}₽`}
						</p>
					</div>
				</>
			)}

			{isOrderModalOpen && (
				<OrderModal onClose={closeOrderModal} onConfirm={handleConfirmOrder} />
			)}

			{isDoneModalOpen && <DoneModal onClose={closeDoneModal} />}
		</div>
	)
}

export default React.memo(Cart)
