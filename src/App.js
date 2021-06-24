import './App.css';
import React from 'react';
import ChakraWrap from './utils/ChakraWrap';
import { Context } from './context/context';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';

export default function App() {
	return (
		<ChakraWrap>
			<Router>
				<Context>
					<TopBar />
				</Context>
			</Router>
		</ChakraWrap>
	)
}
