//import react
import React, { forwardRef } from 'react';
//import Image styled component
import { Image, PostContainer, PostText, PostHeader } from './styles';
//import material ui components
import { Avatar } from '@material-ui/core';

//create post component and export it
export const Post = forwardRef(({ userName, caption, imageUrl }, ref) => {
	return (
		<>
			{/*Post container*/}
			<PostContainer ref={ref}>
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
});
