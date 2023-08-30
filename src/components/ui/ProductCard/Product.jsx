import cls from "./ProductCard.module.scss";
import star from "../../../assets/Star 7.svg";

const Product = ({ items }) => {
	const { image, category, price, name, rating, old_price } = items;
	return (
		<div className={cls.card}>
			<div className={cls.card_category}>{category}</div>
			<img src={image} alt='' />
			<p className={cls.card_name}>{name}</p>
			<hr />
			<div className={cls.card_bottom}>
				<p className={cls.card_bottom_price}>
					<s> $ {old_price} </s> &nbsp; <span>{price}</span>
				</p>

				<div className={cls.product_info_right_stars}>
					{[...Array(rating)].map((_, index) => (
						<img key={index} src={star} alt='star' />
					))}
				</div>
			</div>
		</div>
	);
};

export default Product;
