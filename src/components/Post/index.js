//import react
import React from 'react';
//import Image styled component
import { Image, PostContainer, PostText, PostHeader } from './styles';
//import material ui components
import { Avatar } from '@material-ui/core';

//create post component and export it
export const Post = () => {
	return (
		<PostContainer>
			<PostHeader>
				<Avatar alt={'Bernardo Aguayo'} src='/static/images/avatar/1.jpg'/>
				<h3>UserName</h3>
			</PostHeader>

			<Image src='https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg' />

			<PostText>
				<strong>UserName: </strong> some text
			</PostText>
			{/*User name -> caption*/}
		</PostContainer>
	);
};
