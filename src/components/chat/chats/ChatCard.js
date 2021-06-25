import React, { useState, useEffect } from 'react';
import { ChatCardContainer } from './styledComponents';
import { Text, Flex } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { getUserData } from '../../../firebase/helpers/firebaseUser';

export default function ChatCard({ targetEmail }) {
	const history = useHistory();
	const [targetUserData, setTargetUserData] = useState();

	useEffect(() => {
		getUserData(targetEmail).then(user => {
			setTargetUserData(user);
		})
	}, [targetEmail]);


	return (
		<ChatCardContainer onClick={() => history.push(`/chat/${targetEmail}`)}>
			<img src={targetUserData?.profile} alt={targetUserData?.name} />
			<Flex direction="column" ml={5}>
				<Text fontSize="lg">{targetUserData?.name}</Text>
				<Text fontSize="sm" opacity="0.5">{targetEmail}</Text>
			</Flex>
		</ChatCardContainer>
	)
}
