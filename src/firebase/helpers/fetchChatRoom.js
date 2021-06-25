import { useState, useEffect } from 'react';
import { firestore } from '../firebase';

const useFetchChatRooms = (userEmail) => {
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unSubscribe = firestore.collection('chats').where('users', 'array-contains', userEmail).onSnapshot((snap) => {
			let roomsData = [];
			snap.forEach(doc => {
				let roomData = { users: doc.data()?.users, id: doc.id };
				roomsData.push(roomData);
			});

			setRooms(roomsData);
			setLoading(false)
		});


		return () => unSubscribe();
	}, [userEmail]);

	return { rooms, loading }

}

export default useFetchChatRooms;