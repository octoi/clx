import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { getUserData } from '../firebase/helpers/firebaseUser';
import UserProfile from '../components/user/UserProfile';
import Products from '../components/home/Products';
import { useFetchUserProducts } from '../firebase/helpers/fetchProduct';

export default function User() {
	const [seller, setSeller] = useState(null);
	const { userEmail } = useParams(window.location.search);
	const { products, loading } = useFetchUserProducts(userEmail);
	const history = useHistory();
	const toast = useToast();

	useEffect(() => {
		getUserData(userEmail).then((userData) => {
			setSeller(userData)
		}).catch(() => {
			toast({
				title: "No such user !",
				description: `We could not find any user with email ${userEmail}`,
				status: "error",
				duration: 5000,
				isClosable: true,
				position: 'top-right',
			});
			history.push('/');
		});
	}, [userEmail, history, toast])

	return (
		<div>
			{seller && (
				<UserProfile user={seller} />
			)}
			<div style={{ marginTop: "50px" }}>
				<Products products={products} loading={loading} />
			</div>
		</div>
	)
}
