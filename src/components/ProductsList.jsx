import products from '../products';
import Product from './Product';

export default function ProductsList({ basketDispatch }) {
	return (
		<div className="products">
			{products.map((product) => (
				<Product
					key={product.id}
					{...product}
					basketDispatch={basketDispatch}
				/>
			))}
		</div>
	);
}
