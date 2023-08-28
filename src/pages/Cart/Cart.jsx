import React from "react";
import cls from "./Cart.module.scss";
import cartImage from "../../assets/cart-picture.jpg";
import star from "../../assets/Star 7.svg";
const Cart = () => {
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
					<div className={cls.product}>
						<div className={cls.product_info}>
							<img src={cartImage} alt='' />
							<div className={cls.product_info_right}>
								<p className={cls.product_info_right_name}> White Nuts</p>
								<p className={cls.product_info_right_category}>
									Category: Millets
								</p>
								<div className={cls.product_info_right_rating}>
									<p>Rating :</p>
									<img src={star} alt='' />
								</div>
							</div>
						</div>
						<div className={cls.product_details}>
							<p className={cls.product_details_price}>$29</p>
							<div className={cls.product_details_counter}>
								<p>+</p>
								<p>1</p>
								<p>+</p>
							</div>
							<p className={cls.product_details_totalPrice}>$29</p>
							<p className={cls.product_details_trash}>
								<i
									class='bi bi-trash'
									style={{ fontSize: 30, color: "#274C5B" }}></i>
							</p>
						</div>
					</div>
					<div className={cls.grandTotal}>
						<div className={cls.grandTotal_price}>
							<p className={cls.grandTotal_price_name}>Grand Total: </p>
							<p className={cls.grandTotal_price_number}>$518.00</p>
						</div>
						<button style={{padding: '16px 24px', fontSize: 20}}>Proceed To Checkout</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
