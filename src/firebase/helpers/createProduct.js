import { firestore, storage } from '../firebase';

const uploadImages = (images) => {
	return new Promise((resolve, reject) => {
		const urls = [];

		images.forEach(image => {
			const storageRef = storage.ref(`${Date.now()}-${image.info.name}`); // referencing image

			storageRef.put(image.info).on('state_changed', () => { }, (err) => {
				console.log(err)
				reject(err)
			}, async () => {
				const url = await storageRef.getDownloadURL(); // getting direct url for images
				urls.push(url);

				if (urls.length === images.length) {
					resolve(urls);
				}
			});
		});


	});
}

const createProduct = (data) => {
	return new Promise((resolve, reject) => {
		const productRes = firestore.collection("products");

		uploadImages(data.images).then(urls => {
			let product = { ...data, images: urls, }

			productRes.add(product).then(() => {
				resolve()
			}).catch(err => {
				console.log(err)
				reject(err)
			})

		}).catch(reject)

	});
}

export default createProduct;