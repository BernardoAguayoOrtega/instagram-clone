//import react
import React from 'react';
//import app component
import { AppContainer } from './styles';
//import header component
import { Header } from '../Header';
//import posts
import { Posts } from '../Posts';
//import image upload
import { ImageUpload } from '../ImageUpload';

function App() {
	return (
		<AppContainer>
			<Header />
			<ImageUpload />
			<Posts />
		</AppContainer>
	);
}

export default App;
