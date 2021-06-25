import React, { useRef } from 'react';
import useCtx from '../../../context/useCtx';
import useChatMessage from '../../../firebase/helpers/fetchChatMessages';
import { ChatMessagesContainer, ChatMsgContainer } from './styledComponents';
import { useDisclosure, AlertDialogCloseButton, Spinner, Flex, Button } from '@chakra-ui/react';
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody } from '@chakra-ui/react'

export default function ChatMessages({ targetUser }) {

	const { user } = useCtx();
	const { chats, loading, chatUsers } = useChatMessage(targetUser?.email, user?.email);

	return (
		<ChatMessagesContainer >
			{loading && (
				<Flex height="80vh" width="100%" alignItems="center" justifyContent="center">
					<Spinner />
				</Flex>
			)}
			{!loading && chats.length === 0 && (
				<Flex height="60vh" width="100%" alignItems="center" justifyContent="center">
					<Button disabled={true} variant="outline">Type a message to get started 😉</Button>
				</Flex>
			)}
			{chats.map((message, idx) => (
				<ChatMsg
					key={idx}
					message={message?.message}
					isImg={message?.isImg}
					isMine={message?.sender === chatUsers.indexOf(user.email)}
				/>
			))}
		</ChatMessagesContainer >
	)
}

function ChatMsg({ isMine, message, isImg }) {
	let classNames = '';
	classNames += isMine ? 'isMine' : ''
	classNames += isImg ? ' isImg' : ''

	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();

	return (
		<ChatMsgContainer>
			<div className={classNames}>
				{isImg
					? <img onClick={onOpen} src={message} alt="pic" />
					: <p>{message}</p>
				}
			</div>
			<AlertDialog
				motionPreset="slideInBottom"
				leastDestructiveRef={cancelRef}
				onClose={onClose}
				isOpen={isOpen}
				isCentered
				size="xl"
			>
				<AlertDialogOverlay />

				<AlertDialogContent style={{ background: 'var(--secondaryColor)' }}>
					<AlertDialogHeader>Look 👀</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>
						<img src={message} alt="pic" style={{ marginBottom: "20px" }} />
					</AlertDialogBody>
				</AlertDialogContent>
			</AlertDialog>
		</ChatMsgContainer>
	);
}