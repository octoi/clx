import { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import { collectUserData } from '../firebase/helpers/firebaseUser';

export const StateContext = createContext();

export function Context({ children }) {
	const [user, setUser] = useState();
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		auth.onAuthStateChanged(userData => {
			if (!userData) return;
			const user = {
				name: userData.displayName,
				email: userData.email,
				profile: userData.photoURL,
			}
			collectUserData(user);
			setUser(user);
		})
	}, [])

	const logout = () => {
		auth.signOut();
		setUser();
	}

	return (
		<StateContext.Provider value={{ user, setUser, logout, searchQuery, setSearchQuery }}>
			<section style={{ margin: "50px 30px" }}>
				{children}
			</section>
		</StateContext.Provider>
	);
}