import './Main.css'
import MenuLinks from '../MenuLinks/MenuLinks'
import Cart from '../Cart/Cart'
import ProductsMenu from '../ProductsMenu/ProductsMenu'
import { BURGERS, SNACKS, HOTDOGS } from '../../ProductsMenu'
import { useState, useCallback, useEffect } from 'react'

export default function Main() {
	const [activeCategory, setActiveCategory] = useState('Бургеры')
	const [products, setProducts] = useState(BURGERS || [])
	const [cartItems, setCartItems] = useState(() => {
		const savedCart = localStorage.getItem('cartItems')
		return savedCart ? JSON.parse(savedCart) : []
	})

	// Синхронизация корзины с localStorage
	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems))
	}, [cartItems])

	const handleCategoryChange = useCallback(category => {
		setActiveCategory(category)

		if (category === 'Бургеры') setProducts(BURGERS)
		else if (category === 'Закуски') setProducts(SNACKS)
		else if (category === 'Хот-доги') setProducts(HOTDOGS)
		else setProducts([])
	}, [])

	const addItemToCart = useCallback(item => {
		setCartItems(prevItems => {
			const existingItem = prevItems.find(i => i.id === item.id)
			if (existingItem) {
				return prevItems.map(i =>
					i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
				)
			} else {
				return [...prevItems, { ...item, quantity: 1 }]
			}
		})
	}, [])

	const incrementItem = useCallback(id => {
		setCartItems(prevItems =>
			prevItems.map(item =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		)
	}, [])

	const decrementItem = useCallback(id => {
		setCartItems(prevItems =>
			prevItems
				.map(item =>
					item.id === id ? { ...item, quantity: item.quantity - 1 } : item
				)
				.filter(item => item.quantity > 0)
		)
	}, [])

	return (
		<main className='main'>
			<MenuLinks
				activeCategory={activeCategory}
				onCategoryChange={handleCategoryChange}
			/>
			<h2 className='menu__title'>{activeCategory}</h2>

			<section className='menu'>
				<Cart
					cartItems={cartItems}
					incrementItem={incrementItem}
					decrementItem={decrementItem}
				/>
				<div className='products-section'>
					<ProductsMenu products={products} onAddItem={addItemToCart} />
				</div>
			</section>
		</main>
	)
}
