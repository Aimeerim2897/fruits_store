import React from 'react'
import mainBg from '../../assets/shopSingle.png'
import cls from './ShopSingle.module.scss'
import MainBackground from '../../components/MainBackground/MainBackground'
const ShopSingle = () => {
  return (
		<div>
			<MainBackground backgroundImage={mainBg}>Shop Single</MainBackground>
		</div>
	);
}

export default ShopSingle