import './Container.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

export default function Container() {
	return (
		<>
			<div className='container'>
				<Header />
				<Main />
			</div>
			<Footer />
		</>
	)
}
