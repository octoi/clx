
import { useState, useEffect } from 'react';
import { firestore } from '../firebase';

const useChatMessage = (targetUserEmail, userEmail) => {
	const [chats, setChats] = useState([]);
	const [loading, setLoading] = useState(true);
	const [chatUsers, setChatUsers] = useState([]);

	useEffect(() => {
		if (!targetUserEmail || !userEmail) return;

		const users = [targetUserEmail, userEmail].sort();

		const chatRef = firestore.collection("chats").doc(JSON.stringify(users));

		chatRef.get().then(async chatData => {
			if (!chatData.exists) {
				await chatRef.set({
					users,
					chats: []
				});
			}
		})

		const unSubscribe = firestore.collection('chats').where('users', '==', users).onSnapshot((snap) => {
			let messages = [];
			snap.forEach(doc => {
				messages = doc?.data().chats;
				setChatUsers(doc?.data().users)
			});
			setChats(messages);
			setLoading(false)
		});


		return () => unSubscribe();
	}, [targetUserEmail, userEmail]);

	return { chats, loading, chatUsers }

}

export default useChatMessage;