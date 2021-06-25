import React, { useState, useEffect, useRef } from 'react';
import ChatForm from './ChatForm';
import ChatMessages from './ChatMessages';
import { useHistory } from 'react-router-dom';
import { Text, Flex, Button, useToast } from '@chakra-ui/react';
import { Container, ChatProfile } from './styledComponents';
import { deleteChatRoom } from '../../../firebase/helpers/chat';
import { getUserData } from '../../../firebase/helpers/firebaseUser';
import useCtx from '../../../context/useCtx';

export default function ChatRoom({ targetUserEmail }) {
	const [targetUser, setTargetUser] = useState();
	const history = useHistory();
	const toast = useToast();
	const { user } = useCtx();
	const blockBtn = useRef();

	useEffect(() => {
		if (targetUserEmail === user.email) {
			toast({
				title: "Can't send message",
				description: "You can't just send message to yourself",
				duration: 5000,
				isClosable: true,
				position: 'top-right',
				status: 'error',
			});
			history.push('/chat')
		}

		getUserData(targetUserEmail).then((userData) => {
			setTargetUser(userData)
		}).catch(() => {
			toast({
				title: "No such user !",
				description: `We could not find any user with email ${targetUserEmail}`,
				status: "error",
				duration: 5000,
				isClosable: true,
				position: 'top-right',
			});
			history.push('/');
		});
	}, [targetUserEmail, history, toast, user]);

	const blockUser = () => {
		const word = `
            <p>Confirm</p>
            <span>👆</span>
        `

		if (blockBtn.current.innerHTML !== word) {
			blockBtn.current.innerHTML = word;
			return
		}

		const users = [targetUserEmail, user?.email].sort();

		deleteChatRoom(users);
		history.push('/');

	}

	return (
		<Container>
			<ChatProfile>
				{targetUser && (
					<Flex alignItems="center">
						<img src={targetUser?.profile} alt={targetUser?.name} />
						<Flex direction="column" ml={5}>
							<Text fontSize="lg">{targetUser?.name}</Text>
							<Text fontSize="sm" opacity="0.5">{targetUser?.email}</Text>
						</Flex>
					</Flex>
				)}
				<Button style={{ marginRight: "20px" }} onClick={blockUser} ref={blockBtn} variant="outline">
					<p>Block</p>
					<span>❌</span>
				</Button>
			</ChatProfile>
			<ChatMessages targetUser={targetUser} />
			<ChatForm targetUserEmail={targetUserEmail} />
		</Container>
	)
}
