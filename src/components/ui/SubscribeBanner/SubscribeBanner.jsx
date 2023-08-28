import Button from '../Button/Button'
import './SubscribeBanner.scss'
const SubscribeBanner = () => {
  return (
		<div className='banner'>
			<p>Subscribe to <br /> our Newsletter</p>
			<div>
				<input type='email' placeholder='Your Email Address' />
				<Button style={{padding: '29px 47px',
      fontSize: 18}}>Subscribe</Button>
			</div>
		</div>
	);
}

export default SubscribeBanner