import './AddButton.css'

export default function AddButton({ onClick }) {
	return (
		<button className='add__btn' onClick={onClick}>
			Добавить
		</button>
	)
}
