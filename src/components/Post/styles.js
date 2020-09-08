//import styled components
import styled from 'styled-components';

//create and export post container
export const PostContainer = styled.div`
	max-width: 50rem;
	background: white;
	border: 0.1rem solid lightgray;
	margin-bottom: 4.5rem;
`;

//create and export image
export const Image = styled.img`
	width: 100%;
	object-fit: contain;
	border-top: 0.1rem solid lightgray;
	border-bottom: 0.1rem solid lightgray;
`;

//create and export post text
export const PostText = styled.h3`
	font-weight: normal;
	margin-left: 0.5rem;
	padding: 1rem;
`;

//create and export post header
export const PostHeader = styled.header`
	display: flex;
	align-items: center;
	padding: 1rem;
	font-size: 1.5rem;
`;
