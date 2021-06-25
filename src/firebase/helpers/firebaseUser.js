import { firestore } from '../firebase';

// fetch current user data and update in firebase
export function collectUserData(user) {
	const userRef = firestore.collection("users").doc(user.email);

	userRef.get().then(firebaseUser => {
		if (firebaseUser.exists) userRef.update(user);
		else userRef.set(user);
	})
}

// getting data of specific user
export function getUserData(userEmail) {
	return new Promise((resolve, reject) => {

		const userRef = firestore.collection("users").doc(userEmail);

		userRef.get().then(firebaseUser => {
			if (firebaseUser.exists) resolve(firebaseUser.data());
			else reject();
		})

	});
}