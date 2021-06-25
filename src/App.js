import './App.css';
import React from 'react';
import ChakraWrap from './utils/ChakraWrap';
import AuthProtected from './utils/AuthProtected';
import { Context } from './context/context';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import User from './pages/User';
import Sell from './pages/Sell';
import Login from './pages/Login';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';

export default function App() {
	return (
		<ChakraWrap>
			<Router>
				<Context>
					<TopBar />
					<Switch>
						<Route exact path="/"><Home /></Route>
						<Route exact path="/user/:userEmail"><User /></Route>
						<Route exact path="/detail/:productId"><AuthProtected><Detail /></AuthProtected></Route>
						<Route exact path="/sell"><AuthProtected><Sell /></AuthProtected></Route>
						<Route exact path="/chat"><AuthProtected><Chat /></AuthProtected></Route>
						<Route exact path="/chat/:room"><AuthProtected><Chat /></AuthProtected></Route>
						<Route exact path="/login"><Login /></Route>
						<Route exact path="/404"><NotFound /></Route>
						<Route path="*"><Redirect to="/404" /></Route>
					</Switch>
				</Context>
			</Router>
		</ChakraWrap>
	)
}
