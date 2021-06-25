import useCtx from '../context/useCtx';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Flex, Heading, Button, Link, Text } from '@chakra-ui/react';
import { auth, provider } from '../firebase/firebase';
import { collectUserData } from '../firebase/helpers/firebaseUser';

export default function Login() {
	const { user, setUser } = useCtx();
	const history = useHistory();

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const nextPath = urlParams.get("path");

		if (user && !nextPath) history.push("/")
		if (user && nextPath) history.push(nextPath)
	}, [user, history]);

	const loginWithGoogle = () => {
		auth.signInWithPopup(provider).then(userData => {
			const user = {
				name: userData.user.displayName,
				email: userData.user.email,
				profile: userData.user.photoURL,
			}
			setUser(user);
			collectUserData(user);
		}).catch(err => {
			console.log(err)
			alert("Failed to login")
		})
	}

	return (
		<Flex height="90vh" alignItems="center" justifyContent="center" >
			<Flex direction="column" width="45vh" background="var(--secondaryColor)" p={12} rounded={6}>
				<Heading mb={4}>Get started</Heading>
				<Text mb={4} opacity="0.5">By signing in you agree our <Link href="https://youtu.be/dQw4w9WgXcQ">Terms & services</Link></Text>
				<Button size="lg" width='100%' style={{ background: 'var(--primaryAccentColor)' }} onClick={loginWithGoogle}>
					Log In With Google
				</Button>
			</Flex>
		</Flex>
	);
}
