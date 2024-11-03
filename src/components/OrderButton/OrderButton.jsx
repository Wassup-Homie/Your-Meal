import './OrderButton.css'

export default function OrderButton({ onClick }) {
	return (
		<button className='order__btn' onClick={onClick}>
			Оформить заказ
		</button>
	)
}
