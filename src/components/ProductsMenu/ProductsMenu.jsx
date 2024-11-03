import './ProductsMenu.css'
import AddButton from '../AddButton/AddButton'
import React from 'react'

function ProductsMenu({ products = [], onAddItem }) {
	return (
		<div className='products__menu'>
			{products.map(card => (
				<div key={card.id} className='product__card'>
					<div className='product__img'>
						<img src={card.img} alt={card.name} />
					</div>
					<div className='product__info'>
						<p className='product__price'>{card.price}₽</p>
						<p className='product__name'>{card.name}</p>
						<p className='product__weight'>{card.weight}</p>
					</div>
					<div className='add__button'>
						<AddButton onClick={() => onAddItem(card)} />
					</div>
				</div>
			))}
		</div>
	)
}

export default React.memo(ProductsMenu)
