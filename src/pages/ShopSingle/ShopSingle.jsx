import React from "react";
import mainBg from "../../assets/shopSingle.png";
import cls from "./ShopSingle.module.scss";
import MainBackground from "../../components/ui/MainBackground/MainBackground";
import nut from "../../assets/nut-single-shop.png";
import star from "../../assets/Star 7.svg";
import arrow from "../../assets/Aerrow.png";
import Button from "../../components/ui/Button/Button";
// import SubscribeBanner from "../../components/ui/SubscribeBanner/SubscribeBanner";
import SubscribeBanner from "../../components/ui/SubscribeBanner/SubscribeBanner";
import ProductCard from "../../components/ui/ProductCard/ProductCard";
const ShopSingle = () => {
	return (
		<div>
			<div>Header</div>
			<MainBackground backgroundImage={mainBg}>Shop Single</MainBackground>
			<div className='container'>
				<div className={cls.healthBanner}>
					<img src={nut} alt='' />
					<div className={cls.healthBanner_label}>Millets</div>
					<div className={cls.healthBanner_info}>
						<div className={cls.healthBanner_info_top}>
							<h5>Health Pistachios</h5>
							<div>
								<img src={star} alt='' />
								<img src={star} alt='' />
								<img src={star} alt='' />
								<img src={star} alt='' />
								<img src={star} alt='' />
							</div>
							<p>
								<s>$20.00</s>
								<span>$13.00</span>
							</p>
						</div>
						<p className={cls.healthBanner_info_top_text}>
							Simply dummy text of the printing and typesetting industry. Lorem
							had <br /> ceased to been the industry's standard dummy text ever
							since the 1500s, <br /> when an unknown printer took a galley.
						</p>
						<div className={cls.healthBanner_info_bottom}>
							<p>Quantity :</p>
							<div className={cls.healthBanner_info_bottom_counter}>1</div>
							<button
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
				<ProductCard lastIndex={4} />
				<SubscribeBanner />
			</div>
		</div>
	);
};

export default ShopSingle;
