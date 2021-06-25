import React from 'react';
import AllChats from '../components/chat/chats/AllChats';
import ChatRoom from '../components/chat/room/ChatRoom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function Chat() {
	const { room } = useParams();

	return (
		<Container>
			{room ? <ChatRoom targetUserEmail={room} /> : <AllChats />}
		</Container>
	)
}

const Container = styled.div`
    padding: 20px;
    height: 90vh;
    @media (max-width: 540px) {
        padding: 0px;
    }
`