import React, { useState, useRef } from 'react';
import { ChatFormContainer } from './styledComponents';
import { useToast } from '@chakra-ui/react';
import useCtx from '../../../context/useCtx';
import { sendChatMessage } from '../../../firebase/helpers/chat';

export default function ChatForm({ targetUserEmail }) {
	const [message, setMessage] = useState('');
	const fileInputRef = useRef();
	const toast = useToast();
	const { user } = useCtx();

	const send = (msg, isImg) => {
		if (msg.trim().length === 0) {
			toast({
				title: "Type a message nerd !!",
				description: "You can't just send a freaking blank message 😢",
				isClosable: true,
				duration: 5000,
				status: "error",
				position: "top-right",
			});
			return;
		}

		const users = [user?.email, targetUserEmail].sort();

		const messagePayload = {
			message: msg,
			sender: users.indexOf(user?.email),
			isImg,
		}

		sendChatMessage(users, messagePayload).then(() => {
			setMessage('');
		}).catch(() => {
			toast({
				title: "Failed to send message",
				description: "IDK what just happened, try sending again",
				isClosable: true,
				duration: 5000,
				status: "error",
				position: "top-right",
			});
		})

	}

	const sendImg = () => {
		const fileInput = fileInputRef.current;

		fileInput.click();

		fileInput.addEventListener("change", event => {
			let file = event.target.files[0];

			if (file.type.substring(0, 5) !== "image") {
				toast({
					title: "Cannot use this file",
					description: "Invalid file format, use an image file",
					isClosable: true,
					duration: 5000,
					status: "error",
					position: "top-right",
				});
				return
			}

			var reader = new FileReader();

			reader.onloadend = event => send(event.target.result, true);

			if (file) reader.readAsDataURL(file);
		});
	}

	return (
		<ChatFormContainer>
			<input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
			<input type="file" ref={fileInputRef} style={{ display: 'none' }} accept="image/*" />
			<button onClick={sendImg} style={message ? { opacity: '0.1', cursor: 'not-allowed' } : {}}>📷</button>
			<button onClick={() => send(message, false)} style={!message ? { opacity: '0.1', cursor: 'not-allowed' } : {}}>🕊️</button>
		</ChatFormContainer>
	)
}
