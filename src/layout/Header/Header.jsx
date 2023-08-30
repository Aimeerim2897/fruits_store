import { useDispatch, useSelector } from "react-redux";
import cls from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getInStorage } from "../../redux/cartSlice";
import FoundItems from "../../components/FoundItems/FoundItems";
import { find } from "../../redux/foundItemsSlice";

const Header = () => {
	const dispatch = useDispatch();
	const { goods } = useSelector(state => state.cart);
	const { items, value } = useSelector(state => state.fItems);
	const { products } = useSelector(state => state.product);
	const count = goods.length;

	useEffect(() => {
		dispatch(getInStorage());
	}, []);

	return (
		<div className='container'>
			<div className={cls.header}>
				<div className={cls.boxHed}>
					<div className={cls.logoHed}>
						<div className={cls.logoHedIcone}>
							<img src='/src/assets/Logo.png' alt='' />
							<h1>Organick</h1>
						</div>
						<div className={cls.menuHedText}>
							<Link to={"/"}>Home</Link>
							<Link to={"/"}>About</Link>
							<Link to={"/"}>Pages</Link>
							<Link to={"/shop"}>Shop</Link>
							<Link to={"/"}>Projects</Link>
							<Link to={"/"}>News</Link>
						</div>
					</div>

					<div className={cls.activeHed}>
						<div className={cls.searchBtn}>
							<input
								type='search'
                value={value}
								placeholder='Search'
								onChange={({ target: { value } }) => {
									const name = value;
									dispatch(find({ products, name }));
								}}
							/>
							{items.length > 0 ? <FoundItems items={items} /> : null}

							<img src='/src/assets/Search Icon.png' alt='' />
						</div>
						<div className={cls.cartHed}>
							<Link to={"/cart"}>
								<div>
									<img src='/src/assets/Cart Icon.png' alt='' />
									<p>Cart ({count > 0 ? <span>{count}</span> : 0})</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
