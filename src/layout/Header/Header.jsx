import { useDispatch, useSelector } from "react-redux";
import cls from "./Header.module.scss";
import { NavLink } from "react-router-dom";
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
            <NavLink to={'/'}>

						<div className={cls.logoHedIcone}>
							<img src='/src/assets/Logo.png' alt='' />
							<h1>Organick</h1>
						</div>
            </NavLink>
						<div className={cls.menuHedText}>
							<NavLink to={"/"}>Home</NavLink>
							<NavLink to={"/page-not-found"}>About</NavLink>
							{/* <NavLink to={"/page-not-found"}>Pages</NavLink> */}
							<NavLink to={"/shop"}>Shop</NavLink>
							<NavLink to={"/page-not-found"}>Projects</NavLink>
							<NavLink to={"/blog"}>News</NavLink>
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
							<NavLink to={"/cart"}>
								<div>
									<img src='/src/assets/Cart Icon.png' alt='' />
									<p>Cart ({count > 0 ? <span>{count}</span> : 0})</p>
								</div>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
