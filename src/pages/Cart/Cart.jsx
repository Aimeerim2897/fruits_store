import React from "react";
import cls from "./Cart.module.scss";

import CartCard from "./CartCard";
import { useSelector } from "react-redux/es/hooks/useSelector";


const Cart = () => {
  const { goods } = useSelector(state => state.cart);
	console.log(goods);
	let total = 0;
	if (goods.length > 0) {
		total = goods?.reduce((total, next) => {
			const result = total + next.price * next.quantity;
			return result;
		}, 0);
	}
	return (
		<div>
			<div className={cls.cartTop}>
				<div className={cls.cartTop_container}>
					<h5>PRODUCT DETAILS</h5>
					<div className={cls.cartTop_list}>
						<h5>PRICE</h5>
						<h5>QUANTITY</h5>
						<h5>SUBTOTAL</h5>
						<h5>ACTION</h5>
					</div>
				</div>
				<div className='container'>
					{goods.length === 0 ? (
						<h3>The cart is empty</h3>
					) : (
						goods?.map(item => <CartCard {...item} />)
					)}
					<div className={cls.grandTotal}>
						<div className={cls.grandTotal_price}>
							<p className={cls.grandTotal_price_name}>Grand Total: </p>
							<p className={cls.grandTotal_price_number}>${total}</p>
						</div>
						<button style={{ padding: "16px 24px", fontSize: 20 }}>
							Proceed To Checkout
						</button>
					</div>
					{/* <CartCard/> */}
				</div>
			</div>
		</div>
	);
};

export default Cart;
