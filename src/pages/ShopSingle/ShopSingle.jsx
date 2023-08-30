import React from "react";
import mainBg from "../../assets/shopSingle.png";
import cls from "./ShopSingle.module.scss";
import MainBackground from "../../components/ui/MainBackground/MainBackground";
import star from "../../assets/Star 7.svg";
import arrow from "../../assets/Aerrow.png";
import Button from "../../components/ui/Button/Button";
import SubscribeBanner from "../../components/ui/SubscribeBanner/SubscribeBanner";
import ProductCard from "../../components/ui/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../../components/ui/ProductCard/Product";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import { notification } from "antd";
import { clear } from "../../redux/foundItemsSlice";

const ShopSingle = () => {
	const [productInfo, setProductInfo] = useState(null);
	const { productId } = useParams();
	console.log(productId);
	const dispatch = useDispatch();
	const addItemToCartHandle = product => {
		dispatch(addItemToCart(product));
		toast();
	};

	const [api, contextHolder] = notification.useNotification();
	const toast = () => {
		api.info({
			message: `Товар добавлен в корзину`,
			placement: "top",
		});
	};

	useEffect(() => {
		const getProductById = async () => {
			const { data } = await axios.get(
				`https://64e4fcabc5556380291404a3.mockapi.io/api/v2/products/${productId}`
			);
			console.log(data, "----------");
			setProductInfo(data);
		};
		if (productId) {
			console.log(productId, "---------------ID-------------");
			getProductById();
		}
		dispatch(clear());
	}, [productId]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 700,
			behavior: "smooth",
		});
	};

	return (
		<div>
			{contextHolder}
			<MainBackground backgroundImage={mainBg}>Shop Single</MainBackground>
			<div className='container'>
				<div className={cls.healthBanner}>
					<img src={productInfo?.image} alt='' />
					<div className={cls.healthBanner_label}>{productInfo?.category}</div>
					<div className={cls.healthBanner_info}>
						<div className={cls.healthBanner_info_top}>
							<h5>{productInfo?.name}</h5>

							<div className={cls.product_info_right_stars}>
								{[...Array(productInfo?.rating)].map((_, index) => (
									<img key={index} src={star} alt='star' />
								))}
							</div>
							<p>
								<s>${productInfo?.old_price}</s>
								<span>${productInfo?.price}</span>
							</p>
						</div>
						<p className={cls.healthBanner_info_top_text}>
							{productInfo?.description}
						</p>
						<div className={cls.healthBanner_info_bottom}>
							<p>Quantity :</p>
							<div className={cls.healthBanner_info_bottom_counter}>1</div>
							<button
								onClick={() => addItemToCartHandle(productInfo)}
								style={{
									padding: "30px 39px",
									fontSize: "20px",
									display: "flex",
									gap: 10,
								}}>
								Add To Cart
								<img src={arrow} alt='' />
							</button>
						</div>
					</div>
				</div>
				<div className={cls.descriptionBanner}>
					<div className={cls.descriptionBanner_buttons}>
						<Button
							style={{
								padding: "23px 57px",
								fontSize: 24,
							}}>
							Product Description
						</Button>
						<button
							style={{
								padding: "23px 57px",
								fontSize: 24,
								backgroundColor: "#EFF6F1",
								color: "#274C5B",
							}}>
							Additional Info
						</button>
					</div>
					<div className={cls.descriptionBanner_paragraph}>
						Welcome to the world of natural and organic. Here you can discover
						the bounty of nature. We have grown on the principles of health,
						ecology, and care. We aim to give our customers a healthy
						chemical-free meal for perfect nutrition. It offers about 8–10%
						carbs. Simple sugars — such as glucose and fructose — make up 70%
						and 80% of the carbs in raw.
					</div>
				</div>
				<p className={cls.aboveProducts}>Related Products</p>
				<div onClick={scrollToTop}>
					<ProductCard lastIndex={4}>
						<Link to={`/shopSingle/${productInfo?.id}`} key={productInfo?.id}>
							<Product items={productInfo} />
						</Link>
					</ProductCard>
				</div>
				<SubscribeBanner />
			</div>
		</div>
	);
};

export default ShopSingle;
