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

export const useFetchUserProducts = (email) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unSubscribe = firestore.collection(collection).where("sellerEmail", "==", email).onSnapshot((snap) => {
			let productsData = [];
			snap.forEach(doc => productsData.push({ ...doc.data(), id: doc.id }));
			setProducts(productsData);
			setLoading(false)
		});


		return () => unSubscribe();
	}, [email]);

	return { products, loading }

}

export const useFetchOneProduct = (id) => {
	const [product, setProduct] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			const productRef = firestore.collection(collection).doc(id);
			const doc = await productRef.get();

			if (!doc.exists) {
				setProduct({ status: false, message: "No such data" })
			} else {
				setProduct({ status: true, message: { ...doc.data(), ref: doc.ref } })
			}

			setLoading(false);
		}

		getData();

	}, [id]);

	return { product, loading }

}