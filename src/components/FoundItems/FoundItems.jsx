import { Link } from "react-router-dom";
import cls from "./FoundItems.module.scss";

const FoundItems = ({ items }) => {
	return (
		<div className={cls.wrap}>
			<div className={cls.items}>
				{items?.map(el => (
					<Link key={el.id} to={`/shopSingle/${el.id}`}>
						<div>
							<h5>{el.name}</h5>
							<p> {el.price} $ </p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default FoundItems;
