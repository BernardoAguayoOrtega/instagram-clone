//import react
import React, { forwardRef, useState, useEffect, useContext } from 'react';
//import context
import { Context } from '../../utils/Context';
//import Image styled component
import {
	Image,
	PostContainer,
	PostText,
	PostHeader,
	Comments,
	AddPadding,
} from './styles';
//import data base
import { db, timestamp } from '../../utils/firebase';
//import material ui components
import { Avatar, Input, Button, FormGroup } from '@material-ui/core';

//create post component and export it
export const Post = forwardRef(
	({ userName, caption, imageUrl, postId }, ref) => {
		//use context
		const { user } = useContext(Context);
		//use state hook
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
					.orderBy('timestamp','desc')
					.onSnapshot((snapshot) => {
						setComments(snapshot.docs.map((doc) => doc.data()));
					});
			}
			return () => {
				unsubscribe();
			};
		}, [postId]);

		//post comment function
		const postComment = (event) => {
			event.preventDefault();

			db.collection('posts').doc(postId).collection('comments').add({
				userName: user.displayName,
				text: comment,
				timestamp: timestamp()
			});

			setComment('')
		};

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
					{/*read the comment*/}
					<Comments>
						{comments.map((comment) => (
							<p key={comment}>
								<strong>{comment.userName}</strong> {comment.text}
							</p>
						))}
					</Comments>

					{/*Form to add comments*/}
					{user && (
						<AddPadding>
							<FormGroup>
								<Input
									placeholder='Add a comment'
									value={comment}
									onChange={(e) => setComment(e.target.value)}
								/>
								<Button disabled={!comment} type='submit' onClick={postComment}>
									Post
								</Button>
							</FormGroup>
						</AddPadding>
					)}
				</PostContainer>
			</>
		);
	},
);
