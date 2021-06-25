import { useState, useEffect } from 'react';
import { firestore } from '../firebase';

const collection = 'products';

export const useFetchAllProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unSubscribe = firestore.collection(collection).orderBy("createdAt", "desc").onSnapshot((snap) => {
			let productsData = [];
			snap.forEach(doc => productsData.push({ ...doc.data(), id: doc.id }));
			setProducts(productsData);
			setLoading(false)
		});

		return () => unSubscribe(); // stop products listener
	}, []);

	return { products, loading }

}