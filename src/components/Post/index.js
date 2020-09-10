//import react
import React, { forwardRef, useState, useEffect } from 'react';
//import Image styled component
import { Image, PostContainer, PostText, PostHeader, Form } from './styles';
//import data base
import { db } from '../../utils/firebase';
//import material ui components
import { Avatar, Input } from '@material-ui/core';

//create post component and export it
export const Post = forwardRef(
	({ userName, caption, imageUrl, postId }, ref) => {
		const [comments, setComments] = useState([]);
		const [comment, setComment] = useState('');

		useEffect(() => {
			let unsubscribe;
			//check if there are any comment
			if (postId) {
				unsubscribe = db
					.collection('posts')
					.doc(postId)
					.collection('comments')
					.onSnapshot((snapshot) => {
						setComments(snapshot.docs.map((doc) => doc.data()));
					});
			}
			return () => {
				unsubscribe();
			};
		}, [postId]);

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
					<Form>
						<Input
							placeholder='Add a comment'
							value={comment}
							onChange={(e) => setComment(e.target.value)}
						/>
					</Form>
				</PostContainer>
			</>
		);
	},
);
