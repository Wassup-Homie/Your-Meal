import './MenuLinks.css'
import { LINKS } from '../../Links'

export default function MenuLinks({ activeCategory, onCategoryChange }) {
	return (
		<div className='menu__links'>
			{LINKS.map(link => (
				<button
					key={link.id}
					className={`menu__button ${
						activeCategory === link.name ? 'active' : ''
					}`}
					onClick={() => onCategoryChange(link.name)}
				>
					<img src={link.img} alt={link.name} className='button__img' />
					<span className='btn__name'>{link.name}</span>
				</button>
			))}
		</div>
	)
}
