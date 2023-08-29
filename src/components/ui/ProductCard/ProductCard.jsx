import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/productSlice";
import Product from "./Product";



const ProductCard = ({ lastIndex }) => {
	const dispatch = useDispatch();
	const { products, isLoaded } = useSelector(state => state.product);

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	if (isLoaded) {
		return <h1>Loading...</h1>;
	}

	return (
		<div
			style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 120 }}>
			{products.slice(0, lastIndex || products.length).map(el => {
				return <Product key={el.id} items={el} />;
			})}
		</div>
	);
};

export default ProductCard;
