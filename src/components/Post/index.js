//import react
import React from 'react';
//import Image styled component
import { Image, PostContainer, PostText, PostHeader } from './styles';
//import material ui components
import { Avatar } from '@material-ui/core';

//create post component and export it
export const Post = ({ userName, caption, imageUrl }) => {
	return (
		<>
			{/*Post container*/}
			<PostContainer>
				{/*Post header with avatar an text*/}
				<PostHeader>
					<Avatar alt={userName} src='/static/images/avatar/1.jpg' />
					<PostText>
						<strong>{userName}</strong>
					</PostText>
				</PostHeader>

				{/*Image of the post*/}
				<Image src={imageUrl} />

				{/*Text below image*/}
				<PostText>
					<strong>{`${userName}: `}</strong> {caption}
				</PostText>
			</PostContainer>
		</>
	);
};
