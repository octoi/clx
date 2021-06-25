import React from 'react';
import ChatCard from './ChatCard';
import { Container, ChatsContainer } from './styledComponents';
import { Text } from '@chakra-ui/react';
import useFetchRooms from '../../../firebase/helpers/fetchChatRoom';
import useCtx from '../../../context/useCtx';

export default function AllChats() {

	const { user } = useCtx();
	const { rooms, loading } = useFetchRooms(user?.email);

	return (
		<div>
			<Container>
				<Text fontSize="xl" fontWeight="semibold">All Chats</Text>
				<ChatsContainer>
					{loading && <p>Loading....</p>}
					{!loading && rooms.length === 0 && <p style={{ opacity: '0.8' }}>No recent chats</p>}
					{rooms.map(room => {
						let targetIdx = room?.users.indexOf(user?.email) === 0 ? 1 : 0;
						let targetEmail = room?.users[targetIdx];

						return <ChatCard
							key={room?.id}
							targetEmail={targetEmail}
						/>
					})}
				</ChatsContainer>
			</Container>
			<br />
		</div>
	)
}
