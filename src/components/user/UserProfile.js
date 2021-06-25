import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, CustomButton } from './styledComponents';
import { Button, Text } from '@chakra-ui/react';

export default function UserProfile({ user }) {
	const history = useHistory();

	return (
		<Container>
			<img src={user?.profile} alt={user?.name} />
			<Text mt={5} fontSize="2xl" fontWeight="semibold">{user?.name}</Text>
			<Text mt={1} fontSize="xl" opacity="0.5">{user?.email}</Text>
			<Button
				size="lg"
				mt={5}
				ml={2}
				as={CustomButton}
				style={{ background: "var(--primaryAccentColor)" }}
				onClick={() => history.push(`/chat/${user?.email}`)}
			>Connect With {user?.name}</Button>
		</Container>
	)
}
