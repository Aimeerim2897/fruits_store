import cls from "./Cart.module.scss";
import cartImage from "../../assets/cart-picture.jpg";
import star from "../../assets/Star 7.svg";
import { useDispatch } from "react-redux";
import {
	removeItemInCart,
	incrementQuantity,
	decrementQuantity,
} from "../../redux/cartSlice";

const CartCard = props => {
	const dispatch = useDispatch();
	const { name, image, category, price, rating, quantity, id } = props;
  
	const deleteItem = id => {
		dispatch(removeItemInCart(id));
	};
	const incrementItem = id => {
		dispatch(incrementQuantity(id));
	};
	const decrementItem = id => {
		dispatch(decrementQuantity(id));
	};

	return (
		<div>
			<div className={cls.product}>
				<div className={cls.product_info}>
					<img src={image} alt='' />
					<div className={cls.product_info_right}>
						<p className={cls.product_info_right_name}>{name}</p>
						<p className={cls.product_info_right_category}>
							Category: {category}
						</p>
						<div className={cls.product_info_right_rating}>
							<p>Rating :</p>
							<div className={cls.product_info_right_stars}>
								{[...Array(rating)].map((_, index) => (
									<img key={index} src={star} alt='star' />
								))}
							</div>
						</div>
					</div>
				</div>
				<div className={cls.product_details}>
					<p className={cls.product_details_price}>${price}</p>
					<div className={cls.product_details_counter}>
						<button
							style={{ backgroundColor: "#fff", color: "black" }}
							onClick={() => decrementItem(id)}>
							-
						</button>
						<p>{quantity}</p>
						<button
							style={{ backgroundColor: "#fff", color: "black" }}
							onClick={() => incrementItem(id)}>
							+
						</button>
					</div>
					<p className={cls.product_details_totalPrice}>${price * quantity}</p>
					<p
						className={cls.product_details_trash}
						onClick={() => deleteItem(id)}>
						<i
							class='bi bi-trash'
							style={{ fontSize: 30, color: "#274C5B" }}></i>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
