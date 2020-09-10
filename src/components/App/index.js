//import react
import React, { useContext } from 'react';
//import app component
import { AppContainer } from './styles';
//import header component
import { Header } from '../Header';
//import posts
import { Posts } from '../Posts';
//import image upload
import { ImageUpload } from '../ImageUpload';
//import Context
import { Context } from '../../utils/Context';

function App() {
	const { user } = useContext(Context);
	return (
		<AppContainer>
			<Header />
			<Posts />
			{user && <ImageUpload />}
		</AppContainer>
	);
}

export default App;
