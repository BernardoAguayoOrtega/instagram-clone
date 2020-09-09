//import react
import React from 'react';
//import app component
import { AppContainer } from './styles';
//import header component
import { Header } from '../Header';
//import posts
import { Posts } from '../Posts';
//import Modal component
import { Modal } from '@material-ui/core';

function App() {
	return (
		<AppContainer>
			<Modal />
			<Header />
			<Posts />
		</AppContainer>
	);
}

export default App;
