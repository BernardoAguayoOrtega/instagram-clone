//import react
import React, { useState, useContext } from 'react';
//import material ui components
import { Input, Button, LinearProgress } from '@material-ui/core';
//import form component
import { Form } from './styles';
//import firebase components
import { db, storage, timestamp } from '../../utils/firebase';
//import context
import { Context } from '../../utils/Context';

//create and export functional component ImageUpload
export const ImageUpload = () => {
	//use context hook
	const { user } = useContext(Context);

	//use state hook
	const [caption, setCaption] = useState('');
	const [progress, setProgress] = useState(0);
	const [image, setImage] = useState('');

	//get the first image
	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};

	//handleUpload
	const handleUpload = () => {
		const uploadTask = storage.ref(`images/${image.name}`).put(image);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				//progress function
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100,
				);
				setProgress(progress);
			},
			(error) => {
				//error function
				alert(error.message());
			},
			() => {
				//complete function
				storage
					.ref('images')
					.child(image.name)
					.getDownloadURL()
					.then((url) => {
						db.collection('posts').add({
							timestamp: timestamp(),
							caption: caption,
							imageUrl: url,
							userName: user.displayName,
						});
						setProgress(0);
						setCaption('');
						setImage('');
					});
			},
		);
	};

	return (
		<Form>
			<LinearProgress variant="determinate" value={progress} />
			<Input
				placeholder='Enter the caption'
				type='text'
				value={caption}
				onChange={(e) => setCaption(e.target.value)}
			/>
			<Input type='file' onChange={handleChange} />
			<Button onClick={handleUpload}>Upload</Button>
		</Form>
	);
};
