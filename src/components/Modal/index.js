//import react
import React, { useState } from 'react';
//import material ui components
import { Modal as ModalMUI, makeStyles, Button } from '@material-ui/core';

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
		width: '33%',
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

export const Modal = () => {
	//use the custom hook useStyles
	const classes = useStyles();
	//use state hooks
	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);

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
			<Button type='button' onClick={handleOpen}>
				Sign Up
			</Button>
			<ModalMUI open={open} onClose={handleClose}>
				<div style={modalStyle} className={classes.paper}>
					<h1>I'm the modal!</h1>
				</div>
			</ModalMUI>
		</div>
	);
};
