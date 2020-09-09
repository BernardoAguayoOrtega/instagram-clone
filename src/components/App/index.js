//import react
import React from 'react';
//import app component
import { AppContainer } from './styles';
//import header component
import { Header } from '../Header';
//import posts
import { Posts } from '../Posts';

function App() {
	return (
		<AppContainer>
			<Header />
			<Posts />
		</AppContainer>
	);
}

export default App;
