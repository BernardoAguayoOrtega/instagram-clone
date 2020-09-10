//import react and it hooks
import React, { useState, useEffect } from 'react';
//import post component
import { Post } from '../Post';
//import data base
import { db } from '../../utils/firebase';
// import flip move
import FlipMove from 'react-flip-move';
//import posts container
import { PostsContainer } from './styles';

//create posts component after export it
export const Posts = () => {
	const [posts, setPosts] = useState([]);

	//use effect hook
	/**
	 * @description use data base to access the data and read it from the firestore
	 */
	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })),
				),
			);
	}, []);

	return (
		<PostsContainer>
			<FlipMove>
				{posts.map(({ post, id }) => (
					<Post
						key={id}
						userName={post.userName}
						imageUrl={post.imageUrl}
						caption={post.caption}
					/>
				))}
			</FlipMove>
		</PostsContainer>
	);
};
