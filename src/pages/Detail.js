import React from 'react'
import CoverImages from '../components/detail/CoverImages';
import ProductDetails from '../components/detail/ProductDetails';
import { useFetchOneProduct } from '../firebase/helpers/fetchProduct';
import { useParams } from 'react-router-dom';
import { Flex, Spinner, useToast } from '@chakra-ui/react';

export default function Detail() {
	const { productId } = useParams(window.location.search);
	const { product, loading } = useFetchOneProduct(productId);
	const toast = useToast();

	if (product?.message && !product?.status) {
		toast({
			title: "No such product",
			duration: 5000,
			isClosable: true,
			position: "top-right",
			status: "error"
		});
	}

	return (
		<div>
			{loading && (
				<Flex height="80vh" width="100%" alignItems="center" justifyContent="center">
					<Spinner />
				</Flex>
			)}
			{product?.status && (
				<div>
					<CoverImages images={product?.message.images} />
					<ProductDetails product={product?.message} />
				</div>
			)}
		</div>
	)
}
