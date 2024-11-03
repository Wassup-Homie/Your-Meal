import './Footer.css'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__content'>
				<div className='footer__wrapper'>
					<div className='footer__logo'>
						<a href='/'>
							<img src='YMFooter.svg' alt='FooterLogo' />
						</a>
					</div>

					<div className='info__bar'>
						<div className='footer__call'>
							<p className='footer__call-text'>Номер для заказа</p>
							<div className='footer__call-contact'>
								<img
									src='/Call.svg'
									alt='Phone-Logo'
									className='footer__phone-icon'
								/>
								<a href='tel:+7(930)833-38-11' className='footer__call-number'>
									+7(930)833-38-11
								</a>
							</div>
						</div>

						<div className='footer__socials'>
							<p className='footer__social-text'>Мы в соцсетях</p>
							<div className='socials'>
								<a
									href='https://vk.com/scrp_team'
									className='footer__social-icon'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src='/VK.svg' alt='VK Icon' />
								</a>
								<a
									href='https://t.me/scrp_prod'
									className='footer__social-icon'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src='/Telegram.svg' alt='Telegram Icon' />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='footer__copyright'>&copy; YouMeal, 2024</div>
			</div>
		</footer>
	)
}
