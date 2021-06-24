import React from 'react';
import useCtx from '../../context/useCtx';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { TopBarContainer, TopBarSearch, TopBarMenuBtn } from './styledComponents';
import { Menu, MenuItem, MenuList } from '@chakra-ui/react';

export default function TopBar() {
	const { user, logout, searchQuery, setSearchQuery } = useCtx();
	const history = useHistory();
	const location = useLocation();

	const hideTopBarPaths = ['/login', '/404', '/chat', '/sell'];
	const filteredPathName = location.pathname.replace(/\\\//g, "");
	const canSearch = !hideTopBarPaths.includes(filteredPathName.length > 6 ? location.pathname.substring(0, 5) : filteredPathName);

	return (
		<TopBarContainer>
			<Link to="/"><img src="/images/logo.svg" alt="Home" /></Link>
			{canSearch && (
				<TopBarSearch>
					<img src="/images/search.svg" alt="search" />
					<input
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder="Search for products ..."
					/>
				</TopBarSearch>
			)}
			{user ? (
				<Menu>
					<TopBarMenuBtn>
						<p>{user?.name.replace(/ /g, '')}</p>
						<img src="/images/down.svg" alt="options" />
					</TopBarMenuBtn>
					<MenuList style={{ background: "#272636" }}>
						<MenuItem as={Link} to="/chat">Chats</MenuItem>
						<MenuItem as={Link} to={`/user/${user?.email}`}>Profile</MenuItem>
						<MenuItem onClick={logout}>Logout</MenuItem>
					</MenuList>
				</Menu>
			) : (
				<Menu>
					<TopBarMenuBtn onClick={() => history.push("/login")}>
						<p>Login</p>
						<img src="/images/google.svg" alt="options" />
					</TopBarMenuBtn>
				</Menu>
			)}
		</TopBarContainer>
	)
}