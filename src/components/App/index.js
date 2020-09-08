//import react
import React from 'react';
//import app component
import { AppContainer } from './styles';
//import header component
import { Header } from '../Header';
//import post
import { Post } from '../Post';

function App() {
	return (
		<AppContainer>
			<Header />
			<Post />
		</AppContainer>
	);
}

export default App;
