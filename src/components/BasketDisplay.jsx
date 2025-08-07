import { getFormattedPrice, getProductWithId } from '../helpers';
import BasketItem from './BasketItem';

export default function BasketDisplay({ basket, basketDispatch }) {
	const basketIsEmpty = basket.length === 0;

	const totalPrice = basket.reduce((total, { id, amount }) => {
		const product = getProductWithId(id);
		if (!product) {
			return total;
		}
		return total + product.price * amount;
	}, 0);

	return (
		<section className="basket">
			<h2 className="basket__heading">Warenkorb</h2>
			{basketIsEmpty && <strong>Warenkorb ist leer</strong>}
			{basketIsEmpty || (
				<>
					<ul className="basket__list">
						{basket.map((item) => (
							<BasketItem
								{...item}
								key={item.id}
								basketDispatch={basketDispatch}
							/>
						))}
					</ul>
					<button onClick={() => basketDispatch({ action: 'emptyBasket' })}>
						Warenkorb leeren
					</button>
				</>
			)}

			{basket.length > 0 && (
				<output className="basket__total">
					{getFormattedPrice(totalPrice)}
					{/* Hier den Gesamtpreis anzeigen. Wenn der Warenkob leer ist,
				soll das output-Element ausgeblendet werden. */}
				</output>
			)}
		</section>
	);
}
