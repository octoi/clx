import React from 'react';
import FloatingButton from '../components/home/FloatingButton';
import Products from '../components/home/Products';
import { useFetchAllProducts } from '../firebase/helpers/fetchProduct';

export default function Home() {
	const { products, loading } = useFetchAllProducts();

	return (
		<section style={{ marginTop: "50px" }}>
			<Products products={products} loading={loading} />
			<FloatingButton />
		</section>
	)
}