//import react
import React from 'react';
//import Image styled component
import { Image, PostContainer, PostText, PostHeader } from './styles';
//import material ui components
import { Avatar } from '@material-ui/core';

//create post component and export it
export const Post = () => {
	return (
		<>
			{/*Post container*/}
			<PostContainer>
				{/*Post header with avatar an text*/}
				<PostHeader>
					<Avatar alt={'Bernardo Aguayo'} src='/static/images/avatar/1.jpg' />
					<PostText>UserName</PostText>
				</PostHeader>

				{/*Image of the post*/}
				<Image src='https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg' />

				{/*Text below image*/}
				<PostText>
					<strong>UserName: </strong> some text
				</PostText>
			</PostContainer>
		</>
	);
};
