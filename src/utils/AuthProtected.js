import useCtx from "../context/useCtx";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Flex, Spinner } from '@chakra-ui/react';

export default function AuthProtected({ children }) {
	const { user } = useCtx();
	const history = useHistory();

	useEffect(() => {
		setTimeout(() => {
			if (!user) history.push("/login");
		}, 5000)
	}, [user, history]);

	return (
		<div>
			{user ? children : <Flex height="80vh" width="100%" alignItems="center" justifyContent="center">
				<Spinner />
			</Flex>}
		</div>
	)
}
