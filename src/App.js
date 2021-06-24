import './App.css';
import React from 'react';
import ChakraWrap from './utils/ChakraWrap';
import { StateContext } from './context/context';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

export default function App() {
	return (
		<ChakraWrap>
			<Router>
				<StateContext>

				</StateContext>
			</Router>
		</ChakraWrap>
	)
}
