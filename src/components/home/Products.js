import React, { useEffect, useState } from 'react';
import * as JsSearch from 'js-search';
import Product from './Product';
import useCtx from '../../context/useCtx';
import { ProductGrid } from './styledComponents';
import { Grid, Flex, Spinner } from '@chakra-ui/react';

export default function Products({ products, loading }) {
	const { searchQuery } = useCtx();
	const [stateProducts, setStateProducts] = useState([]);
	var search = new JsSearch.Search('isbn');


	if (products.length > 0) {
		search.addIndex('title');
		search.addIndex(['user', 'name']);
		search.addIndex('location')
		search.addIndex('price')
		search.addDocuments(products);
	}


	useEffect(() => {
		if (searchQuery.trim().length === 0) {
			setStateProducts(products)
		} else {
			let searchResult = search.search(searchQuery);
			setStateProducts(searchResult);
		}
	}, [searchQuery, products]);

	return (
		<div>
			{loading && (
				<Flex height="80vh" width="100%" alignItems="center" justifyContent="center">
					<Spinner />
				</Flex>
			)}
			<Grid as={ProductGrid} gap={6}>
				{stateProducts.map(product => <Product key={product?.id} product={product} />)}
			</Grid>
		</div>
	)
}
