//import react
import React, { useState } from 'react';
//import material ui components
import { Input, Button } from '@material-ui/core';
//import form component
import { Form } from './styles';

//create and export functional component ImageUpload
export const ImageUpload = () => {
	//use state hook
	const [caption, setCaption] = useState('');
	const [progress, setProgress] = useState('');
	const [image, setImage] = useState('');

	//get the first image
	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};

	return (
		<Form>
			<Input
				placeholder='Enter the caption'
				type='text'
				value={caption}
				onChange={(e) => setCaption(e.target.value)}
			/>
			<Input type='file' onChange={handleChange} />
			<Button>Upload</Button>
		</Form>
	);
};
