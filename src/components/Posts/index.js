//import react and it hooks
import React, { useState } from 'react';
//import post component
import { Post } from '../Post';

//create posts component after export it
export const Posts = () => {
	const [posts, setPosts] = useState([
		{
			userName: 'Test',
			imageUrl:
				'https://www.blueberry.io/static/media/services-react.2a485c25.png',
			caption: 'GGGG',
		},
		{
			userName: 'Another test',
			imageUrl:
				'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*',
			caption: 'hihihihi',
		},
	]);
	return (
		<>
			{posts.map((post) => (
				<Post
					userName={post.userName}
					imageUrl={post.imageUrl}
					caption={post.caption}
				/>
			))}
		</>
	);
};
