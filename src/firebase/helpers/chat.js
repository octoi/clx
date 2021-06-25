import { firestore } from "../firebase";

export function sendChatMessage(users, messagePayload) {
	return new Promise((resolve, reject) => {
		const chatRef = firestore.collection("chats").doc(JSON.stringify(users));

		try {
			chatRef.get().then(async chatData => {
				if (!chatData.exists) {
					await chatRef.set({
						users,
						chats: [messagePayload]
					});
				} else {
					let chats = chatData.data()?.chats;
					chats.push(messagePayload);

					chatRef.update({ chats });
					resolve();
				}
			});
		} catch {
			reject();
		}

	});
}


// delete chat room
export async function deleteChatRoom(users) {

	const chatRef = firestore.collection('chats').doc(JSON.stringify(users));
	await chatRef.delete();

}
