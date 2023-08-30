import React from 'react'
import SubscribeBanner from '../../components/ui/SubscribeBanner/SubscribeBanner'
import cls from "./ShopBlog.module.css"
import MainBackground from '../../components/ui/MainBackground/MainBackground'
import shopImage from '../../assets/ShopPage.png'
import ProductCard from '../../components/ui/ProductCard/ProductCard'

const ShopBlog = () => {
  return (
    <div>
        <MainBackground backgroundImage={shopImage} >Shop</MainBackground>
      <div className='container'>

        <ProductCard />
        <SubscribeBanner />
      </div>
    </div>
  )
}

export default ShopBlog