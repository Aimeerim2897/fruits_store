import cls from "./ProductCard.module.scss";
import star from "../../../assets/Star 7.svg";

const Product = ({ items }) => {
	const { image, category, price, name } = items;
	return (
		<div className={cls.card}>
			<div className={cls.card_category}>{category}</div>
			<img src={image} alt='' />
			<p className={cls.card_name}>{name}</p>
			<hr />
			<div className={cls.card_bottom}>
				<p className={cls.card_bottom_price}>
					<s> $20.00</s> <span>{price}</span>{" "}
				</p>
				<div>
					<img src={star} />
					<img src={star} />
					<img src={star} />
					<img src={star} />
					<img src={star} />
				</div>
			</div>
		</div>
	);
};

export default Product;
