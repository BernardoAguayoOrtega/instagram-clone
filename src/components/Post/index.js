//import react
import React from 'react';
//import Image styled component
import { Image } from './styles';

//create post component and export it
export const Post = () => {
	return (
		<>
			<h3>UserName</h3>
			{/*Header -> avatar + user name*/}

			<Image src='https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg'/>

      <h4>UserName: Caption</h4>
			{/*User name -> caption*/}
		</>
	);
};
