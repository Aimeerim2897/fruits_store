import {Link} from 'react-router-dom'
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
			{products.slice(0, lastIndex || products.length).map(product =>(
        <Link to={`/shopSingle/${product.id}`} key={product.id}>
          <Product items={product} />
        </Link>
      )
			)}
		</div>
	);
};

export default ProductCard;
