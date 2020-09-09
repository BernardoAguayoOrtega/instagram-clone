//import react
import React, { useState } from 'react';
//import material ui components
import {
	Modal as ModalMUI,
	makeStyles,
	Button,
	Input,
	FormControl,
} from '@material-ui/core';

/**
 * @description: get the modal style (position)
 */
function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: '50%',
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		fontSize: '1.8rem !important',
	},
}));

export const Modal = () => {
	//use the custom hook useStyles
	const classes = useStyles();
	//use state hooks
	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('false');

	//handle the open to modal
	const handleOpen = () => {
		setOpen(true);
	};

	//handle the close to modal
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			{/*Button to call the modal*/}
			<Button type='button' onClick={handleOpen}>
				Sign Up
			</Button>
			{/*Modal from material ui but has ModalMUI name*/}
			<ModalMUI open={open} onClose={handleClose}>
				<div style={modalStyle} className={classes.paper}>
					<FormControl>
						{/*Inputs*/}
						<Input
							type='text'
							placeholder='User name'
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
						<Input
							type='text'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							type='password'
							placeholder='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</FormControl>
				</div>
			</ModalMUI>
		</div>
	);
};
